import React from 'react';
import { UserCheck, ShieldCheck, Languages, Sparkles } from 'lucide-react';
import { personalInfo, languages, personalSkills } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="tentang" className="py-20 border-t border-border bg-surface-subtle/40">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Profil Profesional & Pendekatan Kerja</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-typography-heading tracking-tight">
            Dedikasi pada Ketelitian & Efisiensi Bisnis
          </h2>
        </div>

        {/* Story and values grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative bio - Rata Kanan Kiri (Text Justify) */}
          <div className="lg:col-span-7 space-y-6 text-typography-body leading-relaxed text-base">
            {personalInfo.aboutParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-justify leading-relaxed">{paragraph}</p>
            ))}

            <div className="p-6 rounded-2xl bg-surface border border-border border-l-4 border-l-primary space-y-2">
              <span className="text-xs uppercase font-mono tracking-wider text-primary font-semibold block">
                Prinsip Akurasi Finansial
              </span>
              <p className="text-sm italic font-display text-typography-heading text-justify leading-relaxed">
                "Keandalan tata kelola administrasi dan finansial tidak hanya menjaga kepatuhan angka pada buku kas, melainkan menjadi fondasi kepercayaan bagi pengambilan keputusan pimpinan dan kelancaran operasional harian perusahaan."
              </p>
            </div>

            {/* Languages & Communication */}
            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-typography-muted mb-3">
                <Languages className="w-4 h-4 text-primary" />
                <span>Penguasaan Bahasa</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                {languages.map((lang, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-surface border border-border space-y-0.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-typography-heading">{lang.language}</span>
                      <span className="text-xs font-medium text-primary font-mono">{lang.proficiency}</span>
                    </div>
                    <div className="text-xs text-typography-muted">{lang.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Core values & personal skills */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-typography-muted">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>3 Komitmen Kualitas Kerja</span>
              </div>

              {personalInfo.coreValues.map((value, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-surface border border-border hover:border-border-hover transition-all space-y-2"
                >
                  <h3 className="font-semibold text-typography-heading text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                    {value.title}
                  </h3>
                  <p className="text-xs text-typography-body leading-relaxed pl-3.5 text-justify">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Personal competencies list */}
            <div className="p-5 rounded-2xl bg-surface border border-border space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-typography-heading">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Karakteristik & Soft Skills</span>
              </div>
              <div className="space-y-2">
                {personalSkills.map((skill, idx) => (
                  <div key={idx} className="text-xs space-y-0.5">
                    <span className="font-semibold text-typography-heading block">{skill.name}</span>
                    <span className="text-typography-muted block text-[11px] leading-relaxed text-justify">{skill.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
