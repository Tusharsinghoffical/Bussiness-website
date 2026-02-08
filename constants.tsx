
import React from 'react';
import { Database, Code, Cpu, BarChart, Zap, Globe, Brain, Terminal, Settings, Palette } from 'lucide-react';
import { Service, Project, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'AI & Machine Learning',
    description: 'Building intelligent AI agents, chatbots, and machine learning models using Python, TensorFlow, and cutting-edge AI technologies.',
    priceRange: 'Starting at ₹25,000',
    icon: 'Brain',
    category: 'ml',
    features: [
      { icon: '', label: 'Fraud Detection Systems' },
      { icon: '', label: 'AI Chatbots & Assistants' },
      { icon: '', label: 'Predictive Analytics' },
      { icon: '', label: 'Custom ML Models' }
    ],
    techStack: ['Python', 'TensorFlow', 'Scikit-learn', 'Gemini API']
  },
  {
    id: 's2',
    title: 'Data Science & Analysis',
    description: 'Comprehensive data analysis and visualization using Python, Pandas, NumPy, and Power BI to uncover hidden patterns.',
    priceRange: 'Starting at ₹15,000',
    icon: 'BarChart',
    category: 'data-science',
    features: [
      { icon: '', label: 'Data Visualization' },
      { icon: '', label: 'Statistical Analysis' },
      { icon: '', label: 'Interactive Dashboards' },
      { icon: '', label: 'Business Intelligence' }
    ],
    techStack: ['Python', 'Pandas', 'Power BI', 'Matplotlib']
  },
  {
    id: 's3',
    title: 'Web Development',
    description: 'Modern, responsive web applications and portfolios built with HTML, CSS, JavaScript, and Python.',
    priceRange: 'Starting at ₹20,000',
    icon: 'Code',
    category: 'web-dev',
    features: [
      { icon: '', label: 'Responsive Design' },
      { icon: '', label: 'Performance Optimization' },
      { icon: '', label: 'Modern UI/UX' },
      { icon: '', label: 'Custom Solutions' }
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Python']
  },
  {
    id: 's5',
    title: 'AI Agents',
    description: 'Custom AI agents that plan, reason, and execute tasks: research agents, data assistants, and workflow automations powered by modern LLM tooling.',
    priceRange: 'Starting at ₹30,000',
    icon: 'Terminal',
    category: 'ai-agents',
    features: [
      { icon: '', label: 'Autonomous Task Planning' },
      { icon: '', label: 'RAG & Knowledge Retrieval' },
      { icon: '', label: 'Tool Use & Integrations' },
      { icon: '', label: 'Multi‑Agent Workflows' }
    ],
    techStack: ['Python', 'Gemini API', 'LLM Orchestration', 'Vector DB']
  },
  {
    id: 's6',
    title: 'Technical Solutions',
    description: 'Custom software solutions, automation tools, and technical consulting. I troubleshoot issues, optimize performance, and ensure smooth operation of applications across various platforms.',
    priceRange: 'Starting at ₹10,000',
    icon: 'Settings',
    category: 'web-dev',
    features: [
      { icon: '', label: 'Custom Software' },
      { icon: '', label: 'Process Automation' },
      { icon: '', label: 'Debugging & Support' },
      { icon: '', label: 'Performance Optimization' }
    ],
    techStack: ['Python', 'Automation', 'Debugging', 'Optimization']
  },
  {
    id: 's7',
    title: 'Logo & Thumbnail Design',
    description: 'High-impact visual identities and click-worthy YouTube thumbnails designed to capture attention and build brand authority.',
    priceRange: 'Starting at ₹5,000',
    icon: 'Palette',
    category: 'design',
    features: [
      { icon: '', label: 'Brand Identity' },
      { icon: '', label: 'YouTube Thumbnails' },
      { icon: '', label: 'Vector Graphics' },
      { icon: '', label: 'Logo Systems' }
    ],
    techStack: ['Photoshop', 'Illustrator', 'Canva', 'Figma']
  }
];

export const PROJECTS: Project[] = [
  // --- AI AGENTS (JSON) ---
  {
    id: 'p1',
    title: 'AI Agent Chatbot (JSON)',
    description: ' Intelligent conversational agent designed for automated JSON-based conversational flows and system triggers.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://ohlinger.co/assets/img/AI/ai_agents.jpeg',
    'https://ohlinger.co/assets/img/AI/ai_agents.jpeg'],
    category: 'AI Agents',
    tags: ['JSON', 'AI Agent', 'Automation'],
    date: '2025',
    isFeatured: true
  },
  {
    id: 'p2',
    title: 'Chatbot AI Agents (JSON)',
    description: ' NLP-powered agent optimized for intelligent business interaction and intent recognition.',
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'AI Agents',
    tags: ['JSON', 'NLP', 'Automation'],
    date: '2025'
  },
  {
    id: 'p3',
    title: 'Google Sheets Agent (JSON)',
    description: ' Dynamic automation agent bridging spreadsheet data with external API endpoints.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551288049-bbda6465f74a?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'AI Agents',
    tags: ['JSON', 'Google Sheets', 'API Integration'],
    date: '2025'
  },
  {
    id: 'p4',
    title: 'SerpAPI Flight Agent (JSON)',
    description: ' Real-time flight search and retrieval agent powered by SerpAPI integration.',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'AI Agents',
    tags: ['JSON', 'SerpAPI', 'Flight Search'],
    date: '2025'
  },
  {
    id: 'p5',
    title: 'WhatsApp Agent (JSON)',
    description: ' Messaging automation system for WhatsApp business protocol handling.',
    imageUrl: 'https://images.unsplash.com/photo-1611743575667-95888002446d?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1611743575667-95888002446d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'AI Agents',
    tags: ['JSON', 'WhatsApp', 'Messaging'],
    date: '2025'
  },

  // --- WEB DEVELOPMENT ---
  {
    id: 'p6',
    title: 'E-Commerce Marketplace',
    description: ' Feature-rich digital marketplace built with Python/Django, featuring robust payment and inventory modules.',
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Web Dev',
    tags: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript'],
    date: '2024',
    isFeatured: true
  },
  {
    id: 'p7',
    title: 'Hospital Website',
    description: ' Medical portal for clinical appointment management and real-time facility logistics.',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Web Dev',
    tags: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript'],
    date: '2024'
  },
  {
    id: 'p8',
    title: 'Restaurant Website',
    description: ' Elegant dining portal with menu virtualization and table reservation engine.',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Web Dev',
    tags: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript'],
    date: '2024'
  },

  // --- DATA SCIENCE / POWER BI ---
  {
    id: 'p9',
    title: 'Hospital Analysis Data',
    description: ' High-density healthcare visualization tracking patient throughput and medical resource allocation.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbda6465f74a?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1551288049-bbda6465f74a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Data Science',
    tags: ['Power BI', 'Healthcare Analytics', 'Data Visualization'],
    date: '2024',
    isFeatured: true
  },
  {
    id: 'p10',
    title: 'HR Analysis Data',
    description: ' Workforce intelligence dashboard analyzing employee performance and retention metrics.',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1454165833767-13a6b060102b?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'Data Science',
    tags: ['Power BI', 'HR Analytics', 'Dashboard'],
    date: '2024'
  },
  {
    id: 'p11',
    title: 'SuperStore Sales Data',
    description: ' E-commerce retail engine analyzing multi-regional profit margins and inventory turnover.',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Data Science',
    tags: ['Power BI', 'Sales Analytics', 'Business Intelligence'],
    date: '2024'
  },

  // --- MACHINE LEARNING ---
  {
    id: 'p12',
    title: 'Credit Card Fraud Detection',
    description: ' Neural anomaly detection system for high-precision identification of fraudulent transactions.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551288049-bbda6465f74a?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'ML',
    tags: ['Python', 'Machine Learning', 'Fraud Detection'],
    date: '2023'
  },
  {
    id: 'p13',
    title: 'Iris Classification Model',
    description: ' Optimized multi-class classification engine for botanical taxonomy using Scikit-learn.',
    imageUrl: 'https://images.unsplash.com/photo-1520412099551-6296b0db5c04?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1520412099551-6296b0db5c04?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'ML',
    tags: ['Python', 'Scikit-learn', 'Classification'],
    date: '2023'
  },
  {
    id: 'p14',
    title: 'Sales Advertising Analysis',
    description: ' Regression-based intelligence analyzing ad-spend efficiency versus revenue growth.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbda6465f74a?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1551288049-bbda6465f74a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Data Science',
    tags: ['Python', 'Data Analysis', 'Regression'],
    date: '2023'
  },
  {
    id: 'p15',
    title: 'Unemployment Prediction Model',
    description: ' Time-series forecasting engine predicting economic workforce shifts and labor trends.',
    imageUrl: 'https://images.unsplash.com/photo-1454165833767-13a6b060102b?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1454165833767-13a6b060102b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'ML',
    tags: ['Python', 'Time Series', 'Prediction'],
    date: '2023'
  },

  // --- FINTECH & ENTERPRISE ---
  {
    id: 'p16',
    title: 'IPO Platform',
    description: ' Specialized fintech engine for tracking public offering dynamics and investor data.',
    imageUrl: 'https://images.unsplash.com/photo-1611974714024-4607a50d6c2a?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1611974714024-4607a50d6c2a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Web Dev',
    tags: ['Python', 'Django', 'HTML', 'CSS'],
    date: '2024'
  },
  {
    id: 'p17',
    title: 'VAS Business Website',
    description: ' Enterprise portal for Value Added Services (VAS) commercial logistics and client ops.',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1454165833767-13a6b060102b?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Web Dev',
    tags: ['Python', 'Django', 'HTML', 'CSS'],
    date: '2024'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    clientName: 'Rahul Mehra',
    clientRole: 'Operations Director',
    company: 'LogiTrack Solutions',
    content: "Tushar's automation workflows using n8n saved our team over 20 hours a week. The WhatsApp bot is flawless and handles customer queries even while we sleep. Truly a game-changer.",
    rating: 5,
    category: 'Automation',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: 't2',
    clientName: 'Sarah Jenkins',
    clientRole: 'Tech Founder',
    company: 'MediSync',
    content: "The Healthcare platform built by Singh exceeded all our expectations. Clean code, responsive design, and robust security. He's not just a developer; he's a technical architect.",
    rating: 5,
    category: 'Web Dev',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    snippetUrl: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 't3',
    clientName: 'Vikram Singh',
    clientRole: 'Lead Analyst',
    company: 'RetailPulse',
    content: "The Power BI dashboards Tushar created gave us insights we never knew existed. His ability to handle 100k+ records and make them visually intuitive is impressive.",
    rating: 5,
    category: 'Data Science',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
  }
];

export const ICON_MAP = {
  Database: <Database className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  BarChart: <BarChart className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
  Terminal: <Terminal className="w-6 h-6" />,
  Settings: <Settings className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
};
