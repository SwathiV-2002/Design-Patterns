import { NetworkConnection } from './NetworkConnection';
import { USBToEthernetAdapter } from './USBToEthernetAdapter';

// Using the USB to Ethernet adapter to connect to the network
const adapter: NetworkConnection = new USBToEthernetAdapter();
adapter.connect();
adapter.sendData("Hello,Swathi from the Ethernet!");
const receivedData = adapter.receiveData();
adapter.disconnect();
