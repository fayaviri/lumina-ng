# AI_CONTEXT.md - Lumina NG

**Contexto operativo para herramientas de inteligencia artificial**  
**Proyecto:** Lumina NG  
**Stack:** Angular moderno + PrimeNG Aura + SCSS  
**Autor del template:** Filemon Ayaviri Arcos

---

## 1. Propósito de este documento

Este archivo está pensado para guiar a herramientas de inteligencia artificial cuando ayuden a modificar, revisar, refactorizar o extender Lumina NG.

A diferencia de la documentación principal para personas, este documento es directo, operativo y restrictivo. Su objetivo es evitar que una IA rompa la identidad visual, la arquitectura moderna o la estructura limpia del template.

Lumina NG es un template administrativo gratuito basado en Angular moderno y PrimeNG Aura. Debe mantenerse limpio, responsive, visualmente equilibrado, reutilizable y fácil de modificar.

---

## 2. Reglas obligatorias del proyecto

Cuando una IA trabaje sobre Lumina NG debe respetar estas reglas:

```txt
- Usar Angular moderno.
- Usar standalone components.
- No crear NgModule, SharedModule ni CoreModule como base.
- No usar ngModel.
- Usar ReactiveFormsModule para formularios.
- Usar @if, @for y @switch en plantillas nuevas.
- Usar loadComponent y loadChildren para rutas lazy.
- Usar provideHttpClient desde app.config.ts.
- Usar functional guards e interceptors cuando correspondan.
- Usar PrimeNG como biblioteca visual principal.
- No reemplazar PrimeNG por otra librería sin justificación.
- No sobrescribir PrimeNG innecesariamente.
- No duplicar CSS.
- No crear componentes gigantes.
- No mezclar lógica de negocio específica dentro del template base.
- Mantener el proyecto responsive.
- Ejecutar npm run build antes de entregar cambios importantes.
```

---

## 3. Identidad visual que debe conservarse

Lumina NG busca una escala visual equilibrada.

```txt
Los textos, labels, inputs, botones y cards deben verse:
ni demasiado grandes,
ni demasiado pequeños.
```

El tamaño base del template es:

```scss
html {
  font-size: 14px;
}
```

Por lo tanto:

```txt
1rem = 14px
0.875rem = 12.25px
0.75rem = 10.5px
1.125rem = 15.75px
1.25rem = 17.5px
1.5rem = 21px
1.875rem = 26.25px
```

### Regla importante

No reducir textos importantes solo para que una pantalla entre en móvil.

```txt
Responsive no significa achicar texto.
Responsive significa reorganizar la información.
```

---

## 4. Tipografía y tamaños recomendados

Usar la escala Lumina solo donde corresponda.

```txt
Título principal de página:
1.5rem a 1.875rem

Título de card:
1.125rem a 1.25rem

Título interno:
1rem a 1.125rem

Texto normal:
1rem

Labels de formularios:
1rem

Valores importantes:
1rem

Texto secundario:
0.875rem solo si no es información crítica

Notas pequeñas:
0.75rem solo en casos muy puntuales, nunca para datos importantes
```

### No hacer

```scss
.field label {
  font-size: 0.875rem;
}
```

Con `html { font-size: 14px; }`, eso baja el label a `12.25px` y puede verse demasiado pequeño.

### Recomendado

```scss
.field label {
  color: var(--p-surface-700);
  line-height: 1.42857;
  font-weight: 500;
}
```

El label debe heredar el tamaño base del template.

---

## 5. Responsive

El diseño responsive debe resolverse reorganizando contenido.

### Correcto

```txt
- Apilar formularios en una columna.
- Reducir paddings con cuidado.
- Ocultar columnas secundarias en tablas.
- Unir datos relacionados cuando ayude a la lectura.
- Usar scroll horizontal si la tabla lo requiere.
- Mantener botones fáciles de tocar.
- Ajustar diálogos con ancho relativo.
```

### Incorrecto

```txt
- Bajar todos los textos a 0.75rem.
- Bajar labels principales a 0.875rem.
- Mantener demasiadas columnas en móvil.
- Forzar anchos fijos.
- Hacer que inputs, selects o botones queden apretados.
```

### Ejemplo de tabla responsive

En desktop puede mostrarse:

```txt
Nro. formulario | Fecha | Tipo solicitud | Operación | Sistema | Funciones | Teléfono | Opciones
```

En móvil puede mostrarse:

```txt
Nro. formulario | Fecha | Operación | Opciones
```

Si un dato secundario es importante, puede integrarse dentro de una columna existente.

---

## 6. PrimeNG

PrimeNG es la base visual del template.

No sobrescribir globalmente estos componentes salvo que sea estrictamente necesario:

```scss
.p-button
.p-button-label
.p-inputtext
.p-select
.p-datepicker
.p-dialog
.p-card
.p-component
.p-password-input
.p-textarea
.p-table
```

Lumina NG debe personalizar principalmente sus propias clases.

Ejemplos de clases propias válidas:

```scss
.page-title-row h1
.metric-label
.metric-content strong
.metric-note
.update-list h3
.update-list p
.team-row h3
.team-row p
.member-status
.brand-name
.menu-section-header
.menu-link
.sidebar-user-name
```

### Regla

```txt
Si PrimeNG ya se ve bien con Aura y la escala base, no lo sobrescribas.
```

---

## 7. Overlays de PrimeNG

Muchos componentes de PrimeNG muestran paneles flotantes.

Ejemplos:

```txt
p-select
p-datepicker
p-multiselect
p-autocomplete
p-menu
p-tieredMenu
p-overlayPanel
```

Cuando estén dentro de cards, dialogs, login, tablas o contenedores con `overflow`, usar:

```html
[appendTo]="'body'"
```

### Ejemplos

```html
<p-select
  [options]="roles"
  [appendTo]="'body'"
  placeholder="Seleccione una opción" />
```

```html
<p-datepicker
  formControlName="fechaInicio"
  [showIcon]="true"
  [appendTo]="'body'" />
```

Esto evita que combos, calendarios y paneles queden cortados visualmente.

---

## 8. Colores

Evitar colores fijos en componentes del template.

### No recomendado

```scss
color: #111827;
background: #ffffff;
color: #22c55e;
color: #ef4444;
color: #f97316;
```

### Recomendado

```scss
color: var(--p-text-color);
color: var(--p-text-muted-color);
color: var(--p-primary-color);
color: var(--p-surface-700);
background: var(--p-surface-0);
border-color: var(--p-surface-200);
```

Para botones, preferir severidades PrimeNG:

```html
<p-button label="Guardar" icon="pi pi-save" />
<p-button label="Aprobar" severity="success" />
<p-button label="Rechazar" severity="danger" />
<p-button label="Advertencia" severity="warn" />
```

### Excepciones posibles

Los colores fijos solo son aceptables para:

```txt
- Muestras visuales del configurador de colores.
- Sombras.
- Máscaras u overlays del layout.
- Fallbacks temporales justificados.
```

---

## 9. SCSS y estilos

Evitar que cada página tenga demasiado SCSS propio.

### Regla sugerida

```txt
0 a 80 líneas de SCSS:
aceptable.

80 a 150 líneas:
revisar si hay estilos repetidos.

Más de 150 líneas:
considerar mover estilos comunes a global/shared.
```

### Estilos globales sugeridos

Si una clase se repite en varias pantallas, moverla a estilos globales Lumina.

Ejemplos:

```scss
.lumina-page-shell
.lumina-page-header
.lumina-filter-panel
.lumina-table-card
.lumina-empty-state
.lumina-detail-grid
.lumina-action-row
```

### No hacer

```txt
- Copiar CSS de sistemas antiguos.
- Crear clases tipo box1, container2, tmp-card.
- Duplicar estilos entre pantallas.
- Sobrescribir PrimeNG sin necesidad.
```

---

## 10. Componentes compartidos recomendados

Si una estructura se repite en dos o más pantallas, evaluar moverla a `shared`.

Ruta recomendada:

```txt
src/app/shared/components
```

Componentes sugeridos:

```txt
page-header
filter-panel
empty-state
loading-state
detail-section
info-card
action-buttons
status-pill
confirm-dialog
metric-card
search-box
breadcrumb
section-title
```

Los componentes compartidos deben ser standalone.

No crear `SharedModule`.

---

## 11. Estructura de carpetas

La estructura recomendada es:

```txt
src/app
├── core
│   ├── guards
│   ├── interceptors
│   ├── services
│   └── models
│
├── shared
│   ├── components
│   ├── pipes
│   ├── directives
│   └── utils
│
├── layout
│   ├── component
│   ├── model
│   └── service
│
└── pages
    ├── auth
    ├── crud
    ├── dashboard
    ├── documentation
    ├── empty
    ├── landing
    ├── notfound
    ├── service
    └── uikit
```

---

## 12. Template base vs sistema derivado

Lumina NG como template público puede conservar:

```txt
- UI Kit.
- Páginas demo.
- Dashboard demo.
- Landing.
- Auth pages.
- Documentación visual.
```

Un sistema derivado basado en Lumina NG puede retirar o separar páginas demo que no sean necesarias.

Ejemplo:

```txt
lumina-ng-template
→ conserva demos, UI Kit y documentación.

lumina-ng-howlita
→ conserva layout, auth, core, shared y páginas reales.
```

Cuando se trabaje en un sistema derivado, la IA no debe analizar carpetas demo si no son parte del problema.

---

## 13. Servicios y modelos

Los datos importantes deben estar tipados.

### Recomendado

```txt
src/app/core/models
src/app/core/services
```

Ejemplo:

```ts
export interface SolicitudAprobada {
  nro: string;
  fechaSistema: string;
  nombreTipoSolicitud: string;
  nombreOperacion: string;
  sistema?: string;
  funciones?: string;
  telefono?: string;
}
```

Evitar interfaces grandes escondidas dentro de componentes si se reutilizan en varias partes.

---

## 14. LocalStorage y persistencia local

Si se guarda información en el navegador, centralizar las claves.

Ruta recomendada:

```txt
src/app/core/services/storage.service.ts
```

Archivo opcional:

```txt
src/app/core/constants/storage-keys.ts
```

Ejemplo:

```ts
export const STORAGE_KEYS = {
  solicitudesFechas: 'lumina.solicitudesAprobadas.fechas',
  authRemember: 'lumina.auth.savedCredentials'
};
```

### Advertencia

No recomendar guardar contraseñas en `localStorage` para proyectos públicos o de producción sin advertir el riesgo.

Si el usuario solicita explícitamente recordar usuario y contraseña, implementar con claridad y documentar que es una decisión del proyecto.

---

## 15. Migración de componentes desde otro sistema

Cuando se migre una pantalla antigua a Lumina NG:

```txt
1. Revisar la pantalla antigua.
2. Identificar datos reales.
3. Identificar acciones.
4. Identificar formularios y validaciones.
5. No copiar CSS antiguo.
6. Crear componente standalone.
7. Usar ReactiveFormsModule.
8. Usar PrimeNG.
9. Usar variables PrimeNG.
10. Mantener escala Lumina.
11. Revisar desktop.
12. Revisar móvil.
13. Revisar overlays.
14. Ejecutar npm run build.
```

### No hacer

```txt
- No copiar colores antiguos.
- No copiar estilos obsoletos.
- No mezclar lógica antigua innecesaria.
- No forzar tamaños pequeños para móvil.
```

---

## 16. Checklist antes de entregar cambios

Antes de entregar una modificación, revisar:

```txt
- ¿Compila con npm run build?
- ¿Se mantiene Angular moderno?
- ¿No se agregaron NgModules?
- ¿No se usó ngModel?
- ¿Se usó ReactiveFormsModule?
- ¿Se importaron los módulos PrimeNG necesarios?
- ¿No se usaron colores hexadecimales innecesarios?
- ¿Se usaron variables PrimeNG?
- ¿No se achicaron labels principales?
- ¿No se usó 0.75rem para datos importantes?
- ¿No se sobrescribió PrimeNG globalmente sin necesidad?
- ¿Funciona en desktop?
- ¿Funciona en móvil?
- ¿Los overlays no quedan cortados?
- ¿Los p-select y p-datepicker usan appendTo body si están dentro de contenedores limitados?
- ¿No hay CSS duplicado?
- ¿El componente no quedó gigante?
- ¿Los nombres de clases son claros?
- ¿No se agregó lógica de negocio al template base?
```

---

## 17. Errores frecuentes

### 17.1. Texto demasiado pequeño

Causa probable:

```scss
font-size: 0.75rem;
font-size: 0.875rem;
```

Solución:

```txt
Mantener labels y valores importantes en 1rem.
```

---

### 17.2. Combo o calendario cortado

Causa probable:

```txt
El overlay se renderiza dentro de un contenedor con overflow o altura limitada.
```

Solución:

```html
[appendTo]="'body'"
```

---

### 17.3. Error al cargar rutas lazy

Mensaje posible:

```txt
Failed to fetch dynamically imported module
504 (Outdated Optimize Dep)
```

Soluciones:

```bash
ng cache clean
```

```powershell
Remove-Item -Recurse -Force .angular\cache
```

Luego reiniciar:

```bash
npm start
```

Y hacer recarga fuerte:

```txt
Ctrl + Shift + R
```

También revisar que el componente lazy tenga importados todos los módulos PrimeNG usados en su HTML.

---

### 17.4. Error de componente PrimeNG no reconocido

Causa probable:

```txt
Falta importar el módulo PrimeNG correspondiente.
```

Ejemplos:

```ts
import { CheckboxModule } from 'primeng/checkbox';
import { TooltipModule } from 'primeng/tooltip';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
```

Agregar el módulo en `imports` del componente standalone.

---

## 18. Cómo debe responder una IA al modificar Lumina NG

Cuando una IA entregue cambios, debe explicar:

```txt
- Qué archivo modificó.
- Qué problema resolvió.
- Qué patrón respetó.
- Si el cambio afecta desktop, móvil o ambos.
- Si hay que limpiar caché.
- Si hay que ejecutar npm run build.
```

Debe evitar respuestas vagas como:

```txt
"Ya está optimizado."
```

Mejor:

```txt
"Se agregó appendTo body al p-datepicker para evitar que el calendario quede cortado dentro del contenedor con overflow."
```

---

## 19. Resumen corto para IA

```txt
Lumina NG = Angular moderno + PrimeNG Aura + SCSS controlado.

Usar:
standalone components,
ReactiveFormsModule,
@for/@if,
loadComponent/loadChildren,
variables PrimeNG,
PrimeNG como base visual,
html font-size 14px.

No usar:
NgModule,
SharedModule,
ngModel,
colores hexadecimales,
CSS duplicado,
labels pequeños,
0.75rem para datos importantes,
overrides globales de PrimeNG,
componentes gigantes.

Responsive:
reorganizar información,
no achicar texto.

Overlays:
p-select y p-datepicker dentro de cards/dialogs/login deben usar appendTo body.
```

---

## 20. Conclusión

Este documento debe servir como guía estricta para herramientas de inteligencia artificial que trabajen sobre Lumina NG.

La documentación humana puede ser flexible y explicativa. Este archivo debe ser operativo, claro y directo.

El objetivo es que la IA pueda ayudar sin romper:

```txt
- La arquitectura moderna.
- La escala visual.
- La identidad PrimeNG Aura.
- El responsive.
- La estructura limpia.
- La facilidad de mantenimiento.
```
