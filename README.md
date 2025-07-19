# Juicy AI Blog

A modern personal blog built with Astro, shadcn/ui, and Tailwind CSS, focused on AI and technology content.

## 🚀 Features

- **Modern Stack**: Astro + shadcn/ui + Tailwind CSS
- **Component Library**: Beautiful, accessible components with shadcn/ui
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Content Collections**: Type-safe content management with Astro
- **SEO Optimized**: Built-in SEO features with Astro
- **GitHub Pages**: Free hosting with GitHub Pages
- **TypeScript**: Full type safety

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Astro version)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: TypeScript
- **Deployment**: GitHub Pages

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

### Adding shadcn/ui Components

To add more shadcn/ui components to your project:

```bash
npx shadcn@latest add [component-name]
```

Note: Since this is an Astro project, you'll need to convert the generated React components to Astro components manually, following the pattern used in `src/components/ui/Button.astro`.

## 🎨 Customization

### Styling

- Tailwind configuration: `tailwind.config.js`
- Custom styles: Add to your component files or create CSS files in `src/styles/`

### Layout

- Main layout: `src/layouts/Layout.astro`
- Page templates: `src/pages/`
- Components: Create in `src/components/`

### Content Schema

- Content collections: `src/content/config.ts`
- shadcn/ui configuration: `components.json`

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
├── astro.config.mjs
├── components.json     # shadcn/ui config
├── tailwind.config.mjs
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
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
