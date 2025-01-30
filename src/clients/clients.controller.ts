import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
const crypto = require('crypto');
import { jwtConstants } from '../auth/constants';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}
  private encryptPassword(password: string): string{
    const algoritm = 'aes-256-ctr';
    const secretkey = process.env.SECRET_KEY || jwtConstants.secret;
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(algoritm, Buffer.from(secretkey, 'utf-8'), iv)
    let encryptPassword = cipher.update(password,'utf8', 'hex');
    encryptPassword += cipher.final('hex');

    return iv.toString('hex') + ':' + encryptPassword;
  }

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    const encryptPassword = this.encryptPassword(createClientDto.password)
    return this.clientsService.create(createClientDto);
  }

  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(+id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsService.remove(+id);
  }
}
