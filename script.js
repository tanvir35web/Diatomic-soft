
// .............side Nav bar...............

const menuBtn = document.querySelector(".menu-btn");
const items = document.querySelector(".items");
const navLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
    items.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (items.classList.contains("active")) {
            items.classList.remove("active");
        }
    });
});



// ...............Nav bar visible for scroll-up..................


const navbar = document.querySelector(".navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if(lastScrollY < window.scrollY) {
        navbar.classList.add("nav--hidden");
    } else {
        navbar.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
});

// ............scroll reveal animation ............

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 800,
    delay: 100
});

ScrollReveal().reveal(".main-heading", {delay: 100, origin: "left"});
ScrollReveal().reveal(".auto-heading", {delay: 100, origin: "top", interval: 200});
ScrollReveal().reveal(".image", {delay: 100, distance: '70px', origin: "bottom"});

ScrollReveal().reveal(".hero-para", {delay: 100, origin: "bottom"});

ScrollReveal().reveal(".services-heading", {delay: 100, origin: "top"});
ScrollReveal().reveal(".services-para", {delay: 100, origin: "bottom"});

ScrollReveal().reveal(".projects-heading", {origin: "top"});
ScrollReveal().reveal(".projects-para", {origin: "top"});

ScrollReveal().reveal(".team-heading", {delay: 100, origin: "top"});
ScrollReveal().reveal(".team-para", {delay: 100, origin: "bottom"});

ScrollReveal().reveal(".project", {delay: 100, origin: "bottom", interval: 200});
ScrollReveal().reveal(".right-service-odd, .right-service", {delay: 100, origin: "left"});


//..................... pages redirecting..............

let projectBtn = document.getElementById("btn-projects");

projectBtn.addEventListener("click", () => {
    window.open("projects.html", "_blank");
});





// ................ Swiper js .....................

var swiper = new Swiper(".mySwiper", {

    slidesPerView: 4,
    spaceBetween: 15,
    centeredSlides: false,
    grabCursor: true,
    freeMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    mousewheel: false,
    keyboard: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        2000: {
            slidesPerView: 5,
        }
   
    }
  });




//............ Typed JS auto typing animation............

var typed = new Typed(".auto-type", {
    strings: ["Software", "Web Application", "Android Application", "iOS Application", "IT Solution", "Quality Assurance", "Testing"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true 
});



