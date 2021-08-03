const stairs = document.querySelector(".stairs");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo");
const header = document.querySelector("header");

// Menu toggle actions
stairs.addEventListener("click", () => {
    stairs.classList.toggle("active");
    nav.classList.toggle("active");
    logo.classList.toggle("activeNav");
});

// onscroll header properties change
document.addEventListener("scroll", () => {
    if (pageYOffset > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});