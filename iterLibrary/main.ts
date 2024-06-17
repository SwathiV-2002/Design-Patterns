// index.ts
import { Library } from './Library';
import { Book } from './Book';
import { IIterator } from './IIterator';

// Create a library and add books to it
const library = new Library();
library.addBook(new Book('The Great Gatsby', 'F. Scott Fitzgerald'));
library.addBook(new Book('1984', 'George Orwell'));
library.addBook(new Book('To Kill a Mockingbird', 'Harper Lee'));
library.addBook(new Book('The Harry potter', 'J.K.Rowling'))

// Create an iterator for the library
const iterator: IIterator<Book> = library.createIterator();

// Use the iterator to traverse the collection of books
while (iterator.hasNext()) {
    const book: Book = iterator.next();
    console.log(`Title: ${book.title}, Author: ${book.author}`);
}

// 1. Iterable collection is a collection of elements that can be subjected to a iterator i.e., for loop
// 2. Iterator is the algrothmic looping constructor that picks one element after the other from the collection, and keeps track of the current element
