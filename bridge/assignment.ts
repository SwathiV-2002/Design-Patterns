import * as readlineSync from 'readline-sync';
import { SubmissionMethod, OnlineSubmission, OfflineSubmission } from './submissionMethod';

// Abstraction: Assignment
abstract class Assignment {
    protected submissionMethod: SubmissionMethod;

    constructor(submissionMethod: SubmissionMethod) {
        this.submissionMethod = submissionMethod;
    }

    abstract submitAssignment(): void;
}

// Refined Abstraction 1: Homework Assignment
class Homework extends Assignment {
    submitAssignment(): void {
        this.submissionMethod.submit("homework");
    }
}

// Refined Abstraction 2: Project Assignment
class Project extends Assignment {
    submitAssignment(): void {
        this.submissionMethod.submit("project");
    }
}

// Usage
const onlineSubmission = new OnlineSubmission();
const offlineSubmission = new OfflineSubmission();

const assignmentType = readlineSync.question('What type of assignment do you want to submit? (homework/project): ');

let assignment !: Assignment;

if (assignmentType === 'homework') {
    assignment = new Homework(offlineSubmission);
} else if (assignmentType === 'project') {
    assignment = new Project(offlineSubmission);
} else {
    console.log('Invalid assignment type.');
}

assignment.submitAssignment();



