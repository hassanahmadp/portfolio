const stairs = document.querySelector(".stairs");
const nav = document.querySelector(".nav");
const navBTN = document.querySelector(".nav .nav-button");
const logo = document.querySelector(".logo");
const header = document.querySelector("header");
const preloader = document.querySelector(".loadDelayer");
const contactOverlay = document.querySelector(".contactOverlay");
const text = document.querySelector(".loadDelayer .text p");
const topTaker = document.querySelector(".topTaker");


// Menu toggle actions
stairs.addEventListener("click", () => {
    stairs.classList.toggle("active");
    nav.classList.toggle("active");
    logo.classList.toggle("activeNav");
});

// onscroll header properties change
document.addEventListener("scroll", () => {
    if (scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// preloader
window.addEventListener('load', () => {
    preloader.classList.add('get-lost');
});

text.innerHTML = text.innerHTML
    .split("")
    .map((char, i) => `<span style="transform: rotate(${i * 11.1}deg);">${char}</span>`)
    .join("");


// show contact overlay
navBTN.addEventListener('click', () => {
    contactOverlay.classList.add('active');
});
// document.addEventListener('scroll', () => {
//     const totHeight = document.querySelector('.bodyClone').clientHeight;

//     if (scrollY === (totHeight - innerHeight)) {
//         contactOverlay.classList.add('active');
//         setTimeout(() => {
//             contactOverlay.classList.remove('active');
//         }, 3500);
//     }
// });

// hide contact overlay
document.querySelector('.overContact').addEventListener("click", () => {
    contactOverlay.classList.remove('active');
});

// coply email to clipboard
document.querySelector("#gmail").addEventListener('click', () => {
    const socialAlert = document.querySelector('.socialAlert');
    navigator.clipboard.writeText('hassanahamadp@gmail.com');

    socialAlert.classList.add('active');
    setTimeout(() => {
        socialAlert.classList.remove('active');
    }, 3000);
});

// topTaker button
document.addEventListener('scroll', () => {
    console.log(scrollY);
    if (scrollY > 65) {
        topTaker.classList.remove('inActive');
    } else {
        topTaker.classList.add('inActive');

    }
});