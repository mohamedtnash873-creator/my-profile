const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Particles.js
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded');
});

// Theme toggle
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  if (body.classList.contains("light-mode")) {
    themeToggle.className = "fas fa-moon theme-toggle";
  } else {
    themeToggle.className = "fas fa-sun theme-toggle";
  }
});
