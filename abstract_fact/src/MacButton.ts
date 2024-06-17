import { Button } from './Button';

export class MacButton implements Button {
    paint(): void {
        console.log('Rendering a button in macOS style.');
    }
}
