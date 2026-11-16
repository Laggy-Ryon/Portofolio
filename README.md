# Harshit Neog — Personal Portfolio

A fast, lightweight, and responsive personal portfolio website built with pure semantic HTML5, modern CSS3, and vanilla JavaScript. Zero framework overhead, zero build steps, and instantaneous load times.

Live Deployment: [https://portofolio-kappa-five-37.vercel.app/](https://portofolio-kappa-five-37.vercel.app/)

---

## Overview

I'm Harshit, a first-year B.Tech CSE (AI/ML) student at Bosscoder School of Technology (SVYASA University) based in Bengaluru, India. I focus on developer tooling, static analysis, systems engineering, and open-source infrastructure across the Java, Python, and TypeScript ecosystems.

This repository hosts the source code for my personal website.

---

## Key Features

- **Dynamic Dark / Light Themes**: High-contrast monochrome design system with automatic OS scheme detection (`prefers-color-scheme`) and state persistence via `localStorage`.
- **Categorized Technical Skills**: Skill chips structured into Languages, Tools & Frameworks, Code Quality & CI, and Soft Skills with interactive hover states.
- **Featured Projects**: In-depth breakdowns of standalone engineering projects:
  - **[triage3am](https://github.com/Laggy-Ryon/triage3am)**: Zero-dependency AIOps engine for incident triage and root-cause diagnoses.
  - **[Mandate](https://github.com/Laggy-Ryon/mandate)**: Spending firewall stopping compromised AI shopping agents from paying outside user limits.
- **Open Source Milestones**: Highlights merged upstream pull requests across **Jenkins**, **Apicurio (CNCF)**, **Checkstyle**, and **Instawork Hyperview**.
- **Working Contact Form**: Asynchronous form dispatch powered by [FormSubmit](https://formsubmit.co) with anti-spam honeypot filtering and interactive status handling.
- **Fully Responsive**: Fluid navigation drawer and adaptive grid layouts engineered for all mobile, tablet, and desktop viewports.

---

## Repository Structure

```text
Portofolio/
├── index.html        # Semantic HTML structure & content
├── style.css         # Modern CSS tokens, responsive grids & theme styling
├── script.js         # Theme switching, mobile menu, scrollspy & AJAX form
├── profile.jpg       # Profile photo
└── README.md         # Repository documentation
```

---

## Local Development

Because this site is built purely with web standards, no compilation or npm package installation is needed.

To run it locally:

```bash
# Clone the repository
git clone https://github.com/Laggy-Ryon/Portofolio.git
cd Portofolio

# Start a local static server
python3 -m http.server 8080
```

Then visit `http://localhost:8080` in your browser.

---

## Deployment

The site is continuously deployed on [Vercel](https://vercel.com):
- Every push to the `main` branch automatically triggers a global edge deployment.
- Production URL: [https://portofolio-kappa-five-37.vercel.app/](https://portofolio-kappa-five-37.vercel.app/)

---

## Connect

- Email: [Harshitneog44@gmail.com](mailto:Harshitneog44@gmail.com)
- LinkedIn: [linkedin.com/in/harshit-neog-b37018418](https://www.linkedin.com/in/harshit-neog-b37018418/)
- GitHub: [@Laggy-Ryon](https://github.com/Laggy-Ryon)
