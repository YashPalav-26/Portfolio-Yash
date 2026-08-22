

<div align="center">

# ✨ Yash Palav — Portfolio

**A modern, performant portfolio showcasing the art of web development**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-yashpalav.vercel.app-4FC3F7?style=for-the-badge)](https://yashpalav.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

![React](https://img.shields.io/badge/React_18-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_5-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)

</div>

---

## 🚀 Overview

A blazing-fast, single-page application portfolio built with cutting-edge web technologies. This fully responsive portfolio showcases professional experience, technical skills, and projects with stunning animations, interactive elements, and thoughtful UX design.

## ✨ Key Features

🎯 **Core Functionality**
- **Live Resume Viewer** — Dedicated `/resume` route with inline PDF rendering
- **SPA Routing** — Seamless client-side navigation with React Router
- **Responsive Design** — Pixel-perfect across mobile, tablet, and desktop
- **Theme Toggle** — Beautiful dark/light mode with custom color palettes
- **Contact Form** — Integrated EmailJS for instant communication

🎨 **Visual Excellence**
- **Custom Cursor Effect** — Minimalist aura with rotating ring and ghost trail (desktop)
- **Lottie Animations** — High-quality JSON animations for hero and sections
- **Framer Motion** — Smooth page transitions and scroll-triggered reveals
- **Neobrutalist Design** — Bold, modern UI with custom shadows and sharp edges
- **Glassmorphism Effects** — Subtle backdrop blur and transparency layers

⚡ **Performance & Accessibility**
- **Reduced Motion Support** — Respects user's motion preferences
- **Optimized Loading** — Lazy loading, code splitting, and efficient bundling
- **Error Boundaries** — Graceful error handling with fallback UI
- **SEO Ready** — Meta tags, semantic HTML, and optimized structure

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **[React 18.3](https://reactjs.org/)** — Modern React with concurrent features and hooks
- **[TypeScript 5.8](https://www.typescriptlang.org/)** — Type-safe development with enhanced DX
- **[Vite 5.4](https://vitejs.dev/)** — Lightning-fast HMR and optimized production builds

### **Styling & UI Components**
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** — Utility-first CSS framework with custom design tokens
- **[shadcn/ui](https://ui.shadcn.com/)** — Beautifully designed components built on Radix UI primitives
- **[Radix UI](https://www.radix-ui.com/)** — Unstyled, accessible component primitives
- **[Lucide React](https://lucide.dev/)** — Beautiful, customizable icon set
- **[React Icons 5.5](https://react-icons.github.io/react-icons/)** — Popular icon library with ES6 imports

### **Animation & Motion**
- **[Framer Motion 11.18](https://www.framer.com/motion/)** — Production-ready animation library for React
  - Scroll-triggered reveal animations
  - Page transition effects
  - Gesture-based interactions
  - Smooth layout animations
- **[Lottie React 2.4](https://lottiefiles.com/)** — Lightweight, scalable JSON animations
  - Hero section coding animation
  - Interactive developer illustration
  - Smooth, performant vector graphics
- **[GSAP 3.13](https://greensock.com/gsap/)** — Professional-grade animation toolkit for advanced effects
- **Custom CSS Animations** — Handcrafted keyframe animations
  - Typewriter effect with blinking cursor
  - Fade-in-up transitions
  - Slide-in-left effects
  - Floating elements with bounce
  - Neobrutalist hover transformations

### **Routing & Navigation**
- **[React Router DOM 6.30](https://reactrouter.com/)** — Declarative routing with nested routes and SPA navigation

### **Integrations & Utilities**
- **[EmailJS 4.4](https://www.emailjs.com/)** — Send emails directly from JavaScript (contact form)
- **[next-themes 0.3](https://github.com/pacocoursey/next-themes)** — Perfect dark mode with system preference detection
- **[Sonner](https://sonner.emilkowal.ski/)** — Beautiful toast notifications
- **[clsx](https://github.com/lukeed/clsx)** & **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** — Intelligent class name merging

### **Developer Experience**
- **[ESLint 9](https://eslint.org/)** — Code quality and consistency
- **[TypeScript ESLint 8.44](https://typescript-eslint.io/)** — TypeScript-specific linting rules
- **[Vite Plugin React SWC](https://github.com/vitejs/vite-plugin-react-swc)** — Faster builds with SWC compiler
- **[PostCSS](https://postcss.org/)** & **[Autoprefixer](https://autoprefixer.github.io/)** — CSS processing and vendor prefixing

---

## 🎨 Animation Showcase

This portfolio features carefully crafted animations to enhance user experience:

### **Framer Motion Animations**
- **Scroll-Based Reveals** — Sections fade in and slide up as you scroll
- **Stagger Effects** — Child elements animate in sequence for visual hierarchy
- **Hover Interactions** — Project cards, skill icons, and buttons respond to user interaction
- **Page Transitions** — Smooth navigation between routes

### **Lottie JSON Animations**
- **Hero Animation** (`hero-page-animation.json`) — Dynamic developer illustration on landing
- **Coding Animation** (`coder.json`) — Animated coding scene in About section

### **Custom CSS Animations**
- **Typewriter Effect** — Animated text typing with blinking cursor in hero section
- **Neobrutalist Hover** — Cards translate with dynamic shadow effects
- **Geometric Clip Paths** — Unique button shapes with smooth transitions
- **Floating Elements** — Subtle vertical oscillation for visual interest
- **Shine Effect** — Gradient sweep animation on button hover
- **Glow Effects** — Radial gradient overlays with blur for depth

### **GSAP Animations**
- Advanced timeline-based animations
- Smooth scroll effects
- Complex morphing transitions

---

## 🎯 Getting Started

### **Prerequisites**
- **Node.js** 18+ (LTS recommended)
- **npm**, **pnpm**, or **yarn** package manager
- **Git** for version control

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/YashPalav-26/portfolio-yash.git
cd portfolio-yash
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

> **Note:** Get your EmailJS credentials at [emailjs.com](https://www.emailjs.com/)

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:5173`

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server with HMR |
| `npm run build` | Create optimized production build |
| `npm run build:dev` | Build in development mode (unminified) |
| `npm run preview` | Preview the production build locally after running `npm run build` |
| `npm run lint` | Run ESLint for code quality checks |

---

## 🌐 Deployment

This portfolio is optimized for deployment on **Vercel**:

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy! 🚀

The included `vercel.json` configures SPA routing for seamless navigation.

---

## 📬 Contact Integration

The contact form uses **EmailJS** for serverless email delivery:

1. **Sign up** at [EmailJS](https://www.emailjs.com/)
2. **Create an email service** (Gmail, Outlook, etc.)
3. **Create an email template** with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. **Add credentials** to your `.env` file
5. **Test the form** — emails will arrive in your configured inbox

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Credits & Attribution

If you find this portfolio inspiring and use it as a foundation for your own work:

- ✅ **Give credit** by mentioning the original author
- 🔗 **Link back** to this repository: [github.com/YashPalav-26/portfolio-yash](https://github.com/YashPalav-26/portfolio-yash)
- 🤝 **Share improvements** with the open-source community

**Example attribution:**
```markdown
## Credits
Inspired by [Yash Palav's Portfolio](https://github.com/YashPalav-26/portfolio-yash) — Built with React, TypeScript, Tailwind CSS, and Framer Motion.
```

---

## 🤝 Support & Connect

Built with passion by **Yash Palav**

[![Portfolio](https://img.shields.io/badge/Portfolio-yashpalav.vercel.app-4FC3F7?style=flat&logo=vercel)](https://yashpalav.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-yashpalav-0077B5?style=flat&logo=linkedin)](https://linkedin.com/in/yashpalav)
[![GitHub](https://img.shields.io/badge/GitHub-YashPalav--26-181717?style=flat&logo=github)](https://github.com/YashPalav-26)
[![Email](https://img.shields.io/badge/Email-yashpalav48@gmail.com-D14836?style=flat&logo=gmail&logoColor=white)](mailto:yashpalav48@gmail.com)

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

**Made with ❤️ and lots of ☕**

*Copyright © 2025 Yash Palav*

</div>
