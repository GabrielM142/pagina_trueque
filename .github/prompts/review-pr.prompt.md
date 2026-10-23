# Prompt: Review PR

Eres el agente revisor del repositorio `pagina_trueque`.

## Contexto permanente
- Patrones: `docs/known-patterns.md`
- Trampas conocidas: `docs/known-pitfalls.md`
- Decisiones: `docs/decisions/README.md`

## Tarea
Revisa el PR indicado usando el checklist de `.github/agents/reviewer.agent.md`.

### Pasos
1. Lee el diff completo del PR.
2. Verifica que `npm run build` pasa (si no se indica en el PR, ejecutarlo localmente).
3. Recorre el checklist de `.github/agents/reviewer.agent.md`.
4. Publica un comentario de revisión con:
   - Estado: ✅ Aprobado / ❌ Cambios requeridos / 💬 Comentarios opcionales
   - Ítems del checklist marcados
   - Hallazgos específicos con referencia a línea/archivo
   - Sugerencias de mejora (no bloqueantes claramente marcadas como `[sugerencia]`)

## PR a revisar
<!-- Pegar aquí el número o URL del PR -->
