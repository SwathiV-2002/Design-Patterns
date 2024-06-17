// main.ts
import CarDirector from './CarDirector';
import SportsCar from './SportsCar';
import SUV from './SUV';

// Create a director
const director = new CarDirector();

// Construct a Sports Car
const sportsCarPlan = new SportsCar();
director.setCarPlan(sportsCarPlan);
director.assembleCar();
const sportsCar = sportsCarPlan.getCar();
console.log("Sports Car:");
sportsCar.listParts();

// Construct an SUV
const suvPlan = new SUV();
director.setCarPlan(suvPlan);
director.assembleCar();
const suv = suvPlan.getCar();
console.log("\nSUV:");
suv.listParts();

// Constructs a car using the director and builder.