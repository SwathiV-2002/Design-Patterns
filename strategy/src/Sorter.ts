import { SortStrategy } from './SortStrategy';

export class Sorter {
    private strategy: SortStrategy;

    constructor(strategy: SortStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: SortStrategy): void {
        this.strategy = strategy;
    }

    sort(data: any[]): any[] {
        return this.strategy.sort(data);
    }
}
