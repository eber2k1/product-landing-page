# PRODUCT LANDING PAGES

## 📌 Estructura

```
header → Contiene el nav con enlaces principales.

nav → Uso de aria-label para mejorar la accesibilidad y Organización con ul y li.

main → Contiene el contenido principal de la página, asegurando una correcta jerarquía y accesibilidad y Secciones estructuradas con section e id.

aside → Barra lateral para contenido complementario y navegación secundaria (progreso de compra y filtros).

section → Bloques temáticos (article en características).

footer → Usa etiquetas p y a correctamente para contenido textual e hipervínculos y Derechos y redes sociales.
```

## 📱 Páginas del Proyecto

### 1. Página Principal (index.html)
- Hero section con imagen y descripción del producto
- Sección de características principales con grid responsive
- Galería de imágenes del producto
- Información de envíos y métodos de pago
- Sección de contacto
- Navegación intuitiva entre secciones

### 2. Página de Compra (compra.html)
- Proceso de compra paso a paso
- Formularios validados para información de envío
- Selector de método de pago
- Barra lateral de progreso interactiva
- Diseño grid adaptativo
- Formularios accesibles con ARIA labels

### 3. Página de Testimonios (testimonios.html)
- Grid de tarjetas de testimonios
- Diseño responsive con grid y flexbox
- Sección lateral complementaria
- Transiciones suaves en interacciones

## 🎨 Implementación Tailwind CSS

### Diseño Responsivo
- `grid md:grid-cols-3` - Layout principal
- `flex flex-wrap` - Navegación adaptativa
- `md:flex-row` - Cambios de dirección en diferentes breakpoints
- `container mx-auto` - Contenedores responsivos

### Dark Mode
- `dark:bg-gray-800` - Fondos oscuros
- `dark:text-white` - Texto en modo oscuro
- `dark:hover:text-blue-200` - Interacciones en modo oscuro
- Toggle theme con `localStorage`

### Componentes UI
- Cards: `bg-white rounded-xl shadow-lg`
- Buttons: `px-4 py-2 bg-blue-950 text-white rounded-lg`
- Navigation: `fixed top-0 backdrop-blur-md`
- Images: `object-cover object-center`

### Animaciones y Transiciones
- `transform transition-transform hover:scale-105`
- `transition-colors duration-300`
- `hover:shadow-xl`
- `hover:-translate-y-1`

### Utilidades
- `z-50` - Control de capas
- `space-x-4` - Espaciado consistente
- `overflow-hidden` - Control de contenido
- `opacity-70` - Efectos visuales

## ✅ Validación

✔ Uso de validadores HTML/CSS (W3C Validator)
✔ Revisión manual de etiquetas semánticas
✔ Testing de funcionalidad Dark Mode en múltiples navegadores

## 👨‍💻 Información de Contacto del Autor
- **github-eber2k1** - [GitHub](https://github.com/eber2k1)
- 📧 Correo: lit27k@gmail.com

---