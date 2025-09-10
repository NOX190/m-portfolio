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


//   <header id="main-header" class="fixed top-0 w-full bg-black z-50 transition-transform duration-500">
//   <!-- logo + nav -->
// </header>


let lastScroll = 0;
const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;
  if (currentScroll > lastScroll) {
    // scroll down → hide
    header.style.transform = "translateY(-100%)";
  } else {
    // scroll up → show
    header.style.transform = "translateY(0)";
  }
  lastScroll = currentScroll;
});

