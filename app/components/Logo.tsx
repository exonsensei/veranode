'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  isWhite?: boolean;
}

const Logo = ({ className = '', isWhite = false }: LogoProps) => {
  return (
    <motion.div 
      className={`flex items-center ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className={`font-horizhon text-3xl tracking-wider relative ${isWhite ? 'text-white' : 'text-primary'}`}>
        <div className="flex items-center">
          <span className="relative z-10">VE</span>
          <span className="relative z-10">RA</span>
          <div 
            className={`absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full 
            ${isWhite ? 'bg-white' : 'bg-primary'} -z-0 opacity-20 
            transition-transform duration-300 group-hover:scale-110`}
          />
        </div>
      </div>
      <div 
        className={`font-horizhon text-xl ml-2 tracking-widest border-l-2 
        ${isWhite ? 'border-white/20 text-white' : 'border-primary/20 text-primary'} pl-2`}
      >
        DIGITAL
      </div>
    </motion.div>
  );
};

export default Logo; 