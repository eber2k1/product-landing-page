# Product Landing Pages

Este proyecto consiste en la creación de páginas de aterrizaje para un producto (Samsung Galaxy S25 Ultra) utilizando dos enfoques de diseño: **Bootstrap 5.3** y **Tailwind CSS**. El objetivo principal es ofrecer una experiencia de usuario óptima, enfocada en **accesibilidad**, **responsividad** y **usabilidad**.

---

## Estructura General

- **header**: Contiene el `nav` con enlaces principales.  
- **nav**: Organización de enlaces en listas (`ul` / `li`) y uso de `aria-label` para accesibilidad.  
- **main**: Secciones (`section`) con contenido principal, cada una con su `id`.  
- **aside**: Barra lateral para contenido complementario (progreso de compra, filtros, etc.).  
- **footer**: Información de derechos y redes sociales, usando etiquetas semánticas (`p`, `a`).

---

## Páginas del Proyecto

1. **index.html**  
   - Hero Section con imagen y descripción.  
   - Características principales con grid responsive.  
   - Galería de imágenes.  
   - Información de envíos y métodos de pago.  
   - Sección de contacto.

2. **compra.html**  
   - Proceso de compra paso a paso (cards y validación de formularios).  
   - Barra lateral de progreso.  
   - Diseño en grid adaptativo.  
   - Implementación de Bootstrap 5.3.

3. **testimonios.html**  
   - Tarjetas de testimonios en grid.  
   - Sección lateral para filtros y navegación secundaria.  
   - Transiciones suaves en interacciones.

---

## Historias de Usuario

### HU: Menú Hamburguesa Adaptable
*Como usuario móvil, quiero un menú hamburguesa que optimice el espacio y facilite la navegación.*  
- Se aprovecha la navbar de Bootstrap (colapso automático) o se gestiona el toggle con Tailwind en pantallas pequeñas.

### HU: Indicador de Carga y Transiciones Suaves
*Como usuario, quiero recibir feedback visual durante la carga y transición entre páginas, para entender que mi acción está siendo procesada y tener una navegación más fluida.*  
- Indicador de carga (spinner) que se oculta al completarse la carga.  
- Efecto de fade-in / fade-out al cambiar de página.  
- Persistencia de la experiencia y compatibilidad con navegadores modernos.

---

## Implementación con Bootstrap 5.3

- **Layout Grid System** con grid-template-areas y breakpoints (`md`, `lg`).  
- **Componentes**: Cards, List Groups, Navbar responsive, Formularios con validación.  
- **Dark Mode**: `data-bs-theme`, toggle flotante, persistencia en `localStorage`.  
- **Accesibilidad**: ARIA labels, roles semánticos, navegación por teclado.

---

## Implementación con Tailwind CSS

- **Diseño Responsivo**: Clases como `grid`, `md:grid-cols-3`, `container mx-auto`.  
- **Dark Mode**: Clases `dark:`, toggle de tema con `localStorage`.  
- **UI Components**: Cards, botones (`bg-blue-950 text-white`), navegación (`fixed top-0`).  
- **Animaciones y Transiciones**: `hover:scale-105`, `transition-colors`, etc.

---

## Validación y Testing

- **W3C Validator** para HTML y CSS.  
- Pruebas manuales de accesibilidad (uso de teclado, screen readers).  
- Testing de dark mode y responsividad en múltiples dispositivos y navegadores.

---

## Contacto del Autor

- **GitHub**: [github-eber2k1](https://github.com/eber2k1)  
- **Correo**: lit27k@gmail.com
