// const nav = document.querySelector("nav");

// window.addEventListener("scroll", () => {
//     if (window.scrollY > 60) {
//         nav.classlist.add("scrolled");
//         } else {
//             nav.classlist.remove("scrolled");
//             }
//     }
// )
// ;

const nav = document.querySelector("nav");
const mobilenav = document.querySelector("nav.mobile-nav");
const menuicon = document.querySelector(".menu-icon");
const closeicon = document.querySelector(".mobile-menu-container  .close-icon");
const mobilemenucontainer = document.querySelector(".mobile-menu-container");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        nav.classList.add("scrolled");
        mobilenav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
        mobilenav.classList.remove("scrolled");
    }
});

menuicon.addEventListener("click", () => {
    mobilemenucontainer.classList.add("active");
});

closeicon.addEventListener("click", () => {
    mobilemenucontainer.classList.remove("active");
});

// menuicon.addEventListener("click", () => {
//     mobilemenucontainer.classList.add("active");
// });

// // Close the menu
// closeicon.addEventListener("click", () => {
//     mobilemenucontainer.classList.remove("active");
// });