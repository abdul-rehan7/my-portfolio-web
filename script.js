// Select the menu button and the navigation bar
let menuBtn = document.querySelector("#menu-btn");
let navBar = document.querySelector(".header .flex .navbar");

// Toggle the active class on the navbar when the menu button is clicked
menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times"); // Toggle the menu button icon
  navBar.classList.toggle("active");
};

var swiper = new Swiper(".course-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
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
