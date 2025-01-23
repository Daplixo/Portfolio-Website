document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const sideMenu = document.getElementById("sideMenu");

    // When the hamburger icon is clicked, toggle the side menu
    menuToggle.addEventListener("click", function () {
        sideMenu.classList.toggle("open"); // Toggle the 'open' class
    });

    // Close the side menu when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            sideMenu.classList.remove("open"); // Remove the 'open' class to hide the menu
        }
    });
});
