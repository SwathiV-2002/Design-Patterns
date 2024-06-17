// src/DrawingSnapshot.ts
class DrawingSnapshot {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    public getState(): string {
        return this.state;
    }
}

export { DrawingSnapshot };
