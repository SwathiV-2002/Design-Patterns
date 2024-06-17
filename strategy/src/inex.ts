import { Sorter } from './Sorter';
import { AscendingSortStrategy } from './AscendingSortStrategy';
import { DescendingSortStrategy } from './DescendingSortStrategy';
import { AlphabeticalSortStrategy } from './AlphabeticalSortStrategy';

// Create different sort strategies
const ascendingSortStrategy = new AscendingSortStrategy();
const descendingSortStrategy = new DescendingSortStrategy();
const alphabeticalSortStrategy = new AlphabeticalSortStrategy();

// Create a sorter with an ascending sort strategy
const sorter = new Sorter(ascendingSortStrategy);

// Sort numbers in ascending order
let numbers = [5, 3, 8, 1, 2];
console.log(sorter.sort(numbers));  

// Change to descending sort strategy
sorter.setStrategy(descendingSortStrategy);
console.log(sorter.sort(numbers));  

// Sort strings in alphabetical order
sorter.setStrategy(alphabeticalSortStrategy);
let strings = ['banana', 'apple', 'cherry'];
console.log(sorter.sort(strings));  //  ['apple', 'banana', 'cherry']

// Change to ascending sort strategy for strings
sorter.setStrategy(ascendingSortStrategy);
console.log(sorter.sort(strings));  //  ['apple', 'banana', 'cherry']

// Change to descending sort strategy for strings
sorter.setStrategy(descendingSortStrategy);
console.log(sorter.sort(strings));  // ['cherry', 'banana', 'apple']
