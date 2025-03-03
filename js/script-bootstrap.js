// Media query para cambiar el layout en pantallas pequeñas
function updateGridLayout() {
    if (window.innerWidth < 768) { // Tamaño de tablet hacia abajo (Bootstrap md breakpoint)
        document.body.style.gridTemplateAreas = 
            "'header header header'" +
            "'aside aside aside'" +
            "'main main main'" +
            "'footer footer footer'";
    } else {
        document.body.style.gridTemplateAreas = 
            "'header header header'" +
            "'aside main main'" +
            "'footer footer footer'";
    }
}

// Ejecutar al cargar la página y cuando cambie el tamaño de la ventana
window.addEventListener('load', updateGridLayout);
window.addEventListener('resize', updateGridLayout);

// Dark mode toggle functionality
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("theme-toggle");
    const darkIcon = document.getElementById("dark-icon");
    const lightIcon = document.getElementById("light-icon");
    const html = document.documentElement;
    
    // Check system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        html.setAttribute('data-bs-theme', 'dark');
        darkIcon.classList.add('d-none');
        lightIcon.classList.remove('d-none');
    }
    
    // Check saved preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        html.setAttribute('data-bs-theme', 'dark');
        darkIcon.classList.add('d-none');
        lightIcon.classList.remove('d-none');
    } else if (savedTheme === "light") {
        html.setAttribute('data-bs-theme', 'light');
        darkIcon.classList.remove('d-none');
        lightIcon.classList.add('d-none');
    }
    
    // Toggle theme
    toggleButton.addEventListener("click", () => {
        if (html.getAttribute('data-bs-theme') === 'dark') {
            html.setAttribute('data-bs-theme', 'light');
            darkIcon.classList.remove('d-none');
            lightIcon.classList.add('d-none');
            localStorage.setItem("theme", "light");
        } else {
            html.setAttribute('data-bs-theme', 'dark');
            darkIcon.classList.add('d-none');
            lightIcon.classList.remove('d-none');
            localStorage.setItem("theme", "dark");
        }
    });
});