import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(), // Adiciona a configuração do módulo de configuração
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: process.env.SECRETMONGODB, // Use a variável de ambiente aqui
      }),
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
