// Array of image paths
const images = [
    "Slide-1.jpg","Slide-2.jpg", "Slide-3.jpg", "Slide-4.jpg", "Slide-5.jpg",
    "Slide-6.jpg", "Slide-7.jpg", "Slide-8.jpg",
];

let currentIndex = 0; // Track the current image index
const slideshow = document.getElementById('slideshow');

// Function to update the image
function updateSlideshow() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    slideshow.src = images[currentIndex];
}

// Change image every 10 seconds (adjust as needed)
setInterval(updateSlideshow, 10000);
