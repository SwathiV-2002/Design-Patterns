import { Checkbox } from './Checkbox';

export class WindowsCheckbox implements Checkbox {
    paint(): void {
        console.log('Rendering a checkbox in Windows style.');
    }
}
