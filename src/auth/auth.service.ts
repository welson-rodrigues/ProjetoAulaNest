import { Injectable, UnauthorizedException } from '@nestjs/common';
import { StaffService } from '../staff/staff.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(
        private staffService: StaffService,
        private jwtService: JwtService
     ) {}

    async signIn(
        username: string,
        pass: string,
    ): Promise<{ acess_token: string }> {
        const staff = await this.staffService.findOne(username);
        if (staff?.password !== pass) {
            throw new UnauthorizedException();
        }
        const payload = { sub: staff.userId, username: staff.username };
        return {
            acess_token: await this.jwtService.signAsync(payload),
        };
       }
    }