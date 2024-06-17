import { TextFormattingFactory } from "./TextFormattingFactory";
import { TextFormatting } from "./TextFormatting";

const factory = new TextFormattingFactory();

const boldRed12: TextFormatting = factory.getFormatting('bold', 12, 'red');
const italicBlue16: TextFormatting = factory.getFormatting('italic', 16, 'blue');

const text1 = boldRed12.applyFormatting('Hello, from Ei!');
const text2 = italicBlue16.applyFormatting('Students all the best for your exams');

console.log(text1); 
console.log(text2);
