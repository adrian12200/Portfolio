document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burgerBtn');
    const curtainMenu = document.getElementById('curtain-menu');
    const header = document.getElementById('header');
        
    burgerBtn.addEventListener('click', function() {
        curtainMenu.classList.toggle('hidden')
        console.log('opened')
    });

    // Close the menu when clicking outside of it
    window.addEventListener('click', function (event) {
        if (!curtainMenu.contains(event.target) && !burgerBtn.contains(event.target) && !header.contains(event.target)) {
            curtainMenu.classList.add('hidden')
        }
    });

});
