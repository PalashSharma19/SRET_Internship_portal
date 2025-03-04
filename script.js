document.addEventListener("DOMContentLoaded", function () {
    const aboutCard = document.querySelector(".about-card");
    const paragraphs = document.querySelectorAll(".fade-in");
    const aboutTag = document.querySelector(".about-tag");

    // Animate the about card
    setTimeout(() => {
        aboutCard.style.transition = "all 1s ease-out";
        aboutCard.style.opacity = "1";
        aboutCard.style.transform = "translateY(0)";
    }, 500);

    // Animate each paragraph with delay
    paragraphs.forEach((p, index) => {
        setTimeout(() => {
            p.style.animation = "fadeSlideUp 1s ease-out forwards";
        }, 800 + index * 300);
    });

    // Show the red "About Us" tag with delay
    setTimeout(() => {
        aboutTag.style.transform = "translateX(0)";
        aboutTag.style.opacity = "1";
    }, 700);
});
