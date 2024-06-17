// SportsCar.ts
import Car from './Car';
import ICarAssembly from './ICarAssembly';

class SportsCar implements ICarAssembly {
    private car: Car;

    constructor() {
        this.car = new Car();
    }

    addEngine(): void {
        this.car.engine = "V8 Engine";
    }

    addTransmission(): void {
        this.car.transmission = "Manual Transmission";
    }

    addBody(): void {
        this.car.body = "Coupe";
    }

    addInterior(): void {
        this.car.interior = "Leather Interior";
    }

    addFeatures(): void {
        this.car.features.push("Sports Suspension", "Sports Tires", "Advanced Infotainment System");
    }

    getCar(): Car {
        return this.car;
    }
}

export default SportsCar;
