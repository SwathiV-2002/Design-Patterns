// BookCollection.ts
import { IIterator } from './IIterator';
import { Book } from './Book';

export class BookCollection implements IIterator<Book> {
    private books: Book[];
    private curentPositionOfTheIterable: number = 0;

    constructor(books: Book[]) {
        this.books = books;
    }

    public hasNext(): boolean {
        return this.curentPositionOfTheIterable < this.books.length;
    }

    public next(): Book {
        return this.books[this.curentPositionOfTheIterable++];
    }
}
