# Floorvista Design Consultants — Website

Official website for **Floorvista Design Consultants**, an architecture and design consultancy based in Mancherial, Telangana, India.

---

## Project Overview

Floorvista Design Consultants transforms ideas into inspiring spaces where design, functionality, and engineering come together. This website is the firm's online presence — a marketing and lead-generation site that introduces the practice, showcases completed work, describes the services offered, and directs prospective clients to get in touch.

The site represents the firm's core architectural and design disciplines:

- Architectural Planning
- Structural Design
- Interior Design
- Elevation Design

Built with Next.js (App Router), it combines a premium, editorial visual style with scroll-driven animations, image-optimized galleries, and WhatsApp-based enquiry handling.

---

## Features

- **Responsive design** — layouts adapt across desktop, tablet, and mobile breakpoints, including a dedicated mobile navigation menu.
- **Modern premium UI** — a minimal, editorial aesthetic with a deep green (`#173B38`) and gold accent palette, decorative circle motifs, and generous typography (Geist / Geist Mono via `next/font`).
- **Global navigation** — fixed header with scroll-aware styling, active-route highlighting, and a mobile slide-down menu.
- **Projects showcase** — categorized project galleries with featured images and grid layouts.
- **Services showcase** — service listings with descriptions, feature checklists, and imagery.
- **Home sections** — hero, about, services preview, selected projects, and a closing call-to-action.
- **About section** — firm introduction, values, and contact prompts.
- **Contact section** — phone, WhatsApp, email, address, and social links (Instagram, LinkedIn, WhatsApp).
- **WhatsApp integration** — a floating WhatsApp button on every page, plus a project enquiry form that composes a structured message and opens it directly in WhatsApp.
- **Smooth scrolling and section navigation** — smooth scroll behavior enabled globally, with anchor links from the home page into specific `/services` and `/projects` sections.
- **Motion design** — scroll-triggered reveals, staggering, and hover effects powered by Framer Motion.
- **Custom 404 page** — branded not-found experience with links back to the site.
- **Footer** — brand summary, navigation links, service links, contact details, social links, and credits.

---

## Pages / Routes

Routes are verified from `src/app` (Next.js App Router):

| Route       | File                      | Description                                                                 |
| ----------- | ------------------------- | --------------------------------------------------------------------------- |
| `/`         | `src/app/page.js`         | Home — Hero, About, Services preview, Selected projects, CTA                |
| `/projects` | `src/app/projects/page.jsx` | Project showcase grouped by service category, with anchor navigation       |
| `/services` | `src/app/services/page.jsx` | Detailed service listings with feature checklists and the firm's approach  |
| `/about`    | `src/app/about/page.jsx`  | About the firm — introduction, image, and CTA                               |
| `/contact`  | `src/app/contact/page.jsx` | Contact details and WhatsApp enquiry form                                   |
| 404         | `src/app/not-found.jsx`   | Custom not-found page                                                       |

---

## Services

The services implemented in the website (`/services` page and home services preview):

| #   | Service                | Highlights (as listed on the site)                                                                        |
| --- | ---------------------- | --------------------------------------------------------------------------------------------------------- |
| 01  | Architectural Planning | Residential & commercial planning, floor plans, municipal permission plans, approval assistance           |
| 02  | Structural Design      | Structural planning & drawings, foundation design, RCC design, structural consultancy                     |
| 03  | Interior Design        | Residential & commercial interiors, space planning, material selection, interior consultancy              |
| 04  | Elevation Design       | Front elevation design, 3D elevation, modern facades, exterior design, facade consultancy                 |

Each service has a dedicated anchor section on `/services` (e.g. `/services#architectural-planning`) and is linked from the home page's services preview and the footer.

---

## Projects

The `/projects` page presents completed work in three service categories, each rendered as an anchor-linked section with a featured project image followed by a gallery grid:

| Category                | Anchor                          | Gallery size |
| ----------------------- | ------------------------------- | ------------ |
| Architectural Planning  | `#architectural-planning-01`    | 4 images     |
| Elevation Design        | `#elevation-design-02`          | 14 images    |
| Interior Design         | `#interior-design-03`           | 5 images     |

- A **category navigation bar** in the page hero links to each section anchor; sections use `scroll-mt` offsets so anchors account for the fixed navbar.
- The home page's **Selected Projects** section links to `/projects#<section-id>` for each highlighted category.
- All project imagery is served through `next/image` with responsive `sizes` and lazy loading (the first image is prioritized).

---

## Tech Stack

| Technology                  | Version      | Usage                                              |
| --------------------------- | ------------ | -------------------------------------------------- |
| [Next.js](https://nextjs.org) | 16.3.4      | App Router framework, routing, `next/image`, `next/font` |
| [React](https://react.dev)  | 19.2.8       | UI library (React Compiler enabled)                |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Utility-first styling via `@tailwindcss/postcss`   |
| [Framer Motion](https://motion.dev) | ^13.2.0 | Scroll-triggered animations and transitions    |
| [Lucide React](https://lucide.dev) | ^1.41.0 | UI icons                                           |
| [React Icons](https://react-icons.github.io/react-icons) | ^5.7.0 | Brand icons (Instagram, LinkedIn, WhatsApp) |
| [ESLint](https://eslint.org) | ^9          | Linting with `eslint-config-next`                  |

Notes:

- **React Compiler** is enabled in `next.config.mjs` (`reactCompiler: true`) with `babel-plugin-react-compiler`.
- Path alias `@/*` → `src/*` is configured in `jsconfig.json`.
- Fonts (Geist, Geist Mono) are loaded via `next/font/google`.

---

## Project Structure

```text
floorvista/
├── public/                     # Static assets (images, logo, favicon)
│   ├── images/
│   │   ├── about/
│   │   ├── home/
│   │   ├── projects/
│   │   └── services/
│   ├── logo/
│   └── staffarc-logo.avif
├── src/
│   ├── app/                    # App Router pages, layout, global styles, icon
│   │   ├── layout.js           # Root layout, metadata, global chrome
│   │   ├── page.js             # Home page
│   │   ├── globals.css         # Tailwind and global styles
│   │   ├── icon.png            # Favicon
│   │   ├── not-found.jsx       # Custom 404
│   │   ├── about/
│   │   ├── contact/
│   │   ├── projects/
│   │   └── services/
│   └── components/
│       ├── common/             # FloatingWhatsApp, DevelopedByStaffArc
│       ├── home/               # Hero, AboutSection, ServicesPreview,
│       │                       # SelectedProjects, CTA
│       └── layout/             # Navbar, Footer
├── next.config.mjs             # Next.js config (React Compiler enabled)
├── postcss.config.mjs          # Tailwind CSS v4 PostCSS plugin
├── jsconfig.json               # @/* path alias
├── eslint.config.mjs           # ESLint configuration
└── package.json
```

---

## Image / Asset Structure

Important asset locations used by the website:

| Path                                   | Purpose                                                        |
| -------------------------------------- | -------------------------------------------------------------- |
| `public/images/home/hero.png`          | Home hero background                                           |
| `public/images/home/about.png`         | Home about-section image                                       |
| `public/images/about/about-image.png`  | About page image                                               |
| `public/images/services/*.png`         | Service imagery (one per service)                              |
| `public/images/projects/architectural-planning/` | Architectural planning gallery (4 images)           |
| `public/images/projects/elevation-design/`       | Elevation design gallery (14 images)                |
| `public/images/projects/interior-design/`        | Interior design gallery (5 images)                  |
| `public/images/footer-image.png`       | Footer background                                              |
| `public/logo/floorvista-logo.png`      | Company logo (navbar and footer)                               |
| `public/staffarc-logo.avif`            | Developer credit logo (footer)                                 |
| `src/app/icon.png`                     | Favicon / app icon                                             |

---

## Installation

Requires **Node.js** (an LTS version is recommended) and npm.

```bash
# Clone the repository, then install dependencies
npm install
```

---

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-updates as you edit files.

---

## Production Build

```bash
# Create an optimized production build
npm run build

# Start the production server
npm run start
```

Lint the codebase with:

```bash
npm run lint
```

---

## SEO / Metadata

Metadata is configured in `src/app/layout.js` via the Next.js Metadata API:

| Field          | Value                                                                              |
| -------------- | ---------------------------------------------------------------------------------- |
| Title          | Floorvista Design Consultants                                                      |
| Description    | Floorvista Design Consultants — Building Planning, Interior Design, and Structural Design. |
| Keywords       | Brand and service keywords, including local keywords (e.g. "Architects in Mancherial", "Telangana Architecture") |
| Canonical URL  | `https://www.floorvista.com/` (`metadataBase` with canonical path `/`)             |
| Favicon / icon | `/icon.png` (icon, shortcut, and Apple touch icon)                                 |

---

## Responsive Design

The UI is built mobile-first with Tailwind CSS responsive breakpoints throughout:

- The navbar switches from a pill-style desktop menu to a mobile slide-down menu below `md`.
- Grids for services, projects, and content sections collapse from multi-column layouts to single-column stacks on smaller screens.
- Typography scales fluidly across `sm`, `md`, and `lg` breakpoints.
- Images use `next/image` with responsive `sizes` hints to serve appropriately sized assets.

---

## Author / Company

**Floorvista Design Consultants**

- Phone: [+91 83412 08733](tel:+918341208733)
- WhatsApp: [+91 94948 97562](https://wa.me/919494897562)
- Email: [floorvista.aec@gmail.com](mailto:floorvista.aec@gmail.com)
- Address: Ammagardens Road, Gadderagadi, Mancherial, Telangana - 504209
- Instagram: [floor.vista](https://www.instagram.com/floor.vista/)
- LinkedIn: [Floorvista](https://www.linkedin.com/company/floorvista/)

Website developed by [StaffArc](https://www.staffarc.tech).
