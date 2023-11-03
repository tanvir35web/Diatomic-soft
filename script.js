
// ............scroll reveal animation ............

ScrollReveal({
    reset: true,
    distance: '70px',
    duration: 800,
    delay: 100
});

ScrollReveal().reveal(".main-heading", {delay: 100, origin: "left"});
ScrollReveal().reveal(".auto-heading", {delay: 100, origin: "top", interval: 200});
ScrollReveal().reveal("img", {delay: 100, origin: "right"});
ScrollReveal().reveal("p", {delay: 100, origin: "left"});
ScrollReveal().reveal("h1", {delay: 100, origin: "top"});
ScrollReveal().reveal(".project", {delay: 100, origin: "bottom"});
ScrollReveal().reveal(".right-service-odd, .right-service", {delay: 100, origin: "left"});
ScrollReveal().reveal(".navbar .left", {delay: 100, origin: "top", interval: 200});


//............ Typed JS auto typing animation............

var typed = new Typed(".auto-type", {
    strings: ["Software", "Web Application", "Android Application", "iOS Application", "IT Solution", "Quality Assurance", "Testing"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true 
});

// .............side Nav bar...............

const menuBtn = document.querySelector(".menu-btn");
const items = document.querySelector(".items");
const navList = document.querySelector(".nav-list");

menuBtn.addEventListener("click", () => {
    items.classList.toggle("active");
});

