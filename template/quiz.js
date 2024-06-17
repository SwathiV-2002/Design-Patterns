"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Abstract class defining the template methods for a Course
var Course = /** @class */ (function () {
    function Course() {
    }
    // Template method
    Course.prototype.runCourse = function () {
        this.introduce();
        this.presentContent();
        this.performActivities();
        this.conclude();
    };
    return Course;
}());
// Concrete class representing a Video Course
var VideoCourse = /** @class */ (function (_super) {
    __extends(VideoCourse, _super);
    function VideoCourse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoCourse.prototype.introduce = function () {
        console.log("Welcome to the Video Course!");
    };
    VideoCourse.prototype.presentContent = function () {
        console.log("Playing video lectures...");
    };
    VideoCourse.prototype.performActivities = function () {
        console.log("No interactive activities available in this course.");
    };
    VideoCourse.prototype.conclude = function () {
        console.log("Video Course concluded.");
    };
    return VideoCourse;
}(Course));
// Concrete class representing an Interactive Course
var InteractiveCourse = /** @class */ (function (_super) {
    __extends(InteractiveCourse, _super);
    function InteractiveCourse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InteractiveCourse.prototype.introduce = function () {
        console.log("Welcome to the Interactive Course!");
    };
    InteractiveCourse.prototype.presentContent = function () {
        console.log("Presenting interactive content...");
    };
    InteractiveCourse.prototype.performActivities = function () {
        console.log("Engaging in interactive activities...");
    };
    InteractiveCourse.prototype.conclude = function () {
        console.log("Interactive Course concluded.");
    };
    return InteractiveCourse;
}(Course));
// Concrete class representing a Text-based Course
var TextCourse = /** @class */ (function (_super) {
    __extends(TextCourse, _super);
    function TextCourse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextCourse.prototype.introduce = function () {
        console.log("Welcome to the Text Course!");
    };
    TextCourse.prototype.presentContent = function () {
        console.log("Displaying text-based content...");
    };
    TextCourse.prototype.performActivities = function () {
        console.log("No interactive activities available in this course.");
    };
    TextCourse.prototype.conclude = function () {
        console.log("Text Course concluded.");
    };
    return TextCourse;
}(Course));
// Client code
function main() {
    console.log("Choose the type of course you want to take:");
    console.log("1. Video Course");
    console.log("2. Interactive Course");
    console.log("3. Text-based Course");
    var choice = readlineSync.questionInt("Enter your choice: ");
    // Based on user's choice, instantiate and run the selected course
    switch (choice) {
        case 1:
            var videoCourse = new VideoCourse();
            videoCourse.runCourse();
            break;
        case 2:
            var interactiveCourse = new InteractiveCourse();
            interactiveCourse.runCourse();
            break;
        case 3:
            var textCourse = new TextCourse();
            textCourse.runCourse();
            break;
        default:
            console.log("Invalid choice. Please choose a valid option.");
    }
}
// Execute the main function
main();
