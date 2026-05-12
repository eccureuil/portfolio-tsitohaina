import { createElement } from "react";
import type { ReactNode } from "react";
import {
  CloudSun,
  CheckSquare,
  ShoppingCart,
  Sparkles,
  MessageCircle,
  BarChart3,
  Palette,
  Cog,
  Wrench,
} from "lucide-react";

export interface Project {
  id: string;
  icon: ReactNode;
  iconBg: string;
  name: string;
  desc: string;
  longDesc: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillGroup {
  title: string;
  icon: ReactNode;
  skills: { name: string; pct: number }[];
}

export const projects: Project[] = [
  {
    id: "weather-now",
    icon: createElement(CloudSun, { size: 20 }),
    iconBg: "rgba(56,189,248,0.15)",
    name: "WeatherNow",
    desc: "Application météo temps réel avec prévisions 7 jours et visualisations interactives.",
    longDesc:
      "Application météo complète utilisant l'API OpenWeatherMap. Géolocalisation automatique, prévisions sur 7 jours, graphiques interactifs des températures et précipitations avec Chart.js. Interface responsive avec transitions animées.",
    tags: ["React", "TypeScript", "OpenWeather API", "Chart.js", "Tailwind"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    featured: true,
  },
  {
    id: "task-flow",
    icon: createElement(CheckSquare, { size: 20 }),
    iconBg: "rgba(124,58,237,0.15)",
    name: "TaskFlow",
    desc: "Gestionnaire de tâches collaboratif avec tableaux Kanban et synchronisation temps réel.",
    longDesc:
      "Application de gestion de projets inspirée de Trello. Drag & drop des cartes via react-beautiful-dnd, synchronisation en temps réel via Socket.io, authentification JWT, gestion multi-utilisateurs avec rôles. Base de données MongoDB.",
    tags: ["Node.js", "React", "Socket.io", "MongoDB", "JWT"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    featured: true,
  },
  {
    id: "shop-api",
    icon: createElement(ShoppingCart, { size: 20 }),
    iconBg: "rgba(219,39,119,0.15)",
    name: "ShopAPI",
    desc: "API RESTful e-commerce avec authentification, gestion des rôles et paiements Stripe.",
    longDesc:
      "API back-end complète pour une plateforme e-commerce. Authentification JWT avec refresh tokens, gestion des rôles (admin/client), intégration Stripe pour les paiements, upload d'images via Cloudinary, documentation Swagger auto-générée.",
    tags: ["Express.js", "PostgreSQL", "JWT", "Stripe", "Swagger"],
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "portfolio-v1",
    icon: createElement(Sparkles, { size: 20 }),
    iconBg: "rgba(167,139,250,0.15)",
    name: "Portfolio v1",
    desc: "Premier portfolio personnel construit avec HTML/CSS/JS vanilla et des animations CSS.",
    longDesc:
      "Portfolio statique construit from scratch sans framework. Focus sur les animations CSS avancées, les transitions et la performance. Score Lighthouse 99/100. Déployé sur GitHub Pages.",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    featured: false,
  },
  {
    id: "chat-app",
    icon: createElement(MessageCircle, { size: 20 }),
    iconBg: "rgba(8,145,178,0.15)",
    name: "ChatApp",
    desc: "Application de messagerie instantanée avec rooms, statuts en ligne et notifications.",
    longDesc:
      "Clone de messagerie temps réel type Discord/Slack. Gestion des rooms publiques et privées, statuts en ligne, notifications push via Service Workers, stockage des messages avec Redis pour les performances.",
    tags: ["React", "Node.js", "Socket.io", "Redis"],
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "algo-visualizer",
    icon: createElement(BarChart3, { size: 20 }),
    iconBg: "rgba(52,211,153,0.15)",
    name: "AlgoVisualizer",
    desc: "Outil de visualisation d'algorithmes de tri avec contrôles de vitesse et comparaison.",
    longDesc:
      "Visualisateur pédagogique d'algorithmes de tri (bubble, merge, quick, heap). Animations fluides avec requestAnimationFrame, contrôles de vitesse, comparaison côte à côte de deux algorithmes. Projet de cours L2.",
    tags: ["React", "TypeScript", "D3.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    featured: false,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: createElement(Palette, { size: 20 }),
    skills: [
      { name: "React / TypeScript", pct: 85 },
      { name: "HTML & CSS", pct: 92 },
      { name: "Tailwind CSS", pct: 80 },
    ],
  },
  {
    title: "Backend",
    icon: createElement(Cog, { size: 20 }),
    skills: [
      { name: "Node.js / Express", pct: 75 },
      { name: "PHP / Laravel", pct: 75 },
      { name: "SQL / PostgreSQL", pct: 72 },
      { name: "MongoDB", pct: 68 },
    ],
  },
  {
    title: "Outils & DevOps",
    icon: createElement(Wrench, { size: 20 }),
    skills: [
      { name: "Git / GitHub", pct: 90 },
      { name: "Docker", pct: 55 },
      { name: "Linux / Bash", pct: 74 },
    ],
  },
];

export const experiences = [
  {
    year: "2024 – en cours...",
    title: "Licence Informatique",
    company: "Ecole Nationale d'Informatique · Fianarantsoa",
    desc: "Formation professionnelle, parcours Informatique Générale. Projets académiques en développement web, algorithmique et gestion de bases de données.",
    tags: ["L3", "Informatique"],
  },
  {
    year: "2025",
    title: "Stage Support Technique",
    company: "Linkup Consulting · Antananarivo",
    desc: "Assistance technique pour les agents, résolution de pannes matérielles et optimisation de performances sur les reseaux.",
    tags: ["Linux/bash", "Support", "Maintenance"],
  },
  {
    year: "2025",
    title: "Stage Développeur Web",
    company: "D'Orints · Antananarivo",
    desc: "Conception et réalisation d'un système pour la gestion des commandes, paiement et livraisons. Utilisation de Laravel pour le back-end et React.js pour le front-end.",
    tags: ["PHP", "Tailwindcss", "Laravel", "React"],
  },
];
