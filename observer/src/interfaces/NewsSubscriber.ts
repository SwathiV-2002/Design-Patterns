export interface NewsSubscriber {
    update(news: string): void;
    getName(): string;
}
