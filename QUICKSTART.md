# ⚡ Inicio Rápido - Tourpial Birding

Guía express para comenzar a trabajar con el proyecto en **5 minutos**.

---

## 🎯 Para Miembros del Equipo

### 1️⃣ Clonar el Repositorio

```bash
git clone https://github.com/TU-USUARIO/tourpial-birding.git
cd tourpial-birding
```

### 2️⃣ Abrir el Proyecto

Simplemente abre `index.html` en tu navegador favorito:

- **Windows**: Doble clic en `index.html`
- **Mac**: Doble clic en `index.html`
- **Linux**: `xdg-open index.html`

O usa un servidor local (recomendado):

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes instalado)
npx http-server
```

Luego abre: `http://localhost:8000`

### 3️⃣ Hacer Cambios

1. Edita los archivos en tu editor favorito (VS Code, Sublime, etc.)
2. Guarda los cambios
3. Recarga el navegador (F5)
4. ¡Listo!

---

## 📂 Archivos Principales

| Archivo | Descripción | Cuándo Editar |
|---------|-------------|---------------|
| `index.html` | Contenido del sitio | Para cambiar textos, secciones |
| `css/styles.css` | Estilos visuales | Para cambiar colores, diseño |
| `js/main.js` | Funcionalidades | Para agregar interactividad |
| `assets/` | Imágenes y logos | Para reemplazar imágenes |

---

## 🎨 Cambios Comunes

### Cambiar un Texto

1. Abre `index.html`
2. Busca el texto que quieres cambiar (Ctrl+F)
3. Modifica el texto
4. Guarda y recarga

### Cambiar un Color

1. Abre `css/styles.css`
2. Busca la sección `:root` al inicio
3. Cambia el valor del color:
   ```css
   --color-primary: #TU_COLOR;
   ```
4. Guarda y recarga

### Agregar una Imagen

1. Guarda tu imagen en la carpeta `assets/`
2. En `index.html`, encuentra dónde quieres la imagen
3. Actualiza el `src`:
   ```html
   <img src="assets/tu-imagen.jpg" alt="Descripción">
   ```
4. Guarda y recarga

---

## 🚀 Subir Cambios a GitHub

### Método Fácil (GitHub Desktop)

1. Abre GitHub Desktop
2. Verás tus cambios en la columna izquierda
3. Escribe un mensaje describiendo qué cambiaste
4. Clic en "Commit to main"
5. Clic en "Push origin"
6. ¡Listo! GitHub Pages se actualiza automáticamente

### Método Terminal

```bash
# Ver qué archivos cambiaron
git status

# Agregar todos los cambios
git add .

# Hacer commit con mensaje descriptivo
git commit -m "Descripción de tus cambios"

# Subir a GitHub
git push

# Ver el estado
git status
```

---

## 🔍 Estructura Visual

```
PU-TourpialBirding/
│
├── 📄 index.html          ← Página principal (EDITA AQUÍ para contenido)
│
├── 📁 css/
│   └── 🎨 styles.css      ← Estilos (EDITA AQUÍ para diseño)
│
├── 📁 js/
│   └── ⚡ main.js         ← JavaScript (EDITA AQUÍ para funciones)
│
├── 📁 assets/             ← Imágenes (AGREGA AQUÍ tus fotos)
│   ├── logo.svg
│   ├── turpial.jpg
│   └── ...
│
└── 📚 Documentación
    ├── README.md          ← Info general del proyecto
    ├── DEPLOYMENT_GUIDE.md ← Cómo publicar en GitHub Pages
    └── CONTRIBUTING.md    ← Guía para contribuir
```

---

## 🛠️ Herramientas Recomendadas

### Editor de Código

- [Visual Studio Code](https://code.visualstudio.com/) (Gratis, muy popular)
- [Sublime Text](https://www.sublimetext.com/)
- [Atom](https://atom.io/)

### Extensiones Útiles para VS Code

- **Live Server**: Recarga automática al guardar
- **Prettier**: Formatea tu código automáticamente
- **Color Highlight**: Muestra colores en el código
- **Auto Rename Tag**: Renombra etiquetas HTML automáticamente

### Navegadores para Probar

- Chrome (Principal)
- Firefox
- Safari (Mac)
- Edge

---

## ✅ Checklist Antes de Hacer Commit

- [ ] El sitio se ve bien en el navegador
- [ ] No hay errores en la consola (F12)
- [ ] Probé en móvil (o con responsive mode)
- [ ] El código está limpio y comentado
- [ ] Escribí un buen mensaje de commit

---

## 🆘 Problemas Comunes

### "No veo mis cambios"

**Solución**: Fuerza la recarga del navegador
- Windows: `Ctrl + F5`
- Mac: `Cmd + Shift + R`

### "Git dice que tengo conflictos"

**Solución**:
```bash
# Obtener últimos cambios
git pull

# Si hay conflictos, Git te dirá qué archivos
# Abre esos archivos y busca:
<<<<<<< HEAD
tu código
=======
código de otro
>>>>>>> rama

# Decide qué código mantener, elimina las marcas
# Luego:
git add .
git commit -m "Resolver conflictos"
git push
```

### "El sitio no se ve en GitHub Pages"

**Solución**:
1. Espera 5 minutos (tarda en construir)
2. Verifica Settings → Pages → Source está en `main` branch
3. Limpia caché del navegador
4. Revisa que `index.html` esté en la raíz

---

## 🎓 Comandos Git Esenciales

```bash
# Ver estado actual
git status

# Ver historial de commits
git log --oneline

# Descargar últimos cambios
git pull

# Crear nueva rama
git checkout -b mi-nueva-rama

# Cambiar de rama
git checkout main

# Ver todas las ramas
git branch

# Deshacer cambios no guardados
git checkout -- archivo.html

# Ver diferencias
git diff
```

---

## 📞 ¿Necesitas Ayuda?

1. **Consulta la documentación completa**: `README.md`
2. **Guía de despliegue**: `DEPLOYMENT_GUIDE.md`
3. **Pregunta al equipo**: Crea un Issue en GitHub
4. **Busca en Google**: "github pages [tu problema]"

---

## 🎯 Tareas Comunes

### Agregar una Nueva Sección

1. Abre `index.html`
2. Busca una sección similar (ej: `<!-- Values Section -->`)
3. Copia y pega debajo
4. Cambia el contenido
5. Actualiza CSS si necesitas estilos especiales

### Cambiar el Logo

1. Guarda tu nuevo logo como `assets/logo.svg`
2. Asegúrate que tenga el mismo nombre
3. Recarga la página
4. Si no funciona, limpia caché (Ctrl+F5)

### Actualizar Información de Contacto

1. Abre `index.html`
2. Busca `<!-- Contact Section -->`
3. Actualiza email, teléfono, redes sociales
4. Guarda y recarga

---

## 🚀 Siguiente Paso

Una vez que hayas hecho tus primeros cambios:

1. Lee `DEPLOYMENT_GUIDE.md` para publicar
2. Lee `CONTRIBUTING.md` para mejores prácticas
3. Experimenta y aprende

---

## 💡 Tips Pro

- 💾 **Guarda frecuentemente**: Ctrl+S es tu amigo
- 🔍 **Usa la consola**: F12 para ver errores
- 📱 **Prueba en móvil**: Usa responsive mode (F12)
- 🎨 **Inspiración**: Busca sitios similares para ideas
- 📚 **Aprende**: W3Schools, MDN Web Docs son excelentes recursos

---

## 🎉 ¡Todo Listo!

Ya estás preparado para trabajar en el proyecto. Si tienes dudas, pregunta al equipo.

**¡Manos a la obra!** 💪🐦

---

**Tourpial Birding - Proyecto Universitario 2024**

