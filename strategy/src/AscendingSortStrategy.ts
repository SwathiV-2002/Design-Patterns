import { SortStrategy } from './SortStrategy';

export class AscendingSortStrategy implements SortStrategy {
    sort(data: any[]): any[] {
        return data.sort((a, b) => (a > b ? 1 : -1));
    }
}
