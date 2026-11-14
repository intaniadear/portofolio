import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#tentang' },
    { name: 'Pengalaman', href: '#pengalaman' },
    { name: 'Portofolio Operasional', href: '#operasional' },
    { name: 'Edukasi & Prestasi', href: '#edukasi-prestasi' },
    { name: 'Keahlian', href: '#keahlian' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-surface/90 backdrop-blur-md border-b border-border shadow-soft-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Brand / Logo with Portrait Thumbnail */}
        <a
          href="#"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md p-1"
          aria-label="Kembali ke atas"
        >
          <img
            src="/intania-photo.jpg"
            alt="Intania Dea"
            className="w-9 h-9 rounded-full object-cover object-top border-2 border-primary shadow-sm group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-typography-heading tracking-tight text-base group-hover:text-primary transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-xs text-typography-muted hidden sm:inline">
              Finance & Accounting
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface-subtle/80 px-3 py-1.5 rounded-full border border-border">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1 text-xs font-medium text-typography-body hover:text-typography-heading hover:bg-surface rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme switcher */}
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}
            className="p-2 rounded-full border border-border bg-surface text-typography-body hover:text-typography-heading hover:bg-surface-subtle transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* WhatsApp / Quick contact button */}
          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-primary hover:bg-primary-dark rounded-full shadow-soft-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Hubungi WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
            className="lg:hidden p-2 rounded-lg border border-border bg-surface text-typography-body hover:text-typography-heading"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-b border-border px-6 py-4 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-typography-body hover:text-typography-heading hover:bg-surface-subtle rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-primary rounded-lg"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Hubungi via WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
