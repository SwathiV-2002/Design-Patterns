class NotepadManager {
    private static instance: NotepadManager;
    private openNotepads: number;

    private constructor() {
        this.openNotepads = 0;
    }

    public static getInstance(): NotepadManager {
        if (!NotepadManager.instance) {
            NotepadManager.instance = new NotepadManager();
        }
        return NotepadManager.instance;
    }

    public openNotepad(): void {
        this.openNotepads++;
        console.log(`Notepad opened. Total open notepads: ${this.openNotepads}`);
    }

    public closeNotepad(): void {
        if (this.openNotepads > 0) {
            this.openNotepads--;
            console.log(`Notepad closed. Total open notepads: ${this.openNotepads}`);
        } else {
            console.log("No notepads are currently open.");
        }
    }
}

// Access the singleton instance of the Notepad Manager
const notepadManager = NotepadManager.getInstance();

// Open some notepads
notepadManager.openNotepad();
notepadManager.openNotepad();
notepadManager.openNotepad();

// Close one notepad
notepadManager.closeNotepad();

// Open another notepad
notepadManager.openNotepad();

notepadManager.closeNotepad();
notepadManager.closeNotepad();
notepadManager.closeNotepad();
notepadManager.closeNotepad();