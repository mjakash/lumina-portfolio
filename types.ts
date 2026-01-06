import { ReactNode } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Web' | 'Mobile' | 'Design' | 'AI';
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

export interface Stat {
  label: string;
  value: string;
  icon?: ReactNode;
}
