// CarPlan.ts
import Car from './Car';

interface ICarAssembly {
    addEngine(): void;
    addTransmission(): void;
    addBody(): void;
    addInterior(): void;
    addFeatures(): void;
    getCar(): Car;
}

export default ICarAssembly;

// Builder Interface: Defines methods for constructing different parts of the product.