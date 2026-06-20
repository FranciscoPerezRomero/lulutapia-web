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
portfolioyuyu/
├── CLAUDE.md          ← este archivo
├── latex/             ← documentos de planeación (PDF académicos)
│   ├── main.tex       ← Actividad 1: Propuesta del sitio web
│   └── main.pdf       ← PDF compilado (15 páginas)
├── frontend/          ← sitio web (implementación — fase futura)
└── backend/           ← servidor/API (fase futura, si aplica)
```

---

## Fases del proyecto

### ✅ COMPLETADO — Actividad 1: Planeación del Proyecto Web
**Entregable:** PDF generado con LaTeX (`latex/main.pdf`)

Contenido del documento (en este orden exacto, como pide el escrito):
1. Portada — con planteamiento, formato del entregable y URL tentativa
2. Tema, mensaje, metas y objetivo
3. Lista de secciones y sus funciones
4. Audiencia o público y competencias + Modelo de negocio
5. Mapa del sitio (diagrama TikZ jerárquico)
6. Diseño de navegación por contenidos (con flujo de usuario)
7. Descripción del estilo visual (paleta, tipografía, tono)
8. Sistema de organización
9. Wireframes (4 páginas: Home, Portafolio, Servicios, Contacto) — dibujados en TikZ
10. Conclusión
11. Referencias bibliográficas (formato APA)

**Cómo compilar el PDF:**
```bash
cd Documents/fullstack/portfolioyuyu/latex
pdflatex -interaction=nonstopmode main.tex
pdflatex -interaction=nonstopmode main.tex  # segunda pasada para TOC
```

**Pendiente antes de entregar Actividad 1:**
- Completar en `main.tex` los campos `[Nombre de la materia]`, `[Nombre del profesor(a)]`, `[Nombre de la institución]` en la portada.

---

### ⏳ PENDIENTE — Actividad 2: Diseño Visual Formal
**Objetivo:** Diseño visual detallado del sitio (mockups de alta fidelidad).
- Herramienta probable: Figma (gratuito), Canva, Adobe XD u otra libre
- Se basará en los wireframes y la identidad visual de la Actividad 1
- Se espera que los diseños reflejen la paleta, tipografía y tono acordados

---

### ⏳ PENDIENTE — Actividad 3: Implementación Frontend
**Objetivo:** Construir el sitio web funcional en la carpeta `frontend/`.
- Stack no definido aún — decidir con la usuaria según requisitos académicos y preferencias
- Opciones probables: HTML/CSS/JS puro, Astro, Next.js, o framework libre
- El sitio debe ser una página web real al final
- Preferiblemente con hosting gratuito (GitHub Pages, Vercel, Netlify)

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
