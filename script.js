/* =========================================================
   SAIMANI CHAPPA
   CINEMATIC VIDEO EDITOR PORTFOLIO
========================================================= */


/* =========================================================
   1. NAVIGATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");


    /* Active navigation link while scrolling */

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 180;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });


        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });

    }


    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();

});


/* =========================================================
   2. HEADER SCROLL EFFECT
========================================================= */

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (!header) return;


    if (window.scrollY > 40) {

        header.style.background =
            "rgba(8, 9, 12, 0.96)";

    } else {

        header.style.background =
            "rgba(8, 9, 12, 0.82)";

    }

});


/* =========================================================
   3. REVEAL ANIMATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const animatedElements = document.querySelectorAll(
        ".service-card, .work-card, .process-item, .about-content"
    );


    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show-element");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    animatedElements.forEach((element) => {

        element.classList.add("hidden-element");

        observer.observe(element);

    });

});


/* =========================================================
   4. SMOOTH LINK BEHAVIOUR
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================================
   5. IMAGE LOADING
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    images.forEach((image) => {

        image.addEventListener("load", () => {

            image.classList.add("image-loaded");

        });

    });

});


/* =========================================================
   6. CONSOLE MESSAGE
========================================================= */

console.log(
    "Saimani Chappa — Video Editor Portfolio loaded successfully."
);