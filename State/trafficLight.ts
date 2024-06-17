import { TrafficLightState } from "./state";
// Kannan: Red (10 sec) -> Green (Instantly)
// Kannan: Green (5 sec) -> Orange (2 sec - people starts to apply break) -> Red
// Traffic Light
class TrafficLight {
    private state: TrafficLightState;

    constructor(state: TrafficLightState) {
        this.state = state;
    }

    setState(state: TrafficLightState): void {
        this.state = state;
    }

    changeState(): void {
        this.state.changeState();
    }
}

export default TrafficLight;
