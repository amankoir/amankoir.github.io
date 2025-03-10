document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const goToTopButton = document.getElementById("go-to-top");

    // Ensure localStorage saves dark mode preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleSwitch.checked = true; // Ensure switch position matches state
    }

    // Toggle dark mode with switch
    toggleSwitch.addEventListener("change", function () {
        if (toggleSwitch.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("dark-mode", "enabled");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const goToTopButton = document.getElementById("go-to-top");

    // Show button when scrolling down
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {  // Show only after scrolling 300px
            goToTopButton.classList.add("visible");
        } else {
            goToTopButton.classList.remove("visible");
        }
    });
});
