const carouselSlide = document.querySelector('.carousel-slider');
const carouselImages = document.querySelectorAll('.carousel-slider__inner img');
const slider = document.querySelector('.carousel-container__slider__inner');
console.log(slider)
//Butons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;


console.log(carouselSlide.scrollLeft)
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
function getSliderpercentage() {
    return ((size/(carouselSlide.parentElement.scrollWidth - carouselSlide.parentElement.clientWidth))*100);
}

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length -1) {return}
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    slider.style.transition = "transform 1s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
    slider.style.width = `${getSliderpercentage()}%`
})
prevBtn.addEventListener('click', () => {
    if (counter <= 0) { return }
        slider.style.transition = "transform 0.4s ease-in-out";
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
        slider.style.width = `${getSliderpercentage()}%`
    
});

carouselSlide.addEventListener('transitionend', () => {
  
    counter >= 1 ?  prevBtn.disabled = false :  prevBtn.disabled = true;
    counter > carouselImages.length - 2 ? nextBtn.disabled = true : nextBtn.disabled = false
})