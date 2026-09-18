import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from './BrandLogo';

/**
 * PageLoader - Premium initial opening experience for eBizChat by Orizer
 * Inspired by homes24designs.in and orizer.netlify.app.
 * Only runs on fresh initial page load (via sessionStorage).
 */
export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check if user has already seen the loader in this session
    const hasSeenLoader = sessionStorage.getItem('ebizchat_loader_seen');
    if (hasSeenLoader) {
      setLoading(false);
      setShouldRender(false);
      return;
    }

    setShouldRender(true);

    // Smooth sequence runs for ~1.3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('ebizchat_loader_seen', 'true');
      setTimeout(() => setShouldRender(false), 500); // Allow exit animation to complete
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="ebizchat-page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -16, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white pointer-events-none select-none"
        >
          {/* Centered Brand Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center"
          >
            {/* Logo Mark & Wordmark */}
            <BrandLogo size="lg" showTagline={true} />

            {/* Subtle Tagline / Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xs font-mono tracking-wider text-slate-500 uppercase mt-4"
            >
              Enterprise WhatsApp Communication & Automation
            </motion.p>

            {/* Thin Emerald Progress Line */}
            <div className="w-36 h-1 bg-slate-100 rounded-full overflow-hidden mt-6 relative shadow-inner">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
