# Dominio

## Producto
**Trueque CRM** es una plataforma de gestión de comunicaciones empresariales integrada con las APIs oficiales de Meta (WhatsApp Business API, Messenger, Instagram DM).

## Empresa
**TRUEQUE-CORP S.A.S.** — empresa ecuatoriana. Número de WhatsApp de contacto: `+593996145553`.

## Terminología del negocio
| Término | Significado en este contexto |
|---|---|
| CRM | Customer Relationship Management — gestión de conversaciones y clientes |
| Bandeja Omnicanal | Interfaz unificada para WhatsApp, Messenger e Instagram |
| Campañas Masivas | Envío de plantillas Meta a segmentos de contactos |
| Partner oficial de Meta Business | Acreditación de Meta para integración con sus APIs |
| Agente | Persona del equipo del cliente que atiende conversaciones en el CRM |
| Flujo de atención | Secuencia de automatización para enrutar conversaciones |
| Plantilla | Mensaje pre-aprobado por Meta para envíos masivos (WhatsApp) |
| Lead | Contacto potencial captado a través de Meta Ads o formularios |
| Pipeline de ventas | Etapas del proceso comercial gestionadas dentro del CRM |

## Secciones de la landing
La landing page cubre estas secciones (IDs en el HTML):
- `#home` — Hero con propuesta de valor
- `#features` — Funcionalidades del CRM
- `#how` — Cómo funciona (3 pasos)
- `#nosotros` — Misión, visión, valores de TRUEQUE-CORP
- `#privacidad` — Política de privacidad
- `#terminos` — Términos de servicio
- `#contacto` — Formulario que abre WhatsApp

## Flujo de contacto
El único flujo interactivo de la landing es el formulario de contacto:
1. El usuario llena nombre, email, teléfono, empresa y mensaje.
2. `AppComponent.submitForm()` construye un texto y abre `https://wa.me/593996145553?text=...`.
3. No hay backend, no hay base de datos, no hay envío de email.
