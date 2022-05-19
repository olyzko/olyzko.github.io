window.addEventListener("DOMContentLoaded", e => {
    document.querySelectorAll(".fading-slideshow > li").forEach(
        c => c.addEventListener("animationend", e => e.target.parentNode.appendChild(e.target))
    );
});