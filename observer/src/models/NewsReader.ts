import { NewsSubscriber } from "../interfaces/NewsSubscriber";

export class NewsReader implements NewsSubscriber {
    private readerName: string;
    private subscriberType: string;

    constructor(readerName: string, subscriberType: string) {
        this.readerName = readerName;
        this.subscriberType = subscriberType;
    }

    public getName(): string{
        return this.readerName;
    }

    public update(news: string): void {
        if("bad" == this.subscriberType){
            throw new Error("Something really bad happened in the subscriber: " + this.readerName);
        }
        if(news){
            console.log(`${this.readerName} received news: ${news}`);
        }        
    }
}
