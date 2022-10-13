import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { User } from './entity/user';
import { UserService } from './service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
