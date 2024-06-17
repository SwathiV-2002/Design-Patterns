import ImageResource from "./ImageResource";
import ActualImageResource from "./ActualImageResource";

// Lazy loading proxy class for images
class LazyLoadingProxy implements ImageResource {
    private imageUrl: string;
    private image: ImageResource | null = null;

    constructor(imageUrl: string) {
        this.imageUrl = imageUrl;
    }

    display(): void {
        if (!this.image) {
            // Lazy load the image if it's not already loaded
            this.image = new ActualImageResource(this.imageUrl);
        }
        // Display the image
        this.image.display();
    }
}

export default LazyLoadingProxy;
