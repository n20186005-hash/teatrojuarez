# Teatro Juárez · Guanajuato

Micrositio editorial en español dedicado al Teatro Juárez de Guanajuato, diseñado específicamente alrededor de su arquitectura ecléctica, su pórtico neoclásico y su sala neo-mudéjar.

## Stack

- Astro 7.3.2
- TypeScript 6.0.3
- Tailwind CSS 4.3.3 mediante `@tailwindcss/vite`
- pnpm 12.3.4
- Node.js 24.21.0 LTS
- Cloudflare Workers static assets mediante Wrangler 4.130.0

No usa base de datos, autenticación ni CMS.

## Desarrollo

```bash
corepack enable
pnpm install
pnpm check
pnpm build
pnpm dev
```

## Cloudflare

El proyecto genera un sitio estático en `dist/`. `wrangler.jsonc` publica esa carpeta como static assets.

```bash
pnpm deploy
```

## Contenido incluido

- Página principal en español
- Historia y arquitectura
- Galería de fotografías reales
- Datos prácticos y Google Maps embebido
- JSON-LD `PerformingArtsTheater` + `TouristAttraction`
- Aviso de sitio no oficial
- Privacidad, términos, cookies y créditos
- Favicon SVG
- Configuración Astro / TypeScript / Wrangler
- Lista detallada de fuentes fotográficas en `IMAGE_SOURCES.md`

## Fuentes históricas principales

- Instituto Estatal de la Cultura de Guanajuato: https://cultura.guanajuato.gob.mx/index.php/teatro-juarez/
- Catálogo Nacional de Monumentos Históricos (INAH): https://catalogonacionalmhi.inah.gob.mx/consulta_publica/detalle/11300
- INAH, fotogalería del Teatro Juárez (2026): https://www.inah.gob.mx/foto-del-dia/teatro-juarez-de-guanajuato

## Nota sobre esta entrega

El entorno utilizado para preparar este ZIP no tuvo acceso saliente al registro de npm ni a los binarios de Wikimedia Commons. Por ello no fue posible generar un `pnpm-lock.yaml` verificable, ejecutar una instalación fresca ni descargar los JPG dentro de `public/images`. El código usa temporalmente las URLs de Wikimedia para que las fotografías sean reales y visibles en un entorno con Internet. Consulta `IMAGE_SOURCES.md` para localizarlas manualmente.

No se declara que `pnpm install --frozen-lockfile`, `astro check` o `astro build` hayan pasado en este entorno.
