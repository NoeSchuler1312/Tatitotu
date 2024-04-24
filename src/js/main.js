// Top nav
var dropdowns = document.querySelectorAll("[data-dropdown]");
var menus = document.querySelectorAll("[data-dropdown-menu]");
var submenus = document.querySelectorAll("[data-dropdown-submenu]");

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

// Tense buttons
var toggleColors = document.querySelectorAll(".button-tense");

toggleColors.forEach(function (toggleColor) {
  toggleColor.addEventListener("click", function () {
    toggleColor.classList.toggle("is-active");
  });
});

// // Dropdown lists
// var dropdownButtons = document.querySelector("[dara-dropdown-button");
// var lists = document.querySelector("[dara-dropdown-list");

// dropdownButtons.forEach(function (list, index) {
//   var label = list.querySelector("[data-dropdown-label]");
//   var dropdownMenu = list.querySelector("[data-dropdown-list]");

//   var toggleMenu = function () {
//     dropdownMenu.classList.toggle("is-active");
//     lsits.forEach(function (dropdownMenu, dropdownMenuIndex) {
//       if (dropdownMenuIndex != index) {
//         dropdownMenu.classList.remove("is-active");
//       }
//     });
//   };

//   list.addEventListener("click", toggleMenu);
// });

// Help buttons
var helpButtons = document.querySelectorAll("[data-button-help]");
var helps = document.querySelectorAll("[data-help-tense]");

helpButtons.forEach(function (helpButton, index) {
  var help = helpButton.querySelector("[data-help-tense]");
  console.log(help);

  var toggleHelp = function () {
    help.classList.toggle("is-active");
    helps.forEach(function (help, helpIndex) {
      if (helpIndex != index) {
        help.classList.remove("is-active");
      }
    });
  };

  helpButton.addEventListener("click", toggleHelp);
});
