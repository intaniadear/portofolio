import React from 'react';
import { ArrowUp, Sparkles, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-typography-muted">
        {/* Left */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-semibold text-typography-heading">
            {personalInfo.fullName}
          </span>
          <span className="hidden sm:inline opacity-40">•</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-primary" />
            <span>Jakarta Timur</span>
          </span>
          <span className="hidden sm:inline opacity-40">•</span>
          <span>© {currentYear}. Hak cipta dilindungi undang-undang.</span>
        </div>

        {/* Center / Official mark */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-subtle border border-border text-[11px]">
          <Sparkles className="w-3 h-3 text-primary" />
          <span>Portofolio Resmi — Intania Dea Ramadhani, S.E.</span>
        </div>

        {/* Right / Back to Top */}
        <button
          onClick={scrollToTop}
          aria-label="Kembali ke atas halaman"
          className="inline-flex items-center gap-1.5 hover:text-typography-heading transition-colors p-1"
        >
          <span>Ke Atas</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
