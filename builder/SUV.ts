// SUV.ts
import Car from './Car';
import ICarAssembly from './ICarAssembly';

class SUV implements ICarAssembly {
    private car: Car;

    constructor() {
        this.car = new Car();
    }

    addEngine(): void {
        this.car.engine = "V6 Engine";
    }

    addTransmission(): void {
        this.car.transmission = "Automatic Transmission";
    }

    addBody(): void {
        this.car.body = "SUV";
    }

    addInterior(): void {
        this.car.interior = "Luxury Interior";
    }

    addFeatures(): void {
        this.car.features.push("All-Wheel Drive", "Advanced Safety Features", "Panoramic Sunroof");
    }

    getCar(): Car {
        return this.car;
    }
}

export default SUV;
