import { NewsSubscriber } from "../interfaces/NewsSubscriber";

export class NewsTopic {
    private subscribers: NewsSubscriber[] = [];
    private topicName: string;

    constructor(topicName: string) {
        this.topicName = topicName;
    }

    public subscribe(subscriber: NewsSubscriber): void {
        this.subscribers.push(subscriber);
    }

    public unsubscribe(subscriber: NewsSubscriber): void {
        const index = this.subscribers.indexOf(subscriber);
        if (index > -1) {
            this.subscribers.splice(index, 1);
        }
    }

    public notifySubscribers(news: string): void {
        for (const subscriber of this.subscribers) {
            try{
                subscriber.update(news);
            }
            catch(e){
                console.log("Subscriber " + subscriber.getName() + " failed to handle the notification with error: " + e);
            }
        }
    }

    public publishNews(news: string): void {
        console.log(`News in ${this.topicName}: ${news}`);
        this.notifySubscribers(news);
    }
}
