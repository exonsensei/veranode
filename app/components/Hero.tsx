'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useLoading } from '../context/LoadingContext';

const Hero = () => {
  const { isLoading } = useLoading();

  useEffect(() => {
    if (!isLoading) {
      const tl = gsap.timeline();
      
      tl.from('.hero-title span', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
      });

      tl.from('.hero-description', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.4');

      tl.from('.hero-buttons', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.4');
    }
  }, [isLoading]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 mt-16">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 text-center z-10"
      >
        <h1 className="hero-title mb-6">
          <span className="block text-5xl md:text-7xl font-bold text-secondary leading-tight">
            Digital Transformation &
          </span>
          <span className="block text-5xl md:text-7xl font-bold text-primary leading-tight">
            Technology Solutions
          </span>
        </h1>
        
        <p className="hero-description max-w-2xl mx-auto text-lg md:text-xl text-accent mb-12">
          We are here to provide digital solutions that will carry your business into the future.
        </p>
        
        <div className="hero-buttons flex flex-col sm:flex-row justify-center items-center gap-4">
          <motion.a
            href="https://wa.me/447478358893"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center gap-2 px-8"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contact via WhatsApp
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary bg-secondary hover:bg-secondary/90 px-8"
          >
            Our Services
          </motion.a>
        </div>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[{ left: '20%', top: '20%' }, { left: '60%', top: '40%' }, { left: '40%', top: '70%' }].map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-primary/5 rounded-full"
            style={position}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isLoading ? 0 : 1,
              scale: 1,
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 2.5 },
              scale: { duration: 0.5, delay: 2.5 },
              x: { duration: 20, repeat: Infinity, delay: i * 2 },
              y: { duration: 20, repeat: Infinity, delay: i * 2 },
              ease: 'linear',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero; 