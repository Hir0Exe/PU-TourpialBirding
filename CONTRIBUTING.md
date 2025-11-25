# 🤝 Guía de Contribución - Tourpial Birding

¡Gracias por tu interés en contribuir al proyecto Tourpial Birding! Esta guía te ayudará a realizar cambios y mejoras al sitio web.

---

## 📋 Tabla de Contenidos

1. [Código de Conducta](#código-de-conducta)
2. [Cómo Contribuir](#cómo-contribuir)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Estándares de Código](#estándares-de-código)
5. [Proceso de Pull Request](#proceso-de-pull-request)

---

## 🤝 Código de Conducta

Este proyecto es académico y busca promover un ambiente de aprendizaje respetuoso y colaborativo. Se espera que todos los contribuyentes:

- Sean respetuosos y profesionales
- Acepten críticas constructivas
- Se enfoquen en lo mejor para el proyecto
- Muestren empatía hacia otros miembros del equipo

---

## 🛠️ Cómo Contribuir

### Reportar Bugs

Si encuentras un error:

1. Verifica que no esté ya reportado en [Issues](../../issues)
2. Crea un nuevo Issue con:
   - Título descriptivo
   - Pasos para reproducir el error
   - Comportamiento esperado vs. actual
   - Capturas de pantalla (si aplica)
   - Navegador y dispositivo usado

### Sugerir Mejoras

Para nuevas características:

1. Abre un Issue con el tag `enhancement`
2. Describe claramente la funcionalidad
3. Explica por qué sería útil
4. Si es posible, incluye mockups o ejemplos

### Hacer Cambios

1. **Fork del repositorio**
2. **Crea una rama** para tu cambio:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. **Realiza tus cambios**
4. **Prueba** que todo funcione correctamente
5. **Commit** con un mensaje descriptivo:
   ```bash
   git commit -m "feat: agregar sección de galería de aves"
   ```
6. **Push** a tu fork:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
7. **Crea un Pull Request**

---

## 📁 Estructura del Proyecto

```
PU-TourpialBirding/
│
├── index.html                 # Página principal (HTML semántico)
│
├── css/
│   └── styles.css            # Estilos organizados por secciones
│
├── js/
│   └── main.js               # JavaScript modular y comentado
│
├── assets/
│   ├── logo.svg              # Logo versión navbar
│   ├── logo-large.svg        # Logo versión hero
│   ├── favicon.svg           # Icono del navegador
│   └── *.jpg                 # Imágenes del sitio
│
├── README.md                 # Documentación principal
├── DEPLOYMENT_GUIDE.md       # Guía de despliegue
├── CONTRIBUTING.md           # Esta guía
└── .gitignore                # Archivos ignorados por Git
```

---

## 💻 Estándares de Código

### HTML

- Usa **HTML5 semántico** (`<header>`, `<nav>`, `<section>`, `<article>`, etc.)
- Indentación: **4 espacios**
- Incluye **atributos alt** en todas las imágenes
- Usa **ARIA labels** para accesibilidad
- Valida con [W3C Validator](https://validator.w3.org/)

```html
<!-- ✅ Bien -->
<section class="services" id="servicios">
    <div class="container">
        <h2 class="section-title">Nuestros Servicios</h2>
    </div>
</section>

<!-- ❌ Mal -->
<div class="services">
    <div>
    <h2>Nuestros Servicios</h2>
    </div>
</div>
```

### CSS

- Usa **variables CSS** para colores y valores reutilizables
- Organiza por **secciones** con comentarios claros
- **Mobile-first**: Media queries de menor a mayor
- Nomenclatura **kebab-case**: `.section-title`, `.nav-link`
- Indentación: **4 espacios**

```css
/* ✅ Bien */
.nav-link {
    color: var(--color-gray-dark);
    padding: 0.5rem 1rem;
    transition: var(--transition);
}

.nav-link:hover {
    color: var(--color-primary);
}

/* ❌ Mal */
.navLink{
  color:#4a5568;
  padding:8px 16px;
}
```

### JavaScript

- Usa **JavaScript vanilla** (sin frameworks)
- Nombra variables en **camelCase**: `navToggle`, `backToTop`
- Constantes en **UPPER_SNAKE_CASE** si son globales
- Comenta funciones complejas
- Usa **arrow functions** cuando sea apropiado
- Maneja errores apropiadamente

```javascript
// ✅ Bien
const navToggle = document.getElementById('navToggle');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// ❌ Mal
var nav_toggle = document.getElementById('navToggle');
nav_toggle.onclick = function() {
    document.getElementById('navMenu').className = 'active';
}
```

---

## 🎨 Guía de Estilo Visual

### Colores

Usa siempre las variables CSS definidas:

```css
/* Colores principales */
var(--color-primary)      /* #2E8B57 - Verde Esmeralda */
var(--color-secondary)    /* #F4A300 - Naranja Dorado */
var(--color-white)        /* #FFFFFF */
var(--color-black)        /* #1a1a1a */
```

### Tipografía

- **Títulos**: Merriweather (serif)
- **Cuerpo**: Open Sans (sans-serif)
- **Tamaños**: Usa `rem` en lugar de `px`

### Espaciado

Usa las variables de espaciado:

```css
var(--spacing-xs)   /* 0.5rem */
var(--spacing-sm)   /* 1rem */
var(--spacing-md)   /* 2rem */
var(--spacing-lg)   /* 3rem */
var(--spacing-xl)   /* 4rem */
```

---

## 🔄 Proceso de Pull Request

### Antes de Enviar

1. ✅ Tu código sigue los estándares del proyecto
2. ✅ Has probado en diferentes navegadores (Chrome, Firefox, Safari)
3. ✅ Has probado en dispositivos móviles o con responsive design mode
4. ✅ No hay errores en la consola del navegador
5. ✅ Has actualizado la documentación si es necesario

### Plantilla de Pull Request

```markdown
## Descripción
[Describe brevemente los cambios realizados]

## Tipo de Cambio
- [ ] Bug fix
- [ ] Nueva funcionalidad
- [ ] Mejora de diseño
- [ ] Actualización de documentación
- [ ] Otro (especificar)

## Pruebas Realizadas
- [ ] Probado en Chrome
- [ ] Probado en Firefox
- [ ] Probado en Safari
- [ ] Probado en móvil
- [ ] Validado HTML
- [ ] Sin errores en consola

## Capturas de Pantalla
[Si aplica, agrega imágenes de los cambios]

## Notas Adicionales
[Cualquier información extra relevante]
```

### Revisión

- Un miembro del equipo revisará tu PR
- Pueden solicitar cambios o mejoras
- Una vez aprobado, se hará merge a la rama principal
- Los cambios se desplegarán automáticamente en GitHub Pages

---

## 🧪 Testing

### Checklist de Pruebas

Antes de hacer commit, verifica:

- [ ] **Navegación**: Todos los links funcionan
- [ ] **Responsive**: Se ve bien en móvil, tablet y desktop
- [ ] **Formularios**: Validación funciona correctamente
- [ ] **Animaciones**: Smooth y sin errores
- [ ] **Imágenes**: Todas cargan correctamente
- [ ] **Performance**: Carga rápida (< 3 segundos)
- [ ] **Accesibilidad**: Navegable con teclado
- [ ] **Cross-browser**: Funciona en Chrome, Firefox, Safari, Edge

### Herramientas Útiles

- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- Chrome DevTools (F12)

---

## 📝 Convención de Commits

Usa el formato:

```
tipo(alcance): descripción corta

[cuerpo opcional]
[footer opcional]
```

### Tipos:

- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Formato, punto y coma faltante, etc. (no afecta código)
- `refactor`: Refactorización de código
- `test`: Agregar tests
- `chore`: Cambios en build, herramientas, etc.

### Ejemplos:

```bash
git commit -m "feat(tours): agregar sección de tours disponibles"
git commit -m "fix(navbar): corregir menú móvil en Safari"
git commit -m "docs(readme): actualizar instrucciones de instalación"
git commit -m "style(css): mejorar espaciado en sección valores"
```

---

## 🎯 Áreas de Contribución

### Prioridad Alta 🔴

1. Integración de formulario de contacto funcional
2. Optimización de imágenes (WebP, lazy loading)
3. Implementación de sección de blog
4. Sistema de reservas para tours

### Prioridad Media 🟡

1. Galería de fotos de aves
2. Testimonios de clientes
3. Integración con redes sociales
4. Mapa interactivo de rutas

### Prioridad Baja 🟢

1. Modo oscuro
2. Soporte multiidioma (inglés)
3. Animaciones avanzadas
4. Easter eggs interactivos

---

## 💡 Ideas Bienvenidas

¿Tienes una idea que no está listada? ¡Compártela!

1. Abre un Issue con tag `idea`
2. Describe tu propuesta
3. El equipo la evaluará y te dará feedback

---

## 📞 Contacto del Equipo

Para preguntas sobre contribuciones:

- **Email**: info@tourpialbirding.com
- **GitHub Issues**: [Ver Issues](../../issues)
- **Discusiones**: [Ver Discussions](../../discussions)

---

## 🙏 Agradecimientos

Gracias por contribuir a Tourpial Birding y ayudar a promover el aviturismo sostenible en Norte de Santander.

Cada contribución, por pequeña que sea, hace la diferencia. 🐦✨

---

**¡Feliz coding!** 💚🧡

