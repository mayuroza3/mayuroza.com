# Portfolio Website for Mayur Oza

This is a complete, mobile-first portfolio website built with HTML5, CSS3, JavaScript (jQuery), and Bootstrap 5.

## 📂 File Structure

/portfolio-website/
│── index.html          # Homepage
│── about.html          # About Me page
│── experience.html     # Experience timeline
│── projects.html       # Featured Projects
│── contact.html        # Contact form & info
│
├── /assets/
│   ├── /css/
│   │   └── style.css   # Custom styles (Animations, Sidebar, Mobile Nav)
│   │
│   ├── /js/
│   │   └── script.js   # Active link logic, Smooth Scroll, Animations
│   │
│   ├── /images/
│   │   └── profile.jpg # (Renamed from source)
│   │   └── me3.webp    # Additional image
│   │   └── Mayur_Oza_Resume.pdf
│
└── sitemap.xml         # SEO Sitemap
└── robots.txt          # SEO Robots file

## 🚀 How to Deploy

1. **Upload**: Upload all files and folders inside `portfolio-website/` to the public root of your web server (e.g., `public_html` or `www`).
2. **CDN Dependencies**: The site uses CDNs for Bootstrap 5, FontAwesome, and jQuery to ensure fast loading and caching. Ensure your server allows outbound connections (standard for users).
   - Bootstrap 5
   - FontAwesome 6
   - jQuery 3.7
   - Google Fonts (Inter)
3. **Email Configuration**: The contact form in `contact.html` is set to `action="mailto:contact@mayuroza.com"`. Update the email address in `contact.html` (Line ~167 and ~154) to your actual email if different.

## ✏️ How to Edit Content

- **Text**: Open any `.html` file in a text editor (Notepad++, VS Code) and edit the text between tags.
- **Images**: Replace images in `assets/images/` with your own, keeping the same filenames (`profile.jpg`, `me3.webp`) to avoid easier code updates, or update the `src` attribute in HTML.
- **SEO**: 
    - Edit `<title>` tags in the `<head>` of each file.
    - Edit `<meta name="description">` in the `<head>`.
    - Schema Markup is located in the `<script type="application/ld+json">` blocks in the `<head>`.

## 📊 Analytics
Google Analytics (UA-157285505-1 & GA4) and GTM codes are already embedded in the `<head>` and `<body>` of every page.

## 📱 Mobile features
- Bottom Sticky Navigation on mobile screens (< 992px).
- "Download CV" Floating Action Button (FAB) on mobile.
- Touch-friendly tap targets.

---
Result: PageSpeed optimized, Mobile-First, SEO Ready.
