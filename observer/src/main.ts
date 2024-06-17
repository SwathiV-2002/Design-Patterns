import { NewsTopic } from "./models/NewsTopic";
import { NewsReader } from "./models/NewsReader";

const sportsTopic = new NewsTopic("Sports");
const politicsTopic = new NewsTopic("Politics");

const alice = new NewsReader("Alice", "good");
const bob = new NewsReader("Bob", "bad");
const charlie = new NewsReader("Charlie", "good");

sportsTopic.subscribe(alice);
sportsTopic.subscribe(bob);
politicsTopic.subscribe(charlie);

sportsTopic.publishNews("Sports News 1"); // Both Alice and Bob will receive this news
politicsTopic.publishNews("Political News 1"); // Only Charlie will receive this news

sportsTopic.unsubscribe(alice);

sportsTopic.publishNews("Sports News 2"); // Only Bob will receive this news
