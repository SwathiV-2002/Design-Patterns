"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Adaptee 1
var EssayAssignment = /** @class */ (function () {
    function EssayAssignment(topic, wordCount) {
        this.topic = topic;
        this.wordCount = wordCount;
    }
    // Adaptee-specific method to submit essay assignment
    EssayAssignment.prototype.submitEssay = function () {
        console.log("Submitting essay assignment on \"".concat(this.topic, "\" with ").concat(this.wordCount, " words."));
    };
    return EssayAssignment;
}());
// Adaptee 2
var CodingAssignment = /** @class */ (function () {
    function CodingAssignment(problemStatement, language) {
        this.problemStatement = problemStatement;
        this.language = language;
    }
    // Adaptee-specific method to submit coding assignment
    CodingAssignment.prototype.submitCode = function () {
        console.log("Submitting coding assignment for \"".concat(this.problemStatement, "\" in ").concat(this.language, "."));
    };
    return CodingAssignment;
}());
// Adapter for EssayAssignment
var EssayAssignmentAdapter = /** @class */ (function () {
    function EssayAssignmentAdapter(essayAssignment) {
        this.essayAssignment = essayAssignment;
    }
    // Adapting EssayAssignment's method to the target interface
    EssayAssignmentAdapter.prototype.submit = function () {
        this.essayAssignment.submitEssay();
    };
    return EssayAssignmentAdapter;
}());
// Adapter for CodingAssignment
var CodingAssignmentAdapter = /** @class */ (function () {
    function CodingAssignmentAdapter(codingAssignment) {
        this.codingAssignment = codingAssignment;
    }
    // Adapting CodingAssignment's method to the target interface
    CodingAssignmentAdapter.prototype.submit = function () {
        this.codingAssignment.submitCode();
    };
    return CodingAssignmentAdapter;
}());
// Client
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.submitAssignment = function (assignment) {
        assignment.submit();
    };
    return Student;
}());
var readlineSync = require("readline-sync");
var type = readlineSync.question('What type of assignment do you want to submit? (essay/coding): ');
if (type === 'essay') {
    var essayAssignment = new EssayAssignment("Climate Change", 1000);
    var essayAdapter = new EssayAssignmentAdapter(essayAssignment);
    var student = new Student();
    student.submitAssignment(essayAdapter);
}
else if (type === 'coding') {
    var codingAssignment = new CodingAssignment("Sorting Algorithm", "JavaScript");
    var codingAdapter = new CodingAssignmentAdapter(codingAssignment);
    var student = new Student();
    student.submitAssignment(codingAdapter);
}
else {
    console.log('Invalid assignment type. Please specify "essay" or "coding".');
}
