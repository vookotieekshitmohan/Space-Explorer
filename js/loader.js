/* ==========================================
   SPACE EXPLORER
   Loader Animation
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.transition = "opacity 0.8s ease";

    }, 1500);

});
