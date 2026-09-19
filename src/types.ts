export type Page =
  | 'home'
  | 'about'
  | 'services'
  | 'meta-ads'
  | 'google-ads'
  | 'website-development'
  | 'app-development'
  | 'seo'
  | 'social-media-growth'
  | 'portfolio'
  | 'case-study' // Case study detail
  | 'contact'
  | 'privacy-policy'
  | 'terms-conditions'
  | 'refund-policy'
  | 'disclaimer'
  | 'thank-you'
  | '404';

export interface Project {
  id: string;
  name: string;
  website: string;
  industry: string;
  services: string[];
  description: string;
  challenge: string;
  approach: string;
  outcome: string;
  technologies: string[];
  metrics?: { label: string; value: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  businessName: string;
  review: string;
  serviceReceived: string;
  rating: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  service: string;
  budget: string;
  message: string;
}
