# PC Gaming & Hardware Blog

A modern blog built with Next.js deployed on Vercel, migrated from WordPress.

## Features

- ✅ Fast static site generation
- ✅ Markdown-based content (easy to manage in git)
- ✅ Responsive design with Tailwind CSS
- ✅ Dark theme optimized for gaming
- ✅ SEO-friendly
- ✅ Free hosting on Vercel
- ✅ Free custom domain support

## Getting Started

### Prerequisites

- Node.js 18+ (download from https://nodejs.org)
- npm or yarn package manager
- Git

### Installation

1. Clone this repository:
```bash
git clone <your-repo-url>
cd nextjs-gaming-blog
```

2. Install dependencies:
```bash
npm install
```

3. Create the content directory if it doesn't exist:
```bash
mkdir -p content/posts
```

4. Run the development server:
```bash
npm run dev
```

5. Open http://localhost:3000 in your browser

## Adding Blog Posts

Blog posts are stored as Markdown files in `content/posts/` directory.

### Post Format

Create a new `.md` file with the following format:

```markdown
---
title: "Your Post Title"
date: "2025-01-15"
excerpt: "Brief description of your post"
categories: ["Gaming", "Hardware"]
author: "Your Name"
image: "/images/post-image.jpg"
---

# Post content here

Write your post using **Markdown**. You can use:
- Headers (# H1, ## H2, etc.)
- **Bold** and *italic* text
- Lists and numbered lists
- Code blocks
- Links and images
```

### File Naming

Save files as: `content/posts/your-post-slug.md`

The slug (filename) will be used in the URL: `/blog/your-post-slug`

### Example Post

See `content/posts/example-post.md` for a complete example.

## Building and Deploying

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Go to https://vercel.com and sign up (free)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

The site will be live at `yourproject.vercel.app`

## Setting Up Custom Domain

### Option 1: Free .eu.org Domain

1. Register at https://nic.eu.org
   - Choose your domain (e.g., `yourblog.eu.org`)
   - Follow their registration process
   - Wait for approval (usually 1-2 days)

2. Configure DNS in Vercel:
   - In your Vercel project, go to Settings > Domains
   - Add your domain name
   - Follow the DNS setup instructions

3. Update your .eu.org domain nameservers to point to Vercel:
   - In your .eu.org control panel, set nameservers to Vercel's (they'll provide them)
   - Wait for DNS propagation (up to 24 hours)

### Option 2: Point .eu.org to Vercel using CNAME

If your registrar supports it, create a CNAME record:
- Record Type: CNAME
- Name: www
- Value: `cname.vercel.app`

For the root domain (@), use an A record pointing to Vercel's IP addresses.

## Migrating from WordPress

### Step 1: Export WordPress Content

1. Log into WordPress.com
2. Go to Tools > Export
3. Select "Posts" and export as XML

### Step 2: Convert XML to Markdown

Use a tool like:
- https://wordpress2jekyll.com (online converter)
- https://pandoc.org (command-line tool)
- https://github.com/lonekorean/wordpress-export-to-markdown (npm package)

Example command with npm package:
```bash
npm install -g wordpress-export-to-markdown
wordpress-export-to-markdown --input=export.xml --output=content/posts
```

### Step 3: Adjust Markdown Files

- Review each markdown file
- Adjust frontmatter (title, date, categories)
- Fix image paths (move images to `public/images/`)
- Update any broken internal links

### Step 4: Handle Images

Download images from your old blog and place them in `public/images/`

Update image URLs in markdown files from:
```
https://ardaspcblog.wordpress.com/wp-content/uploads/...
```

To:
```
/images/image-name.jpg
```

## Updating Posts

1. Edit markdown files in `content/posts/`
2. Push changes to GitHub
3. Vercel automatically rebuilds and deploys

## Troubleshooting

### Posts Not Showing

- Ensure markdown files are in `content/posts/` directory
- Check file names (should be lowercase with hyphens)
- Verify frontmatter YAML syntax is correct
- Run `npm run build` to see build errors

### Images Not Loading

- Check image paths in markdown (use `/images/filename.jpg`)
- Ensure images are in `public/images/` directory
- Verify file names match exactly (case-sensitive on Linux servers)

### Domain Not Working

- Check DNS propagation: https://dnschecker.org
- Verify domain is added in Vercel project settings
- Wait up to 24 hours for DNS changes to propagate
- Check nameserver configuration at registrar

## Support

For issues with:
- **Next.js**: https://nextjs.org/docs
- **Vercel Deployment**: https://vercel.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Markdown**: https://www.markdownguide.org

## License

MIT - Feel free to use this as a template for your own blog
