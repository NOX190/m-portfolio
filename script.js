var typed = new Typed("#typed-text", {
      strings: ["Web Developer", "Web Designer", "Freelancer", ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true
    });

    
  const hamburger = document.querySelector("header button");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden"); // show/hide menu

    // Optional: toggle hamburger icon to X
    if (hamburger.textContent === "☰") {
      hamburger.textContent = "✕"; // X mark
    } else {
      hamburger.textContent = "☰"; // Hamburger
    }
  });




