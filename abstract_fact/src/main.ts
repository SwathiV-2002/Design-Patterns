import { WindowsFactory } from './WindowsFactory';
import { MacFactory } from './MacFactory';
import { Application } from './Application';
import { GUIFactory } from './GUIFactory';

function initializeApp(platform: 'Windows' | 'Mac') {
    let factory: GUIFactory;

    if (platform === 'Windows') {
        factory = new WindowsFactory();
    } else if (platform === 'Mac') {
        factory = new MacFactory();
    } else {
        throw new Error('Unsupported platform.');
    }

    const app = new Application(factory);
    app.render();
    app.bindEvents();
}

// Example usage
initializeApp('Windows'); // 'Windows' or 'Mac' 