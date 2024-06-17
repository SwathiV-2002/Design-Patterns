import TrafficLight from "./trafficLight";
import { RedState, YellowState, GreenState } from "./state";

// Kannan: Red (10 sec) -> Green (Instantly)
// Kannan: Green (5 sec) -> Orange (2 sec - people starts to apply break) -> Red

// Create a traffic light
const trafficLight = new TrafficLight(new RedState());

// Simulate traffic light transitions
setTimeout(() => {
    trafficLight.changeState(); // Red -> Green
    trafficLight.setState(new GreenState());
}, 1000);

setTimeout(() => {
    trafficLight.changeState(); // Yellow -> Red
    trafficLight.setState(new RedState());
}, 5000);

setTimeout(() => {
    trafficLight.changeState(); // Green -> Orange
    trafficLight.setState(new YellowState());
}, 2000);
