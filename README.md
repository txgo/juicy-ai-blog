# Juicy AI Blog

A modern personal blog built with Astro, Keystatic CMS, Alpine.js, and Tailwind CSS, focused on AI and technology content.

## 🚀 Features

- **Modern Stack**: Astro + Keystatic CMS + Alpine.js + Tailwind CSS
- **Content Management**: Easy content editing with Keystatic CMS
- **Responsive Design**: Beautiful, mobile-first design with Tailwind CSS
- **Interactive Elements**: Enhanced UX with Alpine.js
- **SEO Optimized**: Built-in SEO features with Astro
- **GitHub Pages**: Free hosting with GitHub Pages
- **TypeScript**: Full type safety

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **CMS**: [Keystatic](https://keystatic.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **JavaScript**: [Alpine.js](https://alpinejs.dev/)
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
   - Edit `astro.config.mjs` to update `site` and `base` URLs
   - Edit `keystatic.config.ts` to update the GitHub repository

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`     |
| `npm run build`           | Build your production site to `./dist/`         |
| `npm run preview`         | Preview your build locally, before deploying    |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📝 Content Management

### Using Keystatic CMS

1. Run the development server: `npm run dev`
2. Navigate to `/keystatic` in your browser
3. Sign in with GitHub (after setting up GitHub OAuth)
4. Create and edit posts and pages through the visual editor

### Manual Content Creation

You can also create content manually:

1. **Blog Posts**: Create `.mdx` files in `src/content/posts/`
2. **Pages**: Create `.mdx` files in `src/content/pages/`

## 🌐 Deployment

### GitHub Pages Setup

1. **Create a new repository** on GitHub named `juicy-ai-blog`

2. **Update configuration**:
   - In `astro.config.mjs`, update the `site` URL to your GitHub Pages URL
   - In `keystatic.config.ts`, update the repository name

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

### GitHub OAuth Setup (for Keystatic CMS)

1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create a new OAuth App with:
   - Homepage URL: `https://txgo.github.io/juicy-ai-blog`
   - Authorization callback URL: `https://txgo.github.io/juicy-ai-blog/keystatic/api/github/oauth/callback`
3. Note the Client ID and Client Secret for Keystatic configuration

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
- Keystatic schema: `keystatic.config.ts`

## 📁 Project Structure

```
/
├── public/
│   └── images/
├── src/
│   ├── components/
│   ├── content/
│   │   ├── posts/
│   │   └── pages/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── keystatic.config.ts
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
- [Keystatic Documentation](https://keystatic.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Alpine.js Documentation](https://alpinejs.dev/start-here)
