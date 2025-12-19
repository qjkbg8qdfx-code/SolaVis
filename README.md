# AI Trust Engine

A high-performance, conversion-optimized "Trust Engine" website for an AI & Tech Consultancy, built with Next.js 14.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ai-trust-engine.git
   cd ai-trust-engine
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Configure your `.env.local`:
   ```env
   # Site Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000

   # Contact Form (if applicable)
   # CONTACT_EMAIL=your-email@example.com

   # Analytics (optional)
   # NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start development server with hot reload |
| `npm run build` | Create production build                  |
| `npm run start` | Start production server                  |
| `npm run lint`  | Run ESLint for code quality checks       |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── methodology/        # Methodology page
│   ├── privacy/            # Privacy policy page
│   └── services/           # Services page
├── components/             # React components
│   ├── layout/             # Layout components (Nav, Footer, etc.)
│   └── ui/                 # Reusable UI components
├── config/                 # Configuration files
│   ├── content.ts          # Page content & copy
│   ├── navigation.ts       # Navigation links
│   └── site.ts             # Site-wide settings & SEO
public/                     # Static assets
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository at [vercel.com/new](https://vercel.com/new)
3. Vercel will auto-detect Next.js and configure build settings
4. Every push to `main` triggers a production deployment
5. Pull requests get automatic preview deployments

### Manual Build

```bash
npm run build
npm run start
```

## CI/CD

This project uses GitHub Actions for continuous integration. On every push to `main`:

1. Dependencies are installed via `npm ci`
2. Linting runs via `npm run lint`
3. Production build is verified via `npm run build`

See [.github/workflows/main.yml](.github/workflows/main.yml) for details.

## License

Private - All rights reserved.
