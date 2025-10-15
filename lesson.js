// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const theme = body.classList.contains("dark-mode") ? "dark" : "light";
  toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", theme);
});

// Scroll reveal animation
const sections = document.querySelectorAll("section");
const revealSections = () => {
  const triggerBottom = window.innerHeight * 0.8;
  sections.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;
    if (top < triggerBottom) sec.classList.add("visible");
  });
};

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// Contact form
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Thanks for contacting us! We’ll get back to you soon.");
  e.target.reset();
});
