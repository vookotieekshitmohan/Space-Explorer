/* ==========================================
   SPACE EXPLORER
   Dynamic Star Background
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    createStars(120);

});

function createStars(count){

    const container = document.body;

    for(let i = 0; i < count; i++){

        const star = document.createElement("div");

        star.classList.add("dynamic-star");

        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.animationDelay = Math.random() * 5 + "s";

        container.appendChild(star);

    }

}
