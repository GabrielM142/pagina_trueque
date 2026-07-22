# Mapa del repositorio

Lista completa de archivos de código fuente y configuración, con propósito de cada uno.

## Código fuente
| Ruta | Propósito |
|---|---|
| `src/main.ts` | Punto de entrada; hace bootstrap de `AppComponent` con `appConfig` |
| `src/index.html` | HTML raíz con `<app-root>` y meta tags |
| `src/styles.css` | Reset global, fondo `#05070f`, importación de Google Fonts |
| `src/app/app.component.ts` | Único componente: `submitForm` → abre WhatsApp con mensaje prearmado |
| `src/app/app.component.html` | HTML completo de la landing (nav, hero, features, how, nosotros, privacidad, términos, contacto) |
| `src/app/app.component.css` | Estilos del componente (variables CSS, layout, animaciones) |
| `src/app/app.component.spec.ts` | Tests unitarios Karma/Jasmine para `AppComponent` |
| `src/app/app.config.ts` | `ApplicationConfig` con `provideRouter` y `provideZoneChangeDetection` |
| `src/app/app.routes.ts` | `Routes = []` — no hay rutas definidas |

## Archivos públicos
| Ruta | Propósito |
|---|---|
| `public/favicon.ico` | Ícono del sitio |

## Configuración
| Ruta | Propósito |
|---|---|
| `angular.json` | Configuración Angular CLI: build, test, budgets, sourceRoot |
| `tsconfig.json` | Base TypeScript (strict, ES2022, bundler moduleResolution) |
| `tsconfig.app.json` | Extiende `tsconfig.json` para la app |
| `tsconfig.spec.json` | Extiende `tsconfig.json` para tests |
| `package.json` | Dependencias y scripts npm |
| `vercel.json` | `buildCommand`, `outputDirectory`, rewrite SPA |
| `.editorconfig` | Convenciones de editor |
| `.gitignore` | Excluye `/dist`, `/node_modules`, `/.angular/cache`, `/coverage` |

## Documentación y contexto de agentes
| Ruta | Propósito |
|---|---|
| `AGENTS.md` | Guía de inicio rápido para agentes |
| `.github/copilot-instructions.md` | Instrucciones permanentes para Copilot |
| `.github/agents/implementer.agent.md` | Flujo del agente implementador |
| `.github/agents/reviewer.agent.md` | Checklist del agente revisor |
| `.github/agents/repository-maintainer.agent.md` | Guía del mantenedor |
| `.github/prompts/complete-issue.prompt.md` | Prompt para resolver issues |
| `.github/prompts/review-pr.prompt.md` | Prompt para revisar PRs |
| `docs/architecture.md` | Stack, estructura, flujo de build |
| `docs/repository-map.md` | Este archivo |
| `docs/development.md` | Comandos y flujo de desarrollo local |
| `docs/testing.md` | Estrategia y comandos de testing |
| `docs/domain.md` | Dominio y terminología del negocio |
| `docs/known-patterns.md` | Patrones de código establecidos |
| `docs/known-pitfalls.md` | Errores y trampas conocidas |
| `docs/decisions/README.md` | Registro de decisiones arquitectónicas |
| `.agent-context/manifest.json` | Commit analizado, fecha y lista de archivos de contexto |
