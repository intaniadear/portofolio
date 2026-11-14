import React from 'react';
import { Wrench, CheckCircle2, ShieldAlert } from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="keahlian" className="py-20 border-t border-border bg-surface-subtle/30">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary">
            <Wrench className="w-3.5 h-3.5" />
            <span>Keahlian & Penguasaan Sistem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-typography-heading tracking-tight">
            Kompetensi Teknis & Alat Kerja
          </h2>
          <p className="text-typography-body text-base">
            Tanpa persentase artifisial. Berikut adalah perangkat lunak dan keahlian operasional yang rutin saya gunakan untuk menjamin ketertiban finansial perusahaan.
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technicalSkills.map((category, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl border border-border bg-surface flex flex-col justify-between space-y-6 hover:shadow-soft-sm transition-all"
            >
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider font-mono text-primary font-semibold block">
                  Kategori {idx + 1}
                </span>
                <h3 className="font-semibold text-xl text-typography-heading">
                  {category.title}
                </h3>
                <p className="text-xs text-typography-muted leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {category.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="p-3.5 rounded-xl bg-surface-subtle border border-border/70 space-y-1"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-typography-heading">
                      <span>{item.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    </div>
                    <div className="text-[11px] text-typography-muted leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional verification note */}
        <div className="p-4 rounded-xl bg-surface border border-border flex items-center gap-3 text-xs text-typography-muted">
          <ShieldAlert className="w-4 h-4 text-primary shrink-0" />
          <span>
            <strong>Standar Kompetensi</strong>: Seluruh keahlian di atas didukung oleh sertifikasi resmi (BNSP, Ioda, G-Trust) dan rekam jejak penerapan operasional nyata di industri.
          </span>
        </div>
      </div>
    </section>
  );
};
