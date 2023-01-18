import { AbstractDocument } from '@app/common/database/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends AbstractDocument{
    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

}

export const UserSchema = SchemaFactory.createForClass(User);