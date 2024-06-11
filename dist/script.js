// Untuk Bagian Humberger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const toTopButton = document.querySelector("#toTop")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
});
// Tutup Hamburger di Luar Hamburger
window.addEventListener("click", (e) => {
    if(e.target != navMenu & e.target != hamburger){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Navbar fixed

window.onscroll = function() {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
        toTopButton.classList.add("flex");
        toTopButton.classList.remove("hidden");
    }else {
        toTopButton.classList.remove("flex");
        toTopButton.classList.add("hidden");
        header.classList.remove("navbar-fixed");
    }
}

const copyrightYears = document.querySelector("#tahun span");
let getYear = new Date().getFullYear();
copyrightYears.innerHTML = getYear.toString();

// DARK MODE TOGGLE
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    if(darkToggle.checked){
        localStorage.theme = "dark";
    }else{
        localStorage.theme = "light";
    }
});

// pindahkan posisi toggle sesua mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
    } else {
    darkToggle.checked = false
  }