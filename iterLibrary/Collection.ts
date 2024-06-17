// Collection.ts
import { IIterator } from './IIterator';

export interface Collection<T> {
    createIterator(): IIterator<T>;
}
