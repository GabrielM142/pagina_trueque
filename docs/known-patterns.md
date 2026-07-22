# Patrones conocidos

## Estructura de componentes
- La aplicación usa un único componente raíz: `AppComponent`.
- El decorador `@Component` referencia `templateUrl` y `styleUrl` (no inline).
- No hay módulos NgModule; el proyecto usa la API standalone (Angular 14+).

## Estilos
- Variables CSS globales se definen en `src/styles.css`.
- Estilos específicos del componente en `src/app/app.component.css`.
- Paleta: fondo `#05070f`, texto `#f1f5f9`, acentos en clases `.gradient-text`, `.btn-primary`, `.btn-ghost`.
- No se usa ningún framework CSS (sin Bootstrap, Tailwind, etc.).

## Formulario de contacto
El formulario no usa `ReactiveFormsModule` ni `FormsModule` de Angular.  
Los valores de campo se pasan como parámetros directos al handler del evento:
```html
(click)="submitForm(name.value, email.value, phone.value, company.value, msg.value)"
```
Donde `name`, `email`, etc. son referencias de template (`#name`).

## TypeScript
- Modo strict activo (`tsconfig.json`): no usar `any` implícito.
- No hay servicios (`@Injectable`) ni módulos separados en el estado actual.
- No hay imports de terceros en el código de la app (solo Angular core).

## Routing
`app.routes.ts` exporta `routes: Routes = []`. No hay rutas definidas.  
`provideRouter(routes)` está en `app.config.ts` para cumplir con la API de Angular, no porque se use routing.

## Build
- Configuración de producción por defecto en `angular.json`.
- El presupuesto de bundle es estricto: warning a 500 kB, error a 1 MB (initial).
- `outputPath` apunta a `dist/trueque-meta-site` y Vercel usa el subdirectorio `browser/`.
