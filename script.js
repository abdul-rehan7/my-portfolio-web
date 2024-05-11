// Select the menu button and the navigation bar
let menuBtn = document.querySelector("#menu-btn");
let navBar = document.querySelector(".header .flex .navbar");
let ts = document.querySelector(".ts-clm");
let sec = document.querySelector(".sec-clm");
let third = document.querySelector(".third-clm");
let herobtn1 = document.querySelector(".btn1");
let herobtn2 = document.querySelector(".btn2");
let herobtn3 = document.querySelector(".btn3");

// Toggle the active class on the navbar when the menu button is clicked
menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times"); // Toggle the menu button icon
  navBar.classList.toggle("active");
};

var swiper = new Swiper(".course-slider", {
  spaceBetween: 30,
  grabCursor: false,
  loop: true,
  autoplay: {
    delay:1000, // Set the delay to 1000 milliseconds (1 second)
    disableOnInteraction: false, // Continue autoplay even if user interacts with swiper
  },
  speed: 1000, // Set the speed of slide transitions to 1000 milliseconds (1 second)
  effect: "slide",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
var typed = new Typed("#element", {
  strings: [
    "A Web Developer",
    "&amp; a Graphic Designer",
    "Let&apos;s Turn your vision to Reality!",
  ],
  typeSpeed: 50,
});

function open1() {
  ts.style.display = "Block";
  sec.style.display = "none";
  third.style.display = "none";
  herobtn1.style.borderBottom = "1.5px solid rgb(0, 0, 0)";
  herobtn2.style.border = "none";
  herobtn3.style.border = "none";
}
function open2() {
  ts.style.display = "none";
  sec.style.display = "Block";
  third.style.display = "none";
  herobtn2.style.borderBottom = "1.5px solid rgb(0, 0, 0)";
  herobtn1.style.border = "none";
  herobtn3.style.border = "none";
}
function open3() {
  ts.style.display = "none";
  sec.style.display = "none";
  third.style.display = "Block";
  herobtn3.style.borderBottom = "1.5px solid rgb(0, 0, 0)";
  herobtn1.style.border = "none";
  herobtn2.style.border = "none";
}
