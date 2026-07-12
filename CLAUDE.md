# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Sites Garage marketing website — a static, single-page site with no build system, package manager, or framework. It consists of three hand-maintained files:

- `index.html` — the entire page markup (all sections: home, about, services, work showcase, contact, footer)
- `css/style.css` — all styling
- `js/index.js` — all interactivity

## Development

There is no build/lint/test tooling in this repo (no `package.json`). To preview changes:

- Open `index.html` directly in a browser, or
- Use the VS Code Live Server extension (port configured in `.vscode/settings.json` as 5501)

Edits are made directly to `index.html`, `css/style.css`, and `js/index.js` — no compilation or bundling step.

## Architecture notes

- **Single page, anchor-linked sections**: `index.html` is organized into `<section>` blocks (`home-section`, `about-section`, `services-section`, `workshowcase-section`, `contact-section`) that the navbar links to via `#id` anchors. When editing nav links, section IDs in HTML must stay in sync.
- **External dependencies via CDN** (no local vendoring): Swiper.js (`swiper@9`) for the testimonials carousel, Google Fonts (Sora for headings, Inter for body), and Font Awesome for icons. Check `index.html` `<head>` and script tags at the bottom of the file for exact versions/links before assuming a library is available.
- **Design system**: dark theme driven by CSS custom properties in `:root` of `css/style.css` (`--bg`, `--accent-1`/`--accent-2`, `--gradient`, `--surface`, `--border`, etc.). Reuse these variables rather than hard-coding colors.
- **`js/index.js` responsibilities**:
  - Mobile nav toggle (`.navbar-icon-btn` click toggles `.active` class on `.navbar`; hamburger is a pure-CSS animated button)
  - Scroll-based navbar styling (`.active1` at `scrollY >= 80`) and "scroll to top" button visibility (`scrollY >= 400`)
  - Scroll-reveal animations: elements with class `.reveal` get `.visible` added via IntersectionObserver
  - Animated stat counters: `.counter` elements count up to their `data-target` attribute when scrolled into view
  - Swiper carousel initialization for testimonials (`.mySwiper`), responsive via Swiper's `breakpoints` option (1/2/3 slides at 0/700/1100px)
- Images live in `image/` (top-level assets) and `image/work/` (work showcase items referenced by the Swiper carousel).
