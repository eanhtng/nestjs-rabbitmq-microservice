import { Injectable } from '@nestjs/common';

import { FormsRepository } from './forms.repository';
import { Form } from './schemas/form.schema';

@Injectable()
export class FormsService {
  getHello(): string {
    return 'Hello World from Forms';
  }

  constructor(private readonly formsRepository: FormsRepository) {}

  async getAllForms(): Promise<Form[]> {
    return this.formsRepository.find({});
  }
}
