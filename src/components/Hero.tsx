import React from 'react';
import { ArrowDown, MapPin, Award, CheckCircle2, Phone, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {/* Main Grid: Info & Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Information & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            {/* Top badging */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface-subtle text-xs font-medium text-typography-body">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{personalInfo.status}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs text-typography-muted">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Headline with editorial typography */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-typography-heading leading-[1.14]">
                Tata kelola keuangan & administrasi dengan{' '}
                <span className="font-display italic font-normal text-primary">
                  presisi tinggi
                </span>
                , tertib, dan siap audit.
              </h1>
              <p className="text-lg sm:text-xl text-typography-body leading-relaxed max-w-2xl font-normal text-justify">
                Halo, saya <span className="font-semibold text-typography-heading">{personalInfo.fullName}</span>, berpengalaman dalam manajemen keuangan multi-entitas (kantor pusat, perhotelan, & konstruksi), pemrosesan 750+ transaksi pembayaran bulanan, rekonsiliasi data, serta administrasi berstandar BNSP.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-dark text-white font-medium text-sm shadow-soft-md transition-all hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Phone className="w-4 h-4" />
                <span>Hubungi via WhatsApp</span>
              </a>

              <a
                href="#pengalaman"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-surface hover:bg-surface-subtle text-typography-heading font-medium text-sm transition-all hover:border-border-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span>Telusuri Rekam Jejak</span>
                <ArrowDown className="w-4 h-4 text-primary" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-border/80 bg-surface-subtle hover:bg-surface text-typography-body hover:text-typography-heading font-medium text-xs transition-all"
              >
                <Mail className="w-4 h-4 text-typography-muted" />
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Photo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm w-full">
              {/* Elegant ambient card frame */}
              <div className="relative rounded-3xl border border-border bg-surface p-3 shadow-soft-lg transition-all duration-300 group-hover:shadow-soft-xl group-hover:border-primary/40">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface-subtle">
                  <img
                    src="/intania-photo.jpg"
                    alt="Foto Profil Intania Dea Ramadhani, S.E."
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  {/* High contrast badge over image */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/20 text-[11px] font-mono font-medium text-white shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-teal-300 shrink-0" />
                    <span className="tracking-tight text-white font-medium">Finance Specialist</span>
                  </div>
                </div>

                {/* Identity caption */}
                <div className="pt-3 pb-1 px-2 space-y-1 text-center">
                  <div className="font-semibold text-typography-heading text-base tracking-tight">
                    {personalInfo.fullName}
                  </div>
                  <div className="text-xs text-typography-muted font-mono">
                    UIN Prof. K.H. Saifuddin Zuhri Purwokerto
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Metrics / Signals */}
        <div className="pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-6">
          {personalInfo.keyMetrics.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-semibold text-typography-heading font-mono flex items-center gap-1.5">
                <span className={idx === 0 || idx === 1 ? 'text-primary' : ''}>{metric.value}</span>
              </div>
              <div className="text-xs font-semibold text-typography-heading">
                {metric.label}
              </div>
              {metric.subtext && (
                <div className="text-[11px] text-typography-muted leading-tight">
                  {metric.subtext}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key highlights strip */}
        <div className="p-4 rounded-xl bg-surface-subtle/80 border border-border flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-typography-body">
            <Award className="w-4 h-4 text-amber-500 shrink-0" />
            <span><strong>Awardee Beasiswa Bank Indonesia</strong> (2022)</span>
          </div>
          <div className="flex items-center gap-2 text-typography-body">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Sertifikasi Kompetensi BNSP Mail Handling (2018)</span>
          </div>
          <div className="flex items-center gap-2 text-typography-body">
            <span className="font-mono font-semibold text-primary">Accurate & Emerald System</span>
          </div>
        </div>
      </div>
    </section>
  );
};
