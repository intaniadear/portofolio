import React from 'react';
import { GraduationCap, Award, BookOpen, BadgeCheck, Calendar, BookMarked } from 'lucide-react';
import { educationHistory, achievements, certifications } from '../data/portfolioData';

export const EducationAndAchievements: React.FC = () => {
  return (
    <section id="edukasi-prestasi" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* Section 1: Pendidikan & Prestasi */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Pendidikan */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Latar Belakang Akademik</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-typography-heading">
                Pendidikan Formal & Pesantren
              </h2>
            </div>

            <div className="space-y-6">
              {educationHistory.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 rounded-2xl border border-border bg-surface hover:border-border-hover transition-all space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg text-typography-heading">
                        {edu.institution}
                      </h3>
                      <div className="text-sm font-medium text-primary">
                        {edu.degree}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-typography-muted font-mono self-start">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {edu.gpa && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-surface-subtle border border-border text-xs font-mono text-typography-heading font-semibold">
                      <span>Indeks Prestasi Kumulatif (IPK):</span>
                      <span className="text-primary">{edu.gpa}</span>
                    </div>
                  )}

                  {edu.description && (
                    <p className="text-xs text-typography-body leading-relaxed">
                      {edu.description}
                    </p>
                  )}

                  {edu.honors && (
                    <div className="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400 font-medium pt-1">
                      <Award className="w-4 h-4 shrink-0" />
                      <span>{edu.honors}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Prestasi & Publikasi */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent">
                <Award className="w-3.5 h-3.5" />
                <span>Pencapaian Terpilih</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-typography-heading">
                Prestasi & Karya Literasi
              </h2>
            </div>

            <div className="space-y-6">
              {achievements.map((ach) => (
                <div
                  key={ach.id}
                  className="p-6 rounded-2xl border border-border bg-surface hover:border-accent/40 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-semibold text-[11px] font-mono">
                      {ach.badge}
                    </span>
                    <span className="text-xs text-typography-muted font-mono">{ach.year}</span>
                  </div>

                  <h3 className="font-semibold text-base text-typography-heading">
                    {ach.title}
                  </h3>

                  <div className="text-xs font-mono text-primary font-medium">
                    {ach.issuerOrDetail}
                  </div>

                  <p className="text-xs text-typography-body leading-relaxed">
                    {ach.description}
                  </p>

                  {ach.isbn && (
                    <div className="p-3 rounded-xl bg-surface-subtle border border-border/70 flex items-center gap-2 text-xs font-mono text-typography-heading">
                      <BookMarked className="w-4 h-4 text-primary shrink-0" />
                      <span>{ach.isbn}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Sertifikasi & Pelatihan */}
        <div className="pt-8 border-t border-border space-y-8">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary">
              <BadgeCheck className="w-3.5 h-3.5" />
              <span>Pengembangan Profesional</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-typography-heading">
              Pelatihan & Sertifikasi Resmi
            </h2>
            <p className="text-typography-body text-xs sm:text-sm">
              Sertifikasi kompetensi nasional dan kursus intensif penunjang efektivitas administrasi dan akuntansi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-2xl border border-border bg-surface hover:shadow-soft-sm transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-typography-muted font-mono">
                    <span className="text-[11px] uppercase tracking-wider text-primary font-semibold">{cert.category}</span>
                    <span>{cert.year}</span>
                  </div>
                  <h3 className="font-semibold text-sm text-typography-heading leading-snug">
                    {cert.title}
                  </h3>
                </div>

                <div className="pt-2 border-t border-border/60 flex items-center gap-2 text-xs text-typography-muted font-mono">
                  <BookOpen className="w-3.5 h-3.5 text-primary" />
                  <span>{cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

