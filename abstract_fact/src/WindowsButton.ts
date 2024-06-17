import { Button } from './Button';

export class WindowsButton implements Button {
    paint(): void {
        console.log('Rendering a button in Windows style.');
    }
}
