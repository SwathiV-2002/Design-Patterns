// Implementor interface: Submission Method
interface SubmissionMethod {
    submit(assignment: string): void;
}

// Concrete Implementor 1: Online Submission Method
class OnlineSubmission implements SubmissionMethod {
    submit(assignment: string): void {
        console.log(`Submitting assignment "${assignment}" online.`);
    }
}

// Concrete Implementor 2: Offline Submission Method
class OfflineSubmission implements SubmissionMethod {
    submit(assignment: string): void {
        console.log(`Submitting assignment "${assignment}" offline.`);
    }
}

export { SubmissionMethod, OnlineSubmission, OfflineSubmission };
