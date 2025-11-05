# Deptford Concrete Contractors Website

SEO-optimized Astro website for Deptford Concrete Contractors, specializing in pole barn foundations and large commercial concrete projects.

## Features

- **Pole Barn Foundation Focus**: Primary specialty prominently featured throughout site
- **20+ SEO-Optimized Pages**: Homepage, 7 service pages, 11 location pages, plus about/contact/gallery
- **Schema Markup**: LocalBusiness, Service, FAQPage structured data on all pages
- **Location Pages**: Dedicated pages for 11 nearby cities, all featuring pole barn foundations
- **Netlify Forms**: Contact forms integrated with Netlify Forms
- **Responsive Design**: Mobile-friendly layout
- **Fast Performance**: Static site generation with Astro

## Project Structure

```
/
├── src/
│   ├── components/      # Reusable components (Header, Footer, Forms, Cards)
│   ├── layouts/         # Base layout with SEO
│   ├── pages/           # All pages
│   │   ├── services/    # 7 service pages (pole-barn-foundations featured)
│   │   └── locations/   # 11 location pages
│   ├── content/         # JSON data (services, locations)
│   └── config.ts        # Site configuration
├── public/
│   └── images/projects/ # Add project photos here
└── netlify.toml         # Netlify deployment config
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Update configuration:
   - Edit `src/config.ts` to add phone number and email
   - Update `astro.config.mjs` with your actual domain

3. Add project photos:
   - Place images in `public/images/projects/`
   - Use descriptive filenames (e.g., `pole-barn-foundation-deptford-nj.jpg`)

## Development

```bash
npm run dev
```

Visit `http://localhost:4321` to view the site.

## Build

```bash
npm run build
```

Build output will be in the `dist/` directory.

## Deployment to Netlify

1. Push your code to a Git repository (GitHub, GitLab, etc.)

2. Connect to Netlify:
   - Go to Netlify dashboard
   - Click "Add new site" → "Import an existing project"
   - Connect your repository

3. Configure build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`

4. Update environment (if needed):
   - Site domain in `astro.config.mjs`
   - Update `robots.txt` with your actual domain

5. Deploy!

## SEO Features

- **Schema Markup**: LocalBusiness, Service, FAQPage on relevant pages
- **Meta Tags**: Optimized titles and descriptions for all pages
- **Sitemap**: Auto-generated XML sitemap
- **Internal Linking**: Strategic links between services, locations, and homepage
- **Location-Specific Content**: Unique content for each city
- **Keyword Optimization**: Pole barn foundations and related terms throughout

## Pages Created

### Homepage
- Pole barn foundation focus
- All services overview
- Service areas
- FAQ section
- Contact form

### Service Pages (7)
1. Pole Barn Foundations (PRIMARY - most detailed)
2. Concrete Slabs
3. Driveways
4. Patios
5. Walkways
6. Retaining Walls
7. Basement Flooring

### Location Pages (11)
- Deptford, NJ
- West Deptford, NJ
- Woodbury, NJ
- Glassboro, NJ
- Sewell, NJ
- Pitman, NJ
- Washington Township, NJ
- Turnersville, NJ
- Blackwood, NJ
- Wenonah, NJ
- Mantua, NJ

### Other Pages
- About
- Contact
- Gallery (ready for project photos)

## Next Steps

1. Add phone number and email to `src/config.ts`
2. Add project photos to `public/images/projects/`
3. Update domain in `astro.config.mjs` and `robots.txt`
4. Deploy to Netlify
5. Submit sitemap to Google Search Console
6. Set up Google Business Profile
7. Add reviews/testimonials (can be added to schema later)

## Competitive Advantages

- **More Pages**: 20+ pages vs competitor's single page
- **Better Structure**: Dedicated location and service pages
- **Schema Markup**: Comprehensive structured data
- **Faster Performance**: Astro static generation
- **Local Focus**: Hyper-local content for each city
- **Pole Barn Focus**: Primary specialty clearly emphasized
- **No Spam Links**: Clean, relevant internal linking only
