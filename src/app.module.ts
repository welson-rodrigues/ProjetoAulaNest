import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { AuthModule } from './auth/auth.module';
import { StaffModule } from './staff/staff.module';

@Module({
  imports: [ClientsModule, AuthModule, StaffModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
