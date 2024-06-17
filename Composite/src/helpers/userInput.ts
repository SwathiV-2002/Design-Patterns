// src/helpers/userInput.ts

import { Lesson } from '../components/Lesson';
import { Module } from '../components/Module';

import * as readlineSync from 'readline-sync';

export function createLesson(): Lesson {
    const title = readlineSync.question('Enter the title of the lesson: ');
    return new Lesson(title);
}

export function createModule(): Module {
    const title = readlineSync.question('Enter the title of the module: ');
    const module = new Module(title);
    let exit:boolean = false;

   // while (exit = false)

    while (false == exit) {
        const choice = readlineSync.question('Do you want to add a lesson or a module? (lesson/module/exit): ');
        if (choice === 'lesson') {
            module.add(createLesson());
        } else if (choice === 'module') {
            module.add(createModule());
        } else if (choice === 'exit') {
            exit = true;
        } else {
            console.log('Invalid choice. Please enter "lesson", "module", or "exit".');
        }
    }
    return module;
}
export function createCourse(): Module {
    return createModule(); 
}

export function displayCourse(course: Module): void {
    console.log('Course structure:');
    course.display(0);
}