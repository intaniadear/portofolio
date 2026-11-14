import React, { useState } from 'react';
import { Briefcase, Users, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { workExperiences, organizationalExperiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'org'>('work');

  return (
    <section id="pengalaman" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Jejak Profesional</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-typography-heading tracking-tight">
              Pengalaman Kerja & Organisasi
            </h2>
            <p className="text-typography-body text-base">
              Rekam jejak kepemimpinan, kepatuhan finansial, serta pengelolaan operasional multi-unit dan kemitraan.
            </p>
          </div>

          {/* Toggle buttons */}
          <div className="flex items-center gap-1.5 bg-surface-subtle p-1.5 rounded-xl border border-border self-start">
            <button
              onClick={() => setActiveTab('work')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'work'
                  ? 'bg-surface text-typography-heading shadow-soft-sm font-semibold'
                  : 'text-typography-muted hover:text-typography-heading'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-primary" />
              <span>Pengalaman Kerja ({workExperiences.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('org')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'org'
                  ? 'bg-surface text-typography-heading shadow-soft-sm font-semibold'
                  : 'text-typography-muted hover:text-typography-heading'
              }`}
            >
              <Users className="w-3.5 h-3.5 text-accent" />
              <span>Organisasi ({organizationalExperiences.length})</span>
            </button>
          </div>
        </div>

        {/* Content based on tab */}
        {activeTab === 'work' ? (
          <div className="space-y-8">
            {workExperiences.map((exp) => (
              <article
                key={exp.id}
                className="p-6 sm:p-8 rounded-2xl border border-border bg-surface hover:border-primary/50 transition-all space-y-5"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                        {exp.company}
                      </span>
                      {exp.entityScope && (
                        <span className="px-2.5 py-0.5 rounded-md bg-surface-subtle border border-border text-[11px] text-typography-muted">
                          {exp.entityScope}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-typography-heading">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs text-typography-muted font-mono">
                    <span className="inline-flex items-center gap-1.5 bg-surface-subtle px-2.5 py-1 rounded-md">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-typography-body leading-relaxed">
                  {exp.summary}
                </p>

                <div className="pt-2 border-t border-border/70 space-y-2">
                  <span className="text-xs font-semibold text-typography-heading uppercase tracking-wider font-mono block">
                    Tanggung Jawab & Realisasi Kunci:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {exp.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-typography-body leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {organizationalExperiences.map((org) => (
              <article
                key={org.id}
                className="p-6 sm:p-8 rounded-2xl border border-border bg-surface hover:border-accent/40 transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-xs font-mono uppercase tracking-wider text-accent font-semibold flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{org.organization}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-typography-heading">
                      {org.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs text-typography-muted font-mono">
                    <span className="inline-flex items-center gap-1.5 bg-surface-subtle px-2.5 py-1 rounded-md">
                      <Calendar className="w-3.5 h-3.5" />
                      {org.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {org.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-typography-body leading-relaxed">
                  {org.summary}
                </p>

                <div className="pt-3 border-t border-border/70 space-y-2">
                  <span className="text-xs font-semibold text-typography-heading uppercase tracking-wider font-mono block">
                    Kontribusi & Pencapaian Organisasi:
                  </span>
                  <div className="space-y-2">
                    {org.contributions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-typography-body leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
