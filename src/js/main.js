//menu année
var dropdownYears = document.querySelector(".dropdown-years");
var menuYears = document.querySelector(".menu-years");

var toggleMenuYears = function toggleMenuYears() {
  menuYears.classList.toggle("is-active");
};

dropdownYears.addEventListener("click", toggleMenuYears);

//menu année
var dropdown5p = document.querySelector(".dropdown-5p");
var menu5p = document.querySelector(".menu-5p");

var toggleMenu5p = function toggleMenu5p() {
  menu5p.classList.toggle("is-active");
};

dropdown5p.addEventListener("click", toggleMenu5p);
