# OT PC Company - Official Website

A modern, responsive website for OT PC Company featuring a homepage, information hub, online store, and community platform.

## Features

✨ **Modern Design**
- Beautiful gradient backgrounds with the OT PC Company purple/magenta color scheme
- Smooth animations and transitions
- Professional, clean layout
- Fully responsive for mobile, tablet, and desktop

🎨 **CSS Effects**
- Floating card animations
- Parallax scrolling
- Hover effects with ripple animations
- Gradient text and backgrounds
- Smooth scroll behavior
- Loading animations

🔗 **Navigation**
- Sticky navigation bar
- Active page indicators
- Smooth navigation between pages
- Social media links (@takazikano on all platforms)

📱 **Responsive Design**
- Mobile-first approach
- Works across all device sizes
- Optimized for tablets and large screens
- Touch-friendly interface

## Project Structure

```
OT_PC_Site/
├── index.html                      # Root entry point (redirects to homepage)
├── shared/
│   ├── shared-styles.css          # Global styles & animations
│   └── shared-script.js           # Global JavaScript functionality
├── homepage/
│   ├── index.html                 # Main homepage
│   ├── styles.css                 # Homepage-specific styles
│   └── script.js                  # Homepage-specific scripts
├── information/
│   ├── index.html                 # FAQ, guides, and company info
│   ├── styles.css                 # Information page styles
│   └── script.js                  # Information page scripts
├── online-store/
│   ├── index.html                 # Product catalog and shopping
│   ├── styles.css                 # Store page styles
│   └── script.js                  # Product filtering & interactions
└── online-community/
    ├── index.html                 # Forums and community hub
    ├── styles.css                 # Community page styles
    └── script.js                  # Community interactions
```

## Pages Overview

### 🏠 Homepage (`/homepage/`)
- Welcome section with hero content
- Feature cards highlighting key offerings
- Service information with personal contact details
- Call-to-action sections
- Navigation to other sections

### 📚 Information (`/information/`)
- FAQ section with expandable items
- Learning guides and tutorials
- Company mission and values
- Multiple ways to get in touch
- Community support information

### 🛒 Online Store (`/online-store/`)
- Product grid with filtering capabilities
- Price range and category filters
- Sorting options (popular, newest, price)
- Featured deals and special offers
- Category showcase
- Product ratings and reviews

### 👥 Online Community (`/online-community/`)
- Community statistics
- Forum categories with topic counts
- Recent builds showcase
- Reasons to join
- Social connection options

## Colors & Branding

```css
Primary Purple: #7B2CBF
Secondary Magenta: #DA1C8C
Dark Purple: #361652
Light Background: #F5F5F7
Text Dark: #1D1D1F
Text Light: #666666
Border: #E5E5E7
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox, grid, and animations
- **JavaScript (Vanilla)** - No frameworks needed
- **Responsive Design** - Mobile-first approach

## Key Features Implemented

### Navigation
- Sticky header with smooth scrolling
- Active page indicators
- Social media button links
- Responsive menu structure

### Animations
- Fade-in animations on scroll
- Floating card effects
- Hover state transitions
- Icon animations
- Parallax scrolling on homepage

### Interactive Elements
- Expandable FAQ items
- Product filtering system
- Add to cart notifications
- Smooth page transitions
- Ripple button effects

### Responsive Breakpoints
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## Social Links

All social media links use the handle `@takazikano`:
- **Discord**: https://discord.gg/
- **YouTube**: https://youtube.com/@takazikano
- **TikTok**: https://tiktok.com/@takazikano
- **GitHub**: https://github.com/takazikano

Update the Discord invite link in `shared/shared-script.js` as needed.

## File Paths & Navigation

All internal links use relative paths for easy deployment:
- From homepage: `../information/index.html`
- From subpages: `../homepage/index.html`
- Shared resources: `../shared/shared-styles.css`

## Getting Started

1. **Download/Clone** the repository
2. **Open** `index.html` in your browser
3. **Customize** content, colors, and social links as needed
4. **Deploy** to GitHub Pages or any static hosting

### Local Development

To test locally:
```bash
# Option 1: Use Python's built-in server
python -m http.server 8000

# Option 2: Use Node.js http-server
npx http-server

# Option 3: Use Live Server (VS Code Extension)
# Right-click index.html > Open with Live Server
```

Then visit `http://localhost:8000` (or your server's port)

## Customization

### Colors
Edit the CSS variables in all `styles.css` files:
```css
:root {
    --primary-purple: #7B2CBF;
    --secondary-magenta: #DA1C8C;
    /* ... */
}
```

### Products
Edit the `products` array in `online-store/script.js` to add/remove items

### Content
All text content is editable in the HTML files

### Logos
The logo is created with CSS gradients. Replace with actual images when ready.

## Future Enhancements

- [ ] Backend integration for e-commerce functionality
- [ ] Forum/comment system for community
- [ ] User authentication
- [ ] Product inventory management
- [ ] Shopping cart & checkout
- [ ] Admin dashboard
- [ ] Blog/news section
- [ ] Advanced search functionality
- [ ] User profiles
- [ ] Email notifications

## Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select main/master branch as source
4. Site will be available at `https://username.github.io/OT_PC_Site/`

### Other Hosting
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any static hosting service

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Notes

- No external dependencies (pure HTML/CSS/JavaScript)
- No images required (CSS-based graphics)
- Fully static - no backend required
- SEO-friendly semantic HTML
- Optimized performance with minimal requests
- All animations use CSS and JavaScript (no libraries)

## License

This project is open source and available for personal use.

## Support

For issues or questions:
- Discord: Join the server (@takazikano)
- GitHub Issues: Report bugs and request features
- Social Media: Contact @takazikano on your preferred platform

---

**Created for OT PC Company** - Building the future of PC enthusiast community together! 🚀
