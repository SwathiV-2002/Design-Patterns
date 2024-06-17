// Adaptee 1
class EssayAssignment {
    private topic: string;
    private wordCount: number;

    constructor(topic: string, wordCount: number) {
        this.topic = topic;
        this.wordCount = wordCount;
    }

    // Adaptee-specific method to submit essay assignment
    submitEssay(): void {
        console.log(`Submitting essay assignment on "${this.topic}" with ${this.wordCount} words.`);
    }
}

// Adaptee 2
class CodingAssignment {
    private problemStatement: string;
    private language: string;

    constructor(problemStatement: string, language: string) {
        this.problemStatement = problemStatement;
        this.language = language;
    }

    // Adaptee-specific method to submit coding assignment
    submitCode(): void {
        console.log(`Submitting coding assignment for "${this.problemStatement}" in ${this.language}.`);
    }
}

// Target Interface
interface AssignmentSubmission {
    submit(): void;
}

// Adapter for EssayAssignment
class EssayAssignmentAdapter implements AssignmentSubmission {
    private essayAssignment: EssayAssignment;

    constructor(essayAssignment: EssayAssignment) {
        this.essayAssignment = essayAssignment;
    }

    // Adapting EssayAssignment's method to the target interface
    submit(): void {
        this.essayAssignment.submitEssay();
    }
}

// Adapter for CodingAssignment
class CodingAssignmentAdapter implements AssignmentSubmission {
    private codingAssignment: CodingAssignment;

    constructor(codingAssignment: CodingAssignment) {
        this.codingAssignment = codingAssignment;
    }

    // Adapting CodingAssignment's method to the target interface
    submit(): void {
        this.codingAssignment.submitCode();
    }
}

// Client
class Student {
    submitAssignment(assignment: AssignmentSubmission): void {
        assignment.submit();
    }
}

import * as readlineSync from 'readline-sync';
const type = readlineSync.question('What type of assignment do you want to submit? (essay/coding): ');

if (type === 'essay') {
    const essayAssignment = new EssayAssignment("Climate Change", 1000);
    const essayAdapter = new EssayAssignmentAdapter(essayAssignment);
    const student = new Student();
    student.submitAssignment(essayAdapter);
} else if (type === 'coding') {
    const codingAssignment = new CodingAssignment("Sorting Algorithm", "JavaScript");
    const codingAdapter = new CodingAssignmentAdapter(codingAssignment);
    const student = new Student();
    student.submitAssignment(codingAdapter);
} else {
    console.log('Invalid assignment type. Please specify "essay" or "coding".');
}
