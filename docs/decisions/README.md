# Registro de Decisiones Arquitectónicas

Cada decisión documenta: fecha, contexto, alternativas consideradas y consecuencias.

---

## ADR-001: Angular como framework de la landing page
**Fecha**: 2025 (commit inicial)  
**Contexto**: Se necesita una landing page para Trueque CRM. El equipo tiene experiencia con Angular.  
**Alternativas**: HTML/CSS/JS puro, Next.js, Astro.  
**Decisión**: Angular 19 con standalone components.  
**Consecuencias**: Bundle inicial mayor que HTML puro, pero facilita escalar a una SPA completa si se necesita. Build tooling maduro con Angular CLI.

---

## ADR-002: Deploy en Vercel con rewrite SPA
**Fecha**: 2025 (commit inicial)  
**Contexto**: La app es una SPA y necesita que todas las rutas sirvan `index.html`.  
**Decisión**: `vercel.json` con rewrite `/(.*) → /index.html`.  
**Consecuencias**: Cualquier ruta no encontrada devuelve la app Angular. No hay SSR.

---

## ADR-003: Sin framework CSS
**Fecha**: 2025 (commit inicial)  
**Contexto**: Diseño custom con paleta oscura específica de marca.  
**Decisión**: CSS nativo con variables y clases utilitarias propias.  
**Consecuencias**: Sin dependencias de UI externas, pero el CSS del componente debe mantenerse dentro del budget de 30 kB (ver `docs/known-pitfalls.md`).

---

## ADR-004: Formulario de contacto sin backend
**Fecha**: 2025 (commit inicial)  
**Contexto**: Se necesita un punto de contacto sin infraestructura de servidor.  
**Decisión**: El formulario abre WhatsApp Web con texto prearmado via `wa.me`.  
**Consecuencias**: Sin base de datos de leads, sin envío de email. El número de WhatsApp queda hardcodeado en `app.component.ts`.

---

<!-- Agregar nuevas decisiones aquí con el formato ADR-NNN -->
