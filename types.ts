
export interface Service {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  icon: string;
  category: 'data-science' | 'web-dev' | 'ai-agents' | 'design' | 'ml';
  features: { icon: string; label: string }[];
  techStack: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  galleryUrls?: string[];
  category: string;
  tags: string[];
  link?: string;
  downloadUrl?: string;
  isFeatured?: boolean;
  date?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  company?: string;
  content: string;
  rating: number;
  avatarUrl?: string;
  snippetUrl?: string; // For chat screenshots/proof snippets
  category: 'Automation' | 'Web Dev' | 'Data Science';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceInterested: string;
  budgetRange: string;
  timeline: string;
  priority: 'low' | 'medium' | 'high';
  message: string;
}
