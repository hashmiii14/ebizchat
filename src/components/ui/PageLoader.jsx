import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * PageLoader - High-performance non-blocking page load progress bar
 * Never hides the screen or blocks interaction.
 * Smoothly traces across the very top of the viewport and fades out upon hydration.
 */
export default function PageLoader() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    // Ultra-fast smooth completion (380ms) upon mount
    const timer = setTimeout(() => {
      setActive(false);
    }, 380);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="ebizchat-top-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
          className="fixed top-0 left-0 right-0 h-[3px] z-[999999] pointer-events-none overflow-hidden"
        >
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 shadow-[0_0_10px_rgba(16,185,129,0.7)]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
