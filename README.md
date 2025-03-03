# Product Landing Pages

Este proyecto consiste en la creación de páginas de aterrizaje para un producto (en este caso, el Samsung Galaxy S25 Ultra) utilizando dos enfoques de diseño: uno con Bootstrap 5.3 y otro con Tailwind CSS. Se presta especial atención a la accesibilidad, la responsividad y una experiencia de usuario óptima.

---

## 📌 Estructura del Proyecto

- **header**  
  Contiene el `nav` con los enlaces principales.

- **nav**  
  - Utiliza `aria-label` para mejorar la accesibilidad.  
  - Organización de enlaces mediante listas (`ul` y `li`).

- **main**  
  Contiene el contenido principal de la página, organizado en secciones (`section`) con identificadores (`id`) para una correcta jerarquía y navegación.

- **aside**  
  Barra lateral para contenido complementario y navegación secundaria (por ejemplo, progreso de compra o filtros).

- **section**  
  Bloques temáticos (por ejemplo, artículos en la sección de características).

- **footer**  
  Incluye información de derechos, enlaces a redes sociales y otros datos de contacto, usando etiquetas semánticas como `p` y `a`.

---

## 📱 Páginas del Proyecto

### 1. Página Principal (`index.html`)
- **Hero Section:**  
  Imagen de fondo y descripción destacada del producto.

- **Características Principales:**  
  Sección con grid responsive que resalta las principales características del dispositivo.

- **Galería de Imágenes:**  
  Muestra fotografías del producto en distintos ángulos.

- **Información de Envíos y Métodos de Pago:**  
  Detalla opciones de envío y diversas formas de pago.

- **Sección de Contacto:**  
  Información para contactar a la empresa.

- **Navegación Intuitiva:**  
  Enlaces rápidos para moverse entre secciones.

### 2. Página de Compra (`compra.html`)
- **Proceso de Compra Paso a Paso:**  
  Cada paso (resumen del producto, cálculo de envío, método de pago) está organizado en tarjetas (cards).

- **Formularios Validados:**  
  Formularios con validación y atributos ARIA para mejorar la accesibilidad.

- **Barra Lateral de Progreso:**  
  Muestra el avance en el proceso de compra.

- **Diseño Grid Adaptativo:**  
  Uso de grid layout y breakpoints personalizados para distintos dispositivos.

### 3. Página de Testimonios (`testimonios.html`)
- **Tarjetas de Testimonios:**  
  Diseño responsive que utiliza grid y flexbox para mostrar opiniones de clientes.

- **Sección Lateral Complementaria:**  
  Información adicional o navegación secundaria.

- **Transiciones Suaves:**  
  Efectos en las interacciones para mejorar la experiencia visual.

---

## 🎨 Implementación con Bootstrap 5.3

- **Layout Grid System:**  
  - Uso de grid template areas para un layout responsivo.  
  - Breakpoints personalizados (ej. `md: 768px`).  
  - Contenedores fluidos (`container-fluid`).

- **Componentes:**  
  - **Cards:** Cada paso del proceso de compra se presenta en una tarjeta.  
  - **List Group:** Barra de progreso interactiva.  
  - **Navbar Responsive:** Se utiliza el componente navbar para que el menú se adapte automáticamente en dispositivos móviles sin scripts adicionales.  
  - **Formularios:** Con validación y estilos (`btn-primary`, `btn-success`).

- **Utilidades:**  
  - Flexbox: `d-flex`, `align-items-center`.  
  - Espaciado: `mb-3`, `py-3`, `me-2`.  
  - Posicionamiento: `sticky-top`, `position-fixed`.  
  - Texto: `text-white`, `fw-bold`.

- **Dark Mode:**  
  - Implementación con `data-bs-theme`.  
  - Botón flotante para cambiar de tema.  
  - Persistencia mediante `localStorage` y detección de preferencias del sistema.

- **Accesibilidad:**  
  - Uso de ARIA labels y roles semánticos.  
  - Navegación por teclado y estructura jerárquica con headings.

---

## 🎨 Implementación con Tailwind CSS

- **Diseño Responsivo:**  
  - Uso de clases como `grid md:grid-cols-3`, `flex flex-wrap` y `container mx-auto` para adaptar el layout.

- **Dark Mode:**  
  - Clases `dark:bg-gray-800`, `dark:text-white`, y utilidades para interacciones (`dark:hover:text-blue-200`).  
  - Toggle de tema implementado con `localStorage`.

- **Componentes UI:**  
  - **Cards:** `bg-white rounded-xl shadow-lg`.  
  - **Botones:** `px-4 py-2 bg-blue-950 text-white rounded-lg`.  
  - **Navegación:** `fixed top-0 backdrop-blur-md`.  
  - **Imágenes:** `object-cover object-center`.

- **Animaciones y Transiciones:**  
  - Uso de `transition-transform`, `hover:scale-105`, `transition-colors duration-300`, etc.

- **Utilidades Generales:**  
  - Control de capas (`z-50`), espaciados (`space-x-4`) y manejo de desbordamientos (`overflow-hidden`).

---

## 📖 Historia de Usuario

### HU: Menú Hamburguesa Adaptable para Dispositivos Móviles

*Como usuario que accede desde un dispositivo móvil, quiero que el menú de navegación se transforme en un menú hamburguesa interactivo para optimizar el espacio en pantalla y facilitar la navegación.*

**Criterios de Aceptación:**
- **Detección de Pantalla:**  
  En dispositivos con ancho inferior a 768px, el menú tradicional se oculta y se muestra un botón de menú hamburguesa.

- **Despliegue y Animación:**  
  Al pulsar el botón, se despliega un menú vertical con una animación suave de apertura y se oculta con la misma suavidad al cerrarlo.

- **Accesibilidad:**  
  El menú incluye roles y etiquetas ARIA adecuadas para que pueda ser navegado por teclado y por lectores de pantalla.

- **Compatibilidad:**  
  Se verificará el funcionamiento correcto en múltiples navegadores y dispositivos móviles.

**Implementación:**
- **Con Tailwind CSS:**  
  Se utiliza un botón visible únicamente en pantallas pequeñas (mediante `md:hidden`) y se gestiona la visibilidad del menú con clases de Tailwind y un pequeño script para el toggle.

- **Con Bootstrap 5.3:**  
  Se aprovecha el componente `navbar` con su funcionalidad de colapso (`navbar-toggler` y `collapse navbar-collapse`), eliminando la necesidad de escribir scripts adicionales.

---

## ✅ Validación

- Uso de validadores HTML/CSS (W3C Validator).  
- Revisión manual de etiquetas semánticas y estructura.  
- Pruebas de funcionalidad y dark mode en múltiples navegadores y dispositivos.

---

## 👨‍💻 Información de Contacto del Autor

- **GitHub:** [github-eber2k1](https://github.com/eber2k1)  
- **Correo:** lit27k@gmail.com