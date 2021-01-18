import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { DatabaseService } from './config/database/database.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useClass: DatabaseService,
    }),
    BooksModule,
  ],
  controllers: [],
  providers: [DatabaseService],
})
export class AppModule {}
