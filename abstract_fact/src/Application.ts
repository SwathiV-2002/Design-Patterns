import { GUIFactory } from './GUIFactory';
import { Button } from './Button';   // Import the Button interface
import { Checkbox } from './Checkbox'; // Import the Checkbox interface

export class Application {
    private button: Button;
    private checkbox: Checkbox;

    constructor(factory: GUIFactory) {
        this.button = factory.createButton();
        this.checkbox = factory.createCheckbox();
    }

    public render(): void {
        this.button.paint();
        this.checkbox.paint();
    }

    public bindEvents(): void {
        console.log('Binding events to the button and checkbox.');
    }
}
