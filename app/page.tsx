'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { LoadingProvider } from './context/LoadingContext';

export default function Home() {
  const [isLoadingVisible, setIsLoadingVisible] = useState(true);

  return (
    <LoadingProvider>
      <AnimatePresence>
        {isLoadingVisible && <LoadingScreen onLoadingComplete={() => setIsLoadingVisible(false)} />}
      </AnimatePresence>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <About />
        <Footer />
      </main>
    </LoadingProvider>
  );
} 