const wrapper = document.querySelector(".sliderWrapper"),
    slider = document.querySelector(".slider"),
    sliderElements = document.querySelectorAll(".sliderElement"),
    buttons = document.querySelectorAll(".button");

sliderElements.forEach((el) => {
    // el.style.opacity=0
    el.style.display = 'none';
})
let elementIndex = 0,
    intervalId;
// sliderElements[elementIndex].style.opacity=1;
sliderElements[elementIndex].style.display = 'block';

const autoSlide = () => {
  // Start the slideshow by calling slideImage() every 4 seconds
  intervalId = setInterval(() => {sliderElements[elementIndex].style.display = 'none';slideImage(++elementIndex)}, 4000);
};
// Call autoSlide function on page load
autoSlide();

// A function that updates the slider display to show the specified image
const slideImage = () => {

    //   elementIndex++;
    elementIndex = elementIndex === sliderElements.length ? 0 : elementIndex < 0 ? sliderElements.length - 1 : elementIndex;
    // Update the slider display to show the specified image
    //   sliderElements[elementIndex].style.transform = `translate(-${100}%)`;
    // sliderElements[elementIndex].style.opacity=1;
    sliderElements[elementIndex].style.display = 'block';
};

// A function that updates the slider display to show the next or previous image
const updateClick = (e) => {
    // Stop the automatic slideshow
      clearInterval(intervalId);
    // Calculate the updated image index based on the button clicked
    //   sliderElements[elementIndex].style.opacity=0;
    sliderElements[elementIndex].style.display = 'none';
    elementIndex += e.target.id === "next" ? 1 : -1;
    slideImage(elementIndex);
    // Restart the automatic slideshow
      autoSlide();
};

// Add event listeners to the navigation buttons
buttons.forEach((button) => button.addEventListener("click", updateClick));

// Add mouseover events to start and stop autoslide
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
wrapper.addEventListener("mouseleave", autoSlide);