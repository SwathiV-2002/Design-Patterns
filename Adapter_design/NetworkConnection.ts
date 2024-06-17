export interface NetworkConnection {
    connect(): void;
    disconnect(): void;
    sendData(data: string): void;
    receiveData(): string;
}
