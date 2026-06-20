# Sitio Web Personal — Lulú Tapia

Repositorio del proyecto académico de diseño y desarrollo web para **Lourdes del Ángel Vásquez Tapia**, artista freelance conocida como **Lulú Tapia**.

---

## Datos de la marca

| Campo | Valor |
|---|---|
| Nombre completo | Lourdes del Ángel Vásquez Tapia |
| Nombre de marca | Lulú Tapia |
| Tagline | "Arte que cobra vida." |
| URL tentativa | www.lulutapia.com (alt: www.lulutapia.art) |

### Servicios
Ilustración digital · Modelado 3D · Storyboard · Animación (2D / motion graphics) · Creación y diseño de personajes · Vectorizado

### Audiencia objetivo
- Estudios de animación y producción
- Clientes independientes (emprendedores, autores, creadores de contenido)
- Desarrolladores de videojuegos indie
- Agencias y empresas (marketing, editorial)

---

## Identidad visual

| Elemento | Valor |
|---|---|
| Color primario | Púrpura `#6B3FA0` |
| Color secundario | Turquesa `#2DC7C7` |
| Acento | Rosa `#E91E8C` |
| Decorativo | Lila `#C084FC` |
| Fondo oscuro | `#1A1A2E` |
| Fondo claro | `#F0F0F0` |
| Tipografía títulos | Playfair Display / Abril Fatface |
| Tipografía cuerpo | DM Sans / Inter |
| Tono visual | Colorido, expresivo, profesional pero cálido |

---

## Secciones del sitio

| # | Sección | Función principal |
|---|---|---|
| 1 | **Inicio (Home)** | Hero, trabajos destacados, CTA |
| 2 | **Portafolio** | Galería filtrable por categoría |
| 3 | **Servicios** | 6 tarjetas de servicio con botón de cotización |
| 4 | **Sobre mí** | Biografía, habilidades, CV descargable |
| 5 | **Blog / Proceso creativo** | Entradas de proceso artístico |
| 6 | **Contacto** | Formulario + redes sociales |

---

## Estructura del repositorio

```
portfolioyuyu/
├── CLAUDE.md          ← instrucciones para Claude Code
├── README.md          ← este archivo (contexto del proyecto)
├── latex/             ← documento de planeación académica
│   ├── main.tex       ← fuente LaTeX (Actividad 1)
│   └── main.pdf       ← PDF compilado y entregado (14 páginas)
├── pencil/            ← mockups de alta fidelidad
│   └── yuyu.pen       ← archivo Pencil con los 6 frames de diseño
├── frontend/          ← sitio web (Actividad 3 — pendiente)
└── backend/           ← servidor/API (fase futura, si aplica)
```

---

## Estado del proyecto

### ✅ Actividad 1 — Planeación del Proyecto Web (COMPLETADA)

Entregable: `latex/main.pdf` (14 páginas, compilado con pdflatex / TeX Live 2026)

El documento cubre en este orden exacto (estructura requerida por el profesor):
1. Portada con datos de la alumna, materia, profesor e institución
2. Tema, mensaje, metas y objetivo
3. Lista de secciones y sus funciones
4. Audiencia o público, competencias y modelo de negocio
5. Mapa del sitio (diagrama TikZ jerárquico)
6. Diseño de navegación por contenidos (flujo de usuario)
7. Descripción del estilo visual (paleta, tipografía, tono)
8. Sistema de organización
9. Wireframes en TikZ — 4 páginas: Home, Portafolio, Servicios, Contacto
10. Conclusión
11. Referencias bibliográficas (formato APA)

**Datos de la portada (ya rellenados):**
- Materia: Arquitectura de información y diseño
- Profesor(a): María Isela García Velázquez
- Institución: Universidad Tecnológica de México (UNITEC)

**Cómo compilar el PDF:**
```bash
cd latex
pdflatex -interaction=nonstopmode main.tex
pdflatex -interaction=nonstopmode main.tex  # segunda pasada para TOC
```

---

### ✅ Mockups de Alta Fidelidad (COMPLETADOS)

Archivo: `pencil/yuyu.pen` — abierto con la extensión Pencil en VS Code (`highagency.pencildev`)

Contiene 6 frames (1440px de ancho cada uno):

| Frame | ID | Alto |
|---|---|---|
| Home | `eDSvo` | 2400px |
| Portafolio | `g04ee` | 2250px |
| Servicios | `toWeY` | 2400px |
| Sobre mí | `SB0TF` | 2200px |
| Blog | `xrpDG` | 2750px |
| Contacto | `pETdr` | 2000px |

**Estilo visual aplicado en los mockups:**
- Fondo oscuro `#1A1A2E` (tema principal)
- Cards en `#2A1845`, secciones en `#221533`
- Estética "maximalista artesanal": parches de color decorativos rotados, elementos tipo cinta adhesiva, puntos como confeti
- Tipografía: "Baloo 2" para títulos, "Inter" para cuerpo

---

### ⏳ Actividad 2 — Diseño Visual Formal (PENDIENTE)

Los mockups de Pencil sirven como base. El siguiente paso es:
- Refinar los diseños o exportarlos como referencia visual definitiva
- Decidir si se presenta el `.pen` directamente o se exportan imágenes

---

### ⏳ Actividad 3 — Implementación Frontend (SIGUIENTE FASE)

**Carpeta destino:** `frontend/`

**Stack a decidir** (opciones discutidas):
- HTML/CSS/JS puro — más simple, sin dependencias
- Astro — ideal para sitios estáticos con componentes
- Next.js — si se necesita SSR o más complejidad

**Hosting gratuito recomendado:** Vercel o Netlify (conectado a este repo de GitHub)

**Requisitos del sitio:**
- Diseño responsive (mobile-first)
- Galería filtrable en Portafolio (filtros por categoría de servicio)
- Formulario de contacto funcional
- Animaciones suaves (fade-in al hacer scroll)
- Efectos hover en piezas del portafolio
- Menú hamburguesa en móvil

---

### ⏳ Fase futura — Backend (SI APLICA)

**Carpeta destino:** `backend/`

Posibles usos:
- Procesamiento del formulario de contacto (envío de email)
- CMS headless para el blog

---

## Modelo de negocio

1. **Servicios freelance por proyecto** — comisiones directas cotizadas por alcance
2. **Paquetes predefinidos** — ej. Paquete de personaje (diseño + turnaround + expresiones)
3. **Licencias de uso de obra** — uso comercial de piezas del portafolio
4. **Contenido digital descargable** *(a futuro)* — brushes, texturas, personajes base

---

## Notas importantes para Claude Code

- La usuaria habla español — responder siempre en **español**
- El profesor evalúa siguiendo el escrito al pie de la letra — no agregar secciones no solicitadas
- LaTeX usa `pdflatex` (NO xelatex ni lualatex); siempre compilar **dos veces**
- El archivo `.pen` es binario cifrado — acceder solo vía herramientas MCP de Pencil, nunca con `cat`/`Read`
- Preferir soluciones limpias sobre parches acumulados
- La paleta usa **Vásquez** (con s antes de z) — no Vázquez
- Commits organizados por actividad académica

---

## Historial de decisiones relevantes

| Decisión | Detalle |
|---|---|
| Paleta de color | Naranja original reemplazado por Rosa `#E91E8C` + Lila `#C084FC` |
| Tema visual | Oscuro (`#1A1A2E`) como fondo principal |
| Índice del PDF | `tocdepth=1` — solo secciones principales, sin subsecciones |
| Encabezado del PDF | Eliminado — solo queda número de página al pie |
| Wireframes | Dibujados en TikZ dentro del mismo `.tex`, escala 0.82 |
| Mockups | Hechos en Pencil VS Code (no Figma), archivo `yuyu.pen` |
