import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from './users.repository';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  getHello(): string {
    return 'Hello World from Users';
  }

  constructor(private readonly usersRepository: UsersRepository) {}

  async getAllUsers(): Promise<User[]> {
    return this.usersRepository.find({});
  }
}
