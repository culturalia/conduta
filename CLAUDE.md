# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static single-page website for **Conduta Saúde**, a healthcare consulting company specializing in process optimization and AI automation for clinics. The site is in Brazilian Portuguese (pt-BR).

## Architecture

This is a zero-dependency static site — one `index.html` file containing all markup and CSS inline (no build step, no JS, no framework). Assets are two favicon PNGs at the root.

- **Styling**: All CSS is in a `<style>` block in `<head>`. Uses CSS custom properties (`:root` variables) for the color palette (slate/teal/sky theme). Responsive breakpoint at 900px.
- **Logo**: Inline SVG (rendered twice — nav and footer — with separate gradient IDs `ng1/ng2` and `fg1/fg2`).
- **CTAs**: All point to a WhatsApp deep link (`wa.me/5516996131393`) with a pre-filled message.

## Development

No build, lint, or test commands — open `index.html` in a browser. Any local HTTP server works (e.g., `npx serve .` or `python -m http.server`).

## Page Sections (in order)

`nav` → `#inicio` (hero) → `#problema` → `#servicos` → `#ferramentas` (AI/tools with phone mockup) → `#como-funciona` → `#para-quem` → `#diagnostico` (CTA) → `footer`

## Design Tokens

| Variable        | Value     |
|-----------------|-----------|
| `--sky`         | `#0EA5E9` |
| `--teal`        | `#14B8A6` |
| `--slate-900`   | `#0F172A` |
| `--slate-800`   | `#1E293B` |
| `--slate-950`   | `#020617` |

Fonts: **Inter** (headings/body) and **DM Sans** (descriptive paragraphs), loaded from Google Fonts.
