const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    slidesPerView: 'auto'
});

var Swiper = new Swiper(".second-swiper", {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

// Navbar
const hamburger = document.querySelector(".menu-box");
const dropdowns = document.querySelector(".dropdowns")
hamburger.addEventListener("click", function() {
  dropdowns.classList.toggle("active");
  hamburger.classList.toggle("active");
})

// Timer
let hour = 12;
let minute = 28;
let second = 8;

const hh = document.querySelector(".hr");
const mm = document.querySelector(".min");
const ss = document.querySelector(".sec");


hh.innerHTML = hour;
mm.innerHTML = minute;
ss.innerHTML = second;

setInterval(function() {
  second--;
  ss.innerHTML = second;

  if(second==0) {
    minute--;
    mm.innerHTML = minute;
    second = 59;
    ss.innerHTML = second;

    if(minute==0) {
      hour--;
      hh.innerHTML = hour;
      minute = 59;
      mm.innerHTML = minute;
    }
  }
}, 1000)