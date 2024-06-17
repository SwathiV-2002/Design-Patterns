// src/components/Lesson.ts
import { CourseComponent } from './CourseComponent';

export class Lesson implements CourseComponent {
    constructor(private title: string) {}

    display(indentation: number): void {
        console.log(`${" ".repeat(indentation)}Lesson: ${this.title}`);
    }
}
