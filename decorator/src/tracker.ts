import * as readlineSync from 'readline-sync';

// ProgressTracker interface
interface ProgressTracker {
  trackProgress(courseId: string, progress: number): void;
}

// BasicProgressTracker class
class BasicProgressTracker implements ProgressTracker {
  trackProgress(courseId: string, progress: number): void {
    console.log(`Tracking progress for course ${courseId}: ${progress}% complete.`);
  }
}

// ProgressTrackerDecorator abstract class
abstract class ProgressTrackerDecorator implements ProgressTracker {
  protected decoratedTracker: ProgressTracker;

  constructor(tracker: ProgressTracker) {
    this.decoratedTracker = tracker;
  }

  trackProgress(courseId: string, progress: number): void {
    this.decoratedTracker.trackProgress(courseId, progress);
  }
}

// LoggingProgressTracker class
class LoggingProgressTracker extends ProgressTrackerDecorator {
  trackProgress(courseId: string, progress: number): void {
    super.trackProgress(courseId, progress);
    this.logProgress(courseId, progress);
  }

  private logProgress(courseId: string, progress: number): void {
    console.log(`Logging: Course ${courseId} is ${progress}% complete.`);
  }
}

// NotificationProgressTracker class
class NotificationProgressTracker extends ProgressTrackerDecorator {
  trackProgress(courseId: string, progress: number): void {
    super.trackProgress(courseId, progress);
    this.sendNotification(courseId, progress);
  }

  private sendNotification(courseId: string, progress: number): void {
    console.log(`Notification: Course ${courseId} is ${progress}% complete.`);
  }
}

// Usage
function trackUserProgress(): void {
  const courseId: string = readlineSync.question('Enter course ID: ');
  const progress: number = parseInt(readlineSync.question('Enter progress percentage: '));

  let tracker: ProgressTracker = new BasicProgressTracker();
  tracker = new LoggingProgressTracker(tracker);
  tracker = new NotificationProgressTracker(tracker);

  tracker.trackProgress(courseId, progress);
}

trackUserProgress();
