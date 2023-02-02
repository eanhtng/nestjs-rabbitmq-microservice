import { DatabaseModule } from '@app/common/database/database.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Form, FormSchema } from './schemas/form.schema';
import { FormsController } from './forms.controller';
import { FormsRepository } from './forms.repository';
import { FormsService } from './forms.service';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: Form.name, schema: FormSchema }]),
  ],
  controllers: [FormsController],
  providers: [FormsService, FormsRepository],
  exports: [FormsService],
})
export class FormsModule {}
