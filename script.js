const left = document.getElementById('left');
const right = document.getElementById('right');
const imageContainer = document.getElementById('images');
const allImages = document.querySelectorAll('#images img');

let slidePosition = 0;

const changeImage = () => {
    if (slidePosition > allImages.length - 1) {
        slidePosition = 0;
    } else if (slidePosition < 0){
        slidePosition = allImages.length -1;   
    } 
    const x = -slidePosition * 500;
    imageContainer.style.transform = `translateX(${x}px)`
}

const incrementLoop = () => {
    slidePosition++;
    console.log(1)
    changeImage();
}

const resetLoop = () => {
    clearInterval(loop);
    loop = setInterval(incrementLoop, 2000);
}

let loop = setInterval(incrementLoop, 2000);

left.addEventListener('click', () => {
    slidePosition--;
    changeImage();
    resetLoop();
});

right.addEventListener('click', () => {
    slidePosition++;
    changeImage();
    resetLoop();
});
