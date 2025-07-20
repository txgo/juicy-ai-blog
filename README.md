# Juicy AI Blog

A modern personal blog built with Astro, DaisyUI, and Tailwind CSS, focused on AI and technology content.

## 🚀 Features

- **Modern Stack**: Astro + DaisyUI + Tailwind CSS v4
- **Component Library**: Beautiful, accessible components with DaisyUI
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Content Collections**: Type-safe content management with Astro
- **SEO Optimized**: Built-in SEO features with Astro
- **GitHub Pages**: Free hosting with GitHub Pages
- **TypeScript**: Full type safety

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) v5.12.0
- **UI Components**: [DaisyUI](https://daisyui.com/) v5.0.46
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4.1.11
- **Language**: TypeScript
- **Deployment**: GitHub Pages
- **Documentation**: Context7 MCP integration for up-to-date library docs

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/txgo/juicy-ai-blog.git
cd juicy-ai-blog
```

2. Install dependencies:
```bash
npm install
```

3. Update configuration:
   - Edit `astro.config.mjs` to update `site` and `base` URLs for your deployment

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`     |
| `npm run build`           | Build your production site to `./dist/`         |
| `npm run preview`         | Preview your build locally, before deploying    |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📝 Content Management

### Creating Content

Create content manually by adding files to the content directories:

1. **Blog Posts**: Create `.mdx` files in `src/content/posts/`
2. **Pages**: Create `.mdx` files in `src/content/pages/`

### Content Structure

Each blog post should include frontmatter with the following fields:

```yaml
---
title: "Your Post Title"
publishedAt: 2024-01-15
summary: "A brief summary of your post"
image: "/images/posts/featured-image.jpg" # optional
tags:
  - AI
  - Technology
---

# Your content here...
```

## 🌐 Deployment

### GitHub Pages Setup

1. **Create a new repository** on GitHub named `juicy-ai-blog`

2. **Update configuration**:
   - In `astro.config.mjs`, update the `site` URL to your GitHub Pages URL

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

4. **Push your code**:
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/txgo/juicy-ai-blog.git
git push -u origin main
```

### Adding DaisyUI Components

DaisyUI components are available as CSS classes that you can apply directly to your HTML elements. No additional installation required - just use the class names:

```astro
<!-- Button component example -->
<button class="btn btn-primary">Primary Button</button>

<!-- Card component example -->
<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Card title!</h2>
    <p>Card content goes here.</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```

Browse all available components at [DaisyUI Components](https://daisyui.com/components/).

## 🎨 Customization

### Styling

- **Tailwind CSS v4**: Modern configuration with Vite plugin in `astro.config.mjs`
- **DaisyUI**: Component classes available globally
- **Global Styles**: `src/styles/global.css` with `@import "tailwindcss";`
- **Custom Styles**: Add to your component files or create CSS files in `src/styles/`

### Layout

- Main layout: `src/layouts/Layout.astro`
- Page templates: `src/pages/`
- Components: Create in `src/components/`

### Content Schema

- Content collections: `src/content/config.ts`

## 🔧 Configuration Details

### Astro Configuration (`astro.config.mjs`)
```javascript
// Modern Tailwind CSS v4 setup with Vite plugin
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  site: 'https://txgo.github.io',
  base: process.env.CI ? '/juicy-ai-blog/' : '/'
});
```

### Context7 MCP Integration

This project uses Context7 MCP for accessing up-to-date documentation:
- **Available Libraries**: Astro, TailwindCSS, DaisyUI documentation
- **Usage**: Access via Claude Code with Context7 MCP server
- **Benefits**: Always current documentation without version drift

## 📁 Project Structure

```
/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   └── ui/         # shadcn/ui components
│   ├── content/
│   │   ├── posts/      # Blog posts (.mdx)
│   │   └── pages/      # Static pages (.mdx)
│   ├── layouts/
│   ├── lib/            # Utility functions
│   ├── pages/          # Astro pages
│   └── styles/         # Global styles
├── astro.config.mjs    # Astro + Tailwind CSS v4 config
└── package.json
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [Live Site](https://txgo.github.io/juicy-ai-blog)
- [Astro Documentation](https://docs.astro.build)
- [DaisyUI Documentation](https://daisyui.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Context7 MCP](https://github.com/context7/mcp-server) - Up-to-date library documentation
