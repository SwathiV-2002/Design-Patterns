import * as readlineSync from 'readline-sync';

// Abstract class defining the template methods for a Course
abstract class Course {
    // Template method
    public runCourse(): void {
        this.introduce();
        this.presentContent();
        this.performActivities();
        this.conclude();
    }

    // Abstract methods to be implemented by subclasses
    protected abstract introduce(): void;
    protected abstract presentContent(): void;
    protected abstract performActivities(): void;
    protected abstract conclude(): void;
}

// Concrete class representing a Video Course
class VideoCourse extends Course {
    protected introduce(): void {
        console.log("Welcome to the Video Course!");
    }

    protected presentContent(): void {
        console.log("Playing video lectures...");
    }

    protected performActivities(): void {
        console.log("No interactive activities available in this course.");
    }

    protected conclude(): void {
        console.log("Video Course concluded.");
    }
}

// Concrete class representing an Interactive Course
class InteractiveCourse extends Course {
    protected introduce(): void {
        console.log("Welcome to the Interactive Course!");
    }

    protected presentContent(): void {
        console.log("Presenting interactive content...");
    }

    protected performActivities(): void {
        console.log("Engaging in interactive activities...");
    }

    protected conclude(): void {
        console.log("Interactive Course concluded.");
    }
}

// Concrete class representing a Text-based Course
class TextCourse extends Course {
    protected introduce(): void {
        console.log("Welcome to the Text Course!");
    }

    protected presentContent(): void {
        console.log("Displaying text-based content...");
    }

    protected performActivities(): void {
        console.log("No interactive activities available in this course.");
    }

    protected conclude(): void {
        console.log("Text Course concluded.");
    }
}

// Client code
function main() {
    console.log("Choose the type of course you want to take:");
    console.log("1. Video Course");
    console.log("2. Interactive Course");
    console.log("3. Text-based Course");
    const choice = readlineSync.questionInt("Enter your choice: ");

    // Based on user's choice, instantiate and run the selected course
    switch (choice) {
        case 1:
            const videoCourse = new VideoCourse();
            videoCourse.runCourse();
            break;
        case 2:
            const interactiveCourse = new InteractiveCourse();
            interactiveCourse.runCourse();
            break;
        case 3:
            const textCourse = new TextCourse();
            textCourse.runCourse();
            break;
        default:
            console.log("Invalid choice. Please choose a valid option.");
    }
}

// Execute the main function
main();
