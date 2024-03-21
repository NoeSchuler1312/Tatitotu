var dropdownYears = document.querySelector(".dropdown-years");
var menuYears = document.querySelector(".menu-years");

var toggleMenu = function toggleMenu() {
  menuYears.classList.toggle("is-active");
};

dropdownYears.addEventListener("click", toggleMenu);
