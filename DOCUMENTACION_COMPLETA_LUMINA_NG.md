# Lumina NG

**Template gratuito Angular + PrimeNG Aura**  
**Creado y mantenido por: Filemon Ayaviri Arcos**

---

## Cómo leer esta documentación

Este documento funciona como la **documentación principal para personas** de Lumina NG.
Su objetivo es explicar la identidad del template, su filosofía visual, su estructura recomendada y los criterios generales para mantenerlo limpio, moderno y reutilizable.

No está pensado como un archivo de reglas estrictas para automatizaciones o herramientas de inteligencia artificial.
Para ese caso se recomienda crear un documento separado, por ejemplo:

```txt
AI_CONTEXT.md
AI_CHECKLIST.md
AI_MIGRATION_RECIPE.md
```

De esta forma, Lumina NG mantiene una documentación humana clara y presentable, mientras que las reglas operativas para IA pueden vivir en archivos más directos y específicos.

---

## 1. Descripción general

**Lumina NG** es un template administrativo gratuito construido con Angular moderno y PrimeNG Aura.  
El objetivo principal del proyecto es ofrecer una base visual limpia, profesional, responsive y fácil de modificar, tanto por desarrolladores como por herramientas de inteligencia artificial.

Lumina NG no está pensado como un sistema específico de inventario, ventas, salud, gestión documental, catastro u otro dominio particular.  
Su propósito es servir como una plantilla base reutilizable para construir diferentes tipos de sistemas administrativos.

Este proyecto nace como una alternativa gratuita a templates administrativos complejos, priorizando una estructura clara, una escala visual equilibrada y una arquitectura moderna basada en Angular 21.

---

## 2. Filosofía del proyecto

Lumina NG nace como una alternativa gratuita a templates administrativos complejos o de pago, priorizando una estructura clara, responsive y fácil de modificar por desarrolladores e IA.

La idea no es copiar un template existente, sino construir una base propia, entendible y mantenible, usando PrimeNG como biblioteca principal de componentes visuales.

Uno de los problemas que se busca resolver es que algunos templates administrativos, aunque son visualmente completos, tienen una maquetación interna difícil de entender o modificar. Esto puede complicar el trabajo de una persona desarrolladora y también puede hacer que una IA modifique mal el diseño, mezcle estilos o rompa la estructura visual.

Lumina NG busca evitar ese problema con una estructura más directa, archivos más claros y reglas visuales más fáciles de seguir.

---

## 3. Objetivos principales

El proyecto tiene cuatro objetivos centrales.

### 3.1. Escala visual equilibrada

Una de las prioridades del template es que los elementos visuales tengan un tamaño cómodo:

- Inputs ni muy grandes ni muy pequeños.
- Textos legibles, pero no exagerados.
- Cards limpias y bien proporcionadas.
- Botones con tamaño moderado.
- Formularios compactos, pero cómodos de usar.
- Espaciados controlados y consistentes.

El template busca evitar interfaces demasiado grandes, pesadas o difíciles de recorrer.

### 3.2. Estructura fácil de manejar por IA

Lumina NG está pensado para que una IA pueda entender rápidamente el proyecto y modificarlo sin romper el diseño.

Para lograr esto, se busca:

- Evitar componentes gigantes.
- Evitar CSS duplicado.
- Evitar maquetaciones demasiado anidadas.
- Evitar lógica visual escondida.
- Separar layout, páginas, servicios y estilos.
- Usar nombres claros en carpetas, clases y componentes.
- Mantener estilos globales reutilizables bien organizados.
- Separar las demos de PrimeNG por componente.

La regla principal es:

> Si una IA no puede entender rápido qué hace un archivo, ese archivo probablemente está demasiado complicado.

### 3.3. Diseño responsive real

Lumina NG debe verse y funcionar bien en:

- Escritorio.
- Laptop.
- Tablet.
- Móvil.

En la actualidad, un sistema web no debería estar diseñado solamente para pantalla grande.  
Aunque muchos sistemas administrativos se usan principalmente en escritorio, también deben poder revisarse o utilizarse desde dispositivos móviles.

Por eso, toda pantalla nueva debe considerar:

- Sidebar adaptable.
- Menú móvil funcional.
- Cards que se acomoden en una columna.
- Formularios usables en pantallas pequeñas.
- Diálogos que no se salgan de la pantalla.
- Tablas con comportamiento responsive.
- Espaciados reducidos en móvil.
- Botones accesibles al tacto.

### 3.4. Angular moderno

Lumina NG utiliza Angular moderno y debe mantenerse bajo ese enfoque.

No se debe construir la arquitectura siguiendo patrones antiguos basados en `NgModule` como base principal.

El proyecto debe priorizar:

- Standalone components.
- Lazy loading con `loadComponent`.
- Lazy loading de secciones con `loadChildren`.
- Configuración desde `app.config.ts`.
- `provideHttpClient`.
- Functional guards.
- Functional interceptors.
- Signals cuando tenga sentido.
- Builder moderno `@angular/build:application`.

---

## 4. Tecnología utilizada

El proyecto se basa en el siguiente stack tecnológico.

```txt
Angular CLI       : 21.2.7
Angular           : 21.2.9
Node.js           : 24.15.0
Package Manager   : npm 11.12.1
Operating System  : win32 x64
```

### Paquetes principales

```txt
@angular/build            : 21.2.7
@angular/cli              : 21.2.7
@angular/common           : 21.2.9
@angular/compiler         : 21.2.9
@angular/compiler-cli     : 21.2.9
@angular/core             : 21.2.9
@angular/forms            : 21.2.9
@angular/platform-browser : 21.2.9
@angular/router           : 21.2.9
rxjs                      : 7.8.2
typescript                : 5.9.3
vitest                    : 4.1.5
```

### Librerías visuales

```txt
PrimeNG
PrimeIcons
@primeuix/themes
Tema Aura
SCSS
```

---

## 5. Referencia conceptual

Lumina NG toma como referencia conceptual a **Sakai**, principalmente en la idea de contar con:

- Layout administrativo.
- Sidebar.
- Topbar.
- Páginas demo.
- UI Kit.
- Auth pages.
- Dashboard.
- CRUD demo.
- Página de documentación.
- Página vacía.
- Página 404.

Sin embargo, Lumina NG busca una estructura más simple y más fácil de modificar por IA.  
No pretende ser una copia de Sakai, sino una alternativa gratuita con una filosofía propia.

---

## 6. Qué es Lumina NG

Lumina NG es:

- Un template gratuito.
- Una base administrativa.
- Un punto de partida para sistemas web.
- Un proyecto Angular moderno.
- Un template basado en PrimeNG Aura.
- Una plantilla responsive.
- Una plantilla pensada para humanos e IA.
- Una estructura reutilizable para diferentes proyectos.

---

## 7. Qué no es Lumina NG

Lumina NG no es:

- Un sistema de inventario.
- Un sistema médico.
- Un sistema municipal.
- Un sistema de ventas.
- Un sistema cerrado.
- Un clon de un template de pago.
- Un proyecto dependiente de una API específica.
- Un proyecto amarrado a una institución.
- Una plantilla basada en Angular antiguo.

Las páginas de dashboard, CRUD, auth o UI Kit deben entenderse como ejemplos o demostraciones reutilizables.

### 7.1. Uso como template base o sistema derivado

Lumina NG puede utilizarse de dos formas principales.

Como **template base**, puede conservar páginas de ejemplo, UI Kit, dashboard demo, landing, auth pages y documentación visual.
Estos elementos ayudan a mostrar las capacidades del template y sirven como referencia para nuevos proyectos.

Como **base para un sistema real**, es válido retirar o separar las páginas demo que no sean necesarias.
Por ejemplo, un sistema derivado puede conservar únicamente el layout, autenticación, servicios globales, componentes compartidos y las páginas propias del dominio que se esté construyendo.

Esta separación ayuda a que el proyecto final sea más liviano y fácil de mantener, sin afectar la identidad original del template.

---

## 8. Principios de diseño visual

### 8.1. Tamaño de texto

Los textos deben ser legibles, pero no exagerados.  
El template debe evitar tipografías demasiado grandes que hagan que la pantalla se sienta pesada.

### 8.2. Tamaño de inputs

Los inputs deben mantener una altura cómoda.  
No deben sentirse ni como controles enormes ni como elementos demasiado pequeños.

### 8.3. Formularios

Los formularios deben ser:

- Claros.
- Compactos.
- Ordenados.
- Responsivos.
- Fáciles de entender.
- Basados en componentes PrimeNG.

### 8.4. Cards

Las cards deben tener:

- Espaciado interno equilibrado.
- Bordes suaves.
- Jerarquía visual clara.
- Buen comportamiento en móvil.

### 8.5. Botones

Los botones deben estar alineados y mantener una proporción visual moderada.  
Se debe evitar llenar las pantallas de botones grandes sin necesidad.

### 8.6. Recomendaciones de personalización visual

Lumina NG puede ser personalizado libremente según las necesidades de cada proyecto.
Sin embargo, si se desea conservar la identidad visual original del template, se recomienda mantener una escala equilibrada y apoyarse en las variables visuales del tema.

Para colores, es preferible usar variables de PrimeNG y del tema activo antes que distribuir colores fijos por todo el proyecto.
Esto facilita el soporte para diferentes paletas, modo oscuro y futuras variantes visuales.

Ejemplos recomendados:

```scss
var(--p-primary-color)
var(--p-text-color)
var(--p-text-muted-color)
var(--p-surface-0)
var(--p-surface-100)
var(--p-surface-700)
var(--p-surface-900)
```

Para botones y estados visuales, se recomienda aprovechar las propiedades propias de PrimeNG, como `severity`, antes de crear estilos manuales innecesarios.

---

## 9. Principios IA-friendly

Lumina NG debe facilitar el trabajo de una IA.  
Para eso se deben respetar los siguientes principios:

### 9.1. Archivos claros

Cada archivo debe tener una responsabilidad entendible.

Ejemplo:

```txt
buttondemo.ts       → demo de botones
inputdemo.ts        → demo de inputs
formlayoutdemo.ts   → demo de formularios
app.layout.ts       → layout principal
layout.service.ts   → estado del layout
```

### 9.2. Evitar componentes gigantes

Si una pantalla crece demasiado, se debe considerar separar:

```txt
componente.ts
componente.html
componente.scss
```

Una recomendación general:

```txt
Menos de 80 líneas     → puede ser inline
Más de 120 líneas      → considerar separar HTML y SCSS
Más de 200 líneas      → separar casi obligatoriamente
```

### 9.3. CSS global controlado

Los estilos globales deben estar organizados y documentados.

Ejemplo recomendado para `styles.scss`:

```scss
/* 1. Base */
/* 2. Typography */
/* 3. Page Layout */
/* 4. Cards */
/* 5. Forms */
/* 6. Buttons */
/* 7. Dashboard Helpers */
/* 8. Responsive */
/* 9. PrimeNG Render Fix */
```

### 9.4. No duplicar estilos

Si una clase se usa en muchas páginas, debe estar en `styles.scss`.

Si una clase solo pertenece a una pantalla específica, debe quedarse en el estilo de esa pantalla.

### 9.5. Nombres descriptivos

Evitar nombres confusos o demasiado genéricos.

Mejor:

```txt
page-shell
page-header
layout-card
form-grid
button-row
metric-card
```

Evitar:

```txt
box1
container2
style-test
tmp-card
```

---

## 10. Principios responsive

Toda pantalla nueva debe validarse en móvil.

### Reglas mínimas

- Los grids deben poder pasar a una columna.
- Las cards no deben desbordarse.
- Los diálogos deben usar ancho relativo en móvil.
- Las tablas deben tener scroll o una alternativa responsive.
- El sidebar debe comportarse correctamente en móvil.
- Los botones deben ser fáciles de tocar.
- Los formularios no deben quedar apretados.
- Los textos no deben romper el layout.

### 10.1. Criterio recomendado para móvil

En Lumina NG, el responsive debe priorizar la reorganización de la información antes que la reducción excesiva del texto.

En pantallas pequeñas se recomienda:

- Apilar formularios en una sola columna.
- Ocultar columnas secundarias en tablas.
- Unir datos relacionados cuando ayude a la lectura.
- Reducir espaciados con cuidado.
- Mantener botones accesibles al tacto.
- Evitar que la información importante quede demasiado pequeña.

La idea es que la interfaz se sienta más compacta en móvil, pero sin sacrificar legibilidad.

### 10.2. Componentes flotantes y overlays

Algunos componentes de PrimeNG despliegan paneles flotantes, como selects, calendarios, menús y autocompletados.
Cuando estos componentes se usan dentro de cards, diálogos, formularios compactos o contenedores con `overflow`, se recomienda revisar que el panel no quede cortado visualmente.

En esos casos puede utilizarse `appendTo` para renderizar el panel flotante fuera del contenedor limitado.

Ejemplos:

```html
<p-select [appendTo]="'body'" />
<p-datepicker [appendTo]="'body'" />
```

Esta recomendación ayuda a evitar que combos, calendarios u otros overlays se muestren incompletos en pantallas pequeñas o dentro de contenedores con límites visuales.

### Ejemplo recomendado para diálogos PrimeNG

```html
<p-dialog
  header="Demo"
  [(visible)]="visible"
  [modal]="true"
  [style]="{ width: 'min(92vw, 30rem)' }">
</p-dialog>
```

O usando breakpoints:

```html
<p-dialog
  header="Demo"
  [(visible)]="visible"
  [modal]="true"
  [style]="{ width: '30rem' }"
  [breakpoints]="{ '640px': '92vw' }">
</p-dialog>
```

---

## 11. Estructura recomendada del proyecto

La estructura base recomendada es:

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

## 12. Carpeta `layout`

La carpeta `layout` contiene la estructura visual principal del template.

Debe incluir:

```txt
sidebar
topbar
footer
menu
menu item
configurador visual
servicio de layout
modelo del menú
servicio anti-parpadeo
```

No debe contener lógica de negocio.

### Ejemplo

```txt
src/app/layout
├── component
│   ├── app-layout
│   ├── app-sidebar
│   ├── app-menu
│   ├── app-menuitem
│   ├── app-topbar
│   ├── app-footer
│   └── app-configurator
│
├── model
│   └── layout-menu.model.ts
│
└── service
    ├── layout.service.ts
    └── route-render.service.ts
```

---

## 13. Carpeta `pages`

La carpeta `pages` contiene las páginas del template.

Estas páginas pueden ser:

- Páginas demo.
- Páginas de ejemplo.
- Páginas de documentación.
- Páginas base.
- Páginas de autenticación.

No deben representar obligatoriamente un negocio específico.

### Secciones recomendadas

```txt
auth            → login, access, error
dashboard       → dashboard demo
crud            → CRUD demo genérico
documentation  → documentación del template
empty           → página vacía base
landing         → página pública
notfound        → página 404
uikit           → demos de componentes PrimeNG
service         → servicios mock para demos
```

---

## 14. Carpeta `uikit`

La carpeta `uikit` contiene demos separadas de componentes PrimeNG.

Ejemplos:

```txt
buttondemo.ts
inputdemo.ts
formlayoutdemo.ts
tabledemo.ts
listdemo.ts
panelsdemo.ts
overlaydemo.ts
messagesdemo.ts
menudemo.ts
treedemo.ts
timelinedemo.ts
chartdemo.ts
filedemo.ts
miscdemo.ts
uikit.routes.ts
```

El objetivo es evitar una página gigante tipo `showcase`.

Cada componente demo debe ser fácil de ubicar y modificar.

---

## 15. Carpeta `core`

La carpeta `core` debe contener infraestructura global del template.

Debe ser genérica y reutilizable.

### `core/guards`

Contiene guards funcionales para proteger rutas.

Ejemplos:

```txt
auth.guard.ts
guest.guard.ts
permission.guard.ts
```

No se recomienda usar guards específicos de negocio como:

```txt
inventario.guard.ts
catastro.guard.ts
ventas.guard.ts
```

### `core/interceptors`

Contiene interceptores HTTP globales.

Ejemplos:

```txt
auth.interceptor.ts
error.interceptor.ts
```

Deben usarse interceptores funcionales, acordes con Angular moderno.

### `core/services`

Contiene servicios globales.

Ejemplos:

```txt
auth.service.ts
token.service.ts
storage.service.ts
loading.service.ts
notification.service.ts
```

No deben colocarse aquí servicios específicos como:

```txt
producto.service.ts
paciente.service.ts
venta.service.ts
```

### `core/models`

Contiene modelos globales.

Ejemplos:

```txt
auth.model.ts
user.model.ts
api-response.model.ts
```

---

## 16. Carpeta `shared`

La carpeta `shared` debe contener elementos reutilizables del template.

No debe existir un `SharedModule`.  
En Angular moderno, los componentes, pipes y directivas deben ser standalone.

### `shared/components`

Componentes reutilizables:

```txt
page-header
empty-state
loading
confirm-dialog
status-tag
metric-card
search-box
breadcrumb
section-title
```

### `shared/pipes`

Pipes reutilizables:

```txt
truncate.pipe.ts
initials.pipe.ts
relative-time.pipe.ts
```

### `shared/directives`

Directivas reutilizables:

```txt
only-numbers.directive.ts
uppercase.directive.ts
autofocus.directive.ts
click-outside.directive.ts
```

### `shared/utils`

Funciones reutilizables:

```txt
date.util.ts
text.util.ts
number.util.ts
validation.util.ts
```

---

## 17. Routing

Lumina NG debe usar routing moderno.

### Recomendado

```ts
{
  path: 'dashboard',
  loadComponent: () =>
    import('./pages/dashboard/dashboard').then((m) => m.Dashboard)
}
```

Para secciones grandes:

```ts
{
  path: 'ui',
  loadChildren: () =>
    import('./pages/uikit/uikit.routes').then((m) => m.uikitRoutes)
}
```

### No recomendado como base principal

Evitar estructurar el proyecto alrededor de `NgModule` clásicos.

---

## 18. Configuración HTTP

El template debe estar preparado para consumir APIs usando `provideHttpClient`.

Ejemplo en `app.config.ts`:

```ts
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient()
  ]
};
```

Cuando se agreguen interceptores:

```ts
import { provideHttpClient, withInterceptors } from '@angular/common/http';

provideHttpClient(
  withInterceptors([
    authInterceptor,
    errorInterceptor
  ])
)
```

---

## 19. Environments

Lumina NG debe usar archivos de entorno.

```txt
src/environments/environment.ts
src/environments/environment.prod.ts
```

### Desarrollo

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

### Producción

```ts
export const environment = {
  production: true,
  apiUrl: 'https://api.example.com'
};
```

No se deben dejar URLs internas, IPs privadas, tokens o datos sensibles en el repositorio público.

---

## 20. Build y ejecución

### Instalar dependencias

```bash
npm install
```

### Ejecutar en desarrollo

```bash
ng serve -o
```

También puede usarse:

```bash
npm start
```

según los scripts definidos en `package.json`.

### Compilar

```bash
ng build
```

o:

```bash
npm run build
```

### Diferencia entre `ng serve -o` y `ng build`

`ng serve -o` sirve para desarrollo.  
Levanta un servidor local, abre el navegador y recarga cambios automáticamente.

`ng build` sirve para verificar que el proyecto compile correctamente y generar los archivos finales en `dist`.

### 20.1. Documentación complementaria recomendada

Para mantener el proyecto ordenado, se recomienda dividir la documentación en archivos con responsabilidades claras.

```txt
README.md
```

Presentación rápida del proyecto, instalación, ejecución, capturas, estado general, autoría y licencia.

```txt
docs/
```

Guías humanas más específicas, por ejemplo estructura de carpetas, tema visual, routing, formularios, tablas, responsive y contribución.

```txt
AI_CONTEXT.md
```

Documento breve y operativo para herramientas de inteligencia artificial.
Debe contener reglas directas, checklist y patrones que la IA debe respetar al modificar el proyecto.

Esta separación permite que la documentación principal siga siendo clara para personas, mientras que las instrucciones para IA se mantienen más concretas y fáciles de aplicar.

---

## 21. Reglas para colaboradores

Las contribuciones deben respetar la identidad del template.

### 21.1. Respetar Angular moderno

No proponer estructuras antiguas basadas en `AppModule`, `SharedModule` o `CoreModule` como arquitectura principal.

Priorizar:

```txt
standalone components
loadComponent
loadChildren
functional guards
functional interceptors
provideHttpClient
app.config.ts
signals cuando tenga sentido
```

### 21.2. Respetar la escala visual

No agrandar innecesariamente:

```txt
inputs
textos
botones
cards
formularios
espaciados
```

El diseño debe mantenerse equilibrado.

### 21.3. Respetar el responsive

Toda pantalla nueva debe funcionar en móvil.

Antes de aceptar una contribución se debe revisar:

```txt
desktop
tablet
mobile
```

### 21.4. No agregar lógica de negocio específica

Evitar que el template se convierta en un sistema específico.

No agregar directamente dominios como:

```txt
inventario real
ventas reales
pacientes reales
catastro real
impuestos reales
```

Si se agregan demos, deben ser genéricas.

### 21.5. Mantener el proyecto IA-friendly

Evitar:

```txt
componentes gigantes
CSS repetido
nombres confusos
maquetaciones difíciles
lógica visual escondida
archivos innecesarios
```

### 21.6. Documentar cambios importantes

Si se agrega una nueva sección, componente o patrón, debe explicarse en la documentación.

---

## 22. Convención de commits

Se recomienda usar commits claros.

Ejemplos:

```txt
feat: agregar componente page-header reutilizable
fix: corregir responsive del sidebar móvil
docs: actualizar guía de instalación
style: ajustar escala visual de formularios
refactor: separar lógica del dashboard
chore: actualizar configuración del proyecto
```

Para commits en español:

```txt
feat: agregar demo de tabla responsive
fix: corregir ancho de diálogo en móvil
docs: documentar estructura de carpetas
style: ajustar espaciado de cards
```

---

## 23. Roadmap futuro

### Corto plazo

- Renombrar todas las referencias antiguas al nombre oficial Lumina NG.
- Eliminar referencias a nombres de demos específicas que no sean genéricas.
- Mejorar el README principal.
- Ordenar `styles.scss` por secciones.
- Crear carpeta `core`.
- Crear carpeta `shared`.
- Agregar `provideHttpClient`.
- Mejorar documentación interna del template.
- Revisar responsive de diálogos y tablas.

### Mediano plazo

- Agregar componentes reutilizables en `shared/components`.
- Agregar pipes standalone reutilizables.
- Agregar directivas standalone reutilizables.
- Crear guía de routing.
- Crear guía de estilos.
- Crear guía para trabajar con IA.
- Crear guía de contribución.
- Mejorar dashboard demo con datos genéricos.
- Mejorar CRUD demo con entidad genérica.
- Agregar más ejemplos de formularios responsive.

### Largo plazo

- Agregar modo claro/oscuro si corresponde.
- Agregar más opciones de layout.
- Agregar más variantes de dashboard.
- Agregar más demos de tablas responsive.
- Agregar documentación visual.
- Agregar pruebas con Vitest.
- Preparar primera versión estable del template.
- Publicar documentación para GitHub Pages o sitio estático.
- Crear releases versionados.

---

## 24. Buenas prácticas recomendadas

### Código

- Usar TypeScript estricto.
- Mantener tipos e interfaces claras.
- Evitar `any` salvo casos justificados.
- Separar responsabilidades.
- Mantener imports limpios.
- Eliminar código comentado innecesario.

### Estilos

- Mantener SCSS ordenado.
- No duplicar clases.
- Evitar estilos globales innecesarios.
- Usar clases reutilizables.
- Cuidar móvil.

### Componentes

- Mantener componentes pequeños.
- Usar standalone components.
- Importar solo los módulos PrimeNG necesarios.
- No sobrecargar las páginas con lógica innecesaria.

### Documentación

- Documentar decisiones importantes.
- Explicar cómo contribuir.
- Explicar cómo mantener la escala visual.
- Explicar cómo mantener el proyecto IA-friendly.
- Explicar versión de Angular utilizada.

---

## 25. Identidad del proyecto

Lumina NG debe reconocerse como un template:

```txt
gratuito
moderno
responsive
limpio
reutilizable
basado en PrimeNG Aura
pensado para Angular 21
amigable para IA
fácil de entender
fácil de modificar
sin amarrarse a un negocio específico
```

La identidad del proyecto se resume en la siguiente frase:

> Lumina NG es un template administrativo gratuito para Angular y PrimeNG Aura, diseñado para ser visualmente equilibrado, responsive y fácil de modificar por desarrolladores e inteligencia artificial.

---

## 26. Nota para futuras contribuciones con IA

Lumina NG está pensado para poder ser mantenido tanto por personas como por herramientas de inteligencia artificial.
Por eso, se recomienda que los proyectos basados en este template incluyan un archivo específico para guiar a la IA durante tareas de edición, migración o refactorización.

Un archivo sugerido es:

```txt
AI_CONTEXT.md
```

Ese documento puede contener reglas operativas más directas, checklist de revisión y patrones que la IA debe seguir.
En cambio, esta documentación principal se mantiene como una guía humana sobre la identidad, estructura y criterios generales del template.

Como recomendación general, cualquier contribución asistida por IA debería cuidar los siguientes aspectos:

- Mantener la escala visual equilibrada.
- Respetar Angular moderno y componentes standalone.
- Evitar duplicar CSS o crear componentes demasiado grandes.
- Conservar PrimeNG como base visual principal.
- Revisar que las pantallas funcionen correctamente en escritorio y móvil.
- Documentar cambios importantes cuando se agregue una nueva sección, componente o patrón.

---

## 27. Estado del proyecto

Lumina NG se encuentra en etapa inicial de construcción y definición de identidad, pero ya cuenta con una base visual más consolidada.

Actualmente ya se avanzó en:

- Nombre oficial.
- Estructura base.
- Documentación general.
- Documentación visual.
- Escala visual base.
- Tokens Lumina.
- Fuente InterVariable cargada localmente.
- Reglas visuales para labels, PrimeNG y dashboard.
- Reglas para IA.
- Guía para colaboradores.

El objetivo actual es seguir consolidando:

- Layout responsive.
- UI Kit.
- Formularios.
- Tablas.
- Estados de carga, vacío y error.
- Dark mode.
- Limpieza de colores fijos.
- Accesibilidad básica.

A partir de esta base, el proyecto podrá evolucionar hacia una plantilla pública más completa y mantenible.

---

## 28. Autoría

**Lumina NG**  
Creado y mantenido por: **Filemon Ayaviri Arcos**

---

## 29. Licencia

La licencia del proyecto debe definirse antes de una publicación formal.

Para un template gratuito y abierto, una opción común podría ser una licencia permisiva como MIT, siempre que el creador decida que ese modelo es adecuado para el proyecto.

---

## 30. Actualizaciones recientes implementadas

Esta sección registra las últimas decisiones y ajustes realizados en Lumina NG durante la revisión visual del template.

### 30.1. Escala visual base consolidada

Se consolidó una escala visual base para que Lumina NG mantenga una apariencia moderada y consistente.

La regla principal es:

```txt
Textos, labels, inputs, botones y cards deben verse equilibrados:
ni demasiado grandes,
ni demasiado pequeños.
```

Se definió que el tamaño base del template se mantiene en:

```scss
html {
  font-size: 14px;
}
```

Por lo tanto:

```txt
1rem = 14px
0.875rem = 12.25px
1.125rem = 15.75px
1.25rem = 17.5px
1.5rem = 21px
1.875rem = 26.25px
```

Esta escala se tomó como base para revisar dashboard, cards, labels, métricas, menú y formularios.

---

### 30.2. Tokens visuales Lumina

Se definió el uso de tokens propios del template para no depender de nombres internos de Tailwind ni de estilos generados.

Los tokens recomendados son:

```scss
:root {
  /* Font family */
  --lumina-font-sans: InterVariable, sans-serif;
  --lumina-font-sans-feature-settings: "cv02", "cv03", "cv04", "cv11";
  --lumina-font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

  --lumina-default-font-family: var(--lumina-font-sans);
  --lumina-default-font-feature-settings: var(--lumina-font-sans-feature-settings);
  --lumina-default-font-variation-settings: normal;

  /* Text scale */
  --lumina-text-xs: 0.75rem;
  --lumina-text-sm: 0.875rem;
  --lumina-text-base: 1rem;
  --lumina-text-lg: 1.125rem;
  --lumina-text-xl: 1.25rem;
  --lumina-text-2xl: 1.5rem;
  --lumina-text-3xl: 1.875rem;

  /* Line height */
  --lumina-leading-tight: 1.25;
  --lumina-leading-snug: 1.375;
  --lumina-leading-normal: 1.5;
  --lumina-leading-relaxed: 1.625;
  --lumina-leading-heading: 1.2;

  /* Font weight */
  --lumina-font-normal: 400;
  --lumina-font-medium: 500;
  --lumina-font-semibold: 600;
  --lumina-font-bold: 700;
}
```

Regla aplicada:

```txt
Usar tokens Lumina en clases propias del template.
No crear tokens Lumina para reemplazar innecesariamente variables propias de PrimeNG.
```

---

### 30.3. Fuente InterVariable cargada localmente

Se decidió que Lumina NG debe usar **InterVariable** como fuente principal real del template.

Antes, el CSS declaraba `InterVariable`, pero si la fuente no estaba instalada en el sistema del usuario, el navegador podía usar una fuente de respaldo como `Segoe UI`.

Para evitar diferencias visuales entre equipos, se incorporó la fuente como recurso local.

Ruta recomendada:

```txt
public/assets/fonts/inter/InterVariable.woff2
```

Archivo opcional para cursiva:

```txt
public/assets/fonts/inter/InterVariable-Italic.woff2
```

Declaración recomendada en `src/styles.scss`:

```scss
@font-face {
  font-family: "InterVariable";
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url("/assets/fonts/inter/InterVariable.woff2") format("woff2");
}
```

Si se usa cursiva real:

```scss
@font-face {
  font-family: "InterVariable";
  font-style: italic;
  font-weight: 100 900;
  font-display: swap;
  src: url("/assets/fonts/inter/InterVariable-Italic.woff2") format("woff2");
}
```

La configuración base recomendada queda en `html`:

```scss
html {
  font-size: 14px;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  font-family: var(--lumina-default-font-family);
  font-feature-settings: var(--lumina-default-font-feature-settings, normal);
  font-variation-settings: var(--lumina-default-font-variation-settings, normal);
  line-height: var(--lumina-leading-normal);
  tab-size: 4;
  -webkit-tap-highlight-color: transparent;
}
```

Y el `body` debe heredar:

```scss
body {
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  line-height: inherit;
}
```

Con esto, Lumina NG queda alineado con la referencia visual basada en:

```txt
InterVariable, sans-serif
font-feature-settings: "cv02", "cv03", "cv04", "cv11"
```

---

### 30.4. Labels de formularios

Se confirmó una decisión importante sobre los labels.

Los labels de formularios no deben forzar:

```scss
font-size: 0.875rem;
```

Motivo:

```txt
html { font-size: 14px; }

0.875rem = 12.25px
```

Ese tamaño hacía que labels como `Email Address` se vieran pequeños.

La regla correcta es dejar que los labels hereden el tamaño base del template:

```txt
label heredado = 1rem = 14px
```

Código recomendado:

```scss
.field label {
  color: var(--p-surface-700);
  // font-size: 0.875rem; // No usar: deja el label muy pequeño.
  line-height: 1.42857;
  font-weight: 500;
}
```

Decisión oficial:

```txt
No forzar font-size en labels.
Mantener el tamaño heredado desde html { font-size: 14px; }.
```

---

### 30.5. PrimeNG no debe sobrescribirse innecesariamente

Se confirmó que Lumina NG no debe modificar estilos propios de PrimeNG si ya se ven correctamente con el tema Aura y la escala base.

No crear overrides globales para:

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
```

Regla:

```txt
PrimeNG debe conservar su comportamiento visual base.
Lumina NG debe personalizar principalmente sus clases propias.
```

Clases propias donde sí se puede trabajar:

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

Conclusión:

```txt
Lo por defecto de PrimeNG + html { font-size: 14px; } forma parte de la identidad visual actual del template.
```

---

### 30.6. Dashboard y cards de métricas

Se ajustó la jerarquía visual del dashboard para que mantenga una escala similar a la referencia revisada.

Reglas definidas:

```txt
Título principal:
1.875rem / 1.2 / 700

Valor de métrica:
1.5rem / 1.25 / 600

Título de card:
1.25rem / 1.25 / 500

Título interno:
1rem / 1.25 / 500

Descripción:
1rem / 1.5 / 400

Texto pequeño de equipo:
0.875rem / 1.25
```

También se definió que las notas de métricas deben permitir un valor destacado.

Ejemplo:

```html
<p class="metric-note">
  <b>12</b> new since last review
</p>
```

Estructura recomendada de datos:

```ts
{
  label: 'Active Sessions',
  value: '24',
  noteStrong: '12',
  noteText: 'new since last review'
}
```

El componente debe ser tolerante:

```txt
Si existe noteStrong, mostrarlo en negrita.
Si no existe noteStrong, mostrar noteText o note sin romper.
```

---

### 30.7. Color inicial del template

El tema base del template está definido desde PrimeNG.

Archivo principal:

```txt
src/app/app.config.ts
```

El preset base recomendado se mantiene como:

```txt
Aura
```

El configurador visual maneja opciones como:

```txt
selectedPrimary
selectedSurface
selectedPreset
```

Valores recomendados por defecto:

```ts
selectedPrimary: 'emerald'
selectedSurface: 'slate'
selectedPreset: 'Aura'
```

Regla:

```txt
El preset Aura debe mantenerse como base.
Los colores primarios deben manejarse desde el configurador o desde variables PrimeNG.
No se deben distribuir colores fijos en todo el template.
```

---

### 30.8. Colores fijos y dark mode

Se identificó que la mayoría del template usa variables PrimeNG, lo cual es correcto.

Variables recomendadas:

```scss
var(--p-surface-900)
var(--p-surface-700)
var(--p-surface-600)
var(--p-surface-500)
var(--p-text-color)
var(--p-text-muted-color)
var(--p-primary-color)
```

Regla general:

```txt
No usar colores fijos como #111827 o #ffffff por todo el template si PrimeNG ya ofrece variables.
```

Excepciones aceptables:

```txt
Muestras visuales del configurador de colores.
Sombras.
Overlay/máscara del layout.
Fallbacks temporales.
```

Pendiente recomendado:

```txt
Hacer una revisión posterior de colores fijos antes de cerrar soporte completo para dark mode.
```

---

### 30.9. Problemas de cache durante desarrollo

Se observó que durante navegación entre rutas lazy/dinámicas puede aparecer un error de desarrollo relacionado con dependencias optimizadas o chunks desactualizados.

Ejemplo:

```txt
504 (Outdated Optimize Dep)
Failed to fetch dynamically imported module
```

Solución recomendada:

```bash
ng cache clean
```

También puede limpiarse manualmente:

```powershell
Remove-Item -Recurse -Force .angular\cache
```

Luego reiniciar:

```bash
ng serve -o
```

Y hacer recarga fuerte en el navegador:

```txt
Ctrl + Shift + R
```

Este error no necesariamente indica que las rutas estén mal; normalmente se relaciona con cache del servidor de desarrollo o del navegador.

---

## 31. Estado actualizado del proyecto

Lumina NG avanzó en la consolidación de su identidad visual.

Actualmente se encuentra más definido en estos puntos:

```txt
Nombre oficial.
Filosofía visual.
Escala base de 14px.
Uso real de InterVariable.
Tokens propios Lumina.
Regla de no sobrescribir PrimeNG innecesariamente.
Labels heredados desde html.
Dashboard con jerarquía visual más clara.
Documentación visual separada.
```

Quedan como siguientes revisiones recomendadas:

```txt
Responsive real del dashboard y sidebar.
Estados activos, hover y submenús del menú.
Dark mode.
Formularios completos.
Tablas y CRUD.
Estados empty/loading/error.
Accesibilidad básica.
Limpieza de colores fijos.
Documentación por áreas: routing, theme, folder structure.
```

---

## 32. Roadmap actualizado

### Completado o avanzado

```txt
Nombre oficial Lumina NG.
Documentación general del proyecto.
Guía visual de pantalla principal.
Escala visual base.
Tokens Lumina.
Carga local de InterVariable.
Regla de labels heredados.
Regla de no modificar PrimeNG innecesariamente.
Ajustes visuales del dashboard.
Separación de notas de métricas con valor destacado.
```

### Siguiente etapa recomendada

```txt
Responsive dashboard/sidebar.
Estados del menú.
Dark mode.
Revisión de formularios completos.
Revisión de tablas y CRUD.
Limpieza de colores fijos.
Estados empty/loading/error.
```

### Pendiente para versión pública estable

```txt
Definir licencia.
Completar README final.
Agregar guías docs/theme.md, docs/routing.md y docs/folder-structure.md.
Revisar accesibilidad.
Revisar build final.
Crear release versionado.
```

---

## 33. Conclusión

Lumina NG busca ser más que una plantilla visual.  
Su objetivo es ser una base limpia, moderna y reutilizable para construir sistemas administrativos con Angular y PrimeNG.

El valor principal del proyecto está en combinar:

```txt
Angular moderno
PrimeNG Aura
diseño equilibrado
estructura clara
responsive real
facilidad para IA
documentación completa
filosofía open source
```

Con esta visión, Lumina NG puede convertirse en un template útil para desarrolladores que buscan una alternativa gratuita, clara y fácil de adaptar a distintos proyectos.
