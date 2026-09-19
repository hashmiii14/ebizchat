import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logo.png';

/**
 * PageLoader - Fast Typebot-inspired opening reveal animation
 * Sleek minimal dark/cream curtain with eBizChat logo and glowing orange pulse dot.
 * Auto-fades out in under 480ms so users immediately see content without blocking.
 */
export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Fast non-blocking reveal: fades away seamlessly at 450ms
    const timer = setTimeout(() => {
      setVisible(false);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="typebot-page-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -12,
            transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[999999] pointer-events-none flex flex-col items-center justify-center bg-[#0a0a0a] text-white select-none overflow-hidden"
        >
          {/* Subtle background orange ambient glow */}
          <div className="absolute w-72 h-72 rounded-full bg-[#ff5500]/15 blur-3xl pointer-events-none" />

          {/* Logo Container with Smooth Reveal */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="relative z-10 flex flex-col items-center gap-3 px-6"
          >
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="eBizChat"
                className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
              />
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-[10px] font-mono uppercase tracking-widest text-zinc-300">
                <span>Orizer</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] animate-pulse" />
              </span>
            </div>

            {/* Micro loading progress trace */}
            <div className="w-36 h-[2px] bg-zinc-800 rounded-full overflow-hidden mt-2">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#ff5500] to-white"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
