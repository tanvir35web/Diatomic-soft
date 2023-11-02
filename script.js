const menuBtn = document.querySelector(".menu-btn");
const items = document.querySelector(".items");
const navList = document.querySelector(".nav-list");

menuBtn.addEventListener("click", () => {
    items.classList.toggle("active");
});

// function linkAccount(){
//     items.classList.remove("active")
// }
// navList.forEach(n => n.addEventListener("click", linkAccount))

