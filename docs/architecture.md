# Arquitectura

## Stack tecnológico
| Capa | Tecnología | Versión |
|---|---|---|
| Framework | Angular | 19.2.x |
| Lenguaje | TypeScript | ~5.7.2 |
| Testing | Karma + Jasmine | 6.4.x / 5.6.x |
| Deploy | Vercel | — |
| Estilos | CSS nativo (sin framework) | — |
| Fuentes | Google Fonts (JetBrains Mono, Source Sans 3) | — |

## Estructura de carpetas
```
pagina_trueque/
├── src/
│   ├── app/
│   │   ├── app.component.ts       # lógica del único componente
│   │   ├── app.component.html     # plantilla HTML completa de la landing
│   │   ├── app.component.css      # estilos del componente
│   │   ├── app.component.spec.ts  # tests unitarios con Karma/Jasmine
│   │   ├── app.config.ts          # ApplicationConfig (providers)
│   │   └── app.routes.ts          # rutas (vacías — SPA de una página)
│   ├── main.ts                    # bootstrap de la aplicación
│   ├── index.html                 # HTML raíz
│   └── styles.css                 # estilos globales (reset, variables de fuente)
├── public/
│   └── favicon.ico
├── angular.json                   # configuración del proyecto Angular CLI
├── tsconfig.json                  # base TypeScript
├── tsconfig.app.json              # TypeScript para la app
├── tsconfig.spec.json             # TypeScript para tests
├── vercel.json                    # configuración de deploy Vercel
└── package.json                   # dependencias y scripts npm
```

## Flujo de build
1. `npm run build` invoca `ng build` con configuración de producción.
2. Salida en `dist/trueque-meta-site/browser/` (definido en `angular.json` y `vercel.json`).
3. Vercel sirve la carpeta `dist/trueque-meta-site/browser/` con rewrite SPA `/(.*) → /index.html`.

## Componente principal
`AppComponent` (`src/app/app.component.ts`):
- Clase con un único método: `submitForm(name, email, phone, company, msg)`.
- `submitForm` construye un texto y abre `https://wa.me/593996145553?text=...` en nueva pestaña.
- No usa servicios, no inyecta dependencias, no hace peticiones HTTP.

## Restricciones de bundle
Definidas en `angular.json` bajo `budgets`:
- `initial`: warning 500 kB, error 1 MB.
- `anyComponentStyle`: warning 20 kB, error 30 kB.
