const menuBtn = document.querySelector(".menu-btn");
const items = document.querySelector(".items");

menuBtn.addEventListener("click", () => {
    items.classList.toggle("active");

});
