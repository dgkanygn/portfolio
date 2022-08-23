var darkModeCheck = false;
var wrapper = document.getElementById("wrapper");
var button = document.getElementById("dark");

var color = "rgb(0, 43, 67)";

wrapper.style.backgroundColor = localStorage.getItem("dark");

if (!darkModeCheck) {
  darkModeCheck = localStorage.getItem("darkModeCheck");
}

function darkMode() {
  darkModeCheck = !darkModeCheck;

  if (darkModeCheck) {
    localStorage.setItem("dark", color);
    localStorage.setItem("darkModeCheck", darkModeCheck);
    wrapper.style.backgroundColor = color;
  } else {
    localStorage.removeItem("dark");
    localStorage.removeItem("darkModeCheck");
    wrapper.style.backgroundColor = "white";
  }
}

button.addEventListener("click", darkMode);
