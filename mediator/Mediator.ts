import { Colleague } from "./Colleague";

export class Mediator {
  private colleagues: Colleague[] = [];

  addColleague(colleague: Colleague): void {
    this.colleagues.push(colleague);
  }

  send(message: string, sender: Colleague): void {
    this.colleagues.forEach((colleague) => {
      if (colleague !== sender) {
        colleague.receive(message, sender.getName());
      }
    });
  }
}
