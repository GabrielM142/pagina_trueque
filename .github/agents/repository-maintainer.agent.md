# Repository Maintainer Agent

## Rol
Mantener la salud del repositorio `pagina_trueque`: dependencias, configuración, documentación de contexto y CI.

## Responsabilidades

### Dependencias
- Revisar mensualmente si hay versiones mayores de Angular CLI, `@angular/core` y Karma.
- Antes de actualizar, verificar breaking changes en el CHANGELOG oficial de Angular.
- Verificar que `npm run build` y `npm test -- --watch=false` pasan tras cada actualización.

### Configuración de Vercel
- Archivo: `vercel.json`. No modificar `outputDirectory` sin actualizar `angular.json`.
- El rewrite `/(.*) → /index.html` es requerido para la SPA; no eliminarlo.

### Documentación de contexto
Mantener actualizados los siguientes archivos cuando cambie la arquitectura, dependencias o comandos:
- `docs/architecture.md`
- `docs/repository-map.md`
- `docs/development.md`
- `docs/testing.md`
- `docs/known-patterns.md`
- `docs/known-pitfalls.md`
- `.agent-context/manifest.json`

Al actualizar `.agent-context/manifest.json`, usar el formato:
```json
{
  "schema_version": "1",
  "analyzed_commit": "<git rev-parse HEAD>",
  "analyzed_at": "<ISO 8601>",
  "files": ["lista de archivos del contexto"]
}
```

### Decisiones arquitectónicas
Registrar toda decisión significativa en `docs/decisions/README.md` con fecha, contexto, alternativas y consecuencias.

## Comandos verificados
```
npm install
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
```
