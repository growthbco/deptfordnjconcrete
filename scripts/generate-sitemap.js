/**
 * Generate comprehensive XML sitemap with proper priorities for local service website
 * This script creates a sitemap when Astro's built-in sitemap doesn't generate properly
 */

import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distPath = join(__dirname, '..', 'dist');

// Get all HTML files from dist
function getAllPages() {
  const pages = [];
  
  function walkDir(dir, basePath = '') {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('_') && !file.startsWith('.')) {
        walkDir(filePath, basePath ? `${basePath}/${file}` : file);
      } else if (file === 'index.html') {
        const url = basePath ? `/${basePath}/` : '/';
        pages.push(url);
      }
    });
  }
  
  walkDir(distPath);
  return pages;
}

function getPriority(url) {
  // Homepage - highest priority
  if (url === '/') return 1.0;
  
  // Primary service pages - high priority
  if (url.includes('/services/pole-barn-foundations/') ||
      url.includes('/services/concrete-slabs/') ||
      url.includes('/services/stamped-concrete/')) {
    return 0.9;
  }
  
  // Location/service combination pages - very high priority for local SEO
  if (url.match(/\/locations\/[^\/]+\/[^\/]+\/$/)) {
    return 0.8;
  }
  
  // Other service pages - medium priority
  if (url.includes('/services/')) {
    return 0.7;
  }
  
  // Location pages - medium priority
  if (url.includes('/locations/') && !url.match(/\/locations\/[^\/]+\/[^\/]+\/$/)) {
    return 0.7;
  }
  
  // Secondary pages - lower priority
  if (url.includes('/about/') || url.includes('/contact/') || url.includes('/gallery/')) {
    return 0.6;
  }
  
  // Default
  return 0.7;
}

function getChangeFreq(url) {
  // Secondary pages change less frequently
  if (url.includes('/about/') || url.includes('/contact/') || url.includes('/gallery/')) {
    return 'monthly';
  }
  return 'weekly';
}

function generateSitemap() {
  const pages = getAllPages();
  const baseUrl = 'https://deptfordnjconcrete.com';
  const now = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;
  
  pages.forEach(url => {
    const fullUrl = `${baseUrl}${url}`;
    const priority = getPriority(url);
    const changefreq = getChangeFreq(url);
    
    sitemap += `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
  });
  
  sitemap += '</urlset>';
  
  const sitemapPath = join(distPath, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
  
  console.log(`✅ Generated sitemap.xml with ${pages.length} pages`);
  console.log(`   - Homepage: priority 1.0`);
  console.log(`   - Primary services: priority 0.9`);
  console.log(`   - Location/service pages: priority 0.8`);
  console.log(`   - Other pages: priority 0.6-0.7`);
}

generateSitemap();
