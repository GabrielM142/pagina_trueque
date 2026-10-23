# Copilot Instructions — pagina_trueque

## Repositorio
Landing page de **Trueque CRM** (Angular 19, TypeScript 5.7, Karma/Jasmine).  
Deployment: Vercel SPA. Un solo componente Angular (`AppComponent`).

## Contexto permanente
Antes de cada tarea, leer:
- `docs/architecture.md` — estructura técnica
- `docs/domain.md` — lenguaje de dominio
- `docs/known-patterns.md` — patrones establecidos
- `docs/known-pitfalls.md` — errores conocidos

## Comandos principales
```
npm install          # instalar dependencias
npm run build        # build de producción → dist/trueque-meta-site/browser/
npm test             # karma headless (ver docs/testing.md)
```
No existe script de lint configurado; TypeScript strict mode actúa como lint principal.

## Reglas
1. No modificar comportamiento funcional sin issue vinculado.
2. Mantener `AppComponent` como único componente raíz hasta que un issue lo autorice.
3. Verificar que `npm run build` pasa antes de abrir PR.
4. Al cerrar un issue, evaluar si algún archivo en `docs/` o `.agent-context/manifest.json` necesita actualización.

## Detalles
Ver `docs/` para arquitectura, mapa de archivos, desarrollo, testing, dominio, patrones y decisiones.
