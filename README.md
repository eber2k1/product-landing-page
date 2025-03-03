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

#### 🎨 Implementación Bootstrap
- **Layout Grid System**
  - Grid template areas para layout responsivo
  - Breakpoints personalizados (md: 768px)
  - Contenedores fluidos con `container-fluid`

- **Componentes**
  - Cards para cada paso del proceso
  - List group para barra de progreso
  - Navbar responsive con Bootstrap
  - Formularios con validación
  - Botones estilizados (`btn-primary`, `btn-success`)

- **Utilidades**
  - Flexbox: `d-flex`, `align-items-center`
  - Espaciado: `mb-3`, `py-3`, `me-2`
  - Posicionamiento: `sticky-top`, `position-fixed`
  - Texto: `text-white`, `fw-bold`

- **Dark Mode**
  - Implementación con `data-bs-theme`
  - Toggle button flotante
  - Persistencia con localStorage
  - Detección de preferencias del sistema

- **Accesibilidad**
  - ARIA labels en elementos interactivos
  - Roles semánticos
  - Estructura jerárquica con headings
  - Navegación por teclado

### 3. Página de Testimonios (testimonios.html)
- Grid de tarjetas de testimonios
- Diseño responsive con grid y flexbox
- Sección lateral complementaria
- Transiciones suaves en interacciones

## 🎨 Características Comunes
- Modo Oscuro/Claro con variables CSS
- Diseño totalmente responsive
- Menú de navegación adaptativo
- Accesibilidad mejorada con ARIA
- Transiciones y animaciones suaves
- Sistema de grid y flexbox para layouts
- Paleta de colores consistente

## 🔍 Prompt Usado
```
Implementar un Modo Oscuro (Dark Mode) con variables CSS
```


## ✅ Validación

✔ Uso de validadores HTML/CSS (W3C Validator)
✔ Revisión manual de etiquetas semánticas
✔ Testing de funcionalidad Dark Mode en múltiples navegadores

## 👨‍💻 Información de Contacto del Autor
- **github-eber2k1** - [GitHub](https://github.com/eber2k1)
- 📧 Correo: lit27k@gmail.com

---