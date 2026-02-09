# Sitemap Documentation

## Overview

This site uses a comprehensive XML sitemap with proper priorities optimized for local service website SEO. The sitemap is automatically generated during the build process.

## Sitemap Location

- **URL**: `https://deptfordnjconcrete.com/sitemap.xml`
- **File**: `dist/sitemap.xml`
- **Total Pages**: 47 pages

## Priority Structure

The sitemap uses differentiated priorities based on page importance:

### Priority 1.0 - Homepage
- **URL**: `https://deptfordnjconcrete.com/`
- **Change Frequency**: Weekly
- **Reason**: Most important page, primary entry point

### Priority 0.9 - Primary Service Pages
- `/services/pole-barn-foundations/`
- `/services/concrete-slabs/`
- `/services/stamped-concrete/`
- **Change Frequency**: Weekly
- **Reason**: Core services that drive business

### Priority 0.8 - Location/Service Combination Pages
- `/locations/[city]/pole-barn-foundations/`
- `/locations/[city]/concrete-slabs/`
- `/locations/[city]/stamped-concrete/`
- **Change Frequency**: Weekly
- **Reason**: Highly targeted local SEO pages (33 pages total)

### Priority 0.7 - Other Service & Location Pages
- Other service pages (driveways, patios, walkways, etc.)
- Individual location pages
- Services index page
- Locations index page
- **Change Frequency**: Weekly
- **Reason**: Important but secondary pages

### Priority 0.6 - Secondary Pages
- `/about/`
- `/contact/`
- `/gallery/`
- **Change Frequency**: Monthly
- **Reason**: Less frequently updated informational pages

## Generation Process

The sitemap is generated automatically during the build process using a custom script:

1. **Build Step**: `npm run build` runs `astro build && node scripts/generate-sitemap.js`
2. **Script**: `scripts/generate-sitemap.js` scans the `dist` folder for all HTML pages
3. **Output**: Creates `dist/sitemap.xml` with proper priorities and change frequencies

## Submission

The sitemap is referenced in:
- `robots.txt`: `Sitemap: https://deptfordnjconcrete.com/sitemap.xml`

### Submit to Search Engines

1. **Google Search Console**:
   - Go to Sitemaps section
   - Submit: `https://deptfordnjconcrete.com/sitemap.xml`

2. **Bing Webmaster Tools**:
   - Go to Sitemaps section
   - Submit: `https://deptfordnjconcrete.com/sitemap.xml`

## Benefits

- **Better Crawlability**: Search engines can discover all pages efficiently
- **Priority Signals**: Search engines understand which pages are most important
- **Update Frequency**: Helps search engines know how often to revisit pages
- **Local SEO**: Location/service pages prioritized for local search visibility

## Maintenance

The sitemap is automatically regenerated on each build. No manual maintenance required.

If you add new pages:
- The sitemap will automatically include them
- Priorities will be assigned based on URL patterns
- Update the script's `getPriority()` function if you need custom priorities for new page types

