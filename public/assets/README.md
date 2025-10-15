# Assets Directory

This directory contains all static assets for the Bansohi Technology website.

## Directory Structure

```
public/assets/
├── logos/           # Company logos and brand assets
├── projects/        # Project screenshots and case study images
├── icons/           # Custom icons, social media icons, UI icons
├── images/          # General images, backgrounds, team photos
├── documents/       # PDFs, brochures, case studies
└── README.md        # This file
```

## Usage

### In Components
```tsx
import { logos, projects, icons } from '@/assets';

// Use in JSX
<img src={logos.primary} alt="Bansohi Technology Logo" />
<img src={projects.project1.hero} alt="Project 1" />
<img src={icons.social.linkedin} alt="LinkedIn" />
```

### Direct URL Access
```tsx
// Direct access via public URL
<img src="/assets/logos/logo-primary.svg" alt="Logo" />
<img src="/assets/projects/project-1/hero-image.jpg" alt="Project" />
```

## File Naming Conventions

### Logos
- `logo-primary.svg` - Main company logo
- `logo-white.svg` - White version for dark backgrounds
- `logo-dark.svg` - Dark version for light backgrounds
- `logo-icon.svg` - Icon only version
- `logo-horizontal.svg` - Horizontal layout
- `logo-vertical.svg` - Vertical layout

### Projects
- `project-{number}/hero-image.jpg` - Main project image
- `project-{number}/screenshots/` - Project screenshots
- `project-{number}/mockups/` - Design mockups
- `project-{number}/before-after/` - Before/after comparisons

### Icons
- `social/` - Social media icons
- `ui/` - User interface icons
- `tech/` - Technology stack icons

### Images
- `backgrounds/` - Background images
- `team/` - Team member photos
- `clients/` - Client logos
- `testimonials/` - Testimonial photos

## Image Optimization

- Use WebP format for better compression
- Provide multiple sizes for responsive images
- Optimize images before adding to assets
- Use descriptive filenames

## Adding New Assets

1. Place files in the appropriate subdirectory
2. Update `src/assets/index.ts` with new asset paths
3. Use TypeScript types for better development experience
4. Test asset loading in development

## Best Practices

- Keep file sizes optimized
- Use semantic naming conventions
- Organize assets logically
- Update the assets index file when adding new files
- Use consistent file formats (SVG for logos/icons, JPG/WebP for photos)
