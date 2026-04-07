# SSP Astro | Discover Your Cosmic Path

SSP Astro is a premium Vedic astrology (Jyotish) web application designed to immerse users in a divine, cosmic environment. The platform offers astrological insights, birth chart analysis, and compatibility readings wrapped in an elevated, modern web experience that feels like stepping into a peaceful, starry temple.

## 🕉️ Features

*   **Temple-Inspired Cosmic UI**: A fully immersive design featuring a deep cosmic sky, a slowly rotating golden zodiac wheel, floating stars, and glassmorphic translucent panels.
*   **Vedic Zodiac Profiling (Jyotish)**: All 12 zodiac archetypes are represented with original, premium golden iconography.
*   **Multi-lingual Nuances**: Features Sanskrit and Telugu translations alongside English to honor its Vedic roots.
*   **Dynamic Client-side Routing**: Seamless script-driven detail loading that mimics a smooth SPA (Single Page Application) approach for zodiac sign details (`sign.html?sign=...`).
*   **Fully Responsive**: Meticulously designed media queries ensure the cosmic aesthetic adapts perfectly from widescreen desktops to mobile devices.

## 🚀 Tech Stack

*   **HTML5 & CSS3**: Custom grid architectures, smooth CSS animations (`@keyframes`), and intricate clip-paths for advanced geometry.
*   **Vanilla JavaScript**: Lightweight Intersection API for smooth scroll-reveal animations and dynamic content injection.
*   **Google Fonts**: `Poppins` (Base), `El Messiri` (Serif Headings), and `Noto Sans Telugu`.
*   **Vector & PNG Assets**: Customized 3D-styled Jyotish zodiac icons.

## 💻 Running Locally

This project operates mostly via static files (`HTML/CSS/JS`). However, due to security measures in modern browsers, fetching Javascript objects directly via file paths (like navigating to `sign.html?sign=aries`) works best when served over a local protocol (`http://` instead of `file:///`).

To experience it with zero configuration:
1. Make sure you have [Node.js](https://nodejs.org/) installed, or simply use Python.
2. Clone this repository.
3. Serve it using a lightweight local server:
   * **Using Python:** `python -m http.server 8000`
   * **Using Node (npx):** `npx serve .`
4. Open your browser and navigate to the localhost port (e.g., `http://localhost:8000`).

## 🌌 Core Structure

*   `index.html`: The main landing experience. Includes the animated hero section, "About" cards, the 3x4 Zodiac Grid, and Service list.
*   `sign.html`: The detail template. Reads query parameters to display extensive readings based on the selected sign.
*   `styles.css`: Complete styling rules, utilizing CSS custom properties (variables) for consistent dark-theme branding (`var(--bg)`, `var(--gold)`).
*   `script.js`: UI logic covering navigation overlays, animated scroll reveals, and URL-parsing logic for sign details.
*   `zodiac-data.js`: A master JSON-style data object containing the lore, traits, career insights, and lucky factors for every Rashi (sign).
*   `assets/zodiac/`: High-quality `.png` glyphs for the 12 signs.

## 🎨 Design System Constraints

When contributing or editing content, adhere to these UI principles established for SSP Astro:
*   Emphasize gold (`#f5c978`) accents against deep purple/indigo backgrounds (`#161129`).
*   Instead of flat colors, utilize `rgba()` background layers with `backdrop-filter: blur(12px)` to maintain the "sacred glass" aesthetic.
*   Avoid sharp corners; utilize the `var(--radius-lg)` or `var(--radius-md)`.

## 📜 License

All rights reserved by SSP Astro.
