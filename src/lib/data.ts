import {
  Database,
  Layers,
  Monitor,
  Server,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Haanie",
  handle: "DefenceSteller",
  role: "Full-Stack Developer",
  roles: [
    "Full-Stack Developer",
    "Next.js Builder",
    "Flutter Maker",
    "Problem Solver",
  ],
  tagline:
    "I ship real products with Next.js, TypeScript, React & Flutter — from the database schema to the last pixel.",
  avatar: "https://avatars.githubusercontent.com/u/179382392?v=4",
  github: "https://github.com/DefenceSteller",
  githubProfile: "https://github.com/DefenceSteller",
  email: "haaniehashim@gmail.com",
  status: "Currently building MysteryMessage",
  statusUrl: "https://github.com/DefenceSteller/MysteryMessage",
  since: "2024",
} as const;

export const stats = [
  { value: "10", label: "Public repositories" },
  { value: "9", label: "Shipped projects" },
  { value: "12+", label: "Core technologies" },
] as const;

export type Project = {
  title: string;
  description: string;
  longDescription?: string;
  tag: string;
  lang?: { name: string; color: string };
  tech: string[];
  year: string;
  repo: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "MysteryMessage",
    description:
      "An anonymous messaging platform — create an account, verify your email, share your link, and let anyone send you anonymous messages.",
    longDescription:
      "Built end to end with the Next.js App Router: cached MongoDB connections, Zod validation on every input, and transactional verification emails delivered through Resend. The data and validation layers are production-ready, with API routes and pages in progress.",
    tag: "Web App",
    lang: { name: "TypeScript", color: "#3178c6" },
    tech: ["Next.js 16", "React 19", "Tailwind 4", "MongoDB", "Zod", "Resend"],
    year: "2026",
    repo: "https://github.com/DefenceSteller/MysteryMessage",
    featured: true,
  },
  {
    title: "BillBazaar",
    description:
      "One dashboard for every utility bill — all electricity regions plus SSGC & SNGPL gas, with dues and statuses in a single view.",
    tag: "Web App",
    lang: { name: "TypeScript", color: "#3178c6" },
    tech: ["Vite", "HeroUI", "Tailwind CSS", "Framer Motion"],
    year: "2026",
    repo: "https://github.com/DefenceSteller/BillBazaar",
  },
  {
    title: "InvestMate",
    description:
      "Investment tracking and portfolio management with live stock data, customizable dashboards, and performance reports.",
    tag: "Web App",
    lang: { name: "JavaScript", color: "#f1e05a" },
    tech: ["Node.js", "REST APIs", "Analytics"],
    year: "2026",
    repo: "https://github.com/DefenceSteller/InvestMate",
  },
  {
    title: "QuickCart",
    description:
      "Full e-commerce platform: browsing, search, cart and checkout, plus an admin panel for products, orders and users.",
    tag: "Web App",
    lang: { name: "PHP", color: "#4f5d95" },
    tech: ["PHP", "MySQL", "Bootstrap", "Apache"],
    year: "2026",
    repo: "https://github.com/DefenceSteller/QuickCart",
  },
  {
    title: "TechVerse",
    description:
      "Modern tech web experience with an animated hero, carousels, and a contact form wired up with EmailJS.",
    tag: "Web App",
    lang: { name: "TypeScript", color: "#3178c6" },
    tech: ["Vite", "HeroUI", "Swiper", "Framer Motion"],
    year: "2026",
    repo: "https://github.com/DefenceSteller/TechVerse",
  },
  {
    title: "FilmBaaz-API",
    description:
      "Movie recommender REST API — serves film suggestions for the FilmBaaz experience.",
    tag: "API",
    tech: ["REST API", "Recommender System"],
    year: "2026",
    repo: "https://github.com/DefenceSteller/FilmBaaz-API",
  },
  {
    title: "CoLab",
    description:
      "Full-stack collaboration app with cleanly separated frontend and backend modules for modular development.",
    tag: "Full-Stack",
    lang: { name: "JavaScript", color: "#f1e05a" },
    tech: ["JavaScript", "HTML", "CSS"],
    year: "2025",
    repo: "https://github.com/DefenceSteller/CoLab",
    demo: "https://co-lab-one.vercel.app",
  },
  {
    title: "KhaanaBuddy",
    description:
      "Cross-platform mobile app built with Flutter — my deep dive into Dart and native-feeling mobile UIs.",
    tag: "Mobile",
    lang: { name: "Dart", color: "#00b4ab" },
    tech: ["Flutter", "Dart", "Cross-platform"],
    year: "2025",
    repo: "https://github.com/DefenceSteller/KhaanaBuddyUpdated",
  },
  {
    title: "React Practice Projects",
    description:
      "A collection of small React apps built to sharpen components, state management and routing.",
    tag: "Learning",
    lang: { name: "JavaScript", color: "#f1e05a" },
    tech: ["React", "Hooks", "Routing"],
    year: "2025",
    repo: "https://github.com/DefenceSteller/React-Practice-Projects",
  },
];

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Layers,
    items: [
      "Next.js",
      "React 19",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "HeroUI",
    ],
  },
  {
    title: "Backend & Data",
    icon: Database,
    items: [
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Zod",
      "REST APIs",
      "PHP",
      "MySQL",
      "Resend",
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    items: ["Flutter", "Dart", "Cross-platform UI"],
  },
  {
    title: "Tooling",
    icon: Wrench,
    items: ["Git & GitHub", "Vite", "Vercel", "XAMPP", "ESLint", "npm"],
  },
];

export const services = [
  {
    icon: Monitor,
    title: "Web Applications",
    description:
      "Full-stack products with Next.js, React and TypeScript — from data model to deployment.",
  },
  {
    icon: Server,
    title: "APIs & Backends",
    description:
      "REST APIs and database layers with Node, MongoDB, MySQL and Zod validation.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform Flutter apps with a native feel and clean Dart architecture.",
  },
] as const;

export const marqueeItems = [
  "Next.js",
  "TypeScript",
  "React",
  "Flutter",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "Framer Motion",
  "Dart",
  "PHP",
  "MySQL",
  "Zod",
  "Vite",
  "Vercel",
  "Git",
  "REST APIs",
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
