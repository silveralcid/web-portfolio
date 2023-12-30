// Existing code for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    ariaExpanded();
}

function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// Code to close the mobile menu when a link is clicked
const navLinks = document.querySelectorAll('#cs-navigation a');

navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        // Check if menu is open before toggling
        if (CSbody.classList.contains('cs-open')) {
            toggleMenu();
        }
    });
});

// Existing code for scroll event and dropdown toggle
document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if (scroll >= 100) {
        document.querySelector('body').classList.add('scroll');
    } else {
        document.querySelector('body').classList.remove('scroll');
    }
});

const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
    item.addEventListener('click', () => {
        item.classList.toggle('cs-active');
    });
}
