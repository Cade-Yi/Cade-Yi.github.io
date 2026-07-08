const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const backToTopButton = document.querySelector(".back-to-top");

function setActiveLink() {
  let currentSection = null;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120) {
      currentSection = section;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      currentSection && link.getAttribute("href") === `#${currentSection.id}`
    );
  });
}

function toggleBackToTop() {
  backToTopButton.classList.toggle("visible", window.scrollY > 500);
}

window.addEventListener("scroll", () => {
  setActiveLink();
  toggleBackToTop();
});

window.addEventListener("load", () => {
  setActiveLink();
  toggleBackToTop();
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
