'use strict';


const togglerButton = document.querySelector('.navbar-toggler');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');
const navbarCollapse = document.getElementById('navbarNav');  // Assuming this is the collapse element

let navbarIsOpen = false;  // Keep track of whether the menu is open or not

// Handle toggler button click
togglerButton.addEventListener('click', function () {
  navbarIsOpen = !navbarIsOpen;  // Toggle the navbar open state

  if (navbarIsOpen) {
    iconOpen.style.display = 'none';
    iconClose.style.display = 'inline-block';
    navbarCollapse.classList.add('show'); // Bootstrap class to show navbar
  } else {
    iconOpen.style.display = 'inline-block';
    iconClose.style.display = 'none';
    navbarCollapse.classList.remove('show'); // Bootstrap class to hide navbar
  }
});

// Handle scrolling to hide the navbar when it's open
window.addEventListener('scroll', function () {
  if (navbarIsOpen && window.scrollY > 0) {
    // If the navbar is open and the page is scrolled, hide the navbar
    iconOpen.style.display = 'inline-block';
    iconClose.style.display = 'none';
    navbarCollapse.classList.remove('show'); // Hide the navbar
    navbarIsOpen = false; // Update the state to reflect the navbar is closed
  }
});



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  var swiper = new Swiper(".trustedSlider", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

