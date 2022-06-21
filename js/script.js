window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.Navigation_bar'),
    menuItem = document.querySelectorAll('.Navigation_bar_active'),
    hamburger = document.querySelector('.Hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('Hamburger_active');
        menu.classList.toggle('Navigation_bar_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('Hamburger_active');
            menu.classList.toggle('Navigation_bar_active');
        })
    })
})


