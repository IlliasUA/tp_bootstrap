document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".parallax-header");
    const image = document.querySelector(".image-background");

    if (!header || !image) {
        console.error();
        return;
    }

    function moveBackground() {
        const rect = header.getBoundingClientRect();
        const scrolledInsideHeader = Math.max(0, -rect.top);

        image.style.transform =
            `translate3d(0, ${scrolledInsideHeader * 0.65}px, 0)`;
    }

    window.addEventListener("scroll", moveBackground, {
        passive: true
    });

    moveBackground();
});