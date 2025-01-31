// const video = document.querySelector(".video");
// const toggleButton = document.querySelector(".toggleButton");
// const progress = document.querySelector(".progress");
// const progressBar = document.querySelector(".progress__filled");
// const sliders = document.querySelectorAll(".controls__slider");
// const skipBtns = document.querySelectorAll("[data-skip]");

// function togglePlay() {
//     if (video.paused || video.ended) {
//         video.play();
//     } else {
//         video.pause();
//     }
// }

// function updateToggleButton() {
//     toggleButton.innerHTML = video.paused ? "►" : "❚ ❚";
// }

// function handleProgress() {
//     const progressPercentage = (video.currentTime / video.duration) * 100;
//     progressBar.style.flexBasis = `${progressPercentage}%`;
// }

// function scrub(e) {
//     const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
//     video.currentTime = scrubTime;
// }

// function handleSliderUpdate() {
//     video[this.name] = this.value;
// }

// function handleSkip() {
//     video.currentTime += +this.dataset.skip;
// }

// toggleButton.addEventListener("click", togglePlay);
// video.addEventListener("click", togglePlay);
// video.addEventListener("play", updateToggleButton);
// video.addEventListener("pause", updateToggleButton);
// video.addEventListener("timeupdate", handleProgress);

// sliders.forEach((slider) => {
//     slider.addEventListener("change", handleSliderUpdate);
// });

// skipBtns.forEach((btn) => {
//     btn.addEventListener("click", handleSkip);
// });

// let mousedown = false;
// progress.addEventListener("click", scrub);
// progress.addEventListener("mousedown", () => (mousedown = true));
// progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
// progress.addEventListener("mouseup", () => (mousedown = false));

// sliders.forEach((slider) => {
//     slider.addEventListener("change", handleSliderUpdate);
// });

// document.addEventListener("keydown", (e) => {
//     if (e.code === "Space") togglePlay();
// });


let slideIndex = 0;
let slides, dots;

document.addEventListener("DOMContentLoaded", () => {
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    showSlides();
});

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Next & Previous Slide Functions
function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    updateSlides();
}

// Set Slide Manually
function currentSlide(n) {
    slideIndex = n;
    updateSlides();
}

// Update Slides & Dots
function updateSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}