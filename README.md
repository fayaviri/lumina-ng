# Lumina NG

**Template administrativo gratuito para Angular + PrimeNG Aura**  
**Creado y mantenido por: Filemon Ayaviri Arcos**

---

## Descripción

**Lumina NG** es un template administrativo gratuito construido con Angular moderno y PrimeNG Aura.

Su objetivo es ofrecer una base visual limpia, profesional, responsive y fácil de modificar, tanto por desarrolladores como por herramientas de inteligencia artificial.

Lumina NG no está pensado como un sistema específico de inventario, ventas, salud, gestión documental, catastro u otro dominio particular. Su propósito es servir como una plantilla base reutilizable para construir diferentes tipos de sistemas administrativos.

---

## Características principales

- Angular moderno.
- PrimeNG con tema Aura.
- Componentes standalone.
- Rutas lazy con `loadComponent` y `loadChildren`.
- Layout administrativo con sidebar y topbar.
- Páginas demo reutilizables.
- Estructura clara y mantenible.
- Diseño responsive.
- Escala visual equilibrada.
- Preparado para consumir APIs con `provideHttpClient()`.
- Carpetas `core` y `shared` preparadas para proyectos reales.
- Documentación humana y documentación para IA separadas.

---

## Objetivos del template

Lumina NG se construye sobre cuatro objetivos principales:

1. **Escala visual equilibrada**  
   Inputs, labels, botones, textos, cards y formularios deben sentirse cómodos, sin verse demasiado grandes ni demasiado pequeños.

2. **Estructura fácil de mantener**  
   El proyecto busca evitar componentes gigantes, CSS duplicado y maquetaciones difíciles de entender.

3. **Responsive real**  
   Las pantallas deben funcionar correctamente en escritorio, laptop, tablet y móvil.

4. **Angular moderno**  
   El template prioriza standalone components, lazy loading, configuración desde `app.config.ts`, `provideHttpClient`, functional guards e interceptors.

---

## Stack tecnológico

```txt
Angular CLI       : 21.2.7
Angular           : 21.2.9
Node.js           : 24.15.0
npm               : 11.12.1
PrimeNG           : 21.1.6
PrimeIcons        : 7.0.0
PrimeUIX Themes   : 2.0.3
TypeScript        : 5.9.3
RxJS              : 7.8.2
Vitest            : 4.1.5
SCSS
```

---

## Estructura general

```txt
src/app
├── core
│   ├── guards
│   ├── interceptors
│   ├── models
│   └── services
│
├── layout
│   ├── component
│   ├── model
│   └── service
│
├── pages
│   ├── auth
│   ├── crud
│   ├── dashboard
│   ├── documentation
│   ├── empty
│   ├── landing
│   ├── notfound
│   ├── service
│   └── uikit
│
└── shared
    ├── components
    ├── directives
    ├── pipes
    └── utils
```

---

## Instalación

Instalar dependencias:

```bash
npm install
```

---

## Ejecutar en desarrollo

```bash
npm start
```

También puede usarse:

```bash
ng serve -o
```

---

## Compilar el proyecto

```bash
npm run build
```

`ng serve` o `npm start` sirven para desarrollo con recarga automática.

`npm run build` genera la salida final del proyecto en `dist/` y debe usarse antes de publicar o desplegar.

---

## Archivos de entorno

Lumina NG está preparado para usar archivos de entorno.

Desarrollo:

```ts
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

Producción:

```ts
// src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.example.com'
};
```

Se recomienda no dejar URLs internas, IPs privadas, tokens o datos sensibles en un repositorio público.

---

## Documentación

El proyecto incluye documentación separada para diferentes usos:

- [Documentación completa de Lumina NG](./DOCUMENTACION_COMPLETA_LUMINA_NG.md)  
  Documento principal para personas. Explica la filosofía, estructura, identidad visual, objetivos, recomendaciones y estado general del template.

- [Contexto para IA](./AI_CONTEXT.md)  
  Documento operativo para herramientas de inteligencia artificial. Contiene reglas, criterios y checklist para modificar el proyecto sin romper su estructura o identidad visual.

---

## Uso con herramientas de IA

Lumina NG incluye el archivo [AI_CONTEXT.md](./AI_CONTEXT.md), pensado para trabajar con asistentes de inteligencia artificial como Claude, ChatGPT, Cursor u otras herramientas similares.

Cuando se use una IA para modificar el proyecto, se recomienda darle prioridad a:

```txt
AI_CONTEXT.md
```

La documentación completa:

```txt
DOCUMENTACION_COMPLETA_LUMINA_NG.md
```

está pensada principalmente para lectura humana. No es necesario cargarla siempre como contexto de IA, ya que puede aumentar el consumo de tokens. Puede consultarse cuando se necesite entender la filosofía general, la identidad visual o las decisiones de diseño del template.

Puedes leerla aquí:

- [Documentación completa de Lumina NG](./DOCUMENTACION_COMPLETA_LUMINA_NG.md)

---

## Principios visuales recomendados

Lumina NG busca mantener una apariencia:

```txt
limpia
moderna
responsive
profesional
equilibrada
fácil de modificar
```

Recomendaciones generales:

- Mantener una escala visual moderada.
- Evitar textos, inputs, botones o cards demasiado grandes.
- Evitar textos demasiado pequeños en información importante.
- Usar PrimeNG como base visual.
- Usar variables del tema cuando sea posible.
- Evitar duplicar CSS innecesariamente.
- Mantener formularios claros, compactos y cómodos.
- Revisar pantallas en escritorio, tablet y móvil.

---

## PrimeNG

Lumina NG usa PrimeNG como biblioteca principal de componentes visuales.

Componentes comunes:

```txt
p-button
p-inputText
p-select
p-datepicker
p-dialog
p-table
p-card
p-toast
p-confirmDialog
```

Se recomienda aprovechar el comportamiento visual base de PrimeNG antes de crear soluciones personalizadas desde cero.

---

## Angular moderno

Lumina NG prioriza patrones modernos de Angular:

```txt
standalone components
loadComponent
loadChildren
provideHttpClient
app.config.ts
functional guards
functional interceptors
signals cuando tenga sentido
```

No se recomienda construir la arquitectura principal alrededor de `NgModule`, `SharedModule` o `CoreModule` clásicos.

---

## Template base y sistemas derivados

Lumina NG puede usarse de dos formas:

### Como template base

Puede conservar:

```txt
dashboard demo
uikit
auth pages
crud demo
landing
documentation page
empty page
notfound page
```

### Como base para un sistema real

Es válido retirar o separar páginas demo que no sean necesarias para el sistema final.

Por ejemplo, un sistema derivado puede conservar solo:

```txt
layout
auth
core
shared
pages reales del sistema
```

---

## Contribución

Las contribuciones deben respetar la identidad general del template.

Se recomienda:

- Mantener Angular moderno.
- Usar componentes standalone.
- Evitar CSS duplicado.
- Mantener nombres claros.
- No convertir el template en un sistema de negocio específico.
- Documentar cambios importantes.
- Revisar responsive antes de entregar cambios.
- Ejecutar `npm run build` antes de cerrar una modificación importante.

Convención sugerida de commits:

```txt
feat: agregar nuevo componente
fix: corregir responsive del sidebar
docs: actualizar documentación
style: ajustar escala visual
refactor: mejorar estructura de componente
chore: actualizar configuración
```

---

## Estado del proyecto

Lumina NG se encuentra en etapa de construcción y consolidación.

Actualmente ya cuenta con:

- Nombre oficial.
- Base Angular moderna.
- PrimeNG Aura.
- Layout administrativo.
- Escala visual base.
- Fuente InterVariable local.
- Documentación humana.
- Contexto para IA.
- Estructura inicial `core`, `shared`, `layout` y `pages`.

Siguientes mejoras recomendadas:

- Mejorar responsive del dashboard y sidebar.
- Consolidar componentes reutilizables en `shared`.
- Revisar formularios completos.
- Revisar tablas y CRUD.
- Mejorar estados empty, loading y error.
- Revisar dark mode.
- Definir licencia final.
- Preparar una primera versión estable.

---

## Autoría

**Lumina NG**  
Creado y mantenido por: **Filemon Ayaviri Arcos**

---

## Licencia

La licencia del proyecto debe definirse antes de una publicación formal.

Para un template gratuito y abierto, una opción común podría ser una licencia permisiva como MIT, siempre que el creador decida que ese modelo es adecuado para el proyecto.
