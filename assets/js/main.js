// Header Height Selection

const headerHeight = document.getElementById('header').offsetHeight;
const mainHeight = document.getElementById('main-banner').offsetHeight;
const bannerHeight = document.getElementById('banner-section').offsetHeight;


document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
document.documentElement.style.setProperty('--main-height', `${mainHeight}px`);
document.documentElement.style.setProperty('--banner-height', `${bannerHeight}px`);
// console.log(bannerHeight);









// const text = document.querySelector('.text p');
// text.innerHTML = text.innerText.split('').map(
// (char, i) =>
// `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
// ).join('');


$(document).ready(function(){
    $('.main-slider-colums').owlCarousel({
        margin:20,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        // infinite:true,
        loop:true,
        nav: true,
        touchDrag: false,
        mouseDrag: false,
        // dots:true,
        // dotsEach: true,
        // autoplay:true,
        slideToScroll:1,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1300:{
                items:1
            },
            1500:{
                items:1
            }
        }
      })
});







