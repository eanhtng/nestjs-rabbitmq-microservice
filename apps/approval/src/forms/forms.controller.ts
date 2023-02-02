import { Controller, Get } from '@nestjs/common';
import { Form } from './schemas/form.schema';
import { FormsService } from './forms.service';

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}
  @Get()
  getAllForms(): Promise<Form[]> {
    return this.formsService.getAllForms();
  }
}
