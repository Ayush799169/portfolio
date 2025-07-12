<script>
  
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
     const current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });
  </script>