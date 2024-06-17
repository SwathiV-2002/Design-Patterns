import ImageResource from "./ImageResource";

// Actual image resource implementation
class ActualImageResource implements ImageResource {
    private imageUrl: string;

    constructor(imageUrl: string) {
        console.log(`... loading image - takes 5 seconds!`);
        this.imageUrl = imageUrl;
    }

    display(): void {
        // Load and display the image from the provided URL
        console.log(`Displaying image: ${this.imageUrl}`);
    }
}

export default ActualImageResource;
