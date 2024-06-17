// Car.ts
class Car {
    public engine: string = "";
    public transmission: string = "";
    public body: string = "";
    public interior: string = "";
    public features: string[] = [];

    constructor() {
        this.features = [];
    }

    public listParts(): void {
        console.log(`Engine: ${this.engine}`);
        console.log(`Transmission: ${this.transmission}`);
        console.log(`Body: ${this.body}`);
        console.log(`Interior: ${this.interior}`);
        console.log(`Features: ${this.features.join(', ')}`);
    }
}

export default Car;


// Product: Represents a complex object being constructed.