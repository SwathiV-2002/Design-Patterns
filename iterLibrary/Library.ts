// Library.ts
import { Collection } from './Collection';
import { IIterator } from './IIterator';
import { BookCollection } from './BookCollection';
import { Book } from './Book';

export class Library implements Collection<Book> {
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public createIterator(): IIterator<Book> {
        return new BookCollection(this.books);
    }
}
