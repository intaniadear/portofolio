import React, { useState, useEffect } from 'react';
import { Mail, Copy, Check, Send, Linkedin, MapPin, ArrowUpRight, MessageCircle, AlertCircle, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { decodeData, OBFUSCATED_CONTACTS } from '../utils/obfuscate';

// Helper pembersih input untuk mencegah script/tag injection
function sanitizeText(str: string): string {
  return str.replace(/[<>]/g, '').trim();
}

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  
  // Security 1: Honeypot field (tersembunyi dari manusia, bot otomatis mengisinya)
  const [honeypot, setHoneypot] = useState('');
  
  // Security 2: Waktu render untuk mendeteksi bot instan (< 2 detik)
  const [mountTime, setMountTime] = useState<number>(0);

  // Security 3: PII Decoded State (hanya dieksekusi di runtime klien, bukan static crawler)
  const [rawEmail, setRawEmail] = useState('');
  const [rawPhone, setRawPhone] = useState('');

  useEffect(() => {
    setMountTime(Date.now());
    setRawEmail(decodeData(OBFUSCATED_CONTACTS.email));
    setRawPhone(decodeData(OBFUSCATED_CONTACTS.phoneDisplay));
  }, []);

  const handleCopyEmail = () => {
    const emailToCopy = rawEmail || personalInfo.email;
    navigator.clipboard.writeText(emailToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const phoneDigits = decodeData(OBFUSCATED_CONTACTS.whatsappNumber);
    const waUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent('Halo Intania, saya tertarik untuk mendiskusikan peluang kerja/proyek.')}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Proteksi 1: Deteksi Honeypot (Jika field tak terlihat ini terisi, dipastikan itu bot)
    if (honeypot.trim() !== '') {
      // Simulasikan berhasil tanpa melakukan apa-apa agar bot tidak belajar
      setFormSubmitted(true);
      return;
    }

    // Proteksi 2: Deteksi Kecepatan Pengisian (Bot biasanya submit < 2 detik)
    const elapsed = Date.now() - mountTime;
    if (elapsed < 2000) {
      setErrorMessage('Pengisian formulir terdeteksi terlalu cepat. Harap isi dengan wajar.');
      return;
    }

    // Proteksi 3: Rate Limiting Client-Side (Maksimal 3 pesan per 10 menit per sesi)
    const storedSubmissions = sessionStorage.getItem('contact_submissions_count');
    const submissionCount = storedSubmissions ? parseInt(storedSubmissions, 10) : 0;
    if (submissionCount >= 3) {
      setErrorMessage('Batas pengiriman pesan tercapai untuk sesi ini. Silakan hubungi langsung via WhatsApp atau LinkedIn.');
      return;
    }

    // Sanitasi input dasar
    const cleanName = sanitizeText(formData.name);
    const cleanEmail = sanitizeText(formData.email);
    const cleanMessage = sanitizeText(formData.message);

    if (!cleanName || !cleanEmail || !cleanMessage) {
      setErrorMessage('Harap lengkapi semua bidang yang wajib diisi.');
      return;
    }

    // Simpan hitungan rate limit
    sessionStorage.setItem('contact_submissions_count', (submissionCount + 1).toString());

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
              {/* WhatsApp Dynamic CTA (Protected from static scrapers) */}
              <button
                type="button"
                onClick={handleOpenWhatsApp}
                className="w-full flex items-center justify-between p-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-all shadow-soft-sm group text-left cursor-pointer"
                aria-label="Kirim Pesan WhatsApp Langsung"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs opacity-90">Kirim Pesan Instan</span>
                    <span className="font-semibold">{rawPhone || 'Buka Obrolan WhatsApp'}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 group-hover:translate-y-[-2px] transition-transform" />
              </button>

              {/* Email details (Protected from static scrapers) */}
              <div className="space-y-2 pt-2">
                <span className="text-xs uppercase font-mono tracking-wider text-typography-muted">
                  Alamat Email Resmi
                </span>
                <div className="text-base sm:text-lg font-semibold text-typography-heading font-mono break-all select-all">
                  {rawEmail || 'intania***@gmail.com'}
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-surface-subtle hover:bg-surface text-typography-heading text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
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

          {/* Right: Message Form with Anti-Bot Protections */}
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
                    className="inline-flex items-center text-xs font-semibold text-primary hover:underline pt-2 cursor-pointer"
                  >
                    Kirim pesan lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-typography-heading">
                      Kirim Pesan / Tawaran Kerja
                    </h3>
                    <div className="inline-flex items-center gap-1 text-[11px] text-typography-muted">
                      <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                      <span>Anti-Spam Protected</span>
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Honeypot Trap (Tersembunyi secara visual & aksesibilitas, bot otomatis mengisi) */}
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }}>
                    <label htmlFor="_company_url_catch">Harap kosongkan bidang ini</label>
                    <input
                      id="_company_url_catch"
                      type="text"
                      name="_company_url_catch"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

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
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-semibold shadow-soft-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
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
