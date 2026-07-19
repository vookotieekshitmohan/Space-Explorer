/* ==========================================
   SPACE EXPLORER
   Main Application
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    smoothScrolling();

    activeNavigation();

    revealOnScroll();

});

/* ==========================================
   Smooth Scrolling
========================================== */

function smoothScrolling(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

}

/* ==========================================
   Active Navigation
========================================== */

function activeNavigation(){

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.clientHeight;

            if(window.scrollY >= sectionTop){

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if(link.getAttribute("href") === "#" + current){

                link.classList.add("active");

            }

        });

    });

}

/* ==========================================
   Reveal Sections on Scroll
========================================== */

function revealOnScroll(){

    const cards = document.querySelectorAll(

        ".agency-card, .rocket-card, .planet-card, .gallery-card, .stat-card"

    );

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.2

    });

    cards.forEach(card=>observer.observe(card));

}

const cursor = document.querySelector(".cursor");
const blur = document.querySelector(".cursor-blur");

if (cursor && blur && window.matchMedia("(pointer: fine)").matches) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.transform =
            `translate(${e.clientX}px, ${e.clientY}px)`;

        blur.animate({
            transform: `translate(${e.clientX}px, ${e.clientY}px)`
        }, {
            duration: 250,
            fill: "forwards"
        });

    });

} else {

    document.body.style.cursor = "auto";

}
