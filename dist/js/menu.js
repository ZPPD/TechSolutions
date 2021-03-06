// select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const navItems = document.querySelectorAll(".menu-item");
const menuNav = document.querySelector(".menu-nav");
const loginBtn = document.querySelector(".login-btn");

// set initial state of menu
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    loginBtn.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    // set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    loginBtn.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    // set menu state
    showMenu = false;
  }
}
