// ===============================
// MOBILE MENU TOGGLE
// ===============================
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
});


// ===============================
// DOM CONTENT LOADED
// ===============================
document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll(".nav-links a");
    const currentPage = window.location.pathname.split("/").pop();

    // -------------------------------
    // AUTO ACTIVE PAGE DETECTION
    // -------------------------------
    links.forEach(link => {

        const linkHref = link.getAttribute("href");
        const linkPage = linkHref.split("/").pop();

        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {
            link.classList.add("active");
        }

    });


    // -------------------------------
    // SMOOTH SCROLL FOR #SECTIONS
    // -------------------------------
    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            // Only apply smooth scroll if it's a section link
            if (targetId.startsWith("#")) {

                e.preventDefault();

                const targetSection = document.querySelector(targetId);

                if (targetSection) {

                    const navbarHeight = document.querySelector(".navbar").offsetHeight;

                    window.scrollTo({
                        top: targetSection.offsetTop - navbarHeight - 20,
                        behavior: "smooth"
                    });

                    // Close mobile menu after click
                    document.getElementById('navLinks').classList.remove('active');
                }
            }

        });

    });

    // -------------------------------
// TRUE LEFT-RIGHT SLIDING INDICATOR
// -------------------------------
const indicator = document.querySelector(".nav-indicator");
const navContainer = document.querySelector(".nav-links");

function moveIndicator(link) {

    const containerRect = navContainer.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();

    const newLeft = linkRect.left - containerRect.left;
    const newWidth = linkRect.width;

    indicator.style.left = newLeft + "px";
    indicator.style.width = newWidth + "px";
}

// Set on page load
const activeLink = document.querySelector(".nav-links a.active");
if (activeLink) {
    moveIndicator(activeLink);
}

// Move on click
links.forEach(link => {
    link.addEventListener("click", function () {
        moveIndicator(this);
    });
});


});
