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
var submissionMethod_1 = require("./submissionMethod");
// Abstraction: Assignment
var Assignment = /** @class */ (function () {
    function Assignment(submissionMethod) {
        this.submissionMethod = submissionMethod;
    }
    return Assignment;
}());
// Refined Abstraction 1: Homework Assignment
var HomeworkAssignment = /** @class */ (function (_super) {
    __extends(HomeworkAssignment, _super);
    function HomeworkAssignment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeworkAssignment.prototype.submitAssignment = function () {
        this.submissionMethod.submit("homework");
    };
    return HomeworkAssignment;
}(Assignment));
// Refined Abstraction 2: Project Assignment
var ProjectAssignment = /** @class */ (function (_super) {
    __extends(ProjectAssignment, _super);
    function ProjectAssignment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjectAssignment.prototype.submitAssignment = function () {
        this.submissionMethod.submit("project");
    };
    return ProjectAssignment;
}(Assignment));
// Usage
var onlineSubmission = new submissionMethod_1.OnlineSubmission();
var offlineSubmission = new submissionMethod_1.OfflineSubmission();
var assignmentType = readlineSync.question('What type of assignment do you want to submit? (homework/project): ');
var assignment;
if (assignmentType === 'homework') {
    assignment = new HomeworkAssignment(onlineSubmission);
}
else if (assignmentType === 'project') {
    assignment = new ProjectAssignment(offlineSubmission);
}
else {
    console.log('Invalid assignment type.');
}
assignment.submitAssignment();
