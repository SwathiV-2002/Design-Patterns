// src/invokers/User.ts
import { Command } from '../commands/command';

export class User {
  private commands: Command[] = [];

  addCommand(command: Command): void {
    this.commands.push(command);
  }

  executeCommands(): void {
    this.commands.forEach(command => command.execute());
    this.commands = [];
  }
}
