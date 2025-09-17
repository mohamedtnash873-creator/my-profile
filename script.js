const profileImg = document.getElementById("profileImg");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const fileInput = document.getElementById("fileInput");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Initialize Particles.js
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});

// Open modal
profileImg.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close modal
function closeModal() {
  modal.style.display = "none";
}

// Password protected change/delete
function promptPassword(action) {
  const pwd = prompt("Enter password to proceed:", "");
  if (pwd === "21114311") {
    if(action === 'delete') deleteImage();
    if(action === 'change') changeImage();
  } else {
    alert("Incorrect password!");
  }
}

// Delete image
function deleteImage() {
  profileImg.src = "";
  modalImg.src = "";
  closeModal();
}

// Change image
function changeImage() {
  fileInput.click();
}

// Upload new image
function uploadImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      profileImg.src = e.target.result;
      modalImg.src = e.target.result;
    }
    reader.readAsDataURL(file);
  }
}

// Theme toggle
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  if (body.classList.contains("light-mode")) {
    themeToggle.className = "fas fa-moon theme-toggle";
  } else {
    themeToggle.className = "fas fa-sun theme-toggle";
  }
});

// Hide cursor after typing animation
const nameElem = document.querySelector('.name');
nameElem.addEventListener('animationend', () => {
  nameElem.style.borderRight = 'none';
});
