

// get images items from HTML
let landscapeImgs = document.querySelectorAll(".landscape");
let portraitImgs = document.querySelectorAll(".portrait");

// get buttons from HTML
let nextPortraitButton = document.querySelector("#carousel-portrait-next");
let prevPortraitButton = document.querySelector("#carousel-portrait-prev");
let nextLandscapeButton = document.querySelector("#carousel-landscape-next");
let prevLandscapeButton = document.querySelector("#carousel-landscape-prev");

let activeLandscapeIndex = 0;
let activePortraitIndex = 0;

// set first image to active
// landscapeImgs[activeLandscapeIndex].classList.add("active");
// portraitImgs[activePortraitIndex].classList.add("active");

// set next and prev buttons
// handle click event on buttons
nextLandscapeButton.onclick = () => {
    landscapeImgs[activeLandscapeIndex].classList.add("d-none");
    activeLandscapeIndex++;
    if (activeLandscapeIndex > (landscapeImgs.length - 1)) {
        activeLandscapeIndex = 0;
    }
    landscapeImgs[activeLandscapeIndex].classList.remove("d-none");
};

prevLandscapeButton.onclick = () => {
    landscapeImgs[activeLandscapeIndex].classList.add("d-none");
    activeLandscapeIndex--;
    if (activeLandscapeIndex < 0) {
        activeLandscapeIndex = landscapeImgs.length - 1;
    }
    landscapeImgs[activeLandscapeIndex].classList.remove("d-none");
};

nextPortraitButton.onclick = () => {
    portraitImgs[activePortraitIndex].classList.add("d-none");
    activePortraitIndex++;
    if (activePortraitIndex > (portraitImgs.length - 1)) {
        activePortraitIndex = 0;
    }
    portraitImgs[activePortraitIndex].classList.remove("d-none");
};

prevPortraitButton.onclick = () => {
    portraitImgs[activePortraitIndex].classList.add("d-none");
    activePortraitIndex--;
    if (activePortraitIndex < 0) {
        activePortraitIndex = portraitImgs.length - 1;
    }
    portraitImgs[activePortraitIndex].classList.remove("d-none");
};