import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

const SECRETMONGODB = process.env.SECRETMONGODB;
@Module({
  imports: [MongooseModule.forRoot(SECRETMONGODB), UsersModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
