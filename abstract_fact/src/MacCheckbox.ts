import { Checkbox } from './Checkbox';

export class MacCheckbox implements Checkbox {
    paint(): void {
        console.log('Rendering a checkbox in macOS style.');
    }
}
