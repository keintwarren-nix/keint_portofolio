// Portfolio Centralized Data Store
// All projects, skills, journey items, certifications, and metadata for Keint Warren J. Poliquit

export const PERSONAL_INFO = {
  name: "Keint Warren J. Poliquit",
  shortName: "Keint Warren",
  role: "Aspiring Full-Stack Software Engineer",
  education: "BS Information Technology Student",
  institution: "Cebu Institute of Technology – University",
  institutionYears: "2023 – Present",
  location: "Cebu City, Philippines",
  timezone: "GMT+8 (Philippine Standard Time)",
  email: "kwpoliquit@gmail.com",
  github: "https://github.com/keintwarren-nix",
  linkedin: "https://linkedin.com/in/keintwarren",
  resumeUrl: "/assets/KeintWarren_Resume.pdf",
  avatarUrl: "/assets/photo-7.jpg",
  // 7 photos from "my picture" (clean frame, no labels)
  photos: [
    { src: "/assets/photo-7.jpg" },
    { src: "/assets/photo-2.jpg" },
    { src: "/assets/photo-1.jpg" },
    { src: "/assets/photo-4.jpg" },
    { src: "/assets/photo-6.jpg" },
    { src: "/assets/photo-3.jpg" },
    { src: "/assets/photo-5.jpg" },
  ],
  tagline: "Exploring the stack, one star at a time.",
  typewriterRoles: [
    "Full-Stack Developer",
    "Cloud Enthusiast",
    "UI/UX Tinkerer",
    "Cybersecurity Explorer",
    "Lifelong Learner"
  ],
  bio: [
    "I am an aspiring Full-Stack Software Engineer and IT student at Cebu Institute of Technology – University.",
    "Driven by curiosity and craftsmanship, I build scalable backends, responsive interfaces, and gamified web architectures like CipherQuest on Cloudflare Workers.",
    "Eager to join engineering teams, absorb mentorship, and ship software that creates meaningful impact."
  ],
  funFacts: [
    { 
      label: "Fuel Source", 
      value: "99.8% Caffeine & Curiosity",
      short: "99.8% Caffeine",
      detail: "Fueled by coffee and an endless drive to learn. Always up for deep-dive debugging and exploring uncharted technologies.",
      icon: "Coffee" 
    },
    { 
      label: "Mission Status", 
      value: "Open for Internships & Projects", 
      short: "Open for Roles",
      detail: "Actively seeking Software Engineering internships, junior full-stack developer roles, and open-source engineering collaborations.",
      icon: "Rocket" 
    },
    { 
      label: "Coordinates", 
      value: "Cebu City, Philippines (GMT+8)", 
      short: "Cebu City (GMT+8)",
      detail: "Based in Cebu City, Philippines. Readily available for remote, hybrid, or on-site engineering roles worldwide.",
      icon: "MapPin" 
    },
    { 
      label: "Favorite Stack", 
      value: "React + Spring Boot + Cloudflare", 
      short: "React + Spring Boot",
      detail: "Love combining responsive React user experiences with robust Java Spring Boot microservices, PostgreSQL, and Cloudflare Workers edge compute.",
      icon: "Layers" 
    },
  ],
  stats: [
    { label: "Certifications", value: "7", sub: "AWS, IBM, CyberSec" },
    { label: "Shipped Projects", value: "5+", sub: "Web, Games & Cloud" },
    { label: "Tech Stacks", value: "25+", sub: "Full-Stack Ecosystem" },
    { label: "CIT-U Batch", value: "2023", sub: "Information Technology" },
  ],
};

export const SKILL_CATEGORIES = [
  {
    id: "languages",
    name: "Languages",
    icon: "Code2",
    description: "Core programming and markup languages.",
    skills: [
      { name: "JavaScript", level: "Proficient", note: "ES6+, async/await, modern DOM, modular JS" },
      { name: "Java", level: "Proficient", note: "OOP principles, Spring Boot, Servlets, JDBC" },
      { name: "Python", level: "Comfortable", note: "FastAPI, scripting, automation, AI tooling" },
      { name: "C", level: "Foundational", note: "Memory management, algorithms, systems foundation" },
      { name: "Kotlin", level: "Learning", note: "Modern Android and modern JVM paradigms" },
      { name: "SQL", level: "Proficient", note: "PostgreSQL, MySQL, indexing, normalization" },
      { name: "HTML5 & CSS3", level: "Advanced", note: "Semantic structure, responsive flex/grid, pixel craft" },
      { name: "JSX / TSX", level: "Proficient", note: "Component templating, typed UI props, React patterns" },
    ]
  },
  {
    id: "frameworks",
    name: "Frameworks & Tools",
    icon: "Layers",
    description: "Libraries, web frameworks, and developer workflows.",
    skills: [
      { name: "React.js", level: "Advanced", note: "Hooks, SPA routing, custom state, component design" },
      { name: "Node.js", level: "Proficient", note: "Express servers, event loops, RESTful microservices" },
      { name: "Java Spring Boot", level: "Proficient", note: "Spring Data JPA, MVC, REST APIs, enterprise architecture" },
      { name: "FastAPI", level: "Comfortable", note: "Python asynchronous APIs, Swagger documentation" },
      { name: "Django", level: "Comfortable", note: "Batteries-included web framework, ORM, security" },
      { name: "Vite", level: "Advanced", note: "Blazing fast builds, HMR, modern bundling setup" },
      { name: "Spring Security", level: "Comfortable", note: "Authentication filters, user roles, security context" },
      { name: "Git & GitHub", level: "Proficient", note: "Branching strategies, pull requests, version control" },
    ]
  },
  {
    id: "databases",
    name: "Databases & Storage",
    icon: "Database",
    description: "Relational, document, and cloud-hosted data stores.",
    skills: [
      { name: "PostgreSQL", level: "Proficient", note: "Complex queries, foreign keys, ACID guarantees" },
      { name: "MySQL", level: "Proficient", note: "Stored procedures, relational schemas, indexing" },
      { name: "Supabase", level: "Comfortable", note: "PostgreSQL BaaS, auth, real-time subscriptions" },
      { name: "Neon", level: "Comfortable", note: "Serverless Postgres with instant branching" },
      { name: "Firebase", level: "Comfortable", note: "Firestore NoSQL, real-time sync, cloud auth" },
    ]
  },
  {
    id: "cloud",
    name: "Cloud & Deployment",
    icon: "Cloud",
    description: "Serverless edge functions and cloud compute.",
    skills: [
      { name: "AWS (EC2 & Lightsail)", level: "Comfortable", note: "Virtual instances, security groups, SSH setup" },
      { name: "Cloudflare Workers", level: "Proficient", note: "Edge compute, global routing, serverless deployments" },
      { name: "Vercel", level: "Proficient", note: "Automated Git CI/CD, preview deploys, edge CDN" },
      { name: "Render", level: "Proficient", note: "Managed web services, backend container deployments" },
    ]
  },
  {
    id: "systems",
    name: "Systems & Security",
    icon: "ShieldCheck",
    description: "Operating systems, network fundamentals, and IT security.",
    skills: [
      { name: "Linux (Kali / Ubuntu)", level: "Proficient", note: "CLI navigation, bash scripting, permission hardening" },
      { name: "Windows Server", level: "Comfortable", note: "Active Directory, user policies, role configurations" },
      { name: "Firewall Configuration", level: "Comfortable", note: "Rule inspection, port forwarding, threat filtering" },
      { name: "SSH & Remote Access", level: "Proficient", note: "Public key authentication, tunneling, secure remote shell" },
      { name: "Metasploit", level: "Foundational", note: "Vulnerability assessment, exploit payload analysis" },
      { name: "Log Analysis", level: "Comfortable", note: "Event review, anomaly detection, audit trails" },
    ]
  },
  {
    id: "design",
    name: "Design & Practices",
    icon: "Palette",
    description: "UI/UX wireframing, OOP, and data modeling.",
    skills: [
      { name: "Figma & Canva", level: "Proficient", note: "UI wireframes, prototypes, and asset composition" },
      { name: "Responsive UI", level: "Advanced", note: "Mobile-first layouts across all display resolutions" },
      { name: "OOP Principles", level: "Advanced", note: "Inheritance, encapsulation, polymorphism, SOLID" },
      { name: "Database Normalization", level: "Advanced", note: "1NF to 3NF/BCNF, redundancy reduction" },
      { name: "Data Visualization", level: "Proficient", note: "Kaggle certified, insight discovery, chart storytelling" },
      { name: "Prompt Engineering", level: "Comfortable", note: "System prompts, structured LLM outputs, AI tooling" },
    ]
  }
];

export const PROJECTS = [
  {
    id: "cipherquest",
    title: "CipherQuest",
    subtitle: "Gamified Retro Cybersecurity & Cryptography Learning Platform",
    featured: true,
    status: "Active Flagship",
    badge: "Active Project",
    category: "Full-Stack / Game",
    liveUrl: "https://citu.cipherquest.workers.dev/",
    githubUrl: "https://github.com/lemoninnit/CipherQuest.git",
    thumbnail: "/assets/cipherquest/Lobby.png",
    techStack: [
      "React.js",
      "JavaScript",
      "Cloudflare Workers",
      "Tailwind CSS",
      "Canvas API",
      "RESTful APIs"
    ],
    shortDesc: "Interactive gamified platform teaching cryptography algorithms via arcade minigames with live leaderboards on Cloudflare Workers."
  },
  {
    id: "photoflex",
    title: "PhotoFlex",
    subtitle: "Photography Client Gallery & Booking Management System",
    featured: false,
    status: "Inactive",
    badge: "Archived",
    category: "Full-Stack",
    liveUrl: null,
    githubUrl: "https://github.com/KeintWarren/PhotoFlex.git",
    thumbnail: "/assets/github-logo.png",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL / MongoDB"],
    shortDesc: "Client gallery showcase and booking management platform tailored for freelance photographers and creative studios."
  },
  {
    id: "smart-trav-plan",
    title: "Smart Travel Planner",
    subtitle: "Intelligent Trip Itinerary & Expense Tracking Platform",
    featured: false,
    status: "Inactive",
    badge: "Archived",
    category: "Web Application",
    liveUrl: null,
    githubUrl: "https://github.com/lunaria20/smart-trav-plan.git",
    thumbnail: "/assets/github-logo.png",
    techStack: ["React.js", "JavaScript", "Vite", "Tailwind CSS"],
    shortDesc: "Smart trip planner enabling travelers to coordinate multi-day itineraries, track expenses, and map out daily destination checkpoints."
  },
  {
    id: "aquahaven",
    title: "AquaHaven Resort Reservation",
    subtitle: "Enterprise Room Booking & Management Information System",
    featured: false,
    status: "Inactive / Academic",
    badge: "Archived",
    category: "Full-Stack",
    liveUrl: null,
    githubUrl: "https://github.com/keintwarren-nix/IT342-Poliquit-AquaHaven.git",
    thumbnail: "/assets/github-logo.png",
    techStack: ["Java", "Java Spring Boot", "MySQL", "Bootstrap"],
    shortDesc: "Relational database-driven resort reservation platform with real-time room availability checks and administrative billing."
  },
  {
    id: "capstone-game",
    title: "CapStone 2D Game",
    subtitle: "Custom 2D Retro Adventure Prototype & Engine Architecture",
    featured: false,
    status: "Inactive / Prototype",
    badge: "Archived",
    category: "Game Dev",
    liveUrl: null,
    githubUrl: "https://github.com/rkSp4/CapStoneGame.git",
    thumbnail: "/assets/github-logo.png",
    techStack: ["JavaScript / Java", "HTML5 Canvas", "OOP Architecture"],
    shortDesc: "Modular 2D retro adventure prototype with custom canvas sprite rendering, tile collision detection, and NPC state machines."
  },
  {
    id: "placeholder-cloud-sentinel",
    title: "[Template] Cloud Sentinel",
    subtitle: "AWS Serverless Microservice & Monitoring Dashboard",
    featured: false,
    status: "Customizable Placeholder",
    badge: "Template",
    category: "Cloud / DevOps",
    isPlaceholder: true,
    liveUrl: null,
    githubUrl: "https://github.com/keintwarren-nix",
    thumbnail: "/assets/github-logo.png",
    techStack: ["FastAPI", "AWS (EC2 & Lightsail)", "Docker", "PostgreSQL"],
    shortDesc: "Microservice architecture template demonstrating AWS instance orchestration, Docker containerization, and metric monitoring."
  }
];

export const CERTIFICATIONS = [
  {
    id: "aws-genai",
    title: "AWS Academy - Generative AI Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "Nov 2026",
    badgeIcon: "Cpu",
    logoFile: "aws-logo.png",
    description: "Foundational mastery of Large Language Models, prompt engineering architectures, and Amazon Bedrock capabilities."
  },
  {
    id: "aws-cloud",
    title: "AWS Academy - Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "Oct 2026",
    badgeIcon: "Cloud",
    logoFile: "aws-logo.png",
    description: "Core cloud architecture concepts, AWS global infrastructure, compute (EC2), networking (VPC), and serverless execution."
  },
  {
    id: "cyber-sec",
    title: "Cyber Security Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Oct 2026",
    badgeIcon: "ShieldAlert",
    logoFile: "ibm logo.png",
    description: "Network vulnerability assessment, threat vectors, authentication frameworks, log analysis, and incident mitigation."
  },
  {
    id: "ibm-ai",
    title: "AI Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Aug 2026",
    badgeIcon: "Brain",
    logoFile: "ibm logo.png",
    description: "Machine learning workflows, neural network concepts, data preprocessing pipelines, and practical enterprise AI."
  },
  {
    id: "kaggle-viz",
    title: "Data Visualization",
    issuer: "Kaggle",
    date: "Dec 2025",
    badgeIcon: "BarChart3",
    logoFile: "kaggle logo.png",
    description: "Statistical storytelling with Python, Seaborn, Matplotlib, identifying trends, heatmaps, and distribution plots."
  },
  {
    id: "sololearn-html",
    title: "Introduction to HTML",
    issuer: "Sololearn",
    date: "Feb 2025",
    badgeIcon: "Code",
    logoFile: "sololearn logo.jpg",
    description: "Semantic HTML5 markup, accessibility patterns, forms, and modern web document semantics."
  },
  {
    id: "canva-design",
    title: "Graphic Design Essentials",
    issuer: "Canva",
    date: "Sep 2024",
    badgeIcon: "Sparkles",
    logoFile: "canva logo.png",
    description: "Design theory, color harmonies, typographic scale, visual balance, and modern UI asset composition."
  }
];

export const AUDIO_CREDITS = [
  {
    title: "Pixel Click SFX (Sfx44)",
    creator: "yarzur_ofc-49620193",
    source: "Pixabay",
    url: "https://pixabay.com/users/yarzur_ofc-49620193/",
    description: "Mechanical 8-bit section navigation feedback sound."
  },
  {
    title: "Monster Galaxy: World Map",
    creator: "Gaia Interactive, Inc",
    source: "Monster Galaxy Soundtrack",
    url: "https://pixabay.com",
    description: "Atmospheric ambient retro exploration background music."
  }
];
