import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Linkedin, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="kontak" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary">
            <Mail className="w-3.5 h-3.5" />
            <span>Informasi Kontak & Kolaborasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-typography-heading tracking-tight">
            Hubungi Intania
          </h2>
          <p className="text-typography-body text-base">
            Terbuka untuk diskusi kesempatan kerja penuh waktu, proyek konsultasi keuangan & administrasi, atau wawancara profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface space-y-6">
              {/* WhatsApp Primary CTA */}
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-all shadow-soft-sm group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs opacity-90">Kirim Pesan Instan</span>
                    <span className="font-semibold">{personalInfo.phone}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 group-hover:translate-y-[-2px] transition-transform" />
              </a>

              {/* Email details */}
              <div className="space-y-2 pt-2">
                <span className="text-xs uppercase font-mono tracking-wider text-typography-muted">
                  Alamat Email Resmi
                </span>
                <div className="text-base sm:text-lg font-semibold text-typography-heading font-mono break-all">
                  {personalInfo.email}
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-surface-subtle hover:bg-surface text-typography-heading text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Salin email ke clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Email Tersalin ke Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-typography-muted" />
                      <span>Salin Alamat Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn & Location */}
              <div className="pt-4 border-t border-border space-y-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full p-3 rounded-xl border border-border bg-surface-subtle hover:bg-surface text-xs font-semibold text-typography-heading transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-primary" />
                    <span>LinkedIn: intaniadearamadhani</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <div className="p-3 rounded-xl bg-surface-subtle border border-border flex items-start gap-2.5 text-xs text-typography-muted">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-typography-heading block">Domisili Sekarang</span>
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-typography-heading">
                    Pesan Berhasil Terkirim
                  </h3>
                  <p className="text-sm text-typography-muted max-w-sm mx-auto">
                    Terima kasih telah menghubungi. Intania akan membaca pesan Anda dan membalas melalui email secepatnya.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="inline-flex items-center text-xs font-semibold text-primary hover:underline pt-2"
                  >
                    Kirim pesan lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-semibold text-typography-heading mb-4">
                    Kirim Pesan / Tawaran Kerja
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-typography-heading">
                        Nama Lengkap / Instansi
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Contoh: HRD PT Maju Berkah"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-border bg-surface-subtle focus:bg-surface text-typography-heading placeholder:text-typography-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-typography-heading">
                        Alamat Email Anda
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="email@instansi.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-border bg-surface-subtle focus:bg-surface text-typography-heading placeholder:text-typography-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-semibold text-typography-heading">
                      Subjek Pesan
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Contoh: Diskusi Peluang Posisi Finance & Accounting"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-border bg-surface-subtle focus:bg-surface text-typography-heading placeholder:text-typography-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-typography-heading">
                      Rincian Pesan
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Tuliskan pesan, rincian tawaran posisi, atau lingkup kolaborasi yang ingin didiskusikan..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-border bg-surface-subtle focus:bg-surface text-typography-heading placeholder:text-typography-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-semibold shadow-soft-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span>Kirimkan Pesan Langsung</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
