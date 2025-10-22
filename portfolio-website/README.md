# Portfolio Website - Project Templates & Documentation

## 🚀 Quick Start

This portfolio website is built with Next.js 15, TypeScript, and Tailwind CSS v4. It features a modern design with glassmorphism effects, smooth animations, and full responsiveness.

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3001` (configured to use port 3001).

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles with design system
├── components/              # Reusable components
│   ├── ui/                 # shadcn/ui components
│   ├── NavBar.tsx          # Navigation with mobile drawer
│   ├── Footer.tsx          # Site footer
│   ├── ProjectCard.tsx     # Project display component
│   ├── SectionHeader.tsx   # Consistent section headers
│   ├── ResponsiveContainer.tsx # Layout container
│   └── AnimationReveal.tsx # Scroll-triggered animations
├── sections/               # Page sections
│   ├── Hero.tsx           # Landing section
│   ├── About.tsx          # About & skills
│   ├── Projects.tsx       # Project showcase
│   ├── Experience.tsx     # Work experience & education
│   └── Contact.tsx        # Contact form
└── data/
    └── projects.ts        # Project data & templates
```

## 🎨 Design System

### Color Palette
- **Primary**: Dark gray/black for text and accents
- **Background**: Pure white with subtle transparency
- **Cards**: Semi-transparent with backdrop blur
- **Borders**: Subtle gray borders with transparency

### Typography
- **Font**: Geist Sans (system font fallback)
- **Scale**: Responsive sizing with clamp() functions
- **Line Height**: Optimized for readability

### Spacing
- **Base Unit**: 8px (0.5rem)
- **Scale**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64px
- **Responsive**: Uses Tailwind's responsive prefixes

### Components
- **Glassmorphism**: Semi-transparent backgrounds with backdrop blur
- **Animations**: Smooth transitions with reduced motion support
- **Focus States**: High contrast outlines for accessibility

## 📝 Adding Projects

### Method 1: Quick Add (30 seconds)

1. Open `src/data/projects.ts`
2. Add a new project object to the `projects` array:

```typescript
{
  id: 'your-project-id',
  title: 'Your Project Title',
  descriptionShort: 'Brief description of your project.',
  tech: ['React', 'TypeScript', 'Tailwind CSS'],
  links: [
    { label: 'Demo', href: 'https://your-demo.com' },
    { label: 'GitHub', href: 'https://github.com/username/repo' }
  ],
  featured: true,
  year: '2024',
  status: 'live'
}
```

3. Save the file - your project will appear immediately!

### Method 2: Using Templates

The file includes three ready-to-use templates:

#### Full-Feature Template
```typescript
{
  id: 'template-full',
  title: 'Your Project Title',
  tagline: 'Compelling tagline',
  descriptionShort: 'Brief description of your project (1-2 sentences).',
  descriptionLong: `# Your Project Title

A detailed description of your project using markdown.

## Key Features
- Feature 1
- Feature 2
- Feature 3

## Technical Implementation
- Technical detail 1
- Technical detail 2

## Results
- Result 1
- Result 2`,
  tech: ['Technology 1', 'Technology 2', 'Technology 3'],
  image: '/projects/your-project.jpg',
  links: [
    { label: 'Demo', href: 'https://your-demo.vercel.app' },
    { label: 'GitHub', href: 'https://github.com/username/your-project' }
  ],
  featured: true,
  year: '2024',
  status: 'live',
  tags: ['tag1', 'tag2']
}
```

#### Minimal Template
```typescript
{
  id: 'template-minimal',
  title: 'Simple Project',
  descriptionShort: 'A simple project description.',
  tech: ['React', 'CSS'],
  links: [
    { label: 'GitHub', href: 'https://github.com/username/simple-project' }
  ],
  year: '2024',
  status: 'live'
}
```

#### Spotlight Template
```typescript
{
  id: 'template-spotlight',
  title: 'Featured Project',
  tagline: 'Showcase project',
  descriptionShort: 'A project worthy of the spotlight section.',
  descriptionLong: `# Featured Project

This is a detailed description for a featured project.

## Why This Project?
- Reason 1
- Reason 2

## Impact
- Impact 1
- Impact 2`,
  tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  image: '/projects/featured-project.jpg',
  links: [
    { label: 'Demo', href: 'https://featured-demo.vercel.app' },
    { label: 'GitHub', href: 'https://github.com/username/featured-project' },
    { label: 'Case Study', href: '/case-studies/featured-project' }
  ],
  featured: true,
  year: '2024',
  status: 'live',
  tags: ['showcase', 'featured']
}
```

### Project Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | ✅ | Unique identifier |
| `title` | string | ✅ | Project name |
| `tagline` | string | ❌ | Short subtitle |
| `descriptionShort` | string | ✅ | Brief description |
| `descriptionLong` | string | ❌ | Detailed markdown description |
| `tech` | string[] | ✅ | Technology stack |
| `image` | string | ❌ | Project image path |
| `links` | object[] | ❌ | External links |
| `featured` | boolean | ❌ | Show in spotlight |
| `year` | string | ❌ | Project year |
| `status` | 'live'\|'wip'\|'archived' | ❌ | Project status |
| `tags` | string[] | ❌ | Filter tags |

## 🎛️ Layout Variants

The Projects section supports three layout variants:

### Grid Layout (Default)
- **Best for**: Browsing multiple projects
- **Features**: 3-column responsive grid
- **Use case**: Portfolio overview

### Spotlight Layout
- **Best for**: Featured projects
- **Features**: Large cards with detailed descriptions
- **Use case**: Showcasing best work

### Compact Layout
- **Best for**: Quick scanning
- **Features**: List-style with minimal spacing
- **Use case**: Mobile or space-constrained views

### Switching Variants

Users can switch between variants using the control buttons in the Projects section. The variant state is managed locally and persists during the session.

## 🖼️ Adding Images

1. Place project images in `public/projects/`
2. Reference them in your project data:
   ```typescript
   image: '/projects/your-project.jpg'
   ```
3. Images are automatically optimized with Next.js Image component
4. Supports WebP, AVIF, and other modern formats

## 🎨 Customization

### Colors
Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: oklch(0.205 0 0);        /* Main accent color */
  --background: oklch(1 0 0);         /* Page background */
  --card: oklch(1 0 0 / 0.8);         /* Card transparency */
}
```

### Typography
The site uses Geist Sans font. To change:

1. Update font imports in `src/app/layout.tsx`
2. Modify CSS variables in `globals.css`

### Animations
All animations respect `prefers-reduced-motion`. To customize:

1. Edit keyframes in `globals.css`
2. Modify `AnimationReveal` component
3. Adjust transition durations

## 📱 Responsive Breakpoints

- **Mobile**: 360px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px - 1279px
- **Large**: 1280px+

The design is mobile-first with progressive enhancement.

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Semantic HTML and ARIA labels
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant
- **Reduced Motion**: Respects user preferences
- **Skip Links**: Quick navigation to main content

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
3. Deploy automatically on push to main branch

### Other Platforms

The site works on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 Performance Optimization

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based splitting
- **Font Optimization**: Self-hosted fonts with display swap
- **CSS Optimization**: Tailwind CSS purging
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## 📊 SEO Features

- **Meta Tags**: Comprehensive meta tags in layout
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Check TypeScript errors with `npm run lint`
2. **Image Loading**: Ensure images are in `public/` directory
3. **Styling Issues**: Verify Tailwind CSS is properly configured
4. **Animation Problems**: Check for `prefers-reduced-motion` conflicts

### Getting Help

- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Tailwind CSS docs](https://tailwindcss.com/docs)
- Open an issue in the repository

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding!** 🎉