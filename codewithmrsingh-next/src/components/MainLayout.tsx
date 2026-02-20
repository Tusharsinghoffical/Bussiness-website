'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';
import ClockDisplay from '@/components/ClockDisplay';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 transition-colors duration-300 overflow-x-hidden w-full relative">
      <ClockDisplay />
      <Navbar />
      <main id="main-content" className="flex-grow w-full overflow-x-hidden">
        {children}
      </main>
      <WhatsAppButton />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default MainLayout;