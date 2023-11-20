// Importa as funcionalidades necessárias do '@nestjs/mongoose' e do 'mongoose'.
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// Define um tipo chamado 'UserDocument', que representa um documento MongoDB para a entidade 'User'.
export type UserDocument = HydratedDocument<User>;

// Marca a classe como um esquema do Mongoose usando o decorador '@Schema()'.
@Schema()
export class User {
  // Define um campo de propriedade ('name') usando o decorador '@Prop()'.
  @Prop()
  name: string;

  // Define outro campo de propriedade ('email') usando o decorador '@Prop()'.
  @Prop()
  email: string; // Nota: Parece que 'email' deveria ser uma string em vez de um número.

  // Define mais um campo de propriedade ('password') usando o decorador '@Prop()'.
  @Prop()
  password: string;
}

// Cria um esquema Mongoose para a classe 'User' usando o 'SchemaFactory.createForClass'.
export const UserSchema = SchemaFactory.createForClass(User);
