# Project Context

## Overview
This is a personal blog built with Astro + DaisyUI + Keystatic CMS. The project uses GitHub Pages for deployment with automated CI/CD.

## Key Technologies
- **Astro**: Static site generator with hybrid output mode
- **DaisyUI**: Tailwind CSS component library (Astro native, no React)
- **Keystatic CMS**: Content management system
- **Tailwind CSS**: Styling with DaisyUI component classes
- **TypeScript**: Type safety throughout the project

## Development Setup
- Development server: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

## Deployment
- **Base URL Configuration**: 
  - Development: `/` (localhost)
  - Production: `/juicy-ai-blog` (GitHub Pages)
  - Configured in `astro.config.mjs`: `base: process.env.CI ? '/juicy-ai-blog' : '/'`

## URL Handling
Use Astro's native BASE_URL for all internal links:
```astro
<a href={`${import.meta.env.BASE_URL}/blog/`}>Blog</a>
```

## Component Library
The project uses DaisyUI component classes with custom Astro components. Button component at `src/components/ui/Button.astro` supports both button and anchor rendering based on href prop, using DaisyUI button classes.

## Documentation Resources
- **Local Documentation**: `astro-llms-full.txt` (ignored in git) contains updated Astro documentation
- **MCP Tool**: AstroDoc MCP tool is available for accessing updated Astro documentation when local file is insufficient

## Content Structure
- Posts are managed through Keystatic CMS
- Content collection configured in `src/content/config.ts`
- Blog posts located in `src/content/posts/`