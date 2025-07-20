# Project Context

## Overview
This is a modern, bilingual personal blog built with Astro v5 + DaisyUI + TailwindCSS v4. The project features comprehensive internationalization (i18n) support with Chinese as the default language and English as a secondary option. It uses GitHub Pages for deployment with automated CI/CD.

## Key Technologies
- **Astro v5.12.0**: Modern static site generator with static output mode
- **TailwindCSS v4.1.11**: Utility-first CSS framework using the modern Vite plugin architecture
- **DaisyUI v5.0.46**: Semantic component library with 9 built-in themes
- **TypeScript**: Full type safety throughout the project with strict configuration
- **Astro Content Collections**: Type-safe content management with Zod schema validation
- **Built-in i18n**: Native Astro internationalization support

## Technology Stack Details

### Modern TailwindCSS v4 Setup
- Uses `@tailwindcss/vite` plugin instead of traditional PostCSS configuration
- Simple CSS import: `@import "tailwindcss";` in `src/styles/globals.css`
- No separate `tailwind.config.js` file needed
- Full DaisyUI theme integration

### Internationalization (i18n) Architecture
- **Default Locale**: Chinese (`zh-cn`) - no URL prefix (e.g., `/`, `/blog/`, `/about/`)
- **Secondary Locale**: English (`en`) - with URL prefix (e.g., `/en/`, `/en/blog/`, `/en/about/`)
- **Configuration**: `prefixDefaultLocale: false` for clean Chinese URLs
- **Content Structure**: Dual page architecture with language-specific routing

## Development Commands
- **Development server**: `npm run dev`
- **Build**: `npm run build`
- **Preview**: `npm run preview`

## Deployment Configuration
- **Platform**: GitHub Pages with automated deployment
- **Base URL Handling**: 
  - Development: `/` (localhost)
  - Production: `/juicy-ai-blog` (GitHub Pages)
  - Conditional configuration: `base: process.env.CI ? '/juicy-ai-blog' : '/'`
- **Site URL**: `https://txgo.github.io`

## URL Handling Best Practices
Always use Astro's native BASE_URL for internal links to ensure proper routing in both development and production:
```astro
<a href={`${import.meta.env.BASE_URL}blog/`}>Blog</a>
<a href={`${import.meta.env.BASE_URL}en/blog/`}>English Blog</a>
```

## Content Management

### Content Collections Structure
Content is managed through Astro's native Content Collections system (not external CMS):
- **Posts Collection**: Blog posts with bilingual support
- **Pages Collection**: Static pages with language variants
- **Schema**: Type-safe with Zod validation including language field
- **Location**: `src/content/posts/` for blog posts

### Content Schema
```typescript
// src/content/config.ts
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedAt: z.coerce.date(),
    summary: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['zh-cn', 'en']).default('zh-cn'),
  }),
});
```

## Component Architecture

### DaisyUI Integration
The project exclusively uses DaisyUI component classes for consistent styling:
- **Cards**: `card`, `card-body`, `card-title`, `card-actions`
- **Buttons**: `btn`, `btn-primary`, `btn-outline`, `btn-ghost`, `btn-square`
- **Navigation**: `navbar`, `navbar-start`, `navbar-center`, `navbar-end`
- **Menu**: `menu`, `menu-horizontal`
- **Form Elements**: `select`, `join`, `join-item`
- **Layout**: `hero`, `hero-content`, `container`

### Theme System
- **9 Available Themes**: light (default), dark, valentine, cyberpunk, synthwave, retro, aqua, luxury, dracula
- **Theme Controller**: Dropdown selector in navbar with localStorage persistence
- **Semantic Colors**: Uses DaisyUI color variables (base-100, base-content, primary, etc.)
- **Dark Mode**: Automatic theme switching based on user preference

### Navbar Structure
Modern DaisyUI navbar with three-section layout:
```astro
<div class="navbar">
  <div class="navbar-start"><!-- Logo --></div>
  <div class="navbar-center"><!-- Navigation Menu --></div>
  <div class="navbar-end"><!-- Language Switcher + Theme Controller --></div>
</div>
```

## Page Structure & Routing

### Bilingual Architecture
```
src/pages/
├── index.astro          # Chinese homepage (/)
├── about.astro          # Chinese about (/about/)
├── blog/
│   ├── index.astro      # Chinese blog list (/blog/)
│   └── [...slug].astro  # Chinese blog posts (/blog/post-slug/)
└── en/                  # English language pages
    ├── index.astro      # English homepage (/en/)
    ├── about.astro      # English about (/en/about/)
    └── blog/
        ├── index.astro  # English blog list (/en/blog/)
        └── [...slug].astro # English blog posts (/en/blog/post-slug/)
```

### Language Detection & Navigation
- **Automatic Locale Detection**: Based on URL path analysis
- **Dynamic Navigation**: Menu labels change based on current language
- **Language Switcher**: Join button component for seamless language switching
- **BASE_URL Aware**: All links properly handle the GitHub Pages base path

## Development Guidelines

### Code Style & Conventions
- **TypeScript**: Strict mode enabled with path aliases (`@/*` maps to `src/*`)
- **Component Props**: Well-defined interfaces for all Astro components
- **Semantic HTML**: Proper use of article, header, footer, nav elements
- **Accessibility**: ARIA labels and semantic markup throughout

### Content Creation
- **Blog Posts**: Create markdown files in `src/content/posts/`
- **Frontmatter Required**: title, publishedAt, summary, lang, tags
- **Language Specification**: Always specify `lang: zh-cn` or `lang: en`
- **Image Handling**: Optional image field for post thumbnails

### Styling Guidelines
- **Use DaisyUI Classes**: Always prefer DaisyUI components over custom CSS
- **Semantic Colors**: Use DaisyUI color variables instead of hardcoded colors
- **Responsive Design**: Leverage DaisyUI's built-in responsive utilities
- **Theme Consistency**: Ensure components work across all 9 themes

## Performance Features
- **Static Generation**: All pages pre-rendered at build time
- **Zero JavaScript Default**: Minimal client-side JavaScript for theme switching
- **Optimized Builds**: Automatic code splitting and optimization
- **Fast Loading**: Leverages Astro's minimal runtime overhead

## Documentation Resources
- **MCP Tool**: Context7 MCP server available for library documentation lookup
- **Astro Docs**: Built-in MCP tool `mcp__AstroDocs__search_astro_docs` for Astro-specific queries
- **Local Documentation**: Project-specific knowledge in this CLAUDE.md file

## Current Content
- **Welcome Post**: Chinese introduction post (`welcome-to-juicy-ai.md`)
- **Technical Guide**: Comprehensive blog construction guide (`building-modern-astro-blog.md`)
- **About Pages**: Bilingual about pages with project information
- **Homepage**: Bilingual landing pages with recent posts and hero sections

## Special Features
- **Mobile Responsive**: Hamburger menu for mobile navigation
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured data
- **Theme Persistence**: User theme choice saved in localStorage
- **Language Switching**: Seamless bilingual navigation
- **Type Safety**: Full TypeScript coverage for content and components