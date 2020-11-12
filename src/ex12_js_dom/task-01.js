const images = document.getElementsByClassName('.slide');
const back = document.getElementById('back');
const next = document.getElementById('next');
let counter = 0;

const getSlides = () => {
    const leftSlide = document.querySelector('.slide.slide_left');
    const rightSlide = document.querySelector('.slide.slide_right');
    const centralSlide = document.querySelector('.slide.slide_central');

    return {
        leftSlide,
        rightSlide,
        centralSlide,
    };
};

const buttonBack = () => {
    const { leftSlide, rightSlide, centralSlide } = getSlides();
    counter = counter >= (images.length - 1) ? 0 : counter + 1;

    leftSlide.classList.remove('slide_left', 'slide_to-right');
    rightSlide.classList.remove('slide_right', 'slide_to-right');
    centralSlide.classList.remove('slide_central', 'slide_to-right');

    leftSlide.classList.add('slide_right', 'slide_to-left');
    rightSlide.classList.add('slide_central', 'slide_to-left');
    centralSlide.classList.add('slide_left', 'slide_to-left');

    rightSlide.innerText = images[counter];
};

const buttonNext = () => {
    const { leftSlide, rightSlide, centralSlide } = getSlides();
    counter = counter <= 0 ? (images - 1) : counter - 1;

    leftSlide.classList.remove('slide_left', 'slide_to-left');
    rightSlide.classList.remove('slide_right', 'slide_to-left');
    centralSlide.classList.remove('slide_central', 'slide_to-left');

    leftSlide.classList.add('slide_central', 'slide_to-right');
    rightSlide.classList.add('slide_left', 'slide_to-right');
    centralSlide.classList.add('slide_right', 'slide_to-right');

    leftSlide.innerText = images[counter];
};

back.addEventListener('click', buttonBack);
next.addEventListener('click', buttonNext);
