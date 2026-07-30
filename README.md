# Plásticos Nacionales S.A. — Portal Web

Sitio web estático (HTML5 + CSS3 + JavaScript puro) para el portal interno de **Plásticos Nacionales S.A.**, con dos accesos: **Vendedor** y **Cliente**.

No usa frameworks (sin Bootstrap, React, Angular, Vue ni Tailwind) ni build tools. Se puede abrir directamente en el navegador o subir tal cual a GitHub Pages / cualquier hosting estático.

---

## 📁 Estructura del proyecto

```
Proyecto/
├── index.html          → Pantalla principal (elegir Vendedor o Cliente)
├── vendedor.html        → Menú de herramientas del vendedor (Google Forms)
├── cliente.html          → Catálogos y documentos del cliente (PDFs)
├── css/
│   └── estilos.css      → Todos los estilos y colores del sitio
├── js/
│   └── script.js        → Animaciones (fade-in al hacer scroll)
├── img/
│   └── logo.png         → Logo de la empresa
├── pdf/
│   ├── catalogo1.pdf … catalogo5.pdf
│   ├── brochure.pdf
│   └── certificaciones.pdf
└── README.md
```

---

## ✏️ Cómo editar lo más común

### 1. Cambiar el logo
Reemplaza el archivo `img/logo.png` por el logo real, **usando el mismo nombre**. Se usa automáticamente en las 3 páginas (pantalla principal y barra superior).

### 2. Cambiar los enlaces de Google Forms
Abre `vendedor.html` y busca el bloque `<div class="grid-tarjetas">`. Cada tarjeta es un bloque `<a href="https://forms.google.com/" ...>`. Cambia esa URL por el enlace real de tu formulario de Google. Está señalado con comentarios en el archivo.

### 3. Cambiar los PDF
Reemplaza los archivos dentro de la carpeta `pdf/` manteniendo el mismo nombre (por ejemplo `catalogo1.pdf`), o edita el `href=""` correspondiente en `cliente.html` si prefieres usar otro nombre de archivo o un enlace externo.

### 4. Cambiar colores
Abre `css/estilos.css` y edita las variables al inicio del archivo (sección `:root`):

```css
--azul-corporativo: #0B3A74;
--verde-corporativo: #2DA44E;
```

Estos colores se usan automáticamente en todo el sitio (botones, íconos, hover, franjas decorativas).

### 5. Cambiar títulos, descripciones o íconos de las tarjetas
Cada tarjeta en `vendedor.html` / `cliente.html` tiene esta estructura:

```html
<a href="ENLACE" class="tarjeta">
  <div class="tarjeta__icono"><i class="fa-solid fa-map-location-dot"></i></div>
  <h3 class="tarjeta__titulo">Registrar visita</h3>
  <p class="tarjeta__desc">Descripción corta.</p>
  <span class="tarjeta__enlace">Abrir formulario ...</span>
</a>
```

- Cambia el texto entre `<h3>` y `<p>` para el título y la descripción.
- Cambia la clase del ícono `<i class="fa-solid fa-...">` por cualquier ícono de [Font Awesome](https://fontawesome.com/search).
- Para **agregar** una tarjeta nueva, copia un bloque completo `<a class="tarjeta">...</a>` y pégalo dentro de `<div class="grid-tarjetas">`.
- Para **quitar** una tarjeta, elimina su bloque completo.

### 6. Cambiar la tipografía
El sitio usa **Montserrat** (títulos) y **Poppins** (texto), cargadas desde Google Fonts en el `<head>` de cada página. Para usar solo una de ellas, edita las variables `--fuente-titulos` y `--fuente-texto` en `css/estilos.css`.

### 7. Cambiar la contraseña del portal del vendedor
`vendedor.html` está protegido con una contraseña (por defecto: `vendedorplansa17`). Para cambiarla, abre `js/acceso-vendedor.js` y edita esta línea:

```js
const CLAVE_CORRECTA = "vendedorplansa17";
```

⚠️ **Importante:** como el sitio es estático (sin servidor ni base de datos), esta es una protección ligera pensada para que un visitante casual no entre por error, no seguridad real — cualquier persona con conocimientos técnicos podría ver la contraseña revisando el código fuente de `acceso-vendedor.js`. No la uses para proteger información confidencial. Si necesitas seguridad real (usuarios, roles, etc.), se requiere un backend con autenticación de verdad.

La contraseña se pide **cada vez** que se entra a `vendedor.html` (por URL directa, por el botón Inicio, o por la pestaña "Vendedor" desde el portal del cliente). No se guarda ni se recuerda entre visitas.

### 8. Selector rápido "Vendedor | Cliente"
En la barra superior de `vendedor.html` y `cliente.html` hay un par de pestañas que permiten saltar de un portal a otro sin volver a `index.html`. Están definidas dentro de `<nav class="navbar__tabs">` en cada archivo — no necesitan configuración adicional, ya que cada una solo enlaza a `vendedor.html` o `cliente.html`.

---

## 🚀 Publicar el sitio

### Opción A — GitHub Pages
1. Sube esta carpeta completa a un repositorio de GitHub.
2. Ve a **Settings → Pages**.
3. En "Source" selecciona la rama principal (`main`) y la carpeta raíz (`/`).
4. GitHub te dará una URL pública (ej. `https://tuusuario.github.io/tu-repo/`).

### Opción B — Cualquier hosting estático
Sube todos los archivos y carpetas tal cual están (sin modificar la estructura) a tu servidor o proveedor de hosting (Netlify, Vercel, hosting compartido, etc.). No requiere configuración adicional ni instalación de dependencias.

### Ver el sitio localmente
Simplemente abre `index.html` con doble clic, o usa la extensión **Live Server** de Visual Studio Code para verlo con recarga automática.

---

## 🎨 Créditos técnicos
- Tipografía: [Google Fonts](https://fonts.google.com/) — Montserrat & Poppins
- Íconos: [Font Awesome 6](https://fontawesome.com/)
- Sin dependencias de build (no requiere `npm install`)

---

© Plásticos Nacionales S.A. — Todos los derechos reservados.
