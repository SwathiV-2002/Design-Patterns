import { NetworkConnection } from './NetworkConnection';
import { EthernetConnection } from './EthernetConnection';

export class USBToEthernetAdapter implements NetworkConnection {
    private ethernetConnection: EthernetConnection;

    constructor() {
        this.ethernetConnection = new EthernetConnection();
    }

    connect(): void {
        this.ethernetConnection.connectEthernet();
    }

    disconnect(): void {
        this.ethernetConnection.disconnectEthernet();
    }

    sendData(data: string): void {
        this.ethernetConnection.sendDataOverEthernet(data);
    }

    receiveData(): string {
        return this.ethernetConnection.receiveDataOverEthernet();
    }
}
