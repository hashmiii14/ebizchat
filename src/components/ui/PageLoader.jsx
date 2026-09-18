import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logo.png';

/**
 * PageLoader - Premium loading experience inspired by orizer.netlify.app
 * Sequence:
 * 1. Clean light screen (#ffffff)
 * 2. eBizChat logo appears with smooth scale & fade reveal
 * 3. Tiny progress / reveal motion
 * 4. Smooth transition into homepage (approx 1.2s total, fast & premium)
 */
export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1.2s smooth loading sequence on page load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="ebizchat-page-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white select-none"
        >
          {/* Subtle background glow */}
          <div className="absolute w-72 h-72 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

          {/* Centered Brand Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center px-4 relative z-10"
          >
            {/* Crisp eBizChat Logo */}
            <img
              src={logoImg}
              alt="eBizChat"
              className="h-10 sm:h-12 w-auto object-contain max-w-[240px] sm:max-w-[280px]"
            />

            {/* Tiny Progress bar */}
            <div className="w-36 h-[2px] bg-slate-100 rounded-full overflow-hidden mt-5 relative shadow-inner">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
                className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 rounded-full"
              />
            </div>

            {/* Sub-label inspired by Orizer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="flex items-center gap-2 text-[10px] font-mono tracking-[0.18em] uppercase text-slate-400 mt-3"
            >
              <span>WhatsApp Business Platform</span>
              <span>•</span>
              <span className="text-emerald-600 font-bold">Orizer</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
