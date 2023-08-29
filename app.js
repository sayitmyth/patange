// the preloader

document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.querySelector(".preloader");
    const content = document.querySelector(".content");
    const progressBar = document.querySelector(".progress-bar");

    let progress = 0;
    const animationDuration = 2000; // Animation duration in milliseconds

    const interval = setInterval(function () {
        progress += 1;
        progressBar.value = progress;

        if (progress >= 100) {
            clearInterval(interval);

            // Hide the preloader and show the main content
            preloader.style.display = "none";
            content.style.display = "block";
        }
    }, animationDuration / 100);
});


