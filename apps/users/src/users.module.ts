import { DatabaseModule } from '@app/common/database/database.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: './apps/users/.env'
    }),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema}
    ])
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
