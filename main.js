/* ==========================
      HERO SLIDER
========================== */
const heroSlides = document.querySelectorAll(".hero-slide");
let slideIndex = 0;

function showSlides() {
    heroSlides.forEach((slide, index) => {
        slide.classList.remove("active");
    });

    slideIndex = (slideIndex + 1) % heroSlides.length;
    heroSlides[slideIndex].classList.add("active");
}

if (heroSlides.length > 0) {
    heroSlides[0].classList.add("active");
    setInterval(showSlides, 7000);
}

/* ==========================
      MOBILE NAV
========================== */
const navToggle = document.getElementById("navToggle");
const navMenu = document.querySelector(".main-nav");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
}

/* ==========================
      FLOATING ICONS
========================== */
document.querySelectorAll(".floating").forEach(el => {
    el.addEventListener("mouseenter", () => {
        el.classList.add("float-up");
    });
    el.addEventListener("mouseleave", () => {
        el.classList.remove("float-up");
    });
});

/* ==========================
      OPTIONAL – BACKGROUND MUSIC
========================== */
// شغّلها لو بدك موسيقى خلفية خفيفة

// const bgMusic = new Audio("assets/audio/bg.mp3");
// bgMusic.volume = 0.25;
// bgMusic.loop = true;

// document.body.addEventListener("click", () => {
//     bgMusic.play();
// }, { once: true });

