// src/HistoryTracker.ts
import { DrawingSnapshot } from "./DrawingSnapshot";
import { DrawingCanvas } from "./DrawingCanvas"; // Make sure to import DrawingCanvas

class HistoryTracker {
    private snapshotList: DrawingSnapshot[] = [];

    public addSnapshot(snapshot: DrawingSnapshot): void {
        this.snapshotList.push(snapshot);
    }

    public getSnapshot(index: number): DrawingSnapshot {
        return this.snapshotList[index];
    }

    public undo(canvas: DrawingCanvas): void {
        if (this.snapshotList.length > 0) {
            console.log("Undoing last action.");
            const lastSnapshot = this.snapshotList.pop();
            if (undefined !== lastSnapshot) {
                console.log("Trying to restore lastSnapshot: " + lastSnapshot.getState());
                canvas.restoreState(lastSnapshot);
                console.log("Restored lastSnapshot: " + lastSnapshot.getState());
            } else {
                console.log("No snapshot to restore.");
            }
        } else {
            console.log("Nothing to undo.");
        }
    }

    public redo(canvas: DrawingCanvas): void {
        // For simplicity, let's assume redo simply restores the last undone state.
        console.log("Redoing last undone action.");
        const lastSnapshot = this.snapshotList.pop();
        if (lastSnapshot) {
            canvas.restoreState(lastSnapshot);
        } else {
            console.log("Nothing to redo.");
        }
    }
}

export { HistoryTracker };
