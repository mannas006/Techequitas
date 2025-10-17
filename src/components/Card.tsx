'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export default function Card({ 
  children, 
  className = '', 
  hover = true, 
  padding = 'md',
  onClick 
}: CardProps) {
  const baseClasses = 'bg-white rounded-xl border border-gray-100 shadow-md';
  const hoverClasses = hover ? 'hover:shadow-lg transition-shadow duration-300' : '';
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  return (
    <motion.div 
      className={`${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
      }}
      whileTap={{ scale: onClick ? 0.98 : 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
}