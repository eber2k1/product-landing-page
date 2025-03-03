document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("theme-toggle");
    const html = document.documentElement;
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Abrir menú mobile
    mobileMenuButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });

    // Cerrar menú mobile al hacer click en una opción
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });

    // Dark mode toggle functionality
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      html.classList.add("dark");
    }
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      html.classList.add("dark");
    } else if (savedTheme === "light") {
      html.classList.remove("dark");
    }
    toggleButton.addEventListener("click", () => {
      if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    });

    // Transiciones suaves entre páginas: Interceptar clics en enlaces que navegan a otra página
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      // Evitar interceptar enlaces de anclaje
      if (href && !href.startsWith('#') && (href.endsWith('.html') || href.startsWith('./') || href.startsWith('/'))) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          // Aplicar fade-out al body
          document.body.classList.add('opacity-0');
          setTimeout(() => {
            window.location.href = href;
          }, 500);
        });
      }
    });
  });

  // Ocultar el indicador de carga una vez que la página se haya cargado
  window.addEventListener('load', () => {
    const loader = document.getElementById('loading-indicator');
    loader.classList.add('opacity-0');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  });