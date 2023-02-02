import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { AbstractRepository } from '@app/common/database/abstract.repository';
import { Form, FormDocument } from './schemas/form.schema';

@Injectable()
export class FormsRepository extends AbstractRepository<Form> {
  protected readonly logger = new Logger(FormsRepository.name);

  constructor(
    @InjectModel(Form.name) FormModel: Model<FormDocument>,
    @InjectConnection() connection: Connection,
  ) {
    super(FormModel, connection);
  }
}
