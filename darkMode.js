document.addEventListener("DOMContentLoaded", function () {
  const modeToggle = document.getElementById("modeToggle");

  // Check the user's preference in localStorage
  const isDarkMode = localStorage.getItem("darkMode") === "true";

  // Set the initial state based on the user's preference
  modeToggle.checked = isDarkMode;
  updateDarkMode(isDarkMode);
});

function toggleDarkMode() {
  const modeToggle = document.getElementById("modeToggle");
  const isDarkMode = modeToggle.checked;

  // Save the user's preference in localStorage
  localStorage.setItem("darkMode", isDarkMode);
  var images = document.querySelectorAll('.mode-image');
  images.forEach(function(image) {
   
    var currentSrc = image.getAttribute('src');
    var newSrc = isDarkMode ? currentSrc.replace('l', 'd') : currentSrc.replace('d', 'l');
    image.setAttribute('src', newSrc);
  
  });
  updateDarkMode(isDarkMode);
}

function updateDarkMode(isDarkMode) {
  var images = document.querySelectorAll('.mode-image');
  images.forEach(function(image) {
   
    var currentSrc = image.getAttribute('src');
    var newSrc = isDarkMode ? currentSrc.replace('l', 'd') : currentSrc.replace('d', 'l');
    image.setAttribute('src', newSrc);
  
  });
  const body = document.body;
  body.classList.toggle("dark-mode", isDarkMode);

}
