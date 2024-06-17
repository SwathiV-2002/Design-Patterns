// State interface
interface TrafficLightState {
    changeState(): void;
}

// Concrete Red State
class RedState implements TrafficLightState {
    changeState(): void {
        console.log("Traffic light changed to Red.");
    }
}

// Concrete Yellow State
class YellowState implements TrafficLightState {
    changeState(): void {
        console.log("Traffic light changed to Yellow.");
    }
}

// Concrete Green State
class GreenState implements TrafficLightState {
    changeState(): void {
        console.log("Traffic light changed to Green.");
    }
}

export { TrafficLightState, RedState, YellowState, GreenState };
