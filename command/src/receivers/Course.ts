// src/receivers/Course.ts
export class Course {
    private courseId: string;
  
    constructor(courseId: string) {
      this.courseId = courseId;
    }
  
    start(): void {
      console.log(`Course ${this.courseId} started.`);
    }
  
    complete(): void {
      console.log(`Course ${this.courseId} completed.`);
    }
  }
  