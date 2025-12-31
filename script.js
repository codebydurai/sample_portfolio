// ================================
// REUSABLE FUNCTION
// ================================
function showMessage(element, message, color = "red") {
  element.textContent = message;
  element.style.color = color;
  element.style.fontSize = "14px";
}

// ================================
// FORM VALIDATION
// ================================
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Create error message elements dynamically
const errorMsg = document.createElement("p");
form.appendChild(errorMsg);

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop form submission

  if (nameInput.value.trim() === "") {
    showMessage(errorMsg, "❌ Name is required");
    return;
  }

  if (!emailInput.value.includes("@")) {
    showMessage(errorMsg, "❌ Enter a valid email");
    return;
  }

  if (messageInput.value.trim().length < 10) {
    showMessage(errorMsg, "❌ Message must be at least 10 characters");
    return;
  }

  showMessage(errorMsg, "✅ Message sent successfully!", "lightgreen");
  form.reset();
});

// ================================
// INTERACTIVE FEATURE 1
// SKILLS HOVER CLICK EFFECT
// ================================
const skills = document.querySelectorAll("#skills li");

skills.forEach(skill => {
  skill.addEventListener("click", () => {
    alert(`You clicked on skill: ${skill.textContent}`);
  });
});

// ================================
// INTERACTIVE FEATURE 2
// DYNAMIC HEADER TEXT
// ================================
const headerTitle = document.querySelector("header h1");

headerTitle.addEventListener("mouseenter", () => {
  headerTitle.textContent = "👋 Welcome to My Portfolio";
});

headerTitle.addEventListener("mouseleave", () => {
  headerTitle.textContent = "My Portfolioooo😊"
});

// ================================
// INTERACTIVE FEATURE 3
// SCROLL BACKGROUND CHANGE
// ================================
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    document.body.style.background =
      "linear-gradient(-45deg, #1a2a6c, #b21f1f, #fdbb2d)";
  }
});

// ================================
// INTERACTIVE FEATURE 4 (BONUS)
// PROFILE IMAGE CLICK EFFECT
// ================================
const profileImg = document.querySelector("#about img");

profileImg.addEventListener("click", () => {
  profileImg.style.transform = "scale(1.2)";
  setTimeout(() => {
    profileImg.style.transform = "scale(1)";
  }, 500);
});

