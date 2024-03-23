// Header Height Selection

const headerHeight = document.getElementById('header').offsetHeight;
const mainHeight = document.getElementById('main-banner').offsetHeight;
const bannerHeight = document.getElementById('banner-section').offsetHeight;


document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
document.documentElement.style.setProperty('--main-height', `${mainHeight}px`);
document.documentElement.style.setProperty('--banner-height', `${bannerHeight}px`);
// console.log(containerWidth);









// const text = document.querySelector('.text p');
// text.innerHTML = text.innerText.split('').map(
// (char, i) =>
// `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
// ).join('');


// $(document).ready(function(){
//     $('.main-slider-colums').owlCarousel({
//         // margin:20,
//         items:1,
//         animateOut: 'animate__zoomOut',
//         animateIn: 'animate__zoomIn',
//         // infinite:true,
//         loop:true,
//         nav: true,
//         touchDrag: false,
//         mouseDrag: false,
//         // dots:true,
//         // dotsEach: true,
//         // autoplay:true,
//         slideToScroll:1,

//         // responsive:{
//         //     0:{
//         //         items:1
//         //     },
//         //     600:{
//         //         items:1
//         //     },
//         //     1300:{
//         //         items:1
//         //     },
//         //     1500:{
//         //         items:1
//         //     }
//         // },

//         onTranslated: function(){
//             // Get the current slide index
//             var currentIndex = $('.main-slider-colums').find('.owl-item.active').index();
            
//             // Change background color based on slide index
//             if (currentIndex === 0) {
//                 $('#main-banner').css('background-color', '#67A58040'); // Change background color for first slide
//             } else if (currentIndex === 1) {
//                 $('#main-banner').css('background-color', '#FF0000'); // Change background color for second slide
//             } else if (currentIndex === 2) {
//                 $('#main-banner').css('background-color', '#67A58040'); // Change background color for third slide
//             } else {
//                 $('#main-banner').css('background-color', '#eee'); // Default background color
//             }
//         }
//       })
// });



$(document).ready(function(){
    // Initialize Owl Carousel
    var owl = $('.main-slider-colums').owlCarousel({
        items: 1,
        margin:20,
        animateOut: 'animate__zoomOut',
        animateIn: 'animate__zoomIn',
        loop: true,
        nav: true,
        autoplay:true,
        autoplayTimeout:8000,
        touchDrag: false,
        mouseDrag: false,
        slideToScroll: 1
    });

    // // Add event listener for slide change
    // owl.on('changed.owl.carousel', function(event) {
    //     var currentIndex = event.item.index;
    //     changeBackgroundColor(currentIndex);
    // });

    // // Function to change background color based on slide index
    // function changeBackgroundColor(index) {
    //     if (index === 0 || index === 2) {
    //         $('#main-banner').css('background-color', '#67A58040'); // Change background color for first and third slide
    //     } else if (index === 2) {
    //         $('#main-banner').css('background-color', '#FF0000'); // Change background color for second slide
    //     } else {
    //         $('#main-banner').css('background-color', '#eee'); // Default background color
    //     }
    // }

    // // Manually trigger background color change after initialization
    // owl.trigger('changed.owl.carousel', {item: {index: owl.find('.owl-item.active').index()}});
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
      // Add more breakpoints as needed
    }
  });
  











