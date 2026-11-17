# Jalber

Primera versión local: React + Vite + Tailwind. Catálogo conceptual, sin pagos ni pedidos.

## Iniciar

Con Node.js 22 disponible:

```powershell
npm install
npm run dev
```

En este equipo también se incluye Node portátil en `.tools/node-v22.16.0-win-x64`. Ejecuta `./iniciar.ps1` para usarlo. La vista previa abre en http://127.0.0.1:5173.

## Editar

- `src/data.js`: nombre, texto de marca, productos, precios, colores, tallas, imágenes y enlaces de contacto.
- `src/style.css`: identidad visual y comportamiento responsive.
- `public/images/`: imágenes locales. Los SVG son ilustraciones conceptuales, no fotografías de prendas reales. Sustituye la ruta de cada producto al contar con fotografías.
- Fotografía ambiental: Unsplash, https://images.unsplash.com/photo-1516483638261-f4dbaf036963 (archivo local descargado desde images.unsplash.com). No representa un local de la marca.

El carrito persiste en localStorage bajo `alberto-cart-v1`. El checkout está deshabilitado y señalado como pendiente de conectar. Contacto, Instagram y políticas muestran su estado pendiente hasta editar los datos. Los precios no representan una oferta comercial.

`npm run build` genera `dist/`. `npm run preview` sirve ese resultado.

## Dirección editorial Vol. 01

Portada de moda en blanco y negro, logotipo de gran formato y sección de atmósfera mediterránea. La fotografía editorial es una referencia de estilo; no representa prendas del catálogo ni una campaña propia. Fuente: https://images.unsplash.com/photo-1617137968427-85924c800a22. Se cambia desde `brand.editorial` en `src/data.js`.

Validación: compilación de producción y comprobación en Chrome de filtros, talla requerida, color, cantidades, totales, persistencia, eliminación, navegación móvil y ausencia de desbordamiento horizontal.

## Publicación en GitHub Pages

Sitio público: https://albertonicop.github.io/jalber/
Repositorio: https://github.com/albertonicop/jalber

La rama `main` conserva el código fuente. GitHub Pages publica la raíz de `gh-pages`, que contiene la compilación y `.nojekyll`.

Para compilar con las rutas públicas correctas en PowerShell:

```powershell
$env:GITHUB_PAGES = 'true'
npm run build
```

Publica el contenido de `dist/` en la rama `gh-pages` para actualizar el sitio. Los cambios solo en `main` no actualizan la web. Para volver al modo local, elimina la variable con `Remove-Item Env:GITHUB_PAGES`.
