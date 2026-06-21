# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

# Proyecto: Sitio Web Personal — Lulú Tapia

## Contexto del proyecto

Este repositorio es el proyecto completo del sitio web personal de **Lourdes del Ángel Vázquez Tapia**, artista freelance conocida profesionalmente como **Lulú Tapia**. Es un trabajo académico con múltiples fases entregables, que al final debe producir un sitio web funcional real.

El trabajo pertenece a una materia de diseño/desarrollo web. El profesor evalúa con el escrito entregado como guía — es importante ceñirse **exactamente** a los puntos pedidos en cada actividad sin agregar secciones no solicitadas ni cambiar nombres de secciones.

---

## Datos de la marca

| Campo | Valor |
|---|---|
| Nombre completo | Lourdes del Ángel Vázquez Tapia |
| Nombre de marca | Lulú Tapia |
| Tagline | "Arte que cobra vida." |
| URL tentativa | www.lulutapia.com (alt: www.lulutapia.art) |

### Servicios que ofrece
- Ilustración digital
- Modelado 3D
- Storyboard
- Animación (2D / motion graphics)
- Creación y diseño de personajes
- Vectorizado

### Audiencia objetivo
- Estudios de animación y producción
- Clientes independientes (emprendedores, autores, creadores de contenido)
- Desarrolladores de videojuegos (indie)
- Agencias y empresas (marketing, editorial)

### Modelo de negocio
1. Servicios freelance por proyecto (comisiones directas)
2. Paquetes de servicios predefinidos
3. Licencias de uso de obra
4. Contenido digital descargable *(a futuro)*

---

## Identidad visual (acordada en Actividad 1)

| Elemento | Valor |
|---|---|
| Color primario | Púrpura `#6B3FA0` |
| Color secundario | Turquesa `#2DC7C7` |
| Acento | Rosa `#E91E8C` (reemplazó al naranja original) |
| Decorativo | Lila `#C084FC` |
| Fondo oscuro | `#1A1A2E` |
| Fondo claro | `#F0F0F0` |
| Tipografía títulos | Playfair Display / Abril Fatface |
| Tipografía cuerpo | DM Sans / Inter |
| Tono visual | Colorido, expresivo, profesional pero cálido |

### Secciones del sitio
1. **Inicio (Home)** — Hero, trabajos destacados, CTA
2. **Portafolio** — Galería filtrable por categoría
3. **Servicios** — 6 tarjetas de servicio con botón de cotización
4. **Sobre mí** — Biografía, habilidades, CV descargable
5. **Blog / Proceso creativo** — Entradas de proceso artístico
6. **Contacto** — Formulario + redes sociales

---

## Estructura del repositorio

```
lulutapia-web/
├── CLAUDE.md          ← este archivo
├── README.md          ← contexto del proyecto
├── AGENTS.md          ← orientación para agentes de IA
├── latex/             ← documentos de planeación (PDF académicos)
│   ├── main.tex       ← Actividad 1: Propuesta del sitio web
│   └── main.pdf       ← PDF compilado (14 páginas, entregado)
├── pencil/            ← mockups de alta fidelidad (Actividad 2)
│   ├── yuyu.pen       ← archivo Pencil con 6 frames (BINARIO CIFRADO)
│   └── images/        ← imágenes exportadas de los mockups
├── frontend/          ← sitio web (implementación — Actividad 3)
└── backend/           ← servidor/API (fase futura, si aplica)
```

---

## Fases del proyecto

### ✅ COMPLETADO — Actividad 1: Planeación del Proyecto Web
**Entregable:** PDF generado con LaTeX (`latex/main.pdf`, 14 páginas)

Contenido del documento (en este orden exacto, como pide el escrito):
1. Portada — materia: "Arquitectura de información y diseño", profesora: María Isela García Velázquez, institución: UNITEC
2. Tema, mensaje, metas y objetivo
3. Lista de secciones y sus funciones
4. Audiencia o público y competencias + Modelo de negocio
5. Mapa del sitio (diagrama TikZ jerárquico)
6. Diseño de navegación por contenidos (con flujo de usuario)
7. Descripción del estilo visual (paleta, tipografía, tono)
8. Sistema de organización
9. Wireframes (4 páginas: Home, Portafolio, Servicios, Contacto) — dibujados en TikZ, escala 0.82
10. Conclusión
11. Referencias bibliográficas (formato APA)

**Cómo compilar el PDF:**
```bash
cd latex
pdflatex -interaction=nonstopmode main.tex
pdflatex -interaction=nonstopmode main.tex
```

**Opciones activas en el .tex:** `tocdepth=1` (solo secciones principales), sin encabezados, solo número de página al pie.

---

### ✅ COMPLETADO — Actividad 2: Diseño Visual Formal (Mockups)
**Entregable:** `pencil/yuyu.pen` — abierto con la extensión Pencil en VS Code (`highagency.pencildev`)

6 frames de 1440px de ancho:

| Frame | Alto |
|---|---|
| Home | 2400px |
| Portafolio | 2250px |
| Servicios | 2400px |
| Sobre mí | 2200px |
| Blog | 2750px |
| Contacto | 2000px |

**Estilo aplicado en los mockups:**
- Fondo `#1A1A2E`, cards en `#2A1845`, secciones en `#221533`
- Estética "maximalista artesanal": parches de color decorativos rotados, elementos tipo cinta adhesiva, confeti de puntos
- Tipografía: **Baloo 2** para títulos (no Playfair/Abril como en el plan original), **Inter** para cuerpo

**IMPORTANTE:** `yuyu.pen` es un archivo binario cifrado — acceder solo mediante herramientas MCP de Pencil (`highagency.pencildev`). Nunca abrir con `cat`, `Read` u otros lectores de texto.

---

### ⏳ PENDIENTE — Actividad 3: Implementación Frontend
**Objetivo:** Construir el sitio web funcional en la carpeta `frontend/`.
- Stack a decidir: HTML/CSS/JS puro, Astro o Next.js según requisitos académicos
- Hosting gratuito preferido: Vercel o Netlify (conectado a este repo de GitHub)

**Requisitos del sitio:**
- Diseño responsive (mobile-first) con menú hamburguesa en móvil
- Galería filtrable en Portafolio (por categoría de servicio)
- Formulario de contacto funcional
- Animaciones fade-in al hacer scroll, efectos hover en portafolio

---

### ⏳ PENDIENTE — Actividad futura: Backend (si aplica)
**Objetivo:** Lógica de servidor para el formulario de contacto u otras funciones.
- Carpeta: `backend/`
- Stack no definido — dependerá de lo que requiera la materia

---

## Notas importantes para Claude

- **No cambiar la estructura de secciones** de los documentos académicos. El profesor califica siguiendo el escrito al pie de la letra.
- El documento LaTeX usa `pdflatex` (no `xelatex` ni `lualatex`). TeX Live 2026 está instalado en el sistema.
- La usuaria habla español — responder siempre en español.
- Preferir soluciones limpias sobre parches encima de parches.
- Para cambios en el `.tex`, siempre compilar dos veces para que el TOC se actualice.
- El repositorio se subirá a GitHub — organizar los commits de forma coherente por actividad.
- El apellido correcto es **Vásquez** (con s antes de z), no Vázquez.

## Historial de decisiones relevantes

| Decisión | Detalle |
|---|---|
| Paleta de color | Naranja original reemplazado por Rosa `#E91E8C` + Lila `#C084FC` |
| Tema visual | Oscuro (`#1A1A2E`) como fondo principal |
| Índice del PDF | `tocdepth=1` — solo secciones principales, sin subsecciones |
| Encabezado del PDF | Eliminado — solo queda número de página al pie |
| Wireframes | Dibujados en TikZ dentro del mismo `.tex`, escala 0.82 |
| Mockups | Hechos en Pencil VS Code (`highagency.pencildev`), no en Figma |
| Tipografía mockups | Baloo 2 para títulos (el plan original decía Playfair Display / Abril Fatface) |
