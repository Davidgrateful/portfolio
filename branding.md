# 🏛️ Portfolio Design System & Branding

This document outlines the architectural branding and visual identity for the **omokeify** portfolio project. It serves as a single source of truth for all design-related implementations.

---

## 🎨 1. CORE COLOR PALETTE
The color system is built for high contrast and extreme technical clarity.

| Token | Hex/Value | Usage |
| :--- | :--- | :--- |
| **Main (Bone)** | `#e7e7e7` | Core light-mode background and accent text. |
| **Secondary (Charcoal)** | `#1e1e1e` | Deep sections, primary typography, and UI frames. |
| **Accent (Volt Green)** | `#d4f534` | Progress indicators, CTAs, and "Live" status markers. |
| **Dynamic HSL** | `Variable` | Local footer color cycles through HSL on project detail pages. |
| **Selection** | `#1e1e1e` | Custom browser text selection (background: #1e1e1e, text: #e7e7e7). |

---

## ⌨️ 2. TYPOGRAPHY SYSTEM
The typography is powered by **Cabinet Grotesk**, a high-velocity variable font.

*   **Primary Font**: `Cabinet Grotesk` (V2 via Fontshare).
*   **Headings**: Bold/Black weight (700-900), `tracking-tighter`, and `uppercase`.
*   **Body Narrative**: Regular/Medium (400-500) for general readability.
*   **Technical Metadata**: Small font size (9px-10px), `font-black`, and extreme character spacing (`tracking-[0.4em]`).
*   **Logo Style**: `F|` (Uppercase F followed by a matching height vertical separator bar).

---

## 📐 3. LAYOUT & GRID ARCHITECTURE
A modular, vertical stack designed for a "Technical Dossier" feel.

*   **Standard Gutter**: `px-6 md:px-12 lg:px-24`.
*   **Vertical Padding**: High airiness using `py-24` or `mb-[25vh]` for section breaks.
*   **Responsive Grid**: asynchronous 2-column project grids.
*   **Works View**: Dual-toggle architecture supporting a standard **Grid** and an interactive **Flowing Menu**.

---

## 🔣 4. ICONOGRAPHY & SYMBOLS
Icons are treated as operational glyphs, strictly from `lucide-react`.

*   **`ArrowUpRight`**: Universal "Next" or "Launch Production" action.
*   **`Menu` / `X`**: Primary interface controls.
*   **`Grid` / `Layout`**: View-state markers.
*   **`Activity` / `Terminal` / `GitCommit`**: Technical metadata identifiers.

---

## 🧊 5. OBJECTS & SHAPE DESIGN
*   **Rounding**: Standard `rounded-2xl` for project cards, with `rounded-[3rem]` for large section containers.
*   **Buttons**: Strictly **Pill shaped** (`rounded-full`) for a modern, fluid aesthetic.
*   **Visual Nodes**: 12px circular dots with `animate-pulse` used for indicating "Live" or "Active" systems.
*   **Atmospheric Depths**: Blur-intensive (`blur-3xl`) gradient "blobs" used as background layers for spatial depth.

---

## ✨ 6. INTERACTION & MOTION LOGIC
Implemented primarily via `motion/react` (Framer Motion).

*   **Magnetic Pull**: `MagneticButton` logic applies a physical "hover pull" to all primary touchpoints.
*   **Reveal Line**: Text content slides vertically out of a container line for a premium "manifestation" effect.
*   **Parallax**: Media elements inside cards shift at a different Y-ratio than the page scroll.
*   **PiP Demo**: Floating, draggable video window for project walkthroughs (Picture-in-Picture logic).

---

## 🛡️ 7. DESIGN PERSONA
The overall visual language is defined as **"Technical Luxury / Engineering Core."** It is designed to look like a high-performance administrative terminal, moving away from soft consumer aesthetics toward a stark, high-fidelity engineering aesthetic.
