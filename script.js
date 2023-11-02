const menuBtn = document.querySelector(".menu-btn");
const items = document.querySelector(".items");
const navList = document.querySelector(".nav-list");

menuBtn.addEventListener("click", () => {
    items.classList.toggle("active");
});


// scroll reveal

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 400
});

ScrollReveal().reveal(".main-heading", {delay: 100, origin: "left"});
ScrollReveal().reveal(".items a", {delay: 100, origin: "top", interval: 200});
ScrollReveal().reveal("img, p", {delay: 200, origin: "bottom"});