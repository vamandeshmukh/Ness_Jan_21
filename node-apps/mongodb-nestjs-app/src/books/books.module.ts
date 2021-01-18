import { BookSchema } from './schemas/book.schema';
import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BookService } from './book.service';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
    imports: [MongooseModule.forFeature([
        {name: 'Book', schema: BookSchema}
    ])],
    controllers: [BooksController],
    providers: [BookService]
})
export class BooksModule {}
