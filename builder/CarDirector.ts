// CarDirector.ts
import ICarAssembly from './ICarAssembly';

class CarDirector {
    private carPlan: ICarAssembly | null = null;

    setCarPlan(plan: ICarAssembly): void {
        this.carPlan = plan;
    }

    assembleCar(): void {
        if (this.carPlan) {
            this.carPlan.addEngine();
            this.carPlan.addTransmission();
            this.carPlan.addBody();
            this.carPlan.addInterior();
            this.carPlan.addFeatures();
        } else {
            throw new Error("Car plan is not set");
        }
    }
}

export default CarDirector;


// Director: Directs the construction process using a builder.