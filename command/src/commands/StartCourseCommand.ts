// src/commands/StartCourseCommand.ts
import { Command } from './command';
import { Course } from '../receivers/course';

export class StartCourseCommand implements Command {
  private course: Course;

  constructor(course: Course) {
    this.course = course;
  }

  execute(): void {
    this.course.start();
  }
}
