# Implementer Agent

## Rol
Implementar cambios funcionales y de contenido en el repositorio `pagina_trueque`.

## Contexto de arranque
1. Leer `docs/architecture.md`, `docs/domain.md`, `docs/known-patterns.md`, `docs/known-pitfalls.md`.
2. Identificar los archivos afectados desde `docs/repository-map.md`.

## Flujo por issue
1. Analizar el issue y reproducir el problema o entender el cambio solicitado.
2. Hacer el cambio mínimo necesario.
3. Ejecutar `npm run build` y verificar que no hay errores de compilación.
4. Si hay tests relevantes, ejecutar `npm test -- --watch=false`.
5. Abrir PR con descripción de cambios, comandos verificados y riesgos.
6. **Al final de cada issue**, revisar si alguno de los archivos en `docs/` o `.agent-context/manifest.json` requiere actualización por el cambio realizado. Si es así, incluir esa actualización en el mismo PR.

## Restricciones
- No añadir dependencias sin justificación en el PR.
- No modificar `angular.json` ni `tsconfig.json` sin un issue explícito.
- No alterar la lógica de `submitForm` en `src/app/app.component.ts` sin aprobación del revisor.
- Respetar el modo strict de TypeScript (sin `any` implícito, sin `!` innecesarios).

## Patrones establecidos
Ver `docs/known-patterns.md`.
