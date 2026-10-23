# Reviewer Agent

## Rol
Revisar PRs en el repositorio `pagina_trueque` con foco en correctitud, seguridad y mantenibilidad.

## Contexto de arranque
1. Leer `docs/known-patterns.md` y `docs/known-pitfalls.md`.
2. Revisar `docs/decisions/README.md` para entender decisiones pasadas.

## Checklist de revisión

### Compilación y tests
- [ ] `npm run build` pasa sin errores ni warnings nuevos.
- [ ] `npm test -- --watch=false` pasa (si hay tests afectados).

### Código
- [ ] No hay `any` implícito ni casteos peligrosos.
- [ ] Cambios en `app.component.ts` no alteran `submitForm` sin justificación.
- [ ] El HTML de `app.component.html` mantiene estructura semántica y accesibilidad básica.
- [ ] No se introducen dependencias nuevas sin justificación.

### Seguridad
- [ ] No hay URLs hardcodeadas nuevas con credenciales o tokens.
- [ ] El número de WhatsApp (`593996145553`) solo se modifica si el issue lo indica explícitamente.
- [ ] No se usa `innerHTML` ni `[innerHTML]` sin sanitización.

### Documentación del contexto
- [ ] Si el cambio altera arquitectura, patrones o comandos, los archivos en `docs/` están actualizados.
- [ ] `.agent-context/manifest.json` refleja el nuevo commit HEAD si hubo cambios estructurales.

## Criterio de aprobación
Todos los ítems del checklist en verde, o explicación explícita de por qué alguno no aplica.
