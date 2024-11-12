var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
var logoDark = document.getElementById("logo-dark");
var logoLight = document.getElementById("logo-light");
// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
  logoLight.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
  logoDark.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // toggle logos
  logoDark.classList.toggle("hidden");
  logoLight.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

// navbar_menu
document.addEventListener("DOMContentLoaded", function () {
  const collapseToggle = document.querySelector(
    "[data-collapse-toggle='navbar-dropdown']"
  );
  const navbarDropdown = document.getElementById("navbar-dropdown");

  collapseToggle.addEventListener("click", function () {
    navbarDropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", function (event) {
    if (
      !navbarDropdown.contains(event.target) &&
      !collapseToggle.contains(event.target)
    ) {
      navbarDropdown.classList.add("hidden");
    }
  });
});
