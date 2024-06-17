// src/index.ts
import * as readline from 'readline';
import { Course } from './receivers/course';
import { User } from './invokers/User';
import { StartCourseCommand } from './commands/StartCourseCommand';
import { CompleteCourseCommand } from './commands/CompleteCourseCommand';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const course = new Course('course-101');
const user = new User();

const promptUser = () => {
  rl.question('Enter command (start/complete/exit): ', (answer) => {
    switch (answer) {
      case 'start':
        user.addCommand(new StartCourseCommand(course));
        break;
      case 'complete':
        user.addCommand(new CompleteCourseCommand(course));
        break;
      case 'exit':
        rl.close();
        return;
      default:
        console.log('Unknown command');
    }
    user.executeCommands();
    promptUser();
  });
    };

promptUser();
