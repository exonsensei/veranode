'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { useLoading } from '../context/LoadingContext';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [setIsLoading, onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
      onAnimationComplete={() => onLoadingComplete()}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0066FF]"
    >
      <div className="relative w-80 h-80">
        {/* Beyaz daire arka plan */}
        <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 transform scale-[0.4]"
          >
            <Logo />
          </motion.div>
        </div>

        {/* Dönen yükleme animasyonu */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 100 100"
        >
          <motion.circle
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ 
              duration: 2,
              ease: "easeInOut"
            }}
            className="stroke-white"
            cx="50"
            cy="50"
            r="48"
            strokeWidth="2"
            fill="none"
            strokeDasharray="1 1"
            strokeLinecap="round"
          />
        </svg>

        {/* Dalgalanan efekt */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0.3 }}
          animate={{ scale: 1.4, opacity: 0 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeOut"
          }}
          className="absolute inset-0 bg-white rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 