# Harshit Neog - Personal Portfolio

Personal portfolio website for Harshit Neog, a Computer Science & Engineering (AI/ML) student and open-source contributor.

## Live Website

- **Deployment**: [https://harshitneog.vercel.app](https://harshitneog.vercel.app) (or via GitHub Pages at `https://laggy-ryon.github.io/Portofolio/`)

## Features

- **Monochrome Design**: High-contrast, clean minimalist theme supporting both light and dark modes.
- **Categorized Skills**: Technical capabilities grouped into Languages, Tools & Frameworks, Code Quality & CI, and Soft Skills.
- **Featured Projects**: Highlights systems and backend tools like `triage3am` (incident triage engine) and `Mandate` (spending firewall for AI agents).
- **Interactive Contact Form**: Integrated with FormSubmit AJAX for direct message forwarding.
- **Pure Web Standards**: Built entirely with vanilla HTML, modern CSS, and lightweight JavaScript with zero external runtime libraries.

## Local Setup

You can run the portfolio locally using Python's built-in HTTP server:

```bash
cd Portofolio
python3 -m http.server 8080
```

Then visit `http://localhost:8080` in your web browser.

## Deploying to Vercel

1. Log in to [Vercel](https://vercel.com/) with your GitHub account.
2. Select **Add New...** -> **Project** and import `Laggy-Ryon/Portofolio`.
3. Keep default settings (root directory `./`, framework preset `Other`) and click **Deploy**.
4. You can configure a custom subdomain (e.g. `harshitneog.vercel.app`) in the project settings under **Domains**.

## Deploying to GitHub Pages

1. Navigate to your repository settings at `https://github.com/Laggy-Ryon/Portofolio/settings/pages`.
2. Under **Build and deployment**, set the source to `Deploy from a branch`.
3. Choose `main` as the branch and `/ (root)` as the folder, then click **Save**.
