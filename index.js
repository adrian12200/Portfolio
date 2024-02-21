document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burgerBtn');
    const curtainMenu = document.getElementById('curtain-menu');
    const header = document.getElementById('header');
    const anchorTags = header.querySelectorAll('a');
    const menu = document.getElementById('menu-list');
    const menuList = menu.querySelectorAll('a');

    // Function to toggle element visibility
    function toggleCurtainMenuVisibility() {
        // Replace 'md' with the desired Tailwind CSS breakpoint
        const isMd = window.matchMedia('(min-width: 768px)').matches;

        // Check if the curtain menu is toggled
        const isToggled = curtainMenu.style.width = "100%";

        // Toggle curtain menu visibility based on the viewport width and toggle state
        if (isMd || isToggled) {
            curtainMenu.style.width = "0";
        } else {
            curtainMenu.style.width = "100%";
        }
    }

    // Burger button click event
    burgerBtn.addEventListener('click', function() {
        const currentWidth = parseFloat(getComputedStyle(curtainMenu).width);

        if (currentWidth === 0) {
            curtainMenu.style.width = "100%";
        } else {
            curtainMenu.style.width = "0%";
        }
    });

    // Close the menu when clicking outside of it
    window.addEventListener('click', function (event) {
        if (!curtainMenu.contains(event.target) && !burgerBtn.contains(event.target) && !header.contains(event.target)) {
            curtainMenu.style.width = "0";
        }
    });

    // Add event listener for changes in viewport width, but only if the curtain menu is toggled
    window.addEventListener('resize', function() {
        if (curtainMenu.style.width = "100%") {
            toggleCurtainMenuVisibility();
        }
    });

    // Function to close the menu when an anchor tag is clicked
    function closeMenuOnClick() {
        curtainMenu.style.width = "0";
    }

    // Add click event listeners to each anchor tag
    anchorTags.forEach(function(anchor) {
        anchor.addEventListener('click', closeMenuOnClick);
    });
});
