// Array of image paths
const images = [
    "Slide-1.jpg", "Slide-2.jpg", "Slide-3.jpg", "Slide-4.jpg", "Slide-5.jpg",
    "Slide-6.jpg", "Slide-7.jpg", "Slide-8.jpg", "Slide-9.jpg","Slide-10","Slide-11", "Slide-12","Slide-13", "Slide-14", "Slide-15", "Slide-16", "Slide-17", "Slide-18", "Slide-19", "Slide-20", "Slide-21", "Slide-22", "SLide-23"
];

let currentIndex = 0; // Track the current image index
const slideshowElements = document.querySelectorAll('.slideshow'); // Get all images with the class 'slideshow'

function updateSlideshow() {
    // Update the src of the first image in the 'slideshow' class group
    slideshowElements.forEach(img => img.style.display = 'none'); // Hide all images
    slideshowElements[currentIndex].style.display = 'block'; // Show the current image

    currentIndex = (currentIndex + 1) % slideshowElements.length; // Loop back to the first image
}

// Initially hide all images except the first
slideshowElements.forEach(img => img.style.display = 'none');
slideshowElements[0].style.display = 'block';

// Change image every 10 seconds (10000ms)
setInterval(updateSlideshow, 10000);

