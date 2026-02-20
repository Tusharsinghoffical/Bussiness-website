import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: "Code with Mr. Singh | Freelance Data Scientist & Full-Stack Developer Delhi",
    template: "%s | Code with Mr. Singh"
  },
  description: "Top-rated freelance Data Scientist & Full-Stack Developer in Delhi. Expert in Python, AI/ML, React.js, Django. Build scalable web apps, data pipelines & AI solutions. Hire me for your next project.",
  keywords: ["Data Scientist Delhi", "Full Stack Developer India", "Python Developer", "AI ML Engineer", "Freelance Developer", "React.js Developer", "Django Developer", "Machine Learning Expert", "Data Analysis", "Web Development", "AI Automation", "Tushar Singh"],
  authors: [{ name: "Tushar Singh" }],
  creator: "Tushar Singh",
  publisher: "Code with Mr. Singh",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://codewithmrsingh.me/",
    title: "Code with Mr. Singh | Top Freelance Developer Delhi",
    description: "Hire India's top freelance Data Scientist & Full-Stack Developer. Expert in Python, AI/ML, React.js, Django. Build scalable solutions for your business.",
    siteName: "Code with Mr. Singh",
    images: [
      {
        url: "https://codewithmrsingh.me/me-optimized.jpg",
        width: 1200,
        height: 630,
        alt: "Tushar Singh - Freelance Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Code with Mr. Singh | Freelance Developer Delhi",
    description: "Top-rated freelance developer specializing in Data Science, AI/ML, and Full-Stack Development. Based in Delhi, serving clients globally.",
    creator: "@TusharSinghDev",
    images: ["https://codewithmrsingh.me/me-optimized.jpg"]
  },
  verification: {
    google: "your-google-verification-code"
  },
  alternates: {
    canonical: "https://codewithmrsingh.me/"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi, India" />
        <meta name="geo.position" content="28.613939;77.209021" />
        <meta name="ICBM" content="28.613939, 77.209021" />
        <meta name="theme-color" content="#4F46E5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Code with Mr. Singh" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tushar Singh",
              "url": "https://codewithmrsingh.me",
              "image": "https://codewithmrsingh.me/me-optimized.jpg",
              "jobTitle": "Freelance Data Scientist & Full-Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Code with Mr. Singh"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Delhi",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://github.com/Tusharsinghoffical",
                "https://linkedin.com/in/tusharsingh2011"
              ],
              "description": "Expert freelance developer specializing in Data Science, AI/ML, Python, React.js, and Full-Stack Development with proven track record of delivering scalable solutions.",
              "knowsAbout": ["Data Science", "Machine Learning", "Python", "React.js", "Django", "Web Development", "AI Automation", "SQL", "JavaScript"],
              "offers": {
                "@type": "Offer",
                "name": "Freelance Development Services",
                "description": "Custom web development, data science projects, and AI/ML solutions"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} bg-white dark:bg-slate-950 transition-colors duration-300 antialiased`}>
        {children}
      </body>
    </html>
  );
}
