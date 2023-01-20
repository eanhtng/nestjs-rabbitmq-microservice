import { AbstractDocument } from '@app/common/database/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type FormDocument = HydratedDocument<Form>;

@Schema()
export class Form extends AbstractDocument{
    @Prop()
    text: string;

    @Prop()
    textArea: string;

    @Prop()
    whatever: string;

}

export const FormSchema = SchemaFactory.createForClass(Form);