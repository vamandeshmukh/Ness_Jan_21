import { ObjectidPipe } from '../pipes/objectid.pipe';
import { Book } from './interfaces/book.interface';
import { BookService } from './book.service';
import { CreateBookDto, UpdateBookDto } from './dto/book.dto';
import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private bookService: BookService) {}

  @Get()
  async getBooks(): Promise<Book[]> {
    return await this.bookService.getBooks();
  }

  @Get(':id')
  getBook(@Param('id', ObjectidPipe) bookId: string): Promise<Book> {
    return this.bookService.getBookById(bookId);
  }

  @Post()
  async createBook(@Body() book: CreateBookDto): Promise<Book> {
    return await this.bookService.createBook(book);
  }

  @Delete(':id')
  deleteBook(@Param('id', ObjectidPipe) bookId: string): Promise<Book> {
    return this.bookService.deleteBook(bookId);
  }

  @Put(':id')
  async updateBook(
    @Body() book: UpdateBookDto,
    @Param('id', ObjectidPipe) bookId: string,
  ): Promise<Book> {
    return this.bookService.updateBook(bookId, book);
  }
}
