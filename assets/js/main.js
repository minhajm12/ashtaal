// Get Height into variables

const headerHeight = document.getElementById('header').offsetHeight;
const mainHeight = document.getElementById('main-banner').offsetHeight;
const bannerHeight = document.getElementById('banner-section').offsetHeight;


document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
document.documentElement.style.setProperty('--main-height', `${mainHeight}px`);
document.documentElement.style.setProperty('--banner-height', `${bannerHeight}px`);
// console.log(bannerHeight);











// OWL owlCarousel

$(document).ready(function(){
    $('.main-slider-colums').owlCarousel({
      items: 1,
      margin:20,
      animateOut: 'animate__zoomOut',
      animateIn: 'animate__zoomIn',
      loop: true,
      nav: true,
      autoplay:true,
      autoplayTimeout:10000,
      touchDrag: false,
      mouseDrag: false,
      slideToScroll: 1
    });
});












// SWIPER SLIDER

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 1.5,
        spaceBetween: 30
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 40
      }
    }
  });
  











