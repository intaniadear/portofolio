import React, { useState } from 'react';
import { Layers, ChevronDown, ChevronUp, CheckCircle2, TrendingUp, Cpu } from 'lucide-react';
import { operationalCaseStudies } from '../data/portfolioData';

export const OperationalPortfolio: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(operationalCaseStudies[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="operasional" className="py-20 border-t border-border bg-surface-subtle/30">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary">
            <Layers className="w-3.5 h-3.5" />
            <span>Portofolio Operasional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-typography-heading tracking-tight">
            Studi Kasus & Tata Kelola Operasional
          </h2>
          <p className="text-typography-body text-base">
            Pendekatan terstruktur dalam menyelesaikan tantangan arus kas, rekonsiliasi data berskala besar, dan kepatuhan audit.
          </p>
        </div>

        {/* Case studies list */}
        <div className="grid grid-cols-1 gap-6">
          {operationalCaseStudies.map((study) => {
            const isExpanded = expandedId === study.id;
            return (
              <article
                key={study.id}
                className="p-6 sm:p-8 rounded-2xl border border-border bg-surface hover:shadow-soft-md transition-all space-y-5"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-typography-muted font-mono">
                      <span className="text-primary font-semibold uppercase">{study.organization}</span>
                      <span>•</span>
                      <span>{study.period}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-typography-heading">
                      {study.title}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-subtle border border-border/80 text-xs text-typography-body">
                      <span className="font-semibold text-typography-heading">Lingkup:</span>
                      <span>{study.scope}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleExpand(study.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border bg-surface-subtle hover:bg-surface text-xs font-semibold text-typography-heading transition-all self-start"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Tutup Studi Kasus' : 'Buka Rincian Kasus'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Challenge & Results Preview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-surface-subtle border border-border/60 space-y-1.5">
                    <span className="text-xs uppercase font-mono tracking-wider text-typography-muted font-semibold block">
                      Tantangan Operasional
                    </span>
                    <p className="text-xs text-typography-body leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-subtle border border-border/60 space-y-1.5">
                    <span className="text-xs uppercase font-mono tracking-wider text-primary font-semibold block flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Hasil Terukur
                    </span>
                    <ul className="space-y-1 text-xs text-typography-body">
                      {study.results.map((res, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Expanded Detailed Execution */}
                {isExpanded && (
                  <div className="p-5 rounded-xl bg-surface-subtle/80 border border-border space-y-3 text-xs animate-fadeIn">
                    <span className="font-semibold text-typography-heading uppercase font-mono tracking-wider block">
                      Metodologi & Eksekusi:
                    </span>
                    <p className="text-typography-body leading-relaxed">
                      {study.execution}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <span className="text-[11px] text-typography-muted flex items-center gap-1 font-mono">
                        <Cpu className="w-3 h-3 text-primary" />
                        Sistem & Instrumen:
                      </span>
                      {study.toolsUsed.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md bg-surface border border-border text-[11px] font-medium text-typography-heading"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

