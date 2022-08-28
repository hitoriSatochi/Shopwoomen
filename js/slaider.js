
let offer = 0;
const sliderLine = document.querySelector('.img-section_frie');


document.querySelector('.button-next').addEventListener('click', function (){
    offer = offer + 1030;
    if(offer > 3090) {
        offer = 0
    }
    sliderLine.style.left = -offer + 'px'
})

document.querySelector('.button-prev').addEventListener('click', function (){
    offer = offer - 1030;
    if(offer < 0) {
        offer = 3090
    }
    sliderLine.style.left = -offer + 'px'
})