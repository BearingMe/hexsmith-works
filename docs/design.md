---
colors:
  background: "#090d12"
  background-soft: "#0d131a"
  background-raised: "#111820"
  surface: "#171f29"
  surface-raised: "#202a35"
  line: "#2b3947"
  line-soft: "#1c2833"
  foreground: "#f1f5f9"
  text-secondary: "#bfccd7"
  text-muted: "#9aaaba"
  text-dim: "#718392"
  accent: "#58d5e8"
  accent-secondary: "#8294ff"
  metal: "#c2d0db"
typography:
  body:
    fontFamily: "Geist Sans"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
  hero:
    fontFamily: "Geist Sans"
    fontSize: "clamp(54px, 6vw, 82px)"
    fontWeight: 540
    lineHeight: 0.99
  sectionHeading:
    fontFamily: "Geist Sans"
    fontSize: "clamp(39px, 4.5vw, 60px)"
    fontWeight: 510
    lineHeight: 1.07
  monoLabel:
    fontFamily: "Geist Mono"
    fontSize: "10px"
    fontWeight: 450
    letterSpacing: "0.11em"
    lineHeight: 1.5
layout:
  contentMaxWidth: "1260px"
  desktopGutter: "48px"
  tabletGutter: "32px"
  mobileGutter: "21px"
  narrowMobileGutter: "17px"
  sectionPadding: "clamp(82px, 10vw, 138px)"
spacing:
  formalScale: false
  commonValues: ["4px", "8px", "12px", "16px", "24px", "32px", "48px"]
shape:
  smallRadius: "3px"
  circularRadius: "50%"
motion:
  transition: "160ms ease"
  reducedMotionDuration: "0.01ms"
---

## Overview

The visual language is dark, cool, and editorial: graphite surfaces, fine structural rules, restrained cyan/periwinkle signals, and precise technical labels. It should feel like an engineering inspection interface, not a fantasy or warm-toned forge motif. The site has a single dark theme; no yellow or orange palette is defined.

## Colors

The values above are extracted from the `:root` variables in `src/app/globals.css`. Keep their CSS variable names as the source of truth.

- **Backgrounds and surfaces** separate the page canvas (`background`) from section fields (`background-soft` / `background-raised`) and raised controls (`surface` / `surface-raised`).
- **Text roles** progress from high-emphasis `foreground` through `text-secondary` and `text-muted` to `text-dim`. Reserve the dimmest role for short labels and secondary information.
- **Accent cyan** marks actions, focus outlines, workflow signals, and selected SVG detail. **Accent periwinkle** is a secondary data/diagram signal, not a competing primary action color.
- **Line colors** provide quiet dividers and diagram structure. `metal` is a cool neutral for brand and illustration details.

Core token contrast was calculated using WCAG relative luminance: foreground/background **17.78:1**, secondary/background **11.91:1**, muted/background **8.19:1**, dim/background **4.98:1**, cyan/background **11.22:1**, and foreground/surface **15.16:1**. These core pairs meet WCAG AA for normal text where applicable; this does not certify every hard-coded illustration color or translucent overlay. Check new text/background combinations rather than assuming every accent is readable on every surface.

## Typography

`src/app/layout.tsx` loads variable **Geist Sans** and **Geist Mono** with `next/font`. Sans carries body copy and display headings; mono is for numbered labels, coordinates, and compact technical annotations. Keep labels short and letter-spaced, and use the responsive heading clamps in the CSS rather than introducing a competing display typeface.

## Spacing and layout

There is no formal spacing-token scale in the CSS. The values listed in the front matter are common observed increments, not a new token contract. Prefer existing component spacing and responsive clamps over creating near-duplicate values.

The content width caps at 1260px. Page gutters are 48px on wide screens, 32px below 1020px, 21px below 760px, and 17px at 390px or narrower. Shared section padding uses `clamp(82px, 10vw, 138px)`. The layout is asymmetric and editorial, using rule-based separators and structured lists instead of uniform card grids.

## Shape, elevation, and motion

Controls and outlined panels use a restrained 3px radius; circular indicators use 50%. There is no general elevation scale: shadows are local to focus/status halos and the mobile navigation sheet. Transitions use short 160ms ease changes. `prefers-reduced-motion` reduces animation/transition duration and disables smooth scrolling; preserve this behavior when extending motion.

## Tailwind CSS v4 and application

`src/app/globals.css` is the source of truth. Its `:root` variables hold the palette and base fonts; `@theme inline` maps those variables to Tailwind color and font utilities. Most current layout and visual treatments use named CSS classes in that file, with Tailwind v4 available for utility composition. Reuse the existing CSS variables/classes before adding new literals or parallel tokens. Keep component structure out of this file; see [the architecture guide](./architecture.md) for ownership boundaries.
