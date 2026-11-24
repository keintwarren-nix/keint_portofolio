# Keint Warren J. Poliquit — Personal Portfolio Website

> *"Exploring the stack, one star at a time."*

A production-quality personal portfolio website featuring a **retro pixel-art space-explorer aesthetic** blended with a modern, high-contrast engineering UI. Built for recruiters, tech leads, and fellow software creators.

---

## 🚀 Live Demo & Repository
- **Active Flagship Project (CipherQuest):** [citu.cipherquest.workers.dev](https://citu.cipherquest.workers.dev/)
- **GitHub Profile:** [github.com/keintwarren-nix](https://github.com/keintwarren-nix)
- **Portfolio Repository:** [github.com/keintwarren-nix/My-portfolio](https://github.com/keintwarren-nix/My-portfolio.git)

---

## 🌌 Tech Stack
- **Framework:** React 18 (Vite 6)
- **Styling:** Tailwind CSS + Custom Pixel Art Design Tokens
- **Icons:** Lucide React + Custom Crisp SVG Icons
- **FX & Easter Eggs:** HTML5 Canvas Starfield (60 FPS), Canvas Confetti, Web Audio API / Pixabay SFX
- **Deployment Targets:** Vercel, Cloudflare Pages, Netlify, or GitHub Pages

---

## 📁 Project Architecture & File Structure

```text
Porfolio/
├── public/
│   └── assets/
│       ├── cipherquest/            # CipherQuest screenshots (Lobby, Pacman, etc.)
│       ├── sounds/                 # Pixel click SFX & ambient exploration BGM
│       ├── profile.jpg             # Profile photo (with pixel HUD frame)
│       └── KeintWarren_Resume.docx # Downloadable résumé document
├── src/
│   ├── components/
│   │   ├── Icons.jsx               # Crisp SVG brand icons (GitHub, LinkedIn)
│   │   ├── KonamiEasterEgg.jsx     # Secret hyperspace sequence listener
│   │   ├── Navbar.jsx              # Sticky retro navbar with sound/dawn toggles
│   │   ├── PixelMascot.jsx         # Telemetry HUD rocket with warp-to-top
│   │   ├── ProjectModal.jsx        # Deep-dive mission brief with screenshot carousel
│   │   └── StarfieldCanvas.jsx     # High-performance 60fps twinkling star canvas
│   ├── data/
│   │   └── portfolioData.js        # ⭐ SINGLE SOURCE OF TRUTH (All content lives here)
│   ├── sections/
│   │   ├── HeroSection.jsx         # Parallax cosmic scene, typewriter, CTAs
│   │   ├── AboutSection.jsx        # CIT-U bio, framed avatar, telemetry fun facts
│   │   ├── SkillsSection.jsx       # Star map skill tree with category filter & search
│   │   ├── ProjectsSection.jsx     # Flagship & project cards with mission modals
│   │   ├── TimelineSection.jsx     # Academic flight log & collectible cert badges
│   │   ├── ContactSection.jsx      # Subspace transmission terminal & direct mail
│   │   └── FooterSection.jsx       # Rocket launch, copyright, audio credits
│   ├── utils/
│   │   └── audio.js                # SFX & ambient BGM manager with Web Audio fallback
│   ├── App.jsx                     # Top-level orchestration and Dawn theme sync
│   ├── index.css                   # Custom pixel art design system & CSS variables
│   └── main.jsx                    # React entrypoint
├── index.html                      # SEO metadata, Open Graph, pixel planet favicon
├── package.json                    # Dependencies & build scripts
├── postcss.config.js               # PostCSS config
├── tailwind.config.js              # Theme extension & cosmic color palette
├── vite.config.js                  # Vite configuration
└── README.md                       # Comprehensive guide
```

---

## 🛠️ Quickstart (Run Locally)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/keintwarren-nix/My-portfolio.git
   cd My-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser to [http://localhost:3000](http://localhost:3000).

4. **Build for production:**
   ```bash
   npm run build
   npm run preview
   ```

---

## ✏️ How to Edit Content & Replace Placeholders

All portfolio content is decoupled from UI code and centralized inside **`src/data/portfolioData.js`**. You don't need to dig through component markup to update information!

### 1. Updating Personal Info & Tagline
Open `src/data/portfolioData.js` and locate `PERSONAL_INFO`:
- Update `tagline`, `linkedin`, `email`, or `typewriterRoles`.
- Update `bio` paragraphs or `funFacts` chips.

### 2. Replacing Placeholder Projects
In `src/data/portfolioData.js`, locate `PROJECTS`. Look for projects with `isPlaceholder: true` (e.g., `placeholder-cloud-sentinel`):
```javascript
{
  id: "my-new-project",
  title: "Your Project Title",
  subtitle: "One-line subtitle",
  status: "Completed",
  badge: "Full-Stack",
  category: "Full-Stack",
  isPlaceholder: false, // set to false
  liveUrl: "https://your-demo.com",
  githubUrl: "https://github.com/your-username/repo",
  thumbnail: "/assets/your-screenshot.png",
  screenshots: [
    { src: "/assets/your-screenshot.png", caption: "Feature view" }
  ],
  techStack: ["React", "FastAPI", "PostgreSQL", "Docker"],
  shortDesc: "Summary for card preview",
  problem: "What problem does this project solve?",
  solution: "How did you engineer the solution?",
  role: "Your exact contributions",
  learnings: "Key takeaways and technologies mastered"
}
```

### 3. Adding or Updating Skills
In `src/data/portfolioData.js`, add or edit items in `SKILL_CATEGORIES`:
- Choose level: `"Advanced"`, `"Proficient"`, `"Comfortable"`, or `"Foundational"`.
- Provide a concise `note` describing your practical usage.

### 4. Adding Certifications
In `src/data/portfolioData.js`, add an object to `CERTIFICATIONS` with date, issuer, badge icon, and description.

---

## 🎮 Interactive Features & Easter Eggs

- **Parallax Hero Scene:** Subtle depth movement on mouse move and scroll (deep nebula, large dark planet with crescent rim light, rocky silhouette ground).
- **Audio HUD & Controller:** 
  - Button clicks trigger an 8-bit mechanical click SFX (Pixabay: `yarzur_ofc-49620193`).
  - Toggle ambient space exploration BGM (`Monster Galaxy: World Map` by Gaia Interactive, Inc).
  - Can be muted anytime via the navbar audio controls.
- **Dawn Mode Toggle:** Switch from deep midnight indigo (`#0B0A2E`) to warm cosmic sunrise violet/peach.
- **Interactive Orbit Rocket Mascot:** Displays real-time orbital altitude telemetry (`ALT: X KM`) based on page scroll, with warp-to-top boosters.
- **Konami Code Easter Egg:** Type the classic cheat code on your keyboard:
  $$\uparrow \uparrow \downarrow \downarrow \leftarrow \rightarrow \leftarrow \rightarrow \text{B} \quad \text{A}$$
  to trigger a hyperspace celebration banner with cosmic confetti!

---

## 🚢 Deployment Guide

### Deploying to Vercel
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import `keintwarren-nix/My-portfolio`.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **"Deploy"** — your portfolio is live in under 60 seconds!

### Deploying to Cloudflare Pages
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages**.
2. Click **Create Application** > **Pages** > **Connect to Git**.
3. Select your repository.
4. Set Build Settings:
   - **Framework Preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**.

---

## ⚖️ Audio & Asset Attribution
- **Sound Effect (Pixel Click Sfx44):** [yarzur_ofc-49620193 on Pixabay](https://pixabay.com/users/yarzur_ofc-49620193/)
- **Background Music (World Map):** Gaia Interactive, Inc (*Monster Galaxy: World Map*)
- **CipherQuest Screenshots:** Owned and created by the CipherQuest project team (CIT-U).

---

## 🔒 Privacy Notice
In accordance with modern privacy standards, sensitive personal demographic data (age, birth date, religion, marital status, phone number) is intentionally omitted from the source code and site content. Contact is handled securely via email and verified GitHub channels.
