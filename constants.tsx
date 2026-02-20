
import React from 'react';
import { Database, Code, Cpu, BarChart, Zap, Globe, Brain, Terminal, Settings, Palette } from 'lucide-react';
import { Service, Project, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'AI & Machine Learning',
    description: 'Building intelligent AI agents, chatbots, and machine learning models using Python, TensorFlow, and cutting-edge AI technologies.',
    priceRange: 'Contact for Price',
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
    priceRange: 'Contact for Price',
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
    priceRange: 'Contact for Price',
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
    priceRange: 'Contact for Price',
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
    priceRange: 'Contact for Price',
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
    priceRange: 'Contact for Price',
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
    description: 'Built to automate customer service conversations with intelligent chatbot capabilities. Processes natural language queries, maintains conversation context, and integrates with business systems to provide instant responses. Purpose: Reduce manual customer support workload and provide 24/7 automated assistance.',
    imageUrl: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_Dev_O_Ps_43aa01a07b.webp',
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
    title: 'Google Sheets Agent (JSON)',
    description: 'Automates data transfer between Google Sheets and external APIs without manual intervention. Reads spreadsheet data, validates entries, and sends information to connected services automatically. Purpose: Eliminate repetitive data entry tasks and synchronize business information across multiple platforms seamlessly.',
    imageUrl: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/large_Darker_Home_4699f79534.webp',
    galleryUrls: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551288049-bbda6465f74a?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'AI Agents',
    tags: ['JSON', 'Google Sheets', 'API Integration'],
    date: '2025'
  },
  {
    id: 'p3',
    title: 'SerpAPI Flight Agent (JSON)',
    description: 'Searches and compares flight prices from multiple airlines in real-time using SerpAPI integration. Shows available flights, prices, and booking options instantly. Purpose: Help travelers find the best flight deals quickly and make informed booking decisions without visiting multiple airline websites.',
    imageUrl: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqhkkls5ddvzvnqbb5w5w.png',
    galleryUrls: [
      'https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'AI Agents',
    tags: ['JSON', 'SerpAPI', 'Flight Search'],
    date: '2025'
  },
  {
    id: 'p4',
    title: 'WhatsApp Agent (JSON)',
    description: 'Handles WhatsApp business communications automatically including message routing, template responses, and conversation management. Sends automated replies and manages customer inquiries 24/7. Purpose: Streamline business communication, improve response times, and provide consistent customer service through WhatsApp platform.',
    imageUrl: 'https://preview.redd.it/build-a-whatsapp-ai-agent-appointment-setter-in-n8n-v0-7jbgbregm0rf1.jpeg?auto=webp&s=2c499f919ec112c179f68adc5032d56fd6dac40b',
    galleryUrls: ['https://unsplash.com/photos/green-and-white-apple-logo-_qsuER9xYOY'],
    category: 'AI Agents',
    tags: ['JSON', 'WhatsApp', 'Messaging'],
    date: '2025'
  },

  // --- WEB DEVELOPMENT ---
  {
    id: 'p5',
    title: 'E-Commerce Marketplace',
    description: 'Online shopping platform where customers can browse products, add to cart, make payments, and track orders. Handles inventory management, user accounts, and secure transactions. Purpose: Enable businesses to sell products online with professional e-commerce capabilities and streamlined customer purchasing experience.',
    imageUrl: 'https://cdn-cchkmpj.nitrocdn.com/CJXGnJvCvbQYOSNVvxpLvOYcHhpJDKbH/assets/images/optimized/rev-c8d6732/ossisto.com/wp-content/uploads/2024/05/What-is-a-online-marketplace-services.webp',
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
    id: 'p6',
    title: 'Hospital Website',
    description: 'Manages hospital appointments, patient records, and medical facility operations digitally. Allows patients to book appointments online and doctors to manage schedules efficiently. Purpose: Modernize healthcare administration, reduce paperwork, and improve patient access to medical services through digital transformation.',
    imageUrl: 'https://img.freepik.com/free-vector/hand-drawn-hospital-reception-scene-with-people-wearing-medical-masks_23-2148831587.jpg?semt=ais_hybrid&w=740&q=80',
    galleryUrls: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Web Dev',
    tags: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript'],
    date: '2024'
  },
  {
    id: 'p7',
    title: 'Restaurant Website',
    description: 'Digital restaurant platform for online menu browsing, table reservations, and food ordering. Customers can view menus, book tables, and place orders through website or mobile. Purpose: Modernize restaurant operations, increase customer convenience, and boost revenue through online ordering and reservation systems.',
    imageUrl: 'https://pic.pikbest.com/02/24/10/21m888piCJW3.jpg!bw700',
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
    id: 'p10',
    title: 'Hospital Analysis Data',
    description: 'Analyzes hospital data to track patient flow, bed availability, staff scheduling, and medical resource usage. Creates visual reports showing healthcare operational efficiency. Purpose: Help hospital administrators make data-driven decisions to optimize patient care, resource allocation, and operational costs.',
    imageUrl: 'https://vnbconsulting.com/wp-content/uploads/2020/01/image11.png',
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
    id: 'p11',
    title: 'HR Analysis Data',
    description: 'Tracks employee performance, analyzes workforce data, and monitors HR metrics like retention and productivity. Generates reports on organizational health and talent management. Purpose: Enable HR teams to make informed decisions about staffing, training, and employee development based on data insights.',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5612AQHSOLZTaGpdtA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721390299249?e=2147483647&v=beta&t=HUdNwvJRwZXpVBgylCLmq6TLYKOjK0tk4tlazMYqpjc',
    galleryUrls: [
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1454165833767-13a6b060102b?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'Data Science',
    tags: ['Power BI', 'HR Analytics', 'Dashboard'],
    date: '2024'
  },
  {
    id: 'p12',
    title: 'SuperStore Sales Data',
    description: 'Analyzes retail sales data across different regions to track profits, inventory levels, and customer buying patterns. Identifies best-selling products and optimal pricing strategies. Purpose: Help retailers understand market performance, optimize inventory management, and maximize profitability through data-driven business decisions.',
    imageUrl: 'https://metricalist.com/wp-content/uploads/2023/05/Superstore%20Sales%20Dashboard%202.PNG',
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
    id: 'p13',
    title: 'Credit Card Fraud Detection',
    description: 'Detects fraudulent credit card transactions by analyzing spending patterns and identifying suspicious activities in real-time. Uses machine learning to distinguish between legitimate and fraudulent charges. Purpose: Protect consumers and financial institutions from payment fraud losses while minimizing false declined transactions.',
    imageUrl: 'https://ai-journey.com/wp-content/uploads/2019/06/fraud-EMV-chip-credit-card.jpg',
    galleryUrls: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551288049-bbda6465f74a?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'ML',
    tags: ['Python', 'Machine Learning', 'Fraud Detection'],
    date: '2023'
  },
  {
    id: 'p14',
    title: 'Iris Classification Model',
    description: 'Classifies iris flower species using machine learning algorithms based on measurements like petal length and width. Demonstrates fundamental classification techniques in data science. Purpose: Educational tool for learning machine learning concepts and comparing different classification algorithms on a classic dataset.',
    imageUrl: 'https://static.wixstatic.com/media/f9980f_33c637888bd04c38bc31c8ccf943079f~mv2.png/v1/fill/w_568,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f9980f_33c637888bd04c38bc31c8ccf943079f~mv2.png',
    galleryUrls: [
      'https://images.unsplash.com/photo-1520412099551-6296b0db5c04?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'ML',
    tags: ['Python', 'Scikit-learn', 'Classification'],
    date: '2023'
  },
  {
    id: 'p15',
    title: 'Sales Advertising Analysis',
    description: 'Analyzes advertising campaign performance by examining spending patterns and measuring return on investment. Determines which marketing channels generate the best results for businesses. Purpose: Help marketers optimize advertising budgets by identifying high-performing campaigns and eliminating ineffective spending.',
    imageUrl: 'https://infoset.app/blog/wp-content/uploads/2022/09/what-is-sales-analysis-how-to-prepare-a-sales-analysis-Report0A.jpg',
    galleryUrls: [
      'https://images.unsplash.com/photo-1551288049-bbda6465f74a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Data Science',
    tags: ['Python', 'Data Analysis', 'Regression'],
    date: '2023'
  },
  {
    id: 'p16',
    title: 'Unemployment Prediction Model',
    description: 'Predicts future unemployment rates by analyzing historical employment data and economic trends. Forecasts labor market conditions to help with workforce planning. Purpose: Assist policymakers, businesses, and researchers in understanding employment trends and preparing for future labor market changes.',
    imageUrl: 'https://bl-i.thgim.com/public/incoming/97zz48/article69815187.ece/alternates/FREE_1200/IMG_iStock-1217160806_2_1_0LAJ5446.jpg',
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
    id: 'p17',
    title: 'IPO Platform',
    description: 'Tracks Initial Public Offering (IPO) activities, monitors stock market data, and analyzes investment opportunities for companies going public. Provides real-time IPO information and performance metrics. Purpose: Help investors and financial professionals stay informed about new stock offerings and make educated investment decisions in the public markets.',
    imageUrl: 'https://assets.upstox.com/content/assets/images/news/shutterstock2503903627-1-1.webp',
    galleryUrls: [
      'https://images.unsplash.com/photo-1611974714024-4607a50d6c2a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Web Dev',
    tags: ['Python', 'Django', 'HTML', 'CSS'],
    date: '2024'
  },
  {
    id: 'p18',
    title: 'VAS QR System',
    description: 'Manages Value Added Services through QR code technology, enabling customers to access special offers, loyalty programs, and premium services by scanning codes. Handles service subscriptions and customer rewards. Purpose: Simplify service delivery, enhance customer engagement, and streamline loyalty program management through convenient QR code-based interactions.',
    imageUrl: 'https://fairshare.tech/wp-content/uploads/2019/01/QR_code_attendance.jpg',
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
