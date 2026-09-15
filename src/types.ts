export type ServiceCategory =
  | 'all'
  | '3d-motion'
  | 'commercials'
  | 'construction'
  | 'weddings-films';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  deliverables: string[];
  specs: string;
  sampleVideo: string;
  posterImage: string;
  badge?: string;
}

export interface CaseStudy {
  goal: string;
  deliverables: string[];
  impact: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: ServiceCategory;
  categoryLabel: string;
  year: string;
  duration: string;
  resolution: string;
  videoUrl?: string;
  videoId: string;
  youtubeId?: string;
  thumbnail?: string;
  posterUrl: string;
  description: string;
  featured?: boolean;
  caseStudy: CaseStudy;
  tags: string[];
}

export interface Differentiator {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  metrics: string;
  metricLabel: string;
  iconName: string;
}

export interface TechStackItem {
  name: string;
  category: string;
  iconName: string;
  version?: string;
}

export interface QuoteFormData {
  service: string;
  budget: string;
  timeline: string;
  deliverableFormat: string[];
  name: string;
  whatsapp: string;
  email: string;
  brief: string;
}

export interface ShowreelModalState {
  isOpen: boolean;
  title: string;
  subtitle: string;
  videoUrl: string;
  specs: string;
}

export interface AwardItem {
  id: string;
  year: string;
  title: string;
  project: string;
  organization: string;
  category: string;
}

export interface NewsArticle {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
  author: string;
}

export interface ShowcaseCategoryTab {
  id: '3d-motion' | 'commercials' | 'construction' | 'weddings-films';
  label: string;
  subtitle: string;
  headline: string;
  description: string;
  stats: string;
  bannerVideo: string;
  bannerPoster: string;
}

