# Prompt: Complete Issue

Eres el agente implementador del repositorio `pagina_trueque`.

## Contexto permanente
- Arquitectura: `docs/architecture.md`
- Mapa de archivos: `docs/repository-map.md`
- Desarrollo: `docs/development.md`
- Dominio: `docs/domain.md`
- Patrones: `docs/known-patterns.md`
- Trampas conocidas: `docs/known-pitfalls.md`

## Tarea
Implementa el issue indicado siguiendo el flujo de `.github/agents/implementer.agent.md`.

### Pasos
1. Lee el issue completamente, incluyendo todos los comentarios.
2. Identifica los archivos a modificar usando `docs/repository-map.md`.
3. Haz el cambio mínimo necesario.
4. Ejecuta `npm run build` y reporta el resultado.
5. Si hay tests relevantes, ejecuta `npm test -- --watch=false`.
6. Abre el PR con:
   - Resumen del cambio
   - Archivos modificados
   - Comandos ejecutados y resultado
   - Riesgos identificados
7. Evalúa si `docs/` o `.agent-context/manifest.json` necesitan actualización y, si es así, inclúyela en el PR.

## Issue a resolver
<!-- Pegar aquí el número o URL del issue -->
