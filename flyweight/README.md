The Flyweight pattern is a structural design pattern that aims to minimize memory usage by sharing as much as possible with related objects. 

1. TextFormattingFactory
Responsibility: Creates and manages flyweight objects representing common text formatting attributes.
Methods:
getFormatting(fontStyle: string, fontSize: number, fontColor: string): ConcreteTextFormatting: Retrieves a flyweight object with the specified formatting attributes. If an object with the same attributes already exists, it is returned; otherwise, a new object is created.


2. ConcreteTextFormatting
Implements: TextFormatting interface.
Responsibility: Represents a flyweight object with specific text formatting attributes.
Properties:
fontStyle: string: The font style of the text.
fontSize: number: The font size of the text.
fontColor: string: The font color of the text.
Methods:
applyFormatting(text: string): string: Applies the formatting attributes to the input text and returns the formatted text.


3. TextFormatting Interface
Responsibility: Defines the interface for flyweight objects representing text formatting.
Methods:
applyFormatting(text: string): string: Applies formatting to the input text and returns the formatted text.