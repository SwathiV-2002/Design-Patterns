import { Mediator } from "./Mediator";

export class Colleague {

  private name: string = "";
  private mediator: Mediator;

  constructor(mediator: Mediator, name: string){
    this.name = name;
    this.mediator = mediator;
  }

  getName(): string {
    return this.name;
  }

  send(message: string): void {
    console.log(`${this.name} sent message: ${message}`);
    this.mediator.send(message, this);
  }

  receive(message: string, sender: string): void {
    console.log(`${this.name} received message: ${message} from ${sender}`);
  }
}




