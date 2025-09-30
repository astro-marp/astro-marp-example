# Test Project - Astro Marp & Typst Integration

A comprehensive test project demonstrating the integration of **[astro-marp](https://github.com/astro-marp/astro-marp)** and **[astro-typst](https://github.com/OverflowCat/astro-typst)** for creating presentations, books, and blog content in a single Astro application.

## 🚀 Project Overview

This project showcases three different content types working together:

- **📊 Presentations** - Interactive slide decks using Marp (Markdown Presentation Ecosystem)
- **📚 Books** - Professional documents using Typst typesetting system
- **📝 Blog** - Standard Markdown blog posts

## 🏗 Project Structure

```text
astro-marp-example/
├── src/
│   ├── content/
│   │   ├── presentation/         # Marp presentations (.marp)
│   │   │   └── macroeconomics.marp
│   │   ├── book/                # Typst documents (.typ)
│   │   │   └── introduction-to-typst.typ
│   │   ├── blog/                # Markdown blog posts (.md)
│   │   │   └── post-2024-11-14.md
│   │   └── config.ts            # Content collection schemas
│   └── pages/
│       ├── presentations/       # Dynamic routes for presentations
│       │   ├── [...slug].astro
│       │   └── index.astro
│       ├── book/               # Dynamic routes for books
│       │   ├── [...slug].astro
│       │   └── index.astro
│       ├── blog/               # Dynamic routes for blog
│       │   ├── [...slug].astro
│       │   └── index.astro
│       └── index.astro         # Homepage
├── astro.config.mjs            # Astro configuration with integrations
└── package.json
```

## 🔌 Integrations

- Astro-Marp (Presentations)
- Astro-Typst (Books)
- markdown

## 📋 Content Collection Schemas

### Presentation Schema
```typescript
{
  title: string;
  description: string;
  author: string;
  marp: boolean;
  keywords?: string;
  url?: string;
  image?: string;
  theme?: string;
  updatedDate?: Date;
}
```

### Book Schema
```typescript
{
  title: string;
  author?: string;
  desc?: any;
  date: any;
}
```

### Blog Schema
```typescript
{
  title: string;
  description: string;
}
```


## 🧞 Commands

All commands are run from the root of the project:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`          | Installs dependencies                            |
| `pnpm dev`          | Starts local dev server at `localhost:4321`     |
| `pnpm build`        | Build your production site to `./dist/`         |

## 🌐 Available Routes

### Presentations
- `/presentations/` - List all presentations
- `/presentations/macroeconomics/` - Chinese macroeconomics presentation

### Books
- `/book/` - List all books
- `/book/introduction-to-typst/` - Typst tutorial document

### Blog
- `/blog/` - List all blog posts
- `/blog/post-2024-11-14/` - Sample blog post


## 🎯 Use Cases

This test project demonstrates real-world scenarios:

1. **Academic/Educational**: Complex presentations with diagrams and mathematical content
2. **Professional**: Multi-language business presentations with charts
3. **Publishing**: Technical documentation with professional typesetting
4. **Blogging**: Standard content management alongside specialized formats

Perfect for testing the integration compatibility and showcasing the full capabilities of both astro-marp and astro-typst working together in a single project.
