import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEOHead - Dynamically updates page title, meta description, and canonical link
 */
export default function SEOHead({ title, description, canonicalPath }) {
  const location = useLocation();

  useEffect(() => {
    // 1. Update document title
    const baseTitle = 'eBizChat | WhatsApp Business Automation & Lead Generation by Orizer';
    document.title = title ? `${title} | eBizChat by Orizer` : baseTitle;

    // 2. Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        description ||
          'eBizChat by Orizer is an enterprise WhatsApp Business platform providing chat automation, multi-channel lead generation, shared team inbox, and native ERP/CRM connectivity.'
      );
    }

    // 3. Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const url = canonicalPath
        ? `https://ebizchat.vercel.app${canonicalPath}`
        : `https://ebizchat.vercel.app${location.pathname}`;
      canonical.setAttribute('href', url);
    }
  }, [title, description, canonicalPath, location.pathname]);

  return null;
}
