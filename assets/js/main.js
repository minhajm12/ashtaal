// Header Height Selection

const headerHeight = document.getElementById('header').offsetHeight;
const mainHeight = document.getElementById('main-banner').offsetHeight;
const bannerHeight = document.getElementById('banner-section').offsetHeight;


document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
document.documentElement.style.setProperty('--main-height', `${mainHeight}px`);
document.documentElement.style.setProperty('--banner-height', `${bannerHeight}px`);
// console.log(bannerHeight);