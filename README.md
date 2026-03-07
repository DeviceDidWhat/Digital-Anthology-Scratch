# Rangilo Rajasthan

Rangilo Rajasthan is a cultural learning web application built with React, TypeScript, and Vite. It presents the heritage of Rajasthan through interactive play, visual storytelling, and curated digital experiences. Instead of treating culture as a static archive, the project treats it as something to explore, experience, and learn through action.

This repository contains the frontend for that experience. The application brings together category-based games, a featured Scratch games section, and a narrative About page that frames the platform as a digital anthology of Rajasthan's colors, crafts, stories, music, food, and traditions.

The project also carries an IIT Jodhpur context in its current presentation. The About page explicitly frames the work as an "IIT Jodhpur Digital Initiative" and positions the platform as a heritage-and-technology learning experience. If this repository is used for formal publication, institutional wording should be reviewed and confirmed by the project owners before public release.

## Table of Contents

- [Project Vision](#project-vision)
- [What the Project Is About](#what-the-project-is-about)
- [IIT Jodhpur Context](#iit-jodhpur-context)
- [Educational Goals](#educational-goals)
- [Audience](#audience)
- [Current Scope](#current-scope)
- [Feature Breakdown](#feature-breakdown)
- [Route Overview](#route-overview)
- [Content and Data Model](#content-and-data-model)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Design and Experience Notes](#design-and-experience-notes)
- [How the Application Works](#how-the-application-works)
- [Local Development](#local-development)
- [Scripts](#scripts)
- [Adding New Content](#adding-new-content)
- [Maintenance Notes](#maintenance-notes)
- [Deployment](#deployment)
- [Testing and Quality](#testing-and-quality)
- [Future Improvements](#future-improvements)
- [License](#license)

## Project Vision

Rangilo Rajasthan is designed around a simple idea: cultural knowledge becomes more memorable when users interact with it rather than only reading about it.

The website aims to:

- preserve and present elements of Rajasthani cultural heritage in digital form
- make learning feel playful instead of textbook-driven
- connect art, history, geography, music, food, and traditions through interactive experiences
- use games and Scratch-based projects as approachable entry points for learners
- create a platform where culture and computational creativity can coexist

The project treats heritage as something living and explorable. That is the central idea behind the interface, the card-based game system, and the "Digital Scratch Anthology" language used in the site content.

## What the Project Is About

The application is centered on Rajasthan, one of India's most visually rich and culturally diverse regions. Its themes include:

- textiles and print traditions such as Bandhani and block printing
- folk art and handicrafts such as puppetry and storytelling traditions
- desert life, landscape, and place-based exploration
- music and dance traditions
- cuisine and food culture
- festivals and celebratory practices

Rather than presenting these as isolated encyclopedia entries, the platform organizes them as playable or explorable experiences. Some items lead to external interactive projects, while others are featured Scratch games displayed directly from the homepage.

In practical terms, this repository is a curated cultural portal:

- the homepage introduces the theme and invites exploration
- category pages group related games under specific cultural topics
- the Scratch section highlights additional interactive projects
- the About page provides the conceptual and institutional framing

## IIT Jodhpur Context

The current codebase presents this project within an IIT Jodhpur context.

Evidence already present in the application includes:

- the About page badge text: `IIT Jodhpur Digital Initiative`
- the footer wording on the About page: `IIT Jodhpur Project`
- the narrative framing around heritage, technology, computational creativity, and interactive learning

Based on the current implementation, the project appears to position itself as a digital culture initiative linked to IIT Jodhpur, likely intended to merge educational design, computational thinking, and cultural preservation.

Because this repository does not include an official institutional approval note, legal statement, or contributor roster, this README intentionally avoids claiming more than what the codebase itself already states. If this project is to be submitted, published, or showcased under the IIT Jodhpur name, the following should ideally be added in the future:

- official project owner or faculty details
- team member names and roles
- course, lab, event, or initiative name
- institution-approved attribution language
- contact information

## Educational Goals

This project is not just a game collection. It is structured as an educational interface with cultural intent.

Its learning goals include:

- introducing users to major aspects of Rajasthan's cultural identity
- making heritage topics accessible to younger audiences and casual learners
- encouraging exploratory learning through short, low-friction interactions
- using recognizable visual cues and play mechanics to improve retention
- connecting computational creativity with humanities-oriented content

The site also reflects a broader educational pattern often used in digital humanities and interactive pedagogy:

- knowledge is modular
- exploration is self-directed
- visual design supports curiosity
- interaction reduces passive consumption

## Audience

The project is suitable for multiple audiences:

- school and college learners exploring Indian culture
- educators looking for playful teaching material
- hackathon, class, or digital humanities evaluators
- visitors interested in Rajasthan but not looking for a text-heavy site
- students experimenting with Scratch and interactive storytelling

The copy and interface suggest a broad audience rather than a narrow expert audience. Difficulty labels and short play times support that approach.

## Current Scope

At the time of writing, the codebase includes:

- 6 main cultural categories
- 26 category-linked games in `src/data/games.ts`
- 7 homepage Scratch games in `src/data/scratchGames.ts`
- a homepage
- a category detail page
- an About page
- a 404 page

The project is currently frontend-only. It does not rely on a backend, database, authentication system, or CMS.

## Feature Breakdown

### 1. Homepage

The homepage is the main landing surface of the project. It is assembled in `src/pages/Index.tsx` and includes:

- a fixed navigation bar
- a hero section with branding and CTA
- a categories section for primary exploration
- a Scratch games section for featured projects
- a features section highlighting learning value
- a footer

The homepage acts as both an introduction and a discovery surface.

### 2. Category Navigation

The site groups its main content into six themes:

- Textiles & Prints
- Folk Art & Handicrafts
- Desert Life & Nature
- Music & Dance
- Cuisine & Spices
- Festivals & Traditions

Each category is represented visually through a gradient card and links to a route of the form:

```text
/category/:categoryId
```

### 3. Category Detail Pages

Each category page:

- reads its data from `src/data/games.ts`
- displays the category title, description, and icon
- shows all games associated with that category
- supports search by title/description
- supports filtering by difficulty
- supports filtering by estimated play time

This is the primary content browsing experience in the app.

### 4. Scratch Games Section

The homepage also includes a dedicated Scratch section, powered by `src/data/scratchGames.ts`.

This section exists separately from the category route system. Its purpose is to showcase Scratch-based experiences directly on the homepage without forcing them into the main category browsing model.

This is useful because:

- Scratch projects may come from different creators
- they may not fit the exact category structure of the main game catalog
- they are easy to expand by editing a single data file

### 5. About Page

The About page is more than a basic informational page. It is the conceptual center of the project.

It introduces:

- the mission of preserving and presenting heritage digitally
- the idea of a "Digital Scratch Anthology"
- the connection between computational creativity and culture
- the IIT Jodhpur framing
- aspirational stats and educational branding

From a product perspective, the About page defines the narrative identity of the project.

## Route Overview

Routes are defined in `src/App.tsx`.

### `/`

The homepage. This is the main entry point for users.

### `/category/:categoryId`

The category detail route. It renders game cards for a single category using the URL parameter.

### `/about`

The project story and mission page.

### `*`

Fallback route for missing pages.

## Content and Data Model

The application is strongly data-driven. Most content can be updated without changing rendering logic.

### Main Game Data

File: `src/data/games.ts`

This file defines:

- the `Game` interface
- the `games` array
- the `categories` object
- helper functions for category lookup

Each game typically includes:

- `id`
- `title`
- `description`
- `category`
- `difficulty`
- `playTime`
- `icon`
- `gradient`
- `patternColor`
- `externalUrl`

This file powers category pages.

### Scratch Game Data

File: `src/data/scratchGames.ts`

This file defines:

- the `ScratchGame` interface
- the `scratchGames` array

Each Scratch entry includes:

- `id`
- `title`
- `description`
- `difficulty`
- `playTime`
- `icon`
- `gradient`
- `patternColor`
- `externalUrl`
- optional `badgeLabel`

This file powers the homepage Scratch section.

### Static Assets

The project also uses:

- image assets from `src/assets/`
- public files from `public/`
- CSS utilities and theme styles from `src/index.css`

## Project Structure

```text
.
|-- public/
|   |-- favicon.svg
|   |-- placeholder.svg
|   |-- rajasthan-bg.png
|   `-- robots.txt
|-- src/
|   |-- assets/
|   |   `-- hero-landscape.jpg
|   |-- components/
|   |   |-- cards/
|   |   |-- decorative/
|   |   |-- filters/
|   |   |-- layout/
|   |   |-- sections/
|   |   `-- ui/
|   |-- data/
|   |   |-- games.ts
|   |   `-- scratchGames.ts
|   |-- hooks/
|   |-- lib/
|   |-- pages/
|   |   |-- AboutPage.tsx
|   |   |-- CategoryPage.tsx
|   |   |-- Index.tsx
|   |   `-- NotFound.tsx
|   |-- test/
|   |   |-- example.test.ts
|   |   `-- setup.ts
|   |-- App.tsx
|   |-- App.css
|   |-- index.css
|   |-- main.tsx
|   `-- vite-env.d.ts
|-- components.json
|-- eslint.config.js
|-- index.html
|-- package.json
|-- package-lock.json
|-- postcss.config.js
|-- tailwind.config.ts
|-- tsconfig.app.json
|-- tsconfig.json
|-- tsconfig.node.json
|-- vite.config.ts
|-- vitest.config.ts
`-- README.md
```

## Technology Stack

The project is built on a modern frontend stack:

- React 18 for UI composition
- TypeScript for type safety
- Vite for development and production bundling
- React Router DOM for routing
- Tailwind CSS for styling
- shadcn/ui component patterns for reusable UI building blocks
- Framer Motion for richer animation on the About page
- TanStack Query included at the app root for future or current shared query handling
- Vitest and Testing Library for testing
- ESLint for linting

## Design and Experience Notes

The site aims for a warm, heritage-inspired visual language rather than a generic SaaS UI.

Notable design choices include:

- Rajasthan-inspired color palette
- decorative motifs and borders
- gradient-heavy category cards
- a visually dense hero section
- playful icon-driven game cards
- use of cultural mood through typography, ornament, and layout rhythm

The UI favors discoverability and visual invitation over dense information display.

## How the Application Works

From a technical point of view, the application flow is straightforward:

1. `src/main.tsx` boots the React app.
2. `src/App.tsx` defines global providers and routes.
3. Route pages render section and card components.
4. Most page content comes from local data files.
5. Card clicks open external experiences or Scratch projects.

There is no server-side rendering and no backend API requirement for the primary content model.

## Local Development

### Prerequisites

- Node.js 18 or newer recommended
- npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Scripts

The following scripts are available in `package.json`:

- `npm run dev`  
  Starts the Vite development server
- `npm run build`  
  Builds the project for production
- `npm run build:dev`  
  Builds using development mode
- `npm run preview`  
  Serves the built `dist/` output locally
- `npm run lint`  
  Runs ESLint across the codebase
- `npm run test`  
  Runs tests once with Vitest
- `npm run test:watch`  
  Runs tests in watch mode

## Adding New Content

### Add a New Category Game

1. Open `src/data/games.ts`.
2. Add a new object to the `games` array.
3. Use one of the supported category IDs:
   - `textiles`
   - `folk-art`
   - `desert-life`
   - `music-dance`
   - `cuisine`
   - `festivals`
4. Fill in title, description, difficulty, play time, icon, gradient, pattern color, and `externalUrl`.
5. If the new entry affects displayed homepage counts, update `src/components/sections/CategoriesSection.tsx`.

## Maintenance Notes

- Category counts on the homepage are currently hardcoded display values.
- Scratch games are intentionally separate from the category filter system.
- The `@/` alias resolves to the `src/` directory.
- The repository currently contains placeholder or simplified testing coverage rather than a deep application test suite.
- Some UI copy is aspirational or branding-oriented and may need review before formal institutional publication.

## Deployment

Because this is a Vite frontend, deployment is simple.

Typical deployment flow:

1. install dependencies
2. run `npm run build`
3. deploy the generated `dist/` directory

This project can be hosted on:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- any static hosting provider

## Testing and Quality

The repository includes testing and linting infrastructure, but maintainers should treat code quality as an ongoing responsibility rather than something fully solved by the current setup.

Recommended quality workflow:

1. run `npm run lint`
2. run `npm run test`
3. run `npm run build`
4. manually verify homepage, category pages, About page, and external game links

## Future Improvements

Some useful next steps for the project would be:

- add contributor and team credits
- add official IIT Jodhpur attribution details if appropriate
- replace hardcoded category counts with derived values
- add card thumbnails or preview images for Scratch projects
- introduce richer tests for routing and filtering behavior
- add analytics or engagement tracking if needed
- create a CMS or JSON-based authoring workflow for non-developer content editing
- improve mobile navigation, since the mobile menu button is currently present without a complete expanded menu flow


