document.addEventListener("DOMContentLoaded", () => {

  // =============================
  // SELECT ELEMENTS
  // =============================
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const themeToggle = document.querySelector(".theme-toggle");
  const body = document.body;
  const typingElement = document.getElementById("typing");

  // =============================
  // HAMBURGER MENU
  // =============================
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  // =============================
  // DARK MODE
  // =============================
  if (themeToggle) {

    // Load saved theme
    if (localStorage.getItem("theme") === "light") {
      body.classList.add("light-mode");
      themeToggle.textContent = "☀️";
    } else {
      themeToggle.textContent = "🌙";
    }

    themeToggle.addEventListener("click", () => {
      body.classList.toggle("light-mode");

      if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "☀️";
      } else {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "🌙";
      }
    });
  }

  // =============================
  // SCROLL REVEAL
  // =============================
  const reveals = document.querySelectorAll(".reveal");

  if (reveals.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));
  }

  // =============================
  // TYPING EFFECT
  // =============================
  if (typingElement) {
    const text = "Computer Science Student Focused on Logic-Driven Solutions";
    let index = 0;

    function type() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 40);
      }
    }

    type();
  }

});