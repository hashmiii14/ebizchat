import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Search, FileQuestion } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-white text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-slate-100 text-slate-500 flex items-center justify-center mx-auto">
          <FileQuestion className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest">
            404 Error
          </span>
          <h1 className="text-3xl font-bold text-slate-900">Page Not Found</h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            The page you are looking for does not exist or may have been moved.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white font-semibold text-xs hover:bg-brand-700 shadow-sm transition-colors"
          >
            <Home className="w-4 h-4" />
            Return to Home
          </Link>
          <Link
            to="/features"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200 transition-colors"
          >
            Browse Features
          </Link>
        </div>

        <div className="pt-6 border-t border-slate-100 text-xs text-slate-400 font-mono">
          Orizer eBizChat Navigation Recovery
        </div>
      </div>
    </div>
  );
}
