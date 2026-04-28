# Lance Ian T. Leanillo Portfolio

This is my personal portfolio website. It shows who I am, what I work with, and
some of the projects I have built.

## What You Need

Make sure Node.js is installed on your computer.

You can check by running:

```bash
node -v
```

## Setup

Open the project folder in your terminal, then install the files it needs:

```bash
npm install
```

Start the website:

```bash
npm run dev
```

Open this in your browser:

```text
http://localhost:3000
```

If port 3000 is already being used, the terminal will show another link. Open
that link instead.

## Check Before Uploading

Run these commands before deploying:

```bash
npm run lint
npm run build
```

If both commands finish without errors, the site is ready to upload.

## Main Files

- `src/app/page.tsx` controls the main page.
- `src/app/layout.tsx` wraps the page with the shared header and footer.
- `src/lib/types.ts` stores shared TypeScript interfaces.
- `src/components/ui/Button.tsx` is the reusable button component.
- `src/components/ui/Card.tsx` is the reusable project card component.
- `src/components/layout/Header.tsx` contains the brand, navigation, mobile menu, and theme toggle.
- `src/components/layout/Footer.tsx` contains copyright, social links, email, and navigation.
- `src/components/sections/Hero.tsx` is the first section.
- `src/components/sections/About.tsx` is the about section.
- `src/components/sections/Projects.tsx` is the projects section.
- `src/components/sections/Contact.tsx` is the contact section.
- `public/` stores images and videos used by the site.

## Component Architecture

The app uses the Next.js App Router. `layout.tsx` handles shared page chrome,
while `page.tsx` composes the page sections in order.

Components are grouped by responsibility:

- `layout/` contains navigation and site-wide structure.
- `ui/` contains reusable building blocks such as `Button` and `Card`.
- `sections/` contains page-specific portfolio sections.
- `lib/types.ts` keeps shared TypeScript contracts for projects, navigation
  items, and social links.

Interactive components use `"use client"` only where state or browser behavior
is needed, such as the mobile menu, dark mode toggle, project loading state, and
contact form validation.

## Projects Shown

- Vibolla
- localtradings
- Velvet Bean Cafe
