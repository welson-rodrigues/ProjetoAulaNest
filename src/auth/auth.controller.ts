import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signin(@Body() signinDto: Record<string, any>) {
        return this.authService.signIn(signinDto.username, signinDto.password);
    }
}
