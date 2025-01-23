import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ClientsProviders } from './clients.providers';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
@Module({
  imports: [DatabaseModule],
  controllers:[ClientsController],
  providers: [
    ...ClientsProviders,
    ClientsService,
  ],
})
export class ClientsModule {}