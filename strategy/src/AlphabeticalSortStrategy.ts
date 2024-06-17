import { SortStrategy } from './SortStrategy';

export class AlphabeticalSortStrategy implements SortStrategy {
    sort(data: any[]): any[] {
        return data.sort((a, b) => a.localeCompare(b));
    }
}
