# Design System — Conduta Saúde

## Direction

Medical consulting brand targeting individual doctors (not clinics) in Brazil.
Warm, trustworthy, human. Never dark/techy. Never generic SaaS.

**Personality:** Specialist, empathetic, direct, modern.
**Tone:** Professional but approachable. Speaks TO the doctor, not about systems.

---

## Color Tokens

### Primitive

| Token | Value | Usage |
|-------|-------|-------|
| `sky-500` | `#0EA5E9` | Primary accent |
| `sky-700` | `#0369A1` | Buttons, interactive |
| `sky-900` | `#0C4A6E` | Button hover |
| `teal-500` | `#14B8A6` | **LOGO GRADIENT ONLY** |
| `cream` | `#FAFAF7` | Page background |
| `white` | `#FFFFFF` | Card background |
| `dark` | `#1A1A2E` | Primary text |
| `gray-600` | `#555566` | Secondary text |
| `gray-400` | `#7C7C8A` | Muted text |
| `border` | `#E8E8E0` | Borders, dividers |
| `accent-light` | `rgba(14,165,233,0.08)` | Badge/tag backgrounds |

### Semantic

| Token | Value | Usage |
|-------|-------|-------|
| `--text` | `#1A1A2E` | Body text |
| `--text-secondary` | `#555566` | Descriptions, subtitles |
| `--text-muted` | `#7C7C8A` | Captions, labels |
| `--accent` | `#0EA5E9` | Links, highlights |
| `--accent-btn` | `#0369A1` | Primary buttons |
| `--accent-hover` | `#0C4A6E` | Button hover |
| `--cream` | `#FAFAF7` | Section backgrounds |
| `--border` | `#E8E8E0` | Card borders |

### Specialty Colors (demos only)

| Specialty | Primary | Hover | Light BG |
|-----------|---------|-------|----------|
| Fertilidade | `#7C3AED` | `#5B21B6` | `#F3E8FF` |
| Cardiologia | `#1E3A5F` | `#0c2040` | `#EFF6FF` |
| Dermatologia | `#E11D48` | `#BE123C` | `#FFF1F2` |
| Pediatria | `#D97706` | `#B45309` | `#FEF3C7` |
| Odontologia | `#0EA5E9` | `#0369A1` | `#F0F9FF` |

### Rules

- **NEVER** use `#14B8A6` (teal) outside the logo SVG gradient
- **NEVER** use dark backgrounds for sections (no dark theme)
- Footer is the only dark area (`#0F172A`), with text at `rgba(255,255,255,0.60)` minimum
- All text must pass WCAG AA (4.5:1 contrast ratio minimum)

---

## Typography

### Font Families

| Role | Family | Weights |
|------|--------|---------|
| Headlines | `Work Sans` | 300 (light), 400, 500, 600, 700 |
| Body | `Inter` | 400, 500, 600 |

### Scale

| Element | Size | Weight | Family |
|---------|------|--------|--------|
| Hero h1 | `clamp(32px, 4vw, 52px)` | 300 | Work Sans |
| Section h2 | `clamp(24px, 3vw, 36px)` | 300 | Work Sans |
| Card h3 | `18-20px` | 600 | Work Sans |
| Body | `15-16px` | 400 | Inter |
| Small/caption | `13-14px` | 500 | Inter |
| Eyebrow/badge | `11-12px` | 600-700 | Inter |

### Letter Spacing

| Element | Spacing |
|---------|---------|
| Hero h1 | `-1px` |
| Section h2 | `-0.5px` |
| Eyebrow/badge | `0.08em` (uppercase) |
| Body | default |

### Line Height

| Element | Height |
|---------|--------|
| Headlines | `1.12-1.3` |
| Body | `1.7-1.8` |
| Cards | `1.6` |

---

## Spacing

### Grid: 4px base

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | `4px` | Icon gaps |
| `sm` | `8px` | Tight gaps |
| `md` | `12px` | Input padding, small gaps |
| `base` | `16px` | Standard padding |
| `lg` | `20px` | Card padding minimum |
| `xl` | `24px` | Section gaps, card padding |
| `2xl` | `32px` | Card padding generous |
| `3xl` | `40px` | Section title margins |
| `4xl` | `48px` | Section padding minimum |
| `5xl` | `64px` | Grid gaps |
| `6xl` | `88px` | Section vertical padding |

### Rules

- All spacing values must be multiples of 4px
- Stat cards: minimum 32px padding (numbers never "grudged" to borders)
- Section padding: `88px` vertical, `clamp(20px, 5vw, 64px)` horizontal
- Hero padding-top: `140px` for internal pages, `80px` for home (with min-height: 100vh)
- Home hero uses `hero-split` class for 2-column layout with photo

---

## Depth

### System: Soft shadows (never heavy)

| Level | Shadow | Usage |
|-------|--------|-------|
| `card` | `0 2px 12px rgba(0,0,0,0.04)` | Default cards |
| `elevated` | `0 8px 32px rgba(0,0,0,0.08)` | Hover cards |
| `hero` | `0 20px 60px rgba(X,X,X,0.15)` | Hero photo cards |
| `nav` | none (border-bottom only) | Navigation |
| `button` | none | Buttons (use color change on hover) |

### Rules

- Cards always have `border-radius: 12-20px`
- No sharp corners (minimum `border-radius: 8px` on interactive elements)
- Use `backdrop-filter: blur(14px)` on nav for glass effect
- Specialty demos can use colored shadows (e.g., `rgba(124,58,237,0.2)` for violet)

---

## Components

### Button — Primary

```css
background: #0369A1;
color: #FFFFFF;
padding: 16px 32px;
border-radius: 8px;
font-family: Inter;
font-size: 14px;
font-weight: 600;
letter-spacing: 0.02em;
transition: background 0.2s;
/* hover: */ background: #0C4A6E;
```

### Button — Ghost

```css
background: transparent;
color: #0369A1;
border: 1.5px solid rgba(3,105,161,0.25);
padding: 16px 32px;
border-radius: 8px;
font-family: Inter;
font-size: 14px;
font-weight: 600;
/* hover: */ background: rgba(3,105,161,0.06);
```

### Button — Nav CTA

```css
background: #0369A1;
color: #FFFFFF;
padding: 12px 24px;
border-radius: 20px;
font-size: 14px;
font-weight: 600;
```

### Card — Default

```css
background: #FFFFFF;
border-radius: 16px;
padding: 32px;
box-shadow: 0 2px 12px rgba(0,0,0,0.04);
border: 1px solid rgba(0,0,0,0.04);
```

### Badge / Eyebrow

```css
display: inline-block;
background: rgba(14,165,233,0.08);
color: #0369A1;
padding: 4px 12px;
border-radius: 20px;
font-size: 11px;
font-weight: 700;
letter-spacing: 0.08em;
text-transform: uppercase;
```

### Input

```css
width: 100%;
padding: 12px 16px;
border: 1px solid #E8E8E0;
border-radius: 8px;
font-size: 14px;
font-family: Inter;
/* focus: */ border-color: #0EA5E9; outline: none;
```

---

## Layout

### Container

- Max width: `1180px` (content), `840px` (text-heavy)
- Horizontal padding: `clamp(20px, 5vw, 64px)`

### Grid

- 2-column: `grid-template-columns: 1fr 1.3fr` (text + visual)
- 3-column: `repeat(auto-fit, minmax(300px, 1fr))`
- Gap: `24-32px` cards, `64-72px` major sections

### Navigation

- Fixed top, height `64px`, z-index `100`
- Background: `rgba(255,255,255,0.94)` + `backdrop-filter: blur(14px)`
- Hides on scroll down (15px accumulated), shows on scroll up
- Always visible near top (scrollY < 80px)

### Footer

- Background: `#0F172A`
- Text: `rgba(255,255,255,0.60)` minimum (WCAG AA)
- Links: `rgba(255,255,255,0.65)` minimum

---

## Animation

### Reveal on Scroll

```css
.reveal {
  opacity: 0;
  transform: translateY(20px) scale(0.97);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.reveal.visible {
  opacity: 1;
  transform: none;
}
```

### Hero Entrance

```css
@keyframes heroIn {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: none; }
}
.hero-anim {
  animation: heroIn 0.55s ease forwards;
  /* Stagger: nth-child delays 0.05s, 0.18s, 0.30s, 0.42s */
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .reveal, .hero-anim {
    opacity: 1 !important;
    transform: none !important;
    animation: none !important;
    transition: none !important;
  }
}
```

---

## Contrast Requirements

| Context | Min Ratio | Standard |
|---------|-----------|----------|
| Body text | 4.5:1 | WCAG AA |
| Large text (>18px bold) | 3:1 | WCAG AA |
| Interactive elements | 3:1 | WCAG AA |
| Tags/badges (small text) | 4.5:1 | WCAG AA |
| Footer text on dark | 4.5:1 | WCAG AA |

### Common Failures to Avoid

- Dark text on dark-colored buttons
- Light colored text on light backgrounds (e.g., amber on cream)
- Footer text below 60% opacity on `#0F172A`
- Tag text below 4.5:1 ratio on colored backgrounds

---

## DO / DON'T

### DO

- Cream (#FAFAF7) backgrounds for sections
- Generous whitespace (32px+ card padding)
- Sky blue as accent, dark blue (#0369A1) for buttons
- Clean color transitions between sections (no decorative separators)
- ECG divider from logo with generous spacing and gradient fade
- Photos of real humans (doctors, patients, consultations)
- `clamp()` for responsive typography and spacing

### DON'T

- Dark theme or dark section backgrounds (except footer)
- Serif/decorative fonts
- Teal/green as general accent (logo gradient only)
- Tight stats in thin-bordered boxes
- Sharp corners / zero border-radius
- Generic SaaS patterns (pricing tables, feature grids)
- Stock photo aesthetic (prefer candid, warm, natural light)
- Gradient placeholders with initials (use real photos)
