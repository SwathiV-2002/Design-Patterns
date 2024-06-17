import { SortStrategy } from './SortStrategy';

export class DescendingSortStrategy implements SortStrategy {
    sort(data: any[]): any[] {
        return data.sort((a, b) => (a < b ? 1 : -1));
    }
}
