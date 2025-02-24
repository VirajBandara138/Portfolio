const slider = document.querySelector('.slider');
const images = Array.from(slider.getElementsByTagName('img'));
let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

function previousImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
}

// Show the first image
showImage(currentIndex);


// Automatically cycle through images every 3 seconds
setInterval(nextImage, 3000);
