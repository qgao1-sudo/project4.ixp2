const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id], footer[id]");
const filterBtns = document.querySelectorAll(".filter-btn");
const images = document.querySelectorAll(".hero-img");
const themeCheckbox = document.getElementById("themeCheckbox");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

function updateActiveNav() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href");

    if (href === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
  });
});

let current = 0;

if (images.length > 0) {
  setInterval(() => {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
  }, 3000);
}

if (themeCheckbox) {
  themeCheckbox.addEventListener("change", () => {
    document.body.classList.toggle("dark", themeCheckbox.checked);
  });
}
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    siteNav.classList.toggle("open");
  });

  siteNav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      siteNav.classList.remove("open");
    });
  });
}
function toggleMobileMenu() {
  const nav = document.getElementById("siteNav");
  const btn = document.getElementById("menuToggle");

  if (!nav || !btn) return;

  nav.classList.toggle("mobile-open");
  btn.classList.toggle("active");
}

window.addEventListener("load", () => {
  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");

  if (!menuToggle || !siteNav) return;

  menuToggle.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    siteNav.classList.toggle("open");
    menuToggle.classList.toggle("active");
    console.log("menu clicked", siteNav.className);
  });
});