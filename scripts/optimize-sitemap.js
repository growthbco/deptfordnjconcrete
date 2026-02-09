/**
 * Post-build sitemap optimizer for local service website
 * Updates priorities and changefreq based on page importance
 */

import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function optimizeSitemap() {
  try {
    // Find sitemap files - try multiple locations
    let sitemapFiles = glob.sync('dist/**/sitemap*.xml', { cwd: join(__dirname, '..'), absolute: true });
    
    // Also try direct dist folder
    if (sitemapFiles.length === 0) {
      const distPath = join(__dirname, '..', 'dist');
      sitemapFiles = glob.sync('sitemap*.xml', { cwd: distPath, absolute: true });
    }
    
    if (sitemapFiles.length === 0) {
      console.log('⚠️  No sitemap files found, skipping optimization');
      return;
    }
    
    sitemapFiles.forEach(sitemapFile => {
      // Handle both absolute and relative paths
      const sitemapPath = sitemapFile.startsWith('/') || sitemapFile.startsWith(process.cwd()) 
        ? sitemapFile 
        : join(__dirname, '..', sitemapFile);
      
      if (!fs.existsSync(sitemapPath)) {
        console.log(`⚠️  Sitemap file not found: ${sitemapPath}`);
        return;
      }
      
      let sitemap = fs.readFileSync(sitemapPath, 'utf-8');
      
      // Update homepage - highest priority (1.0)
      sitemap = sitemap.replace(
        /(<url>[\s\S]*?<loc>https:\/\/deptfordnjconcrete\.com\/<\/loc>[\s\S]*?<priority>)[\d.]+(<\/priority>[\s\S]*?<\/url>)/,
        '$11.0$2'
      );
      
      // Update primary service pages - high priority (0.9)
      ['pole-barn-foundations', 'concrete-slabs', 'stamped-concrete'].forEach(service => {
        const regex = new RegExp(`(<url>[\\s\\S]*?<loc>https://deptfordnjconcrete\\.com/services/${service}/</loc>[\\s\\S]*?<priority>)[\\d.]+(</priority>[\\s\\S]*?</url>)`, 'g');
        sitemap = sitemap.replace(regex, '$10.9$2');
      });
      
      // Update location/service combination pages - very high priority for local SEO (0.8)
      const locationServiceRegex = /(<url>[\s\S]*?<loc>https:\/\/deptfordnjconcrete\.com\/locations\/[^\/]+\/[^\/]+\/<\/loc>[\s\S]*?<priority>)[\d.]+(<\/priority>[\s\S]*?<\/url>)/g;
      sitemap = sitemap.replace(locationServiceRegex, '$10.8$2');
      
      // Update secondary pages (about, contact, gallery) - lower priority (0.6) and monthly changefreq
      ['about', 'contact', 'gallery'].forEach(page => {
        const priorityRegex = new RegExp(`(<url>[\\s\\S]*?<loc>https://deptfordnjconcrete\\.com/${page}/</loc>[\\s\\S]*?<priority>)[\\d.]+(</priority>[\\s\\S]*?</url>)`, 'g');
        sitemap = sitemap.replace(priorityRegex, '$10.6$2');
        
        const changefreqRegex = new RegExp(`(<url>[\\s\\S]*?<loc>https://deptfordnjconcrete\\.com/${page}/</loc>[\\s\\S]*?<changefreq>)[\\w]+(</changefreq>[\\s\\S]*?</url>)`, 'g');
        sitemap = sitemap.replace(changefreqRegex, '$1monthly$2');
      });
      
      fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
    });
    
    console.log(`✅ Sitemap optimized with proper priorities (${sitemapFiles.length} file(s))`);
  } catch (error) {
    console.error('❌ Error optimizing sitemap:', error.message);
    // Don't exit on error, just warn
    console.warn('⚠️  Continuing build without sitemap optimization');
  }
}

optimizeSitemap();
