# Testing

## Framework
Karma 6.4 + Jasmine 5.6 (configurados por Angular CLI).  
Spec único: `src/app/app.component.spec.ts`.

## Ejecutar tests

### Modo interactivo (browser)
```bash
npm test
# Abre Chrome con Karma y recarga en cada cambio
```

### Modo CI (sin browser abierto)
```bash
npm test -- --watch=false
# O con browser headless:
npm test -- --watch=false --browsers=ChromeHeadless
```

> **Nota**: en entornos sin display (servidores CI), usar `--browsers=ChromeHeadless`.  
> Chrome (o Chromium) debe estar instalado en el sistema.

## Estado actual de los tests
Los tres tests del scaffold de Angular CLI están presentes en `src/app/app.component.spec.ts`:
1. `should create the app` — verifica que el componente se instancia.
2. `should have the 'trueque-meta-site' title` — verifica la propiedad `title`.
3. `should render title` — verifica contenido del h1.

> ⚠️ **Vacío conocido**: los tests del scaffold buscan `app.title` y un `<h1>Hello, trueque-meta-site</h1>` que no existen en la implementación actual de `AppComponent`. Estos tests **fallan** en el estado actual del repositorio. Ver `docs/known-pitfalls.md`.

## Cobertura
La configuración de Karma en `angular.json` incluye `karma-coverage`.  
Para generar reporte: `npm test -- --watch=false --code-coverage`.  
Salida en `/coverage/` (ignorado por git).

## Agregar tests
- Crear archivos `*.spec.ts` junto al archivo que prueban.
- Importar `TestBed` de `@angular/core/testing`.
- Seguir el patrón de `src/app/app.component.spec.ts`.
