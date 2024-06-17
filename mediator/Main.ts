import * as readline from 'readline';
import { Mediator } from "./Mediator";
import { Colleague } from "./Colleague";

// Create mediator
const mediator = new Mediator();

// Create colleagues
const colleague1 = new Colleague(mediator, "Swathi");
const colleague2 = new Colleague(mediator, "Simran");
const colleague3 = new Colleague(mediator, "Kannan");

// Add colleagues to mediator
mediator.addColleague(colleague1);
mediator.addColleague(colleague2);
mediator.addColleague(colleague3);

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt user for message input and sender
function sendMessage() {
  rl.question('Enter message: ', (message) => {
    rl.question('Enter sender (1, 2, or 3): ', (senderChoice) => {
      const sender = parseInt(senderChoice);
      if (sender === 1) {
        colleague1.send(message);
      } else if (sender === 2) {
        colleague2.send(message);
      } else if (sender === 3) {
        colleague3.send(message);
      } else {
        console.log('Invalid sender choice.');
      }
      rl.close();
    });
  });
}

// Call sendMessage function
sendMessage();
