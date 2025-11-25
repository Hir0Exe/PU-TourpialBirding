# 🚀 Guía Rápida de Despliegue en GitHub Pages

Esta guía te ayudará a publicar tu sitio web Tourpial Birding en GitHub Pages en **menos de 10 minutos**.

---

## ⚡ Método 1: Línea de Comandos (Git)

### Paso 1: Inicializar el Repositorio

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
git init
git add .
git commit -m "🎉 Primer commit: Sitio web Tourpial Birding"
```

### Paso 2: Crear el Repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión
2. Haz clic en el **+** en la esquina superior derecha
3. Selecciona **New repository**
4. Configura:
   - **Repository name**: `tourpial-birding` (o el nombre que prefieras)
   - **Description**: "Sitio web de aviturismo en Norte de Santander"
   - **Public** (para que GitHub Pages funcione gratis)
   - ❌ NO inicialices con README, .gitignore ni licencia
5. Haz clic en **Create repository**

### Paso 3: Conectar y Subir

Copia los comandos que GitHub te muestra (algo como):

```bash
git remote add origin https://github.com/TU-USUARIO/tourpial-birding.git
git branch -M main
git push -u origin main
```

### Paso 4: Activar GitHub Pages

1. En tu repositorio, ve a **Settings** (Configuración)
2. En el menú lateral, busca **Pages**
3. En **Source**, selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
4. Haz clic en **Save**

### Paso 5: ¡Listo! 🎉

- Espera 1-5 minutos
- Tu sitio estará en: `https://TU-USUARIO.github.io/tourpial-birding/`
- GitHub te mostrará la URL exacta en la sección Pages

---

## 🖱️ Método 2: GitHub Desktop (Sin Terminal)

### Paso 1: Instalar GitHub Desktop

- Descarga desde: [desktop.github.com](https://desktop.github.com/)
- Instala y inicia sesión con tu cuenta de GitHub

### Paso 2: Agregar el Proyecto

1. Abre GitHub Desktop
2. **File** → **Add local repository**
3. Selecciona la carpeta `PU-TourpialBirding`
4. Si aparece un error, haz clic en **Create a repository**

### Paso 3: Hacer el Primer Commit

1. Verás todos los archivos en la columna izquierda
2. En **Summary**, escribe: "Primer commit"
3. En **Description**, escribe: "Sitio web inicial de Tourpial Birding"
4. Haz clic en **Commit to main**

### Paso 4: Publicar en GitHub

1. Haz clic en **Publish repository** (arriba)
2. Configura:
   - **Name**: tourpial-birding
   - **Description**: Sitio web de aviturismo
   - ❌ Desmarca "Keep this code private" (debe ser público)
3. Haz clic en **Publish Repository**

### Paso 5: Activar GitHub Pages

1. Ve a tu repositorio en GitHub (GitHub Desktop tiene un botón "View on GitHub")
2. Sigue el **Paso 4** del Método 1 (Activar GitHub Pages)

---

## 🌐 Método 3: Subir Directamente en GitHub (Web)

### Paso 1: Crear Repositorio

1. Ve a [github.com](https://github.com)
2. **+** → **New repository**
3. Nombre: `tourpial-birding`
4. **Public**
5. Haz clic en **Create repository**

### Paso 2: Subir Archivos

1. Haz clic en **uploading an existing file**
2. Arrastra TODA la carpeta del proyecto
3. Espera a que suban todos los archivos
4. Escribe un mensaje: "Primer commit"
5. Haz clic en **Commit changes**

### Paso 3: Activar GitHub Pages

- Sigue el **Paso 4** del Método 1

---

## ✅ Verificar que Funciona

1. Ve a la URL de tu sitio: `https://TU-USUARIO.github.io/tourpial-birding/`
2. Deberías ver el sitio web completo
3. Prueba la navegación y el menú móvil

---

## 🔧 Solución de Problemas Comunes

### Problema: El sitio no carga o muestra error 404

**Solución**:
1. Verifica que el archivo `index.html` esté en la raíz del proyecto
2. Espera 5-10 minutos (GitHub Pages tarda en construir)
3. En Settings → Pages, verifica que esté configurado en `main` branch y `/ (root)`

### Problema: Las imágenes no se ven

**Solución**:
1. Verifica que la carpeta `assets/` se haya subido correctamente
2. Revisa que los nombres de archivos coincidan (mayúsculas/minúsculas)
3. Fuerza el caché: Ctrl+F5 (Windows) o Cmd+Shift+R (Mac)

### Problema: El CSS no se aplica

**Solución**:
1. Verifica que la carpeta `css/` se haya subido
2. Revisa la consola del navegador (F12) para ver errores
3. Limpia el caché del navegador

---

## 📝 Actualizar el Sitio

### Con Git:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

### Con GitHub Desktop:

1. Haz tus cambios en los archivos
2. Los verás en la columna izquierda de GitHub Desktop
3. Escribe un mensaje de commit
4. Haz clic en **Commit to main**
5. Haz clic en **Push origin**

### Directamente en GitHub:

1. Ve al repositorio
2. Navega al archivo que quieres editar
3. Haz clic en el icono del lápiz (Edit)
4. Haz los cambios
5. **Commit changes**

---

## 🎨 Personalización Rápida

### Cambiar Información de Contacto

Edita `index.html`, busca la sección `<!-- Contact Section -->` y actualiza:

```html
<a href="mailto:TU-EMAIL@ejemplo.com">TU-EMAIL@ejemplo.com</a>
<a href="tel:+57TUNUMERO">+57 TU NÚMERO</a>
```

### Cambiar Redes Sociales

Busca `.social-links` en `index.html` y actualiza los enlaces:

```html
<a href="https://facebook.com/TUPAGINA" aria-label="Facebook">
<a href="https://instagram.com/TUUSUARIO" aria-label="Instagram">
```

---

## 🌟 Dominio Personalizado (Opcional)

Si tienes un dominio propio (ej: `tourpialbirding.com`):

1. Edita el archivo `CNAME` y pon tu dominio
2. En tu proveedor de dominio, agrega un registro DNS:
   - Tipo: `CNAME`
   - Host: `www` o `@`
   - Valor: `TU-USUARIO.github.io`
3. En GitHub Pages, pon tu dominio en el campo "Custom domain"

---

## 📊 Estadísticas (Opcional)

Para ver cuántas personas visitan tu sitio:

1. Crea una cuenta en [Google Analytics](https://analytics.google.com/)
2. Obtén tu código de seguimiento
3. Agrégalo antes del cierre de `</head>` en `index.html`

---

## 🎓 Tips para la Presentación Universitaria

1. **Muestra el repositorio**: Demuestra el uso de Git y control de versiones
2. **Explica la estructura**: Habla sobre la organización de carpetas
3. **Destaca la responsividad**: Muestra el sitio en móvil y desktop
4. **Menciona las tecnologías**: HTML5, CSS3, JavaScript vanilla
5. **Habla de la paleta de colores**: Basada en el Turpial Toche
6. **Demuestra la accesibilidad**: ARIA labels, navegación por teclado

---

## 📞 ¿Necesitas Ayuda?

- **GitHub Docs**: [docs.github.com/pages](https://docs.github.com/pages)
- **GitHub Community**: [github.community](https://github.community)
- **Stack Overflow**: Busca "github pages" para soluciones

---

## ✨ ¡Éxito con tu Proyecto!

Ahora tienes un sitio web profesional desplegado y listo para presentar. 🎉

**URL de ejemplo**: `https://TU-USUARIO.github.io/tourpial-birding/`

---

**Desarrollado por el equipo de Tourpial Birding** 🐦

