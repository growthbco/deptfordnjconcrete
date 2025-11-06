/**
 * Critical CSS for above-the-fold content
 * Inlined in <head> to eliminate render-blocking resources
 * Optimized for mobile-first performance
 */

export const CRITICAL_CSS = `
/* Reset & Base Styles */
*{box-sizing:border-box;margin:0;padding:0}
html{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,sans-serif;line-height:1.6;color:#333}
body{min-height:100vh;display:flex;flex-direction:column}
main{flex:1}
a{color:#ff6b35}
h1,h2,h3,h4,h5,h6{line-height:1.2;margin-bottom:1rem}
p{margin-bottom:1rem}
img{max-width:100%;height:auto;display:block}
button{-webkit-tap-highlight-color:transparent;touch-action:manipulation;min-height:44px;min-width:44px}
a{-webkit-tap-highlight-color:rgba(255,107,53,.2);min-height:44px;display:inline-flex;align-items:center}

/* Header - Always visible above fold */
.header{background:#1a1a1a;color:#fff;padding:.75rem 0;position:sticky;top:0;z-index:1000;box-shadow:0 2px 8px rgba(0,0,0,.1)}
.nav-container{max-width:1200px;margin:0 auto;padding:0 1rem;display:flex;align-items:center;justify-content:space-between;gap:1.5rem;position:relative}
.nav-brand{flex-shrink:0}
.logo{margin:0;font-size:1.25rem;font-weight:700}
.logo-link{text-decoration:none;color:#fff;display:block}
.mobile-menu-toggle{display:none;flex-direction:column;gap:4px;background:transparent;border:none;cursor:pointer;padding:.5rem;z-index:1001}
.mobile-menu-toggle span{width:24px;height:2px;background:#fff;transition:all .3s;border-radius:2px}
.nav-menu{display:flex;list-style:none;gap:1.5rem;margin:0;padding:0;flex:1;justify-content:center}
.nav-menu a{color:#fff;text-decoration:none;font-weight:500;transition:color .3s;padding:.5rem 0;display:block;font-size:.95rem}
.nav-menu a:hover{color:#ff6b35}
.cta-button{background:#ff6b35;color:#fff;padding:.875rem 1.5rem;border-radius:4px;text-decoration:none;font-weight:600;transition:background .3s;white-space:nowrap;font-size:.95rem;flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;min-height:44px;min-width:44px}
.cta-button:hover{background:#e55a2b}

/* Hero Section - Above fold on homepage */
.hero{position:relative;color:#fff;padding:3rem 0;text-align:center;min-height:400px;display:flex;align-items:center;overflow:hidden}
.hero-background{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0}
.hero-image{width:100%;height:100%;object-fit:cover;display:block}
.hero-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg,rgba(26,26,26,.85) 0%,rgba(45,45,45,.75) 100%);z-index:1}
.hero-container{position:relative;z-index:2;max-width:1200px;margin:0 auto;padding:0 1.5rem;width:100%}
.hero h1{font-size:1.5rem;margin-bottom:1rem;line-height:1.3;padding:0 .5rem}
.hero-subtitle{font-size:.95rem;margin-bottom:1.5rem;padding:0 .5rem;color:#ccc}
.hero-cta{display:flex;flex-direction:column;gap:.75rem;padding:0 .5rem}
.cta-primary,.cta-secondary{padding:.875rem 1.5rem;font-size:.95rem;width:100%;text-align:center;border-radius:4px;text-decoration:none;font-weight:600;transition:all .3s;min-height:44px;display:inline-flex;align-items:center;justify-content:center}
.cta-primary{background:#ff6b35;color:#fff}
.cta-primary:hover{background:#e55a2b}
.cta-secondary{background:transparent;color:#fff;border:2px solid #fff}
.cta-secondary:hover{background:#fff;color:#1a1a1a}

/* Container - Used throughout */
.container{max-width:1200px;margin:0 auto;padding:0 1.5rem}

/* Mobile Menu Toggle Active States */
.mobile-menu-toggle.active span:nth-child(1){transform:rotate(45deg) translate(6px,6px)}
.mobile-menu-toggle.active span:nth-child(2){opacity:0}
.mobile-menu-toggle.active span:nth-child(3){transform:rotate(-45deg) translate(6px,-6px)}

/* Desktop Hero Styles */
@media (min-width:769px){
  .hero{padding:6rem 0;min-height:500px}
  .hero h1{font-size:2.5rem;margin-bottom:1.5rem;line-height:1.2;padding:0}
  .hero-subtitle{font-size:1.25rem;margin-bottom:2rem;color:#ccc;max-width:800px;margin-left:auto;margin-right:auto;padding:0}
  .hero-cta{flex-direction:row;gap:1rem;justify-content:center;flex-wrap:wrap;padding:0}
  .cta-primary,.cta-secondary{padding:1rem 2rem;font-size:1rem;width:auto}
}

/* Mobile Styles */
@media (max-width:768px){
  .header{padding:.5rem 0}
  .nav-container{padding:0 1rem;gap:1rem}
  .logo{font-size:1.1rem}
  .mobile-menu-toggle{display:flex}
  .nav-menu{position:fixed;top:60px;left:0;right:0;background:#1a1a1a;flex-direction:column;gap:0;padding:0;text-align:left;max-height:0;overflow:hidden;transition:max-height .3s ease-out;box-shadow:0 4px 8px rgba(0,0,0,.2);z-index:999}
  .nav-menu.active{max-height:500px;padding:0}
  .nav-menu li{border-bottom:1px solid rgba(255,255,255,.1)}
  .nav-menu li:first-child{border-top:1px solid rgba(255,255,255,.1)}
  .nav-menu a{padding:1rem 1.5rem;font-size:1rem;display:block}
  .cta-menu-item{display:block;background:rgba(255,107,53,.1);border-top:2px solid #ff6b35;margin-top:.5rem}
  .cta-menu-item .cta-button{background:#ff6b35;text-align:center;margin:.5rem 1.5rem;padding:1rem;border-radius:4px;display:block;width:calc(100% - 3rem)}
  .nav-container>.cta-button{display:none}
  .hero{padding:3rem 0;min-height:400px}
  .hero-container{padding:0 1rem}
  html{font-size:16px}
  body{font-size:.95rem}
  h1,h2,h3,h4,h5,h6{line-height:1.3}
}

@media (max-width:480px){
  .nav-container{padding:0 .75rem}
  .logo{font-size:1rem}
  .hero{padding:2rem 0;min-height:350px}
  .hero-container{padding:0 .75rem}
  .hero h1{font-size:1.25rem;margin-bottom:.75rem}
  .hero-subtitle{font-size:.875rem;margin-bottom:1.25rem}
  .cta-primary,.cta-secondary{padding:.75rem 1.25rem;font-size:.875rem}
  .container{padding:0 .75rem}
  html{font-size:15px}
  body{font-size:.9rem}
}
`;

