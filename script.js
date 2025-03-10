document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const goToTopButton = document.getElementById("go-to-top");

    // Apply dark mode if previously enabled
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "Light Mode";
    }

    // Toggle dark mode
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            toggleButton.textContent = "Light Mode";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            toggleButton.textContent = "Dark Mode";
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Show "Go to Top" button when scrolling down
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            goToTopButton.classList.add("visible");
        } else {
            goToTopButton.classList.remove("visible");
        }
    });

    // Smooth scroll to top
    goToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
