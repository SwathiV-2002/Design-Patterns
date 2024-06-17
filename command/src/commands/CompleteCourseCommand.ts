// src/commands/CompleteCourseCommand.ts
import { Command } from './command';
import { Course } from '../receivers/course';

export class CompleteCourseCommand implements Command {
  private course: Course;

  constructor(course: Course) {
    this.course = course;
  }

  execute(): void {
    this.course.complete();
  }
}
