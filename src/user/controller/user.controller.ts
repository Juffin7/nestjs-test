import { Controller, Get } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../entity/user';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async all(): Promise<{ data: Promise<User[]> }> {
    return {
      data: this.userService.all(),
    };
  }
}
