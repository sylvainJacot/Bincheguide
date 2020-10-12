const burger_ic = document.getElementById("burger-menu");
const main_navigation = document.getElementById("main-navigation");

burger_ic.addEventListener('click',togglemenu);
function togglemenu() {
    burger_ic.classList.toggle("burger-active");
    main_navigation.classList.toggle("nav-active")
};