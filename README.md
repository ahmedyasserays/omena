# OMENA - Creative Digital Agency Website

A stunning, professional website built with GSAP animations for the Omena brand - a creative digital agency specializing in web development, photography, and social media management.

## ✨ Features

- **Stunning GSAP Animations**: Scroll-triggered animations, parallax effects, and smooth transitions
- **Custom Cursor**: Interactive custom cursor with magnetic effects
- **Fully Responsive**: Mobile-first design that works on all devices
- **Multiple Pages**: Home, About, Services, Stories, and Contact pages
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Performance Optimized**: Fast loading and smooth animations
- **SEO Ready**: Semantic HTML structure for better search engine visibility

## 🎨 Customizing Brand Colors

The website uses CSS variables for easy customization. To update the brand colors to match Omena's visual identity:

1. Open `css/style.css`
2. Find the `:root` section at the top (lines 10-40)
3. Update these color variables:

```css
:root {
    /* PRIMARY COLORS - Update these with your brand colors */
    --primary-color: #FF6B35;        /* Main brand color */
    --primary-dark: #E55A2B;         /* Darker shade */
    --primary-light: #FF8C5E;        /* Lighter shade */

    /* SECONDARY COLORS */
    --secondary-color: #004E89;      /* Accent color */
    --secondary-dark: #003A68;
    --secondary-light: #1A6DAA;
}
```

### How to Get Your Brand Colors:

1. **From Instagram**: Use a color picker tool on your Instagram profile
2. **From Logo**: Extract colors from your logo file
3. **Color Hex Codes**: Find your exact brand colors (e.g., #FF6B35)

### Example Color Schemes:

**Bold & Energetic:**
```css
--primary-color: #FF6B35;
--secondary-color: #004E89;
```

**Modern & Minimal:**
```css
--primary-color: #2C3E50;
--secondary-color: #E74C3C;
```

**Fresh & Creative:**
```css
--primary-color: #00D9FF;
--secondary-color: #FF3D00;
```

## 📁 Project Structure

```
omena/
├── index.html          # Home page
├── about.html          # About page
├── services.html       # Services page
├── stories.html        # Portfolio/Success stories
├── contact.html        # Contact page
├── css/
│   └── style.css       # All styles and brand colors
├── js/
│   └── main.js         # GSAP animations and interactivity
├── images/             # Place your images here
└── README.md           # This file
```

## 🖼️ Adding Your Images

Replace the placeholder images with your actual content:

1. Add your images to the `images/` folder
2. Update the HTML files to use your images:

```html
<!-- Replace this: -->
<div class="placeholder-image"></div>

<!-- With this: -->
<img src="images/your-image.jpg" alt="Description">
```

## 🎯 Key Sections to Customize

### 1. Logo & Brand Name
- Update "OMENA" text in the navigation across all pages
- Add your logo image in the navbar

### 2. Hero Section (index.html)
- Update the main headline and tagline
- Add your hero background image or video

### 3. Services
- Update service descriptions in `services.html`
- Add relevant icons or images for each service

### 4. Portfolio/Stories
- Add your real project images in `stories.html`
- Update project descriptions and results

### 5. Contact Information
- Update email, phone, and location in `contact.html`
- Connect the contact form to your email service

## 🚀 Getting Started

1. **Clone or Download** this repository
2. **Open in Browser**: Simply open `index.html` in your browser
3. **Customize Colors**: Update CSS variables as described above
4. **Add Content**: Replace placeholder text and images
5. **Deploy**: Upload to your web hosting service

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1024px
- **Mobile**: Below 768px

## 🎬 GSAP Animations

The website includes these stunning animations:

- **Scroll Animations**: Elements fade and slide in as you scroll
- **Parallax Effects**: Images move at different speeds
- **Custom Cursor**: Interactive cursor that responds to hover
- **Magnetic Buttons**: Buttons that follow your mouse
- **Counter Animations**: Stats numbers count up when visible
- **Card Hover Effects**: 3D transforms on service/story cards
- **Page Transitions**: Smooth transitions between sections

## 🔧 Dependencies

The website uses these libraries (loaded from CDN):

- **GSAP 3.12.5**: Animation library
- **ScrollTrigger**: Scroll-based animations
- **ScrollToPlugin**: Smooth scrolling
- **Google Fonts**: Poppins font family

All dependencies are loaded via CDN, so no installation required!

## 📝 Updating Content

### Home Page Statistics
Update the numbers in `index.html`:
```html
<span class="stat-number" data-count="150">0</span>
```

### Social Media Links
Update Instagram and other social links in the footer:
```html
<a href="https://www.instagram.com/omena.ar/" target="_blank">Instagram</a>
```

### Contact Form
The contact form currently shows a success message on submit. To connect it to a real backend:

1. Add a form handling service (FormSpree, Netlify Forms, etc.)
2. Or update the JavaScript in `js/main.js` to send to your server

## 🎨 Additional Customization

### Fonts
To change the font, update the Google Fonts import in all HTML files:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

And in CSS:
```css
body {
    font-family: 'YourFont', sans-serif;
}
```

### Animation Speed
Adjust animation duration in `js/main.js`:
```javascript
duration: 1,  // Change to 0.5 for faster, 2 for slower
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Support

If you need help customizing this website, check the comments in the code or refer to:

- **GSAP Documentation**: https://greensock.com/docs/
- **CSS Variables Guide**: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

## 📄 License

This website was created for Omena. All rights reserved.

## 🎉 Next Steps

1. **Get Brand Colors**: Extract exact colors from your Instagram/logo
2. **Update CSS Variables**: Apply your brand colors
3. **Add Real Content**: Replace all placeholder text and images
4. **Test on Mobile**: Make sure everything looks great on phones
5. **Deploy**: Upload to your hosting service
6. **SEO**: Add meta tags, descriptions, and alt text for images
7. **Analytics**: Add Google Analytics or other tracking

---

**Built with ❤️ for Omena - Elevating Brands Through Creative Digital Solutions**
