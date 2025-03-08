const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    const isOpen = navMenu.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars");
});

// Close menu on link click (for small screens)
navMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && window.innerWidth <= 768) { 
        navMenu.classList.remove("open");
        menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
    }
});

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

// Lightbox Functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".lightbox-trigger").forEach(image => {
    image.addEventListener("click", function() {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
    });
});

closeBtn.addEventListener("click", function() {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", function(event) {
    if (event.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});