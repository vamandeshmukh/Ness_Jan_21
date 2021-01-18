import { CreateBookDto } from './dto/book.dto';
import { Book } from './interfaces/book.interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    const book = new this.bookModel(createBookDto);
    return await book.save();
  }

  async getBooks(): Promise<Book[]> {
    return await this.bookModel.find().exec();
  }

  async getBookById(bookId: string): Promise<Book> {
    const book = await this.bookModel.findById(bookId).exec();
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  async deleteBook(bookId: string): Promise<Book> {
    await this.getBookById(bookId);
    return await this.bookModel.findOneAndDelete({ _id: bookId });
  }

  async updateBook(
    bookId: string,
    createBookDto: CreateBookDto,
  ): Promise<Book> {
    await this.getBookById(bookId);
    return await this.bookModel.findByIdAndUpdate(bookId, createBookDto, {
      new: true,
      useFindAndModify: false,
    });
  }
}
