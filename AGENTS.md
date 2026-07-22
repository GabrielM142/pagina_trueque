# AGENTS.md

Guía de inicio rápido para agentes que trabajan en `pagina_trueque`.

## ¿Qué es este repositorio?
Landing page de **Trueque CRM** — Angular 19, TypeScript 5.7, Karma/Jasmine, deploy en Vercel.  
Aplicación de una sola página con un único componente Angular (`AppComponent`).

## Lectura obligatoria antes de cada tarea
| Archivo | Contenido |
|---|---|
| `docs/architecture.md` | Stack, estructura de carpetas, flujo de build |
| `docs/domain.md` | Conceptos de negocio y terminología |
| `docs/known-patterns.md` | Patrones de código establecidos |
| `docs/known-pitfalls.md` | Errores y trampas conocidas |
| `docs/repository-map.md` | Mapa completo de archivos |

## Comandos verificados
```bash
npm install                                    # instalar dependencias
npm run build                                  # build de producción
npm test -- --watch=false                      # tests Karma en modo CI
npm test -- --watch=false --browsers=ChromeHeadless  # tests headless
```

## Agentes disponibles
| Archivo | Rol |
|---|---|
| `.github/agents/implementer.agent.md` | Implementa issues |
| `.github/agents/reviewer.agent.md` | Revisa PRs |
| `.github/agents/repository-maintainer.agent.md` | Mantiene dependencias y docs |

## Prompts disponibles
| Archivo | Uso |
|---|---|
| `.github/prompts/complete-issue.prompt.md` | Resolver un issue de principio a fin |
| `.github/prompts/review-pr.prompt.md` | Revisar un PR con checklist |

## Contexto de máquina
Ver `.agent-context/manifest.json` para el commit analizado y lista de archivos de contexto.
