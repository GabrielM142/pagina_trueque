# Desarrollo

## Requisitos previos
- Node.js ≥ 18 (recomendado 20 LTS)
- npm ≥ 9
- Angular CLI 19: `npm install -g @angular/cli@19` (opcional; el proyecto incluye ng local)

## Instalación
```bash
git clone https://github.com/GabrielM142/pagina_trueque.git
cd pagina_trueque
npm install
```

## Servidor de desarrollo local
```bash
npm start        # alias de ng serve
# Abre http://localhost:4200
```
Los cambios en `src/` recargan el navegador automáticamente.

## Build de producción
```bash
npm run build
# Salida: dist/trueque-meta-site/browser/
```
Verificado: el build pasa con el commit `b7f84a0bc302cf5b5aae35a850afa90215e00630`.

## Build en modo watch (desarrollo)
```bash
npm run watch
# Equivalente a: ng build --watch --configuration development
```

## Lint
No hay script de lint configurado en `package.json`.  
TypeScript en modo strict (`tsconfig.json`) actúa como verificador principal.  
Para habilitar ESLint en el futuro: `ng add @angular-eslint/schematics`.

## Deploy
El deploy es automático en Vercel al hacer push a la rama principal.  
Configuración en `vercel.json`:
- `buildCommand`: `npm run build`
- `outputDirectory`: `dist/trueque-meta-site/browser`
- Rewrite SPA: `/(.*) → /index.html`

## Variables de entorno
No hay variables de entorno en uso actualmente. El número de WhatsApp está hardcodeado en `src/app/app.component.ts`.

## Caché de Angular
El caché de Angular CLI se almacena en `.angular/cache/` (ignorado por git).  
Para limpiarlo: `npx ng cache clean` o borrar manualmente la carpeta.
