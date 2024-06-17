// src/main.ts
import { createCourse, displayCourse } from './helpers/userInput';
import { Module } from './components/Module';

function main(): void {
    const course: Module = createCourse();
    displayCourse(course);
}

main();
