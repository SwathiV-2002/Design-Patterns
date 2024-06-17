import { TextFormatting } from "./TextFormatting";

class ConcreteTextFormatting implements TextFormatting {
    private fontStyle: string;
    private fontSize: number;
    private fontColor: string;

    constructor(fontStyle: string, fontSize: number, fontColor: string) {
        this.fontStyle = fontStyle;
        this.fontSize = fontSize;
        this.fontColor = fontColor;
    }

    applyFormatting(text: string): string {
        return `<span style="font-style: ${this.fontStyle}; font-size: ${this.fontSize}px; color: ${this.fontColor};">${text}</span>`;
    }
}

export { ConcreteTextFormatting };
