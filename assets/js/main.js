// Get Height into variables

const headerHeight = document.getElementById('header').offsetHeight;
const mainHeight = document.getElementById('main-banner').offsetHeight;
const bannerHeight = document.getElementById('banner-section').offsetHeight;
const projectHeight1 = document.getElementById('project-items1').offsetHeight;
const projectHeight2 = document.getElementById('project-items2').offsetHeight;
const projectHeight3 = document.getElementById('project-items3').offsetHeight;
const projectHeight4 = document.getElementById('project-items4').offsetHeight;
const projectHeight5 = document.getElementById('project-items5').offsetHeight;
const projectHeight6 = document.getElementById('project-items6').offsetHeight;

const total_height = projectHeight1 + projectHeight2 + projectHeight3 + projectHeight4 + projectHeight5 + projectHeight6;


document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
document.documentElement.style.setProperty('--main-height', `${mainHeight}px`);
document.documentElement.style.setProperty('--banner-height', `${bannerHeight}px`);
document.documentElement.style.setProperty('--project-height', `${total_height}px`);
// document.documentElement.style.setProperty('--project-height2', `${projectHeight2}px`);
// document.documentElement.style.setProperty('--project-height3', `${projectHeight3}px`);
// document.documentElement.style.setProperty('--project-height4', `${projectHeight4}px`);
// document.documentElement.style.setProperty('--project-height5', `${projectHeight5}px`);
// document.documentElement.style.setProperty('--project-height6', `${projectHeight6}px`);
console.log(total_height);
// console.log(projectHeight2);
// console.log(projectHeight3);
// console.log(projectHeight4);
// console.log(projectHeight5);
// console.log(projectHeight6);













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
  











