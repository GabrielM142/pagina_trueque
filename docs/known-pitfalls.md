# Trampas conocidas

## Tests del scaffold desactualizados
**Problema**: `src/app/app.component.spec.ts` contiene los tres tests generados por Angular CLI que asumen:
- Una propiedad `title = 'trueque-meta-site'` en `AppComponent`.
- Un `<h1>Hello, trueque-meta-site</h1>` en el template.

Ninguna de estas dos cosas existe en la implementación real. Los tests **fallan** al ejecutar `npm test`.

**Acción recomendada**: Actualizar o reemplazar los tests del scaffold con tests que reflejen el comportamiento real de `AppComponent` (por ejemplo, que `submitForm` llama a `window.open` con la URL correcta).

## Número de WhatsApp hardcodeado
El número `593996145553` está en `src/app/app.component.ts` directamente en el string de la URL.  
No hay variables de entorno configuradas. Si cambia el número de contacto, hay que editarlo manualmente en ese archivo.

## Sin lint configurado
No hay ESLint ni Prettier configurado en `package.json`. TypeScript strict mode es la única verificación automática.  
Agregar linting antes de escalar el proyecto.

## Caché de Angular CLI
La carpeta `.angular/cache/` puede causar errores de build si hay inconsistencias de versión.  
Si el build falla con errores extraños de Webpack/esbuild, borrar esta carpeta y reintentar.

## Budget de estilos
El presupuesto `anyComponentStyle` tiene error a 30 kB. Si se agregan estilos al componente, verificar el tamaño.  
El commit `0ac6178` ya tuvo que ajustar el CSS para pasar este límite.

## Vercel outputDirectory
`vercel.json` apunta a `dist/trueque-meta-site/browser`. Si se cambia el nombre del proyecto en `angular.json`  
(campo `projects`), la ruta de salida cambia y el deploy en Vercel fallará silenciosamente.

## No hay variables de entorno
No existe `src/environments/` (eliminado en Angular 15+). Si se necesitan configuraciones por entorno,  
usar `fileReplacements` en `angular.json` o la API `provideEnvironment`.
