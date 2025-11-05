# Branding & Logo Setup

## Adding Your Logo

To add your company logo to the website:

1. **Prepare your logo:**
   - Recommended format: PNG with transparent background
   - Recommended size: 200-300px wide (height will auto-adjust)
   - File formats supported: PNG, JPG, SVG, WebP

2. **Add the logo file:**
   - Place your logo file in: `public/images/logo.png`
   - Or update the path in `src/components/Header.astro` (line 6)

3. **Logo will automatically appear:**
   - In the header navigation
   - On all pages
   - Responsive sizing

## Current Setup

The header currently displays the company name as text. Once you add a logo image to `public/images/logo.png`, it will automatically replace the text logo.

## Logo Path Configuration

The logo path is set in `src/components/Header.astro`:
```astro
const logoPath = '/images/logo.png';
```

Change this if your logo is in a different location or has a different filename.

## Alternative: Use SVG Logo

For best quality, you can use an SVG logo:
1. Create `public/images/logo.svg`
2. Update `src/components/Header.astro` line 6: `const logoPath = '/images/logo.svg';`

## Logo Sizing

The logo is automatically sized to 50px height. To adjust:
- Edit `src/components/Logo.astro` 
- Change the `height` value in the `.logo-image` style

