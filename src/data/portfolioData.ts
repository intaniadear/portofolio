import {
  PersonalInfo,
  WorkExperience,
  OrganizationalExperience,
  EducationItem,
  AchievementItem,
  CertificationItem,
  SkillCategory,
  OperationalCaseStudy,
} from '../types/portfolio';
import { decodeData, OBFUSCATED_CONTACTS } from '../utils/obfuscate';

export const personalInfo: PersonalInfo = {
  name: 'Intania Dea',
  fullName: 'Intania Dea Ramadhani, S.E.',
  title: 'Finance, Accounting & Administration Professional',
  headline: 'Mengelola operasional keuangan multi-entitas, rekonsiliasi data, dan kepatuhan administrasi bisnis dengan presisi tinggi.',
  location: 'Jakarta Timur, DKI Jakarta',
  phone: decodeData(OBFUSCATED_CONTACTS.phoneDisplay),
  whatsappUrl: `https://wa.me/${decodeData(OBFUSCATED_CONTACTS.whatsappNumber)}`,
  email: decodeData(OBFUSCATED_CONTACTS.email),
  linkedin: 'https://www.linkedin.com/in/intaniadearamadhani',
  status: 'Terbuka untuk Peluang Karier & Kolaborasi Profesional',
  aboutParagraphs: [
    'Lulusan Ekonomi Syariah (IPK 3.71 / 4.00) dengan rekam jejak praktis yang kuat dalam bidang administrasi, keuangan korporat, dan akuntansi operasional. Berpengalaman menangani tata kelola dokumen finansial harian, pelaporan keuangan berkala, pengawasan arus kas, serta kepatuhan standar akuntansi dan SOP perusahaan.',
    'Memiliki pengalaman langsung mengelola kebutuhan finansial multi-entitas: kantor pusat, 2 unit hotel, dan 3 proyek konstruksi di Fieris Group, termasuk pemrosesan lebih dari 750 transaksi pembayaran vendor dan reimbursement setiap bulan secara tepat waktu dengan tingkat akurasi tinggi.',
    'Terampil dalam mengoperasikan sistem akuntansi dan ERP seperti Accurate, Emerald System, Microsoft Excel tingkat lanjut, serta tata kelola administrasi tersertifikasi BNSP. Didukung kemampuan komunikasi yang runtut, kepemimpinan organisasi (GenBI & FoSSEI), dan ketelitian detail angka.',
  ],
  keyMetrics: [
    {
      value: '750+',
      label: 'Transaksi Pembayaran/Bulan',
      subtext: 'Diproses tepat waktu & akurat',
    },
    {
      value: '3.71',
      label: 'IPK Kelulusan (Skala 4.00)',
      subtext: 'UIN Prof. K.H. Saifuddin Zuhri',
    },
    {
      value: '6+',
      label: 'Entitas Operasional Dikelola',
      subtext: 'Kantor pusat, 2 hotel, 3 konstruksi',
    },
    {
      value: '5',
      label: 'Sertifikasi & Pelatihan',
      subtext: 'Termasuk BNSP Mail Handling',
    },
  ],
  coreValues: [
    {
      title: 'Akurasi & Integritas Finansial',
      description: 'Menjaga setiap angka tercatat sesuai bukti transaksi yang valid, mematuhi kontrak vendor, dan menjaga kesesuaian anggaran tanpa deviasi.',
    },
    {
      title: 'Kesiapan Audit & Kepatuhan SOP',
      description: 'Mengarsip dokumen fisik dan digital secara sistematis sehingga proses audit internal maupun eksternal selalu siap kapan pun.',
    },
    {
      title: 'Koordinasi Lintas Divisi yang Efektif',
      description: 'Menjembatani alur informasi anggaran antara tim lapangan, vendor, manajemen kantor pusat, dan mitra eksternal secara jelas.',
    },
  ],
};

export const operationalCaseStudies: OperationalCaseStudy[] = [
  {
    id: 'case-1',
    title: 'Manajemen Arus Kas & Pembayaran Multi-Entitas',
    organization: 'Fieris Group (Kelapa Gading)',
    period: 'Okt 2025 — Nov 2026',
    scope: 'Kantor Pusat, 2 Unit Hotel, dan 3 Proyek Konstruksi',
    challenge: 'Memastikan kelancaran proses finansial operasional harian yang melibatkan puluhan vendor konstruksi dan perhotelan dengan tenggat waktu ketat tanpa mengganggu likuiditas proyek.',
    execution: 'Melakukan verifikasi berkas faktur, dokumen pendukung, dan permintaan bayar vendor sesuai kontrak kerja. Memvalidasi voucher penerimaan, pengeluaran, serta jadwal penagihan sewa dan utilitas bagi tenant secara tertib.',
    results: [
      'Memproses 750+ transaksi pembayaran dan reimbursement bulanan tepat waktu dengan akurasi 100%.',
      'Memantau arus kas secara berkala guna menjamin ketersediaan dana operasional di seluruh unit usaha.',
      'Mendukung kelancaran audit internal dan eksternal melalui penyusunan dokumen pendukung yang rapi.',
    ],
    toolsUsed: ['Emerald System', 'Microsoft Excel', 'Financial Reporting', 'Vendor Reconciliation'],
  },
  {
    id: 'case-2',
    title: 'Konsolidasi Data Administrasi & Penjualan 18 Toko Marketplace',
    organization: 'PT. Powerkerto Wahyu Keprabon',
    period: 'Des 2023 — Okt 2025',
    scope: '18 Marketplace Stores & Koordinasi 60+ Staf Perusahaan',
    challenge: 'Pengelolaan data pendapatan dan belanja iklan (ads) harian yang tersebar di belasan toko digital dengan kebutuhan koordinasi jadwal operasional bersama 60+ karyawan.',
    execution: 'Menyusun alur input terintegrasi menggunakan spreadsheet dan Google Forms untuk merekap penjualan dan biaya promosi marketplace secara berkala, serta menyusun jadwal kerja tim operasional.',
    results: [
      'Rekapitulasi teratur data penjualan dan iklan untuk 18 gerai toko online tanpa data ganda.',
      'Pengarsipan dokumen administrasi keuangan digital yang mudah diakses dan dicari kembali.',
      'Koordinasi alur penugasan jadwal harian bagi lebih dari 60 staf perusahaan berjalan lancar.',
    ],
    toolsUsed: ['Google Workspace', 'Spreadsheet Analytics', 'Schedule Coordination', 'Marketplace Admin'],
  },
  {
    id: 'case-3',
    title: 'Rekonsiliasi Stok Opname & Pencatatan Transaksi Harian',
    organization: 'Fourteen Adventure & PT PNM',
    period: '2018 — 2023',
    scope: 'Retail, Booking Administrasi, & Layanan Nasabah Pembiayaan',
    challenge: 'Mencegah selisih inventaris fisik dengan sistem pencatatan buku kas serta menjaga hubungan pembayaran angsuran nasabah yang tertib.',
    execution: 'Melaksanakan stock opname fisik berkala, mencocokkan hasil hitungan dengan sistem buku, menginput data transaksi harian, dan membina komunikasi langsung dengan klien.',
    results: [
      'Mencapai target pendapatan penjualan dan penyewaan alat bulanan lebih dari 45 juta rupiah.',
      'Menambah rata-rata 10+ nasabah baru setiap bulan melalui strategi komunikasi dan promosi langsung.',
      'Meminimalkan disparitas catatan stok barang melalui rekonsiliasi berkala.',
    ],
    toolsUsed: ['Bookkeeping', 'Stock Opname', 'Client Relationship', 'Financial Record'],
  },
];

export const workExperiences: WorkExperience[] = [
  {
    id: 'exp-fieris',
    role: 'Staff Finance & Accounting',
    company: 'Fieris Group',
    location: 'Kelapa Gading, Jakarta',
    period: 'Okt 2025 — Nov 2026',
    summary: 'Bertanggung jawab penuh atas tata kelola keuangan operasional kantor pusat, 2 unit hotel, dan 3 proyek konstruksi, dari administrasi hingga realisasi pembayaran.',
    entityScope: 'Kantor Pusat, 2 Unit Hotel, 3 Proyek Konstruksi',
    responsibilities: [
      'Mengelola proses finansial untuk kebutuhan operasional kantor pusat, 2 unit hotel, dan 3 proyek konstruksi dari tahap administrasi hingga eksekusi pembayaran.',
      'Memverifikasi invoice, dokumen pendukung, dan permohonan pembayaran vendor agar patuh pada kontrak kerja, anggaran, dan kebijakan perusahaan.',
      'Memproses 750+ pembayaran setiap bulan (reimbursement dan pembayaran vendor) secara akurat dan tepat waktu.',
      'Menyiapkan invoice sewa dan tagihan utilitas untuk unit/tenant secara teratur.',
      'Berkoordinasi dengan tim operasional mengenai status pembayaran, ketersediaan anggaran, dan administrasi finansial.',
      'Mencatat bukti penerimaan (receipts), voucher pembayaran, riwayat transaksi, dan data laporan keuangan.',
      'Memantau arus kas (cash flow) serta memastikan ketersediaan dana memadai untuk operasional perusahaan dan proyek berjalan.',
      'Melaksanakan stock opname bulanan dan penghitungan aset tetap tahunan untuk memastikan keakuratan data fisik dan sistem.',
      'Merekonsiliasi hasil perhitungan stok dengan sistem dan menindaklanjuti setiap temuan selisih.',
      'Menata dan memelihara arsip dokumen keuangan sesuai dengan standar regulasi perusahaan.',
      'Mendukung pelaksanaan audit internal dan eksternal dengan menyediakan dokumen serta data pendukung yang dibutuhkan.',
      'Memastikan seluruh alur administrasi dan pelaporan finansial mematuhi SOP, pengendalian internal, dan kepatuhan perusahaan.',
    ],
  },
  {
    id: 'exp-powerkerto',
    role: 'Admin Input & FO Marketplace',
    company: 'PT. Powerkerto Wahyu Keprabon',
    location: 'Purwokerto, Jawa Tengah',
    period: 'Des 2023 — Okt 2025',
    summary: 'Mengelola administrasi keuangan, rekapitulasi data penjualan multi-toko online, dan penjadwalan tim kerja.',
    entityScope: '18 Toko Marketplace & 60+ Staf Karyawan',
    responsibilities: [
      'Berkoordinasi aktif dengan tim pengiklan (advertiser) marketplace.',
      'Menyusun dan menyiapkan jadwal FO serta mengoordinasikan lebih dari 60 staf perusahaan.',
      'Menginput data penjualan dan promosi periklanan untuk 18 toko marketplace ke dalam spreadsheet dan Google Forms.',
      'Mengelola administrasi keuangan termasuk pencatatan pendapatan dan pengeluaran harian.',
      'Menata dan mengarsipkan dokumen administratif agar mudah diakses saat dibutuhkan.',
    ],
  },
  {
    id: 'exp-fourteen',
    role: 'Cashier (Part Time)',
    company: 'Fourteen Adventure',
    location: 'Purwokerto, Jawa Tengah',
    period: 'Des 2022 — Okt 2023',
    summary: 'Melayani transaksi pelanggan, pembukuan kas harian, dan pencatatan inventaris stok rental.',
    responsibilities: [
      'Melayani pertanyaan, transaksi, dan keluhan pelanggan secara solutif dan profesional.',
      'Menginput data pelanggan, penjualan, serta data stock opname peralatan.',
      'Mencatat transaksi penjualan harian dan menjaga ketertiban pembukuan buku kas.',
      'Mencapai target pendapatan sewa dan penjualan toko sebesar 45+ juta rupiah per bulan.',
    ],
  },
  {
    id: 'exp-pnm',
    role: 'Account Officer',
    company: 'PT. Permodalan Nasional Madani (Persero)',
    location: 'Purwokerto, Jawa Tengah',
    period: 'Agst 2018 — Apr 2019',
    summary: 'Pemasaran produk pembiayaan mikro, negosiasi pembayaran, dan pembinaan hubungan mitra binaan.',
    responsibilities: [
      'Memasarkan produk dan layanan pembiayaan permodalan kepada kelompok masyarakat target.',
      'Melakukan negosiasi pembayaran angsuran dengan menjaga relasi positif yang saling menguntungkan bersama nasabah.',
      'Menambah lebih dari 10 nasabah baru setiap bulan melalui kegiatan promosi dan sosialisasi langsung.',
    ],
  },
];

export const organizationalExperiences: OrganizationalExperience[] = [
  {
    id: 'org-genbi',
    role: 'Staff of Environmental Research & Control Department',
    organization: 'Generasi Baru Indonesia (GenBI) Purwokerto',
    location: 'Purwokerto',
    period: '2022 — 2023',
    summary: 'Komunitas penerima Beasiswa Bank Indonesia yang berfokus pada program riset lingkungan dan pengabdian masyarakat.',
    contributions: [
      'Berperan aktif dalam program kerja dan kegiatan sosial binaan Bank Indonesia.',
      'Menyusun perencanaan tata kelola program lingkungan hidup.',
      'Bekerja sama dengan BPBD dan relawan untuk kunjungan ke wilayah terdampak bencana dan memberikan edukasi masyarakat.',
    ],
  },
  {
    id: 'org-fossei',
    role: 'General Secretary (Sekretaris Umum)',
    organization: 'FoSSEI Komisariat Purwokerto',
    location: 'Purwokerto',
    period: '2021 — 2022',
    summary: 'Forum Silaturahim Studi Ekonomi Islam yang menaungi kelompok studi ekonomi syariah di tingkat regional dan nasional.',
    contributions: [
      'Berpartisipasi aktif dalam koordinasi KSEI di level regional dan nasional.',
      'Memantau, mendampingi, dan menghimpun data kepengurusan anggota KSEI di wilayah komisariat Purwokerto.',
      'Menyusun jadwal rapat pengurus bulanan, memfasilitasi jalannya musyawarah, dan mendokumentasikan notulensi.',
      'Mengarsipkan surat masuk dan surat keluar untuk memastikan keteraturan tertib administrasi organisasi.',
    ],
  },
  {
    id: 'org-ksei',
    role: 'Staff of Public Relations Department (Humas)',
    organization: 'KSEI Fakultas Ekonomi & Bisnis Islam (FEBI)',
    location: 'Purwokerto',
    period: '2020 — 2021',
    summary: 'Organisasi kemahasiswaan bidang keilmuan ekonomi syariah di lingkup fakultas.',
    contributions: [
      'Bertugas sebagai panitia, Master of Ceremony (MC), dan moderator pada berbagai seminar dan lokakarya resmi.',
      'Membangun jejaring kemitraan dan kolaborasi bersama lembaga, komunitas, dan institusi eksternal.',
    ],
  },
];

export const educationHistory: EducationItem[] = [
  {
    id: 'edu-uin',
    institution: 'UIN Prof. K.H. Saifuddin Zuhri Purwokerto',
    degree: 'Sarjana Ekonomi (S.E.) — Ekonomi Syariah',
    period: '2019 — 2023',
    gpa: '3.71 / 4.00',
    description: 'Menyelesaikan studi dengan predikat sangat memuaskan, mendalami akuntansi syariah, manajemen keuangan, perbankan, dan analisis ekonomi mikro/makro.',
    honors: 'Penerima Beasiswa Bank Indonesia (2022)',
  },
  {
    id: 'edu-pesantren',
    institution: 'Pondok Pesantren Manbaul Husna Purwokerto',
    degree: 'Pendidikan Pesantren Mahasiswa',
    period: '2019 — 2020',
    description: 'Pendidikan karakter, kepemimpinan Islam, etika muamalah, dan pendalaman wawasan keagamaan.',
  },
  {
    id: 'edu-smk',
    institution: 'SMK Negeri 1 Purwokerto',
    degree: 'Administrasi Perkantoran (Office Administration)',
    period: '2015 — 2018',
    description: 'Fondasi keahlian tata kelola dokumen kearsipan, korespondensi resmi, penanganan surat, dan otomatisasi administrasi perkantoran.',
  },
];

export const achievements: AchievementItem[] = [
  {
    id: 'ach-bi',
    title: 'Awardee Beasiswa Bank Indonesia',
    year: '2022',
    issuerOrDetail: 'Bank Indonesia (Kantor Perwakilan Purwokerto)',
    description: 'Penghargaan beasiswa prestasi unggulan dari Bank Sentral Republik Indonesia atas capaian akademik dan keaktifan sosial kepemimpinan.',
    badge: 'Prestasi Nasional',
  },
  {
    id: 'ach-book',
    title: 'Penulis Terbaik & Penulis Buku Ber-ISBN "Secanting Aksara"',
    year: '2020',
    issuerOrDetail: 'Sayembara Literasi Muzayyanah Sa\'diyah',
    description: 'Terpilih sebagai Penulis Terbaik dalam ajang literasi dan menerbitkan karya buku tunggal ber-ISBN resmi.',
    isbn: 'ISBN No. 978-623-7108-75-7',
    badge: 'Karya Literasi',
  },
];

export const certifications: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Financial Accounting Practice using Excel for Finance Admin',
    issuer: 'Ioda',
    year: '2025',
    category: 'Akuntansi & Keuangan',
  },
  {
    id: 'cert-2',
    title: 'Microsoft Excel & Google Workspace for Finance Admin',
    issuer: 'G-Trust Learning',
    year: '2023',
    category: 'Spreadsheet & Digital Tools',
  },
  {
    id: 'cert-3',
    title: 'Short Class in Finance & Accounting',
    issuer: 'MySkill.id',
    year: '2023',
    category: 'Akuntansi Korporat',
  },
  {
    id: 'cert-4',
    title: 'Personal Financial Management',
    issuer: 'JFC Plus',
    year: '2023',
    category: 'Manajemen Keuangan',
  },
  {
    id: 'cert-5',
    title: 'Mail Handling Competency Certification',
    issuer: 'BNSP (Badan Nasional Sertifikasi Profesi)',
    year: '2018',
    category: 'Sertifikasi Nasional Administrasi',
  },
];

export const technicalSkills: SkillCategory[] = [
  {
    title: 'Keuangan & Sistem Akuntansi',
    description: 'Perangkat lunak dan metodologi pemrosesan transaksi keuangan perusahaan.',
    items: [
      { name: 'Accurate Accounting System', description: 'Pencatatan jurnal, faktur penjualan/pembelian, dan pelaporan keuangan terintegrasi.' },
      { name: 'Emerald System', description: 'Sistem operasional dan akuntansi perhotelan/manajemen properti multi-unit.' },
      { name: 'Arus Kas & Pelaporan Finansial', description: 'Monitoring cash flow harian, penerimaan, pengeluaran, dan verifikasi voucher.' },
      { name: 'Verifikasi Invoice & Vendor', description: 'Audit kesesuaian faktur terhadap kontrak, SPK, dan kebijakan anggaran.' },
    ],
  },
  {
    title: 'Spreadsheets & Automasi Data',
    description: 'Pengolahan data skala besar untuk pembuatan laporan terstruktur.',
    items: [
      { name: 'Microsoft Excel (Advanced)', description: 'Data entry cepat, formula logika (VLOOKUP, INDEX/MATCH), Pivot Table, dan rekonsiliasi data.' },
      { name: 'Google Workspace / G-Suite', description: 'Kolaborasi tim real-time melalui Google Sheets, Docs, Forms, dan Google Drive.' },
      { name: 'Rekonsiliasi Bank & Stok Opname', description: 'Pencocokan saldo fisik dengan buku pembukuan sistem serta penelusuran selisih.' },
    ],
  },
  {
    title: 'Administrasi & Kepatuhan SOP',
    description: 'Standar pengelolaan dokumen dan kesiapan pengawasan.',
    items: [
      { name: 'Tata Kelola Dokumen & Kearsipan', description: 'Pengelompokan arsip fisik dan digital yang sistematis, cepat dicari, dan aman.' },
      { name: 'Dukungan Audit Internal & Eksternal', description: 'Penyusunan berkas bukti transaksi dan data penunjang sesuai kepatuhan regulasi.' },
      { name: 'Sertifikasi BNSP Mail Handling', description: 'Standar kompetensi nasional penanganan korespondensi dan administrasi surat-menyurat.' },
    ],
  },
];

export const personalSkills = [
  { name: 'Komunikasi Informatif & Publik', detail: 'Pengalaman memimpin rapat, presentasi anggaran, serta menjadi MC dan moderator acara resmi.' },
  { name: 'Analitis & Pemecahan Masalah', detail: 'Mampu menelusuri selisih catatan stok/pembayaran dan memberikan rekomendasi tindak lanjut.' },
  { name: 'Kepemimpinan & Manajemen Waktu', detail: 'Pengalaman memegang posisi Sekretaris Umum dan mengoordinasikan jadwal kerja 60+ staf.' },
  { name: 'Ketelitian & Akurasi Angka', detail: 'Memproses ratusan transaksi pembayaran rutin dengan standar zero error.' },
];

export const languages = [
  { language: 'Bahasa Indonesia', proficiency: 'Penutur Asli (Native)', level: 'Fasih berbicara dan korespondensi formal' },
  { language: 'Bahasa Inggris', proficiency: 'Tingkat Menengah (Intermediate)', level: 'Komunikasi tertulis dan dokumen bisnis' },
];
