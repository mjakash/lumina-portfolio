import { NavLink, Project, Stat } from './types';
import { Layout, Globe, Smartphone, Cpu, Code, Users, Coffee, Star } from 'lucide-react';
import React from 'react';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#hero' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Finance Dashboard',
    category: 'Web',
    description: 'A high-performance crypto trading dashboard featuring real-time data visualization via WebSockets and glassmorphism UI.',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    tags: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
    link: '#',
  },
  {
    id: '2',
    title: 'Aura Meditation App',
    category: 'Mobile',
    description: 'Cross-platform mobile application focusing on mindfulness, featuring spatial audio playback and mood tracking.',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    tags: ['React Native', 'Expo', 'GraphQL'],
    link: '#',
  },
  {
    id: '3',
    title: 'Nexus AI Generator',
    category: 'AI',
    description: 'SaaS platform leveraging Generative AI to create marketing assets. Includes a prompt engineering studio.',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    tags: ['Next.js', 'OpenAI API', 'Stripe', 'PostgreSQL'],
    link: '#',
  },
  {
    id: '4',
    title: 'Ethereal Commerce',
    category: 'Design',
    description: 'A concept e-commerce interface exploring 3D product rendering and micro-interactions.',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    tags: ['Three.js', 'Framer Motion', 'Blender'],
    link: '#',
  },
];

export const STATS: Stat[] = [
  { label: 'Years Experience', value: '5+', icon: <Code className="w-5 h-5 text-violet-400" /> },
  { label: 'Projects Completed', value: '42', icon: <Layout className="w-5 h-5 text-pink-400" /> },
  { label: 'Happy Clients', value: '30+', icon: <Users className="w-5 h-5 text-cyan-400" /> },
  { label: 'Coffee Consumed', value: '∞', icon: <Coffee className="w-5 h-5 text-amber-400" /> },
];
