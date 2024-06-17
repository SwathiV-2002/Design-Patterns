// src/main.ts
import { DrawingCanvas } from "./DrawingCanvas";
import { DrawingSnapshot } from "./DrawingSnapshot";
import { HistoryTracker } from "./HistoryTracker";

const canvas = new DrawingCanvas();
const history = new HistoryTracker();

// Drawing some shapes
canvas.draw("Circle");
canvas.draw("Square");
canvas.draw("Triangle");

// Saving state
const snapshot1 = canvas.saveState();
history.addSnapshot(snapshot1);

// Drawing more shapes
canvas.draw("Line");
canvas.draw("Rectangle");

// Saving state
const snapshot2 = canvas.saveState();
history.addSnapshot(snapshot2);

// Undo last action
history.undo(canvas);

// Redo action
history.redo(canvas);

// Print current state
console.log("Current state of drawing:", canvas.getCurrentState());
history.undo(canvas);
history.undo(canvas);
history.undo(canvas);