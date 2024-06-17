import { TextFormatting } from "./TextFormatting";
import { ConcreteTextFormatting } from "./ConcreteTextFormatting";

class TextFormattingFactory {
    private flyweights: { [key: string]: ConcreteTextFormatting } = {};

    getFormatting(fontStyle: string, fontSize: number, fontColor: string): TextFormatting {
        const key = `${fontStyle}_${fontSize}_${fontColor}`;
        if (!this.flyweights[key]) {
            this.flyweights[key] = new ConcreteTextFormatting(fontStyle, fontSize, fontColor);
        }
        return this.flyweights[key];
    }
}

export { TextFormattingFactory };
