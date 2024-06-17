GUIFactory.ts: Defines the abstract factory interface.
Button.ts: Defines the Button interface.
Checkbox.ts: Defines the Checkbox interface.
WindowsButton.ts: Implements the Button interface for Windows.
WindowsCheckbox.ts: Implements the Checkbox interface for Windows.
MacButton.ts: Implements the Button interface for Mac.
MacCheckbox.ts: Implements the Checkbox interface for Mac.
WindowsFactory.ts: Implements the GUIFactory interface for Windows.
MacFactory.ts: Implements the GUIFactory interface for Mac.
Application.ts: Uses the GUIFactory to create and render UI components.
main.ts: Entry point of the application.