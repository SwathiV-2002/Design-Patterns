// src/DrawingCanvas.ts
import { DrawingSnapshot } from "./DrawingSnapshot";

class DrawingCanvas {
    private currentState: string;

    constructor() {
        this.currentState = "";
    }

    public draw(shape: string): void {
        console.log(`Drawing ${shape}`);
        // Update current state
        this.currentState += shape + ",";
    }

    public saveState(): DrawingSnapshot {
        console.log("Saving drawing state to snapshot.");
        return new DrawingSnapshot(this.currentState);
    }

    public restoreState(snapshot: DrawingSnapshot): void {
        console.log("Restoring drawing state from snapshot.");
        this.currentState = snapshot.getState();
    }

    public getCurrentState(): string {
        return this.currentState;
    }
}

export { DrawingCanvas };
