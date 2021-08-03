const stairs = document.querySelector(".stairs");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo");

stairs.addEventListener("click", () => {
    stairs.classList.toggle("active");
    nav.classList.toggle("active");
    logo.classList.toggle("activeNav");
});