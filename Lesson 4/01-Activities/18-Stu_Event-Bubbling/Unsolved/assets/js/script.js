// TODO: Which element is the following line of code selecting?
// The division of the page that holds the images
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
// The next and previous imagine selectors
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
// After clicking on the image it take you too a new page for image
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
// once the next key is clicked it navigates to 1+ on theimges
// stops previous line from being activated
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// When the prev key is hit, takes -1 index for photos
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
