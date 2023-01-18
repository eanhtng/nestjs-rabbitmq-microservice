import { Controller, Get } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/hello')
  getHello(): string {
    return this.usersService.getHello();
  }
  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers()
  }
}
