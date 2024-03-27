var dropdowns = document.querySelectorAll("[data-dropdown]");
var menus = document.querySelectorAll("[data-dropdown-menu]");

dropdowns.forEach(function (dropdown, index) {
  var label = dropdown.querySelector("[data-dropdown-label]");
  var menu = dropdown.querySelector("[data-dropdown-menu]");

  var toggleMenu = function () {
    menu.classList.toggle("is-active");
    menus.forEach(function (menu, menuIndex) {
      if (menuIndex != index) {
        menu.classList.remove("is-active");
      }
    });
  };

  dropdown.addEventListener("click", toggleMenu);
});
