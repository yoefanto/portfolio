import { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Yogi Febrianto",
    title: {
      en: "Senior Full-Stack Architect & Engineering Leader",
      id: "Arsitek Full-Stack Senior & Pemimpin Engineering",
    },
    headline: {
      en: "Transforming enterprise legacy systems into high-performance, containerized modern web architectures.",
      id: "Mentransformasi sistem legacy enterprise menjadi arsitektur web modern berkinerja tinggi dan terkontainerisasi.",
    },
    summary: {
      en: "Technology professional with over 13 years of experience in full-stack web development, DevOps automation, and enterprise database administration.",
      id: "Profesional teknologi dengan pengalaman lebih dari 13 tahun dalam pengembangan web full-stack, otomasi DevOps, dan administrasi basis data enterprise.",
    },
    location: "Jakarta, Indonesia",
    email: "yoefanto@gmail.com",
    phone: "+62 819 9100 0304",
    whatsappUrl: "https://wa.me/+6281991000304",
    avatarUrl: "/images/profile.jpg",
    resumeUrl: "/cv-yogi-febrianto.pdf",
    portfolioUrl: "",
    status: {
      en: "Available for Technical Leadership & Strategic Consulting",
      id: "Tersedia untuk Kepemimpinan Teknis & Konsultasi Strategis",
    },
  },
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com/in/yoefanto", icon: "Linkedin", label: "linkedin.com/in/yoefanto" },
    { name: "Email", url: "mailto:yoefanto@gmail.com", icon: "Mail", label: "yoefanto@gmail.com" },
    { name: "WhatsApp", url: "https://wa.me/+6281991000304", icon: "Phone", label: "+62 819 9100 0304" },
  ],
  metrics: [
    {
      value: "13+",
      label: { en: "Years of Experience", id: "Tahun Pengalaman" },
      description: {
        en: "Proven track record of technical leadership in enterprise web development & infrastructure.",
        id: "Rekam jejak kepemimpinan teknis dalam pengembangan web & infrastruktur enterprise.",
      },
    },
    {
      value: "10M+",
      label: { en: "Monthly Readers Scale", id: "Skala Pembaca Bulanan" },
      description: {
        en: "Maintaining reliability & stability of high-reputation national news portals.",
        id: "Menjaga keandalan & stabilitas portal berita nasional bereputasi tinggi.",
      },
    },
    {
      value: "100%",
      label: { en: "Modernized Architecture", id: "Arsitektur Termodernisasi" },
      description: {
        en: "Successfully migrated legacy monoliths to a modern decoupled Next.js & PostgreSQL stack.",
        id: "Sukses memigrasikan monolitik legacy ke stack modern decoupled Next.js & PostgreSQL.",
      },
    },
    {
      value: "Enterprise",
      label: { en: "HRIS & ERP Scalability", id: "Skalabilitas HRIS & ERP" },
      description: {
        en: "Architecting multi-module solutions for hundreds of employees & business group operations.",
        id: "Merancang solusi multi-modul untuk ratusan karyawan & operasional grup bisnis.",
      },
    },
  ],
  experiences: [
    {
      id: "jag-assistant-manager",
      role: {
        en: "Assistant Manager - Management Information System Division",
        id: "Asisten Manajer - Divisi Sistem Informasi Manajemen",
      },
      company: "PT. Jurnalindo Aksara Grafika (Bisnis Indonesia Group)",
      division: "Management Information System (MIS)",
      period: { en: "March 2021 – Present", id: "Maret 2021 – Sekarang" },
      location: "Jakarta, Indonesia",
      description: {
        en: [
          "Lead the design, development, and modernization of enterprise group applications, managing cross-division project timelines and collaborating closely with QA and IT Analysts.",
          "Lead the developer team in building an integrated internal HRIS system (Personnel, Attendance, Payroll, ESS modules) and ERP System (Marketing, Finance, Accounting) using Next.js, Express.js, and PostgreSQL.",
          "Transformed the recruitment web and legacy CMS from PHP monolith (CodeIgniter)/MySQL to a modern JavaScript-based architecture with significant performance and scalability improvements.",
          "Designed a Docker container-based multi-repo application architecture to cleanly decouple frontend, backend API, and PostgreSQL database environments on WSL Ubuntu.",
          "Handled and resolved critical production server incidents, including stabilizing the web server under extreme surge loads by diagnosing and mitigating CPU-draining PHP processes.",
          "Evaluated and integrated AI coding assistants into the team workflow to increase velocity and efficiency of decoupled codebase management.",
          "Managed and developed new features for national news portals with millions of active readers (Bisnisindonesia.id, Hypeabis.id, Dataindonesia.id).",
        ],
        id: [
          "Memimpin perancangan arsitektur, pengembangan, dan modernisasi aplikasi enterprise grup, mengelola timeline proyek lintas divisi serta berkolaborasi erat dengan QA dan IT Analyst.",
          "Memimpin tim developer dalam membangun Sistem HRIS internal terintegrasi (Modul Personalia, Presensi, Penggajian/Payroll, ESS) dan Sistem ERP (Marketing, Finance, Accounting) menggunakan Next.js, Express.js, dan PostgreSQL.",
          "Mentransformasi web rekrutmen dan sistem CMS lama dari monolit PHP (CodeIgniter)/MySQL menjadi arsitektur modern berbasis JavaScript dengan peningkatan performa dan skalabilitas yang signifikan.",
          "Merancang arsitektur aplikasi multi-repo berbasis Docker containers untuk memisahkan (decouple) environment frontend, backend API, dan database PostgreSQL secara rapi di atas WSL Ubuntu.",
          "Menangani dan menuntaskan insiden kritis server produksi, termasuk menstabilkan web server di bawah beban lonjakan ekstrem dengan mendiagnosis dan memitigasi proses PHP yang menguras CPU.",
          "Mengevaluasi serta mengintegrasikan AI coding assistants ke dalam workflow tim untuk meningkatkan kecepatan dan efisiensi pengelolaan codebase decoupled.",
          "Mengelola dan mengembangkan fitur baru untuk portal berita nasional dengan jutaan pembaca aktif (Bisnisindonesia.id, Hypeabis.id, Dataindonesia.id).",
        ],
      },
      skills: ["Next.js", "Express.js", "PostgreSQL", "Docker", "WSL Ubuntu", "CI/CD", "System Profiling", "AI Workflow", "Agile Leadership"],
    },
    {
      id: "jag-it-staff",
      role: {
        en: "IT Staff - Management Information System Division",
        id: "Staf IT - Divisi Sistem Informasi Manajemen",
      },
      company: "PT. Jurnalindo Aksara Grafika (Bisnis Indonesia Group)",
      division: "Management Information System (MIS)",
      period: { en: "December 2012 – February 2021", id: "Desember 2012 – Februari 2021" },
      location: "Jakarta, Indonesia",
      description: {
        en: [
          "Developed and implemented various internal business modules (HR, General Affairs, Strategic Initiatives, Internal Audit, Corporate Secretariat) using PHP (Laravel/CodeIgniter) and Oracle Database.",
          "Performed regular maintenance, data migrations, and query performance optimization on Oracle Database and legacy Oracle Forms/Reports applications.",
          "Administered Oracle Linux OS systems, installed Oracle Developer tools, and managed Oracle Database deployments across central and branch office servers.",
        ],
        id: [
          "Mengembangkan dan mengimplementasikan berbagai modul internal bisnis (HR, General Affairs, Inisiatif Strategis, Audit Internal, Sekretariat Perusahaan) menggunakan PHP (Laravel/CodeIgniter) dan Oracle Database.",
          "Melakukan pemeliharaan berkala, migrasi data, dan optimasi performa query pada Oracle Database serta aplikasi legacy berbasis Oracle Forms/Reports.",
          "Mengadministrasikan sistem operasi Oracle Linux OS, instalasi Oracle Developer, serta mengelola deployment Oracle Database di seluruh server pusat dan kantor cabang.",
        ],
      },
      skills: ["PHP", "Laravel", "CodeIgniter", "Oracle Database 10g/11g", "Oracle Forms & Reports", "Oracle Linux", "SQL Tuning"],
    },
    {
      id: "gunadarma-it-staff",
      role: {
        en: "IT Staff - System Development Division",
        id: "Staf IT - Divisi Pengembangan Sistem",
      },
      company: "Integrated Laboratory of Gunadarma University",
      division: "System Development Division",
      period: { en: "September 2009 – July 2012", id: "September 2009 – Juli 2012" },
      location: "Depok, Indonesia",
      description: {
        en: [
          "Developed and monitored the Integrated Lab website and student practicum registration portal using PHP and MySQL.",
          "Researched and implemented MySQL database replication (Master-Slave) to ensure high availability during peak registration periods.",
        ],
        id: [
          "Mengembangkan dan memonitor website Integrated Lab serta portal pendaftaran praktikum mahasiswa menggunakan PHP dan MySQL.",
          "Melakukan riset dan mengimplementasikan replikasi database MySQL (Master-Slave) untuk menjamin ketersediaan tinggi (high availability) sistem selama periode puncak registrasi.",
        ],
      },
      skills: ["PHP", "MySQL", "Database Replication", "High Availability", "Apache"],
    },
  ],
  projects: [
    {
      id: "enterprise-hris-erp",
      title: "Integrated Enterprise HRIS & ERP Ecosystem",
      category: "Enterprise System",
      featured: true,
      description: {
        en: "Core enterprise system integrating all HR operational processes (personnel, attendance, complex payroll, Employee Self-Service) and ERP modules (Finance, Accounting, Advertising/Marketing Management).",
        id: "Sistem inti perusahaan yang mengintegrasikan seluruh proses operasional SDM (personalia, absensi, kalkulasi payroll kompleks, Employee Self-Service) dan modul ERP (Keuangan, Akuntansi, Manajemen Iklan/Pemasaran).",
      },
      highlights: {
        en: [
          "Built with decoupled Next.js architecture on the frontend and Express.js on the backend API.",
          "High-performance relational data storage using PostgreSQL.",
          "Strict role-based access control (RBAC) with financial transaction audit logs.",
          "Reduced monthly payroll processing time by more than 60%.",
        ],
        id: [
          "Dibangun dengan arsitektur decoupled Next.js di frontend dan Express.js di backend API.",
          "Penyimpanan data relasional berkinerja tinggi menggunakan PostgreSQL.",
          "Role-based access control (RBAC) ketat dengan audit log transaksi finansial.",
          "Mengurangi waktu pemrosesan payroll bulanan hingga lebih dari 60%.",
        ],
      },
      techStack: ["Next.js", "React", "TypeScript", "Express.js", "PostgreSQL", "Tailwind CSS", "Docker"],
      details: {
        slug: "enterprise-hris-erp",
        role: { en: "Lead Architect & Full-Stack Developer", id: "Lead Architect & Full-Stack Developer" },
        timeline: { en: "2021 – Present", id: "2021 – Sekarang" },
        organization: "PT. Jurnalindo Aksara Grafika (Bisnis Indonesia Group)",
        overview: {
          en: "An integrated enterprise system designed from scratch to manage the entire HR lifecycle and business group operations. Covers complete HRIS modules (Personnel, Biometric Attendance, Payroll, ESS) and ERP modules (Finance, Accounting, Advertising/Marketing CRM). This system serves as the operational backbone for hundreds of employees across all Bisnis Indonesia Group entities.",
          id: "Sistem enterprise terintegrasi yang dirancang dari nol untuk mengelola seluruh siklus hidup SDM dan operasional bisnis grup. Mencakup modul HRIS lengkap (Personalia, Presensi Biometrik, Payroll, ESS) dan modul ERP (Keuangan, Akuntansi, CRM Iklan/Marketing). Sistem ini menjadi backbone operasional untuk ratusan karyawan di seluruh entitas Bisnis Indonesia Group.",
        },
        problemStatement: {
          en: "The company previously relied on aging Oracle Forms/Reports systems that were unresponsive, difficult to maintain, and unable to support modern integrations. The manual payroll process took weeks, HR data was scattered across spreadsheets, and there was no real-time visibility into attendance or budgets.",
          id: "Perusahaan sebelumnya bergantung pada sistem Oracle Forms/Reports yang sudah berumur, tidak responsif, sulit di-maintain, dan tidak memungkinkan integrasi modern. Proses payroll manual memakan waktu lama, data SDM tersebar di berbagai spreadsheet, dan tidak ada visibilitas real-time terhadap kehadiran atau anggaran.",
        },
        solutionArchitecture: {
          en: "Built a fully decoupled multi-repo ecosystem, with a Next.js frontend communicating to an Express.js backend via secure RESTful APIs, and PostgreSQL as the single source of truth for all data.",
          id: "Membangun ekosistem multi-repo yang terpisah (decoupled), dengan frontend Next.js berkomunikasi ke backend Express.js via RESTful API yang aman, dan PostgreSQL sebagai single source of truth untuk seluruh data.",
        },
        architecturePoints: {
          en: [
            "Next.js Frontend (App Router) with TypeScript for type safety and SSR/SSG hybrid rendering.",
            "Express.js backend with a clean layered architecture (controller to service to repository).",
            "PostgreSQL with a normalized relational schema and versioned migrations.",
            "Multi-container for local, staging, and production environment isolation.",
            "JWT-based RBAC (Role-Based Access Control) with refresh token rotation.",
            "Immutable audit log for all financial transactions and sensitive data changes.",
          ],
          id: [
            "Frontend Next.js (App Router) dengan TypeScript untuk type safety dan SSR/SSG hybrid rendering.",
            "Backend Express.js dengan arsitektur layered (controller ke service ke repository) yang bersih.",
            "PostgreSQL dengan skema relasional yang dinormalisasi dan migrasi terversi.",
            "Multi-container untuk isolasi environment lokal, staging, dan produksi.",
            "RBAC (Role-Based Access Control) berbasis JWT dengan refresh token rotation.",
            "Audit log immutable untuk semua transaksi finansial dan perubahan data sensitif.",
          ],
        },
        keyModules: [
          {
            title: { en: "Personnel & Master Data Module", id: "Modul Personalia & Master Data" },
            description: { en: "Complete employee data management: profiles, contracts, job history, dynamic org structure, and digital documents.", id: "Manajemen data karyawan lengkap: profil, kontrak, riwayat jabatan, struktur organisasi dinamis, dan dokumen digital." },
            tech: ["Next.js", "Express.js", "PostgreSQL"],
          },
          {
            title: { en: "Attendance & Biometric Module", id: "Modul Presensi & Biometrik" },
            description: { en: "Fingerprint machine integration, real-time attendance summary, and leave/permit management with multi-level approval workflow.", id: "Integrasi mesin fingerprint, rekap kehadiran real-time, manajemen izin/cuti dengan approval workflow multi-level." },
            tech: ["Express.js", "PostgreSQL", "REST API"],
          },
          {
            title: { en: "Payroll & Compensation Module", id: "Modul Payroll & Kompensasi" },
            description: { en: "Automated multi-scheme salary calculation (monthly, daily, prorated) with PPh21, BPJS, variable allowances, and overtime.", id: "Kalkulasi gaji otomatis multi-skema (bulanan, harian, prorata) dengan penghitungan PPh21, BPJS, tunjangan variabel, dan lembur." },
            tech: ["TypeScript", "Express.js", "PostgreSQL"],
          },
          {
            title: { en: "Employee Self-Service (ESS)", id: "Employee Self-Service (ESS)" },
            description: { en: "Employee self-service portal for leave requests, overtime claims, digital payslips, personal data updates, and attendance history.", id: "Portal self-service karyawan untuk pengajuan cuti, klaim lembur, slip gaji digital, pembaruan data personal, dan riwayat absensi." },
            tech: ["Next.js", "React", "Tailwind CSS"],
          },
          {
            title: { en: "Finance & Accounting ERP Module", id: "Modul ERP Keuangan & Akuntansi" },
            description: { en: "Journal recording, department budget management, real-time P&L reports, and group financial transaction reconciliation.", id: "Pencatatan jurnal, pengelolaan anggaran departemen, laporan P&L real-time, dan rekonsiliasi transaksi keuangan grup." },
            tech: ["Next.js", "Express.js", "PostgreSQL"],
          },
          {
            title: { en: "Advertising & Marketing CRM Module", id: "Modul CRM Iklan & Marketing" },
            description: { en: "Client management, ad order tracking, sales commission calculation, and revenue reporting per media business segment.", id: "Manajemen klien, tracking order iklan, penghitungan komisi sales, dan pelaporan revenue per segmen bisnis media." },
            tech: ["Next.js", "Express.js", "TypeScript"],
          },
        ],
        challengesAndSolutions: [
          {
            challenge: { en: "Complexity of multi-scheme payroll calculation with hundreds of compensation variables and deductions.", id: "Kompleksitas kalkulasi payroll multi-skema dengan ratusan variabel kompensasi dan pemotongan." },
            solution: { en: "Built a configurable rule-based payroll engine without requiring code changes, allowing HR to set formulas independently.", id: "Membangun payroll engine berbasis aturan (rule-based) yang dapat dikonfigurasi tanpa perubahan kode, sehingga HR bisa mengatur formula sendiri." },
          },
          {
            challenge: { en: "Migrating historical data from Oracle Forms to PostgreSQL without operational downtime.", id: "Migrasi data historis dari Oracle Forms ke PostgreSQL tanpa downtime operasional." },
            solution: { en: "Phased migration strategy with a dual-write period, where both systems ran in parallel until 100% data validation was complete.", id: "Strategi migrasi bertahap (phased migration) dengan dual-write period, di mana kedua sistem berjalan paralel sampai validasi data 100% selesai." },
          },
          {
            challenge: { en: "Financial transaction data consistency in a highly concurrent system.", id: "Konsistensi data transaksi finansial di sistem yang highly concurrent." },
            solution: { en: "Implemented strict ACID database transactions and row-level locking on critical operations, with an append-only audit log for full traceability.", id: "Implementasi database transactions (ACID) yang ketat dan row-level locking pada operasi kritis, dengan audit log append-only untuk traceability penuh." },
          },
        ],
        metricsImpact: [
          { value: "60%+", label: { en: "Payroll Time Reduction", id: "Reduksi Waktu Payroll" }, description: { en: "From a manual weekly process to automated calculation in minutes.", id: "Dari proses manual mingguan menjadi kalkulasi otomatis dalam hitungan menit." } },
          { value: "100%", label: { en: "HR Digitalization", id: "Digitalisasi SDM" }, description: { en: "Elimination of manual spreadsheets for all personnel and attendance data.", id: "Eliminasi spreadsheet manual untuk seluruh data personalia dan kehadiran." } },
          { value: "Multi-Entity", label: { en: "System Coverage", id: "Cakupan Sistem" }, description: { en: "Used by all Bisnis Indonesia Group entities on a single platform.", id: "Digunakan oleh seluruh entitas Bisnis Indonesia Group dalam satu platform." } },
          { value: "Real-Time", label: { en: "Data Visibility", id: "Visibilitas Data" }, description: { en: "Executive dashboard with direct employment and financial insights.", id: "Dashboard eksekutif dengan insight ketenagakerjaan dan keuangan secara langsung." } },
        ],
      },
    },
    {
      id: "media-portals-optimization",
      title: "High-Traffic National News Portals (Bisnisindonesia.id, Hypeabis.id, Dataindonesia.id)",
      category: "High-Traffic Media",
      featured: true,
      description: {
        en: "Feature development and infrastructure optimization for national online media portals serving hundreds of thousands readers daily with ultra-fast response times.",
        id: "Pengembangan fitur dan optimasi infrastruktur portal media online nasional yang melayani ratusan ribu pembaca setiap harinya dengan waktu respons ultra-cepat.",
      },
      highlights: {
        en: [
          "Diagnosed and resolved extreme CPU spikes through system process profiling analysis.",
          "Multi-layer caching optimization, CDN routing, and query tuning to minimize latency.",
          "Maintained 99.9% uptime reliability during national event coverage.",
        ],
        id: [
          "Mendiagnosis dan menyelesaikan lonjakan CPU ekstrem melalui analisis profiling proses sistem.",
          "Optimasi caching bertingkat, CDN routing, dan query tuning untuk meminimalisir latency.",
          "Menjaga reliabilitas uptime 99.9% selama peliputan peristiwa nasional.",
        ],
      },
      techStack: ["PHP", "Next.js", "Linux (Ubuntu)", "Nginx", "PostgreSQL/MySQL", "Profiling Tools", "Redis"],
      details: {
        slug: "media-portals-optimization",
        role: { en: "Senior Developer & Infrastructure Reliability Engineer", id: "Senior Developer & Infrastructure Reliability Engineer" },
        timeline: { en: "2021 – Present", id: "2021 – Sekarang" },
        organization: "PT. Jurnalindo Aksara Grafika (Bisnis Indonesia Group)",
        overview: {
          en: "Managing and optimizing three high-reputation national news portals collectively serving over 10 million active readers every month. The main challenge is maintaining system performance and reliability under highly fluctuating traffic loads.",
          id: "Mengelola dan mengoptimasi tiga portal berita nasional bereputasi tinggi yang secara kolektif melayani lebih dari 1 juta pembaca aktif setiap bulannya. Tantangan utama adalah menjaga performa dan keandalan sistem di bawah beban lalu lintas yang sangat fluktuatif.",
        },
        problemStatement: {
          en: "National news portals faced unexpected extreme traffic surges during major events (elections, national disasters, economic data releases). The old PHP monolithic stack frequently experienced CPU spikes near 100%, causing slow or inaccessible pages that directly impacted advertising revenue and media reputation.",
          id: "Portal berita nasional menghadapi lonjakan traffic ekstrem yang tidak terduga saat meliput peristiwa besar (pemilu, bencana nasional, rilis data ekonomi). Sistem lama dengan tumpukan PHP monolitik sering mengalami CPU spike mendekati 100%, menyebabkan halaman lambat atau tidak dapat diakses.",
        },
        solutionArchitecture: {
          en: "A combination of reactive (incident response & profiling) and proactive (multi-layer caching architecture, CDN optimization, and continuous query tuning) approaches to build infrastructure resilient to peak loads.",
          id: "Kombinasi pendekatan reaktif (incident response & profiling) dan proaktif (arsitektur caching berlapis, CDN optimization, dan query tuning berkelanjutan) untuk membangun infrastruktur yang tahan terhadap beban puncak.",
        },
        architecturePoints: {
          en: [
            "Multi-layer caching: Redis object cache at the application level, Nginx FastCGI cache at the server level.",
            "Intelligent CDN routing to distribute static assets to reader-nearest edge servers.",
            "PostgreSQL and MySQL query optimization with EXPLAIN ANALYZE and strategic indexing.",
            "Nginx load balancer with upstream health checks and connection pooling.",
            "Netdata-based monitoring for real-time alerting on CPU, memory, and disk I/O.",
            "Process profiling using strace, top, and PHP-FPM status for incident diagnosis.",
          ],
          id: [
            "Multi-layer caching: Redis object cache di level aplikasi, Nginx FastCGI cache di level server.",
            "CDN routing cerdas untuk mendistribusikan aset statis ke edge server terdekat pembaca.",
            "PostgreSQL dan MySQL query optimization dengan EXPLAIN ANALYZE dan indexing strategis.",
            "Nginx load balancer dengan upstream health checks dan connection pooling.",
            "Sistem monitoring berbasis Netdata untuk real-time alerting pada CPU, memory, dan disk I/O.",
            "Process profiling menggunakan strace, top, dan PHP-FPM status untuk diagnosis insiden.",
          ],
        },
        keyModules: [
          {
            title: { en: "Incident Response & Server Profiling", id: "Incident Response & Server Profiling" },
            description: { en: "In-depth system process analysis during CPU spikes, identifying PHP-FPM bottlenecks, N+1 queries, and memory leaks.", id: "Analisis mendalam proses sistem saat terjadi lonjakan CPU, identifikasi bottleneck PHP-FPM, query N+1, dan memory leak." },
            tech: ["Linux Tools", "strace", "PHP-FPM", "Nginx"],
          },
          {
            title: { en: "Caching Architecture", id: "Arsitektur Caching" },
            description: { en: "Redis implementation for object caching of popular articles, session store, and rate limiting; combined with page caching in Nginx.", id: "Implementasi Redis untuk object caching artikel populer, session store, dan rate limiting; dikombinasikan dengan page caching di Nginx." },
            tech: ["Redis", "Nginx", "PHP"],
          },
          {
            title: { en: "CDN & Asset Optimization", id: "CDN & Optimasi Aset" },
            description: { en: "CDN routing for media assets with automatic cache invalidation when content is updated by editors.", id: "Konfigurasi CDN routing untuk media aset dengan cache invalidation otomatis saat konten diperbarui oleh editor." },
            tech: ["CDN", "Nginx", "Shell Scripting"],
          },
          {
            title: { en: "Database Performance Tuning", id: "Database Performance Tuning" },
            description: { en: "Review and optimization of slow queries with EXPLAIN ANALYZE, composite indexes, and denormalization for read performance.", id: "Review dan optimasi query lambat dengan EXPLAIN ANALYZE, pembuatan composite index, dan denormalisasi untuk read performance." },
            tech: ["PostgreSQL", "MySQL", "SQL Tuning"],
          },
          {
            title: { en: "Feature Development", id: "Pengembangan Fitur" },
            description: { en: "Development of new editorial features (paywall, bookmark, push notifications, interactive calculators) using Next.js and internal APIs.", id: "Pengembangan fitur editorial baru (paywall, bookmark, notifikasi push, kalkulator interaktif) menggunakan Next.js dan API internal." },
            tech: ["Next.js", "React", "PHP"],
          },
        ],
        challengesAndSolutions: [
          {
            challenge: { en: "Server CPU reaching 98%, causing all portals to become unresponsive.", id: "CPU server mencapai 98%, menyebabkan seluruh portal tidak responsif." },
            solution: { en: "Profiling PHP-FPM processes with strace revealed zombie processes not terminating correctly. Correct pm.max_requests configuration resolved the issue permanently.", id: "Profiling proses PHP-FPM dengan strace mengungkap proses zombie yang tidak ter-terminate dengan benar. Konfigurasi pm.max_requests yang tepat menyelesaikan masalah secara permanen." },
          },
          {
            challenge: { en: "High latency on article pages with many dynamic widgets (trending, related, comment count).", id: "Latency tinggi pada halaman artikel dengan banyak widget dinamis (trending, related, comment count)." },
            solution: { en: "Refactored widgets into separate Redis-cached API calls with different TTLs, combined with lazy loading on the frontend.", id: "Refactoring widget menjadi API calls terpisah yang di-cache Redis dengan TTL berbeda, dikombinasikan dengan lazy loading di frontend." },
          },
          {
            challenge: { en: "Inaccurate cache invalidation causing readers to see old content after article updates.", id: "Cache invalidation yang tidak akurat menyebabkan pembaca melihat konten lama setelah artikel diperbarui editor." },
            solution: { en: "Implemented tag-based cache invalidation with unique cache keys automatically purged when an article is published or updated via the CMS.", id: "Implementasi tag-based cache invalidation dengan cache key unik yang secara otomatis di-purge saat artikel di-publish atau di-update melalui CMS." },
          },
        ],
        metricsImpact: [
          { value: "10M+", label: { en: "Monthly Active Readers", id: "Pembaca Aktif Bulanan" }, description: { en: "Collective traffic of three portals consistently maintained for reliability and performance.", id: "Traffic kolektif ketiga portal yang dijaga keandalan dan performanya secara konsisten." } },
          { value: "99.9%", label: { en: "Uptime Target", id: "Target Uptime" }, description: { en: "Maintained even during breaking national news with sudden traffic spikes.", id: "Dijaga bahkan saat breaking news nasional dengan lonjakan traffic mendadak." } },
          { value: "<200ms", label: { en: "Target Response Time", id: "Target Response Time" }, description: { en: "Article response time after caching and query tuning optimization.", id: "Waktu respons artikel setelah optimasi caching dan query tuning." } },
          { value: "0 Downtime", label: { en: "Critical Events", id: "Event Kritis" }, description: { en: "Successfully navigated major coverage events without significant system incidents.", id: "Berhasil melewati beberapa peliputan besar tanpa insiden sistem yang signifikan." } },
        ],
      },
    },
    {
      id: "recruitment-cms-modernization",
      title: "Recruitment Portal & CMS Modernization Platform",
      category: "Web & CMS Modernization",
      featured: true,
      description: {
        en: "Complete transformation of a legacy recruitment application (CodeIgniter/MySQL) into a modern, modular, responsive JavaScript-based platform.",
        id: "Transformasi total dari aplikasi rekrutmen legacy (CodeIgniter/MySQL) menuju platform modern berbasis JavaScript yang modern, modular, dan responsif.",
      },
      highlights: {
        en: [
          "Improved Lighthouse performance score and page load time from >5s to <1.2s.",
          "Implemented an intuitive Content Management System (CMS) for HR and Editorial teams.",
          "Automated applicant status tracking and instant email notification integration.",
        ],
        id: [
          "Meningkatkan skor performa Lighthouse dan waktu muat halaman dari >5s menjadi <1.2s.",
          "Mengimplementasikan Content Management System (CMS) yang intuitif untuk tim HR dan Editorial.",
          "Integrasi pelacakan otomatis status pelamar dan integrasi email notifikasi instan.",
        ],
      },
      techStack: ["Next.js", "Express.js", "PostgreSQL", "Docker", "RESTful APIs"],
      details: {
        slug: "recruitment-cms-modernization",
        role: { en: "Lead Architect & Full-Stack Developer", id: "Lead Architect & Full-Stack Developer" },
        timeline: { en: "2022 – 2023", id: "2022 – 2023" },
        organization: "PT. Jurnalindo Aksara Grafika (Bisnis Indonesia Group)",
        overview: {
          en: "A comprehensive modernization of the company's recruitment portal and internal CMS. The old CodeIgniter/MySQL system was fully migrated to a modular, performant Next.js + Express.js + PostgreSQL architecture ready for long-term growth.",
          id: "Proyek modernisasi menyeluruh terhadap portal rekrutmen dan sistem CMS internal perusahaan. Sistem lama berbasis CodeIgniter/MySQL dimigrasi sepenuhnya ke arsitektur Next.js + Express.js + PostgreSQL yang modular, performant, dan siap untuk pertumbuhan jangka panjang.",
        },
        problemStatement: {
          en: "The old recruitment portal had very poor performance (load time >5 seconds), a non-responsive mobile interface, and no applicant tracking features. The HR team processed applications manually via email with no centralized candidate visibility.",
          id: "Portal rekrutmen lama memiliki performa buruk (load time >5 detik), antarmuka yang tidak responsif di mobile, dan tidak ada fitur tracking pelamar. Tim HR memproses lamaran secara manual melalui email, tanpa visibilitas terpusat tentang status kandidat.",
        },
        solutionArchitecture: {
          en: "Built a modern recruitment platform with a Next.js frontend optimized for SEO and performance, a clean Express.js backend API, and PostgreSQL for well-structured data.",
          id: "Membangun platform rekrutmen modern dengan frontend Next.js yang dioptimasi untuk SEO dan performa, backend Express.js dengan API yang clean, dan PostgreSQL untuk data yang terstruktur dengan baik.",
        },
        architecturePoints: {
          en: [
            "Next.js App Router with SSR for job listing pages (SEO-optimized) and CSR for HR dashboards.",
            "Express.js backend with a clean middleware chain: auth to validation to business logic to response.",
            "PostgreSQL schema redesigned from scratch to support flexible recruitment workflows.",
            "Email notification system using transactional email providers with customizable templates.",
            "Role-based access: Admin HR, Recruiter, and Candidate with role-appropriate permissions.",
          ],
          id: [
            "Next.js App Router dengan SSR untuk halaman lowongan (SEO-optimized) dan CSR untuk dashboard HR.",
            "Express.js backend dengan middleware chain yang clean: auth ke validation ke business logic ke response.",
            "PostgreSQL dengan skema yang dirancang ulang dari nol untuk mendukung alur rekrutmen yang fleksibel.",
            "Email notification system menggunakan transactional email provider dengan template yang dapat dikustomisasi.",
            "Role-based access: Admin HR, Recruiter, dan Candidate memiliki akses yang terbatas sesuai peran.",
          ],
        },
        keyModules: [
          {
            title: { en: "Public Job Listing Portal", id: "Portal Lowongan Publik" },
            description: { en: "SEO-optimized (SSR) job listing and detail pages, responsive on all devices, with category and location filters.", id: "Halaman daftar dan detail lowongan yang dioptimasi untuk SEO (SSR), responsive di semua device, dengan filter kategori dan lokasi." },
            tech: ["Next.js", "TypeScript", "Tailwind CSS"],
          },
          {
            title: { en: "Application & ATS System", id: "Sistem Pendaftaran & ATS" },
            description: { en: "Applicant Tracking System allowing applicants to apply online and recruiters to track each candidate from applied to hired/rejected.", id: "Applicant Tracking System yang memungkinkan pelamar mendaftar online dan recruiter melacak status setiap kandidat dari applied hingga hired/rejected." },
            tech: ["Express.js", "PostgreSQL", "Node.js"],
          },
          {
            title: { en: "HR & Recruiter Dashboard", id: "Dashboard HR & Recruiter" },
            description: { en: "Admin panel for HR teams to manage job postings, review applications, schedule interviews, and update candidate status.", id: "Panel admin untuk tim HR mengelola lowongan, meninjau lamaran, menjadwalkan interview, dan mengubah status kandidat dengan notifikasi otomatis." },
            tech: ["Next.js", "React", "Express.js"],
          },
          {
            title: { en: "Editorial Content CMS", id: "CMS Konten Editorial" },
            description: { en: "Content management system for the editorial team to publish career articles and company information without needing a developer.", id: "Sistem manajemen konten untuk tim editorial mempublikasikan artikel karier dan informasi perusahaan tanpa perlu developer." },
            tech: ["Next.js", "Express.js", "PostgreSQL"],
          },
          {
            title: { en: "Email Notification Engine", id: "Email Notification Engine" },
            description: { en: "Automatic email sending for application confirmations, status updates, interview invitations, and selection result announcements.", id: "Pengiriman email otomatis untuk konfirmasi pendaftaran, update status lamaran, undangan interview, dan pengumuman hasil seleksi." },
            tech: ["Node.js", "Nodemailer", "Template Engine"],
          },
        ],
        challengesAndSolutions: [
          {
            challenge: { en: "Migrating historical applicant data from old MySQL to PostgreSQL without data loss.", id: "Migrasi data pelamar historis dari MySQL lama ke PostgreSQL tanpa kehilangan data." },
            solution: { en: "Node.js ETL script to extract, transform (normalize), and load data into the new schema, run in batches with checksum validation.", id: "ETL script Node.js untuk extract, transform (normalisasi), dan load data ke skema baru, dijalankan dalam batch dengan validasi checksums di setiap step." },
          },
          {
            challenge: { en: "SEO for job pages that were previously client-side rendered and not indexed by Google.", id: "SEO untuk halaman lowongan yang sebelumnya di-render client-side sehingga tidak terindex Google." },
            solution: { en: "Implemented SSR with Next.js App Router, structured data (JSON-LD JobPosting schema), and a dynamic sitemap for optimal search engine indexing.", id: "Implementasi SSR dengan Next.js App Router, structured data (JSON-LD JobPosting schema), dan sitemap dinamis untuk indexing optimal oleh search engine." },
          },
          {
            challenge: { en: "Non-technical HR teams needed a truly easy-to-use CMS.", id: "Tim HR yang tidak teknis membutuhkan CMS yang benar-benar mudah digunakan." },
            solution: { en: "Redesigned the CMS interface with intuitive UX including drag-and-drop, real-time preview, and step-by-step wizards for HR team independence.", id: "Desain ulang antarmuka CMS dengan UX yang intuitif: drag-and-drop, preview real-time, dan wizard langkah demi langkah sehingga tim HR bisa mandiri tanpa bantuan developer." },
          },
        ],
        metricsImpact: [
          { value: "<1.2s", label: { en: "Page Load Time", id: "Load Time Halaman" }, description: { en: "Down drastically from >5 seconds in the old system, significantly improving user experience.", id: "Turun drastis dari >5 detik di sistem lama, meningkatkan user experience secara signifikan." } },
          { value: "95+", label: { en: "Lighthouse Score", id: "Lighthouse Score" }, description: { en: "Near-perfect Lighthouse performance, accessibility, and SEO scores.", id: "Skor performa, aksesibilitas, dan SEO Lighthouse mendekati sempurna." } },
          { value: "100%", label: { en: "Process Digitalization", id: "Digitalisasi Proses" }, description: { en: "The entire recruitment workflow from posting to onboarding is recorded in the system.", id: "Seluruh alur rekrutmen dari posting hingga onboarding terekam dalam sistem." } },
          { value: "Auto", label: { en: "Candidate Notifications", id: "Notifikasi Kandidat" }, description: { en: "Application status emails sent automatically, saving HR team hours of work every week.", id: "Email status lamaran terkirim otomatis, menghemat jam kerja tim HR setiap minggunya." } },
        ],
      },
    },
    {
      id: "dockerized-multi-repo",
      title: "Multi-Repo Containerized DevOps Workspace",
      category: "DevOps & Architecture",
      featured: true,
      description: {
        en: "A Docker container-based development and staging environment architecture on WSL Ubuntu to accelerate developer team onboarding and standardize deployment environments.",
        id: "Arsitektur lingkungan pengembangan dan staging berbasis Docker container pada WSL Ubuntu untuk mempercepat onboarding tim pengembang dan standardisasi environment deployment.",
      },
      highlights: {
        en: [
          "Perfect isolation between Next.js frontend, Express.js backend, and PostgreSQL database.",
          "Single-command automation for spinning up local or staging environments.",
          "Improved developer workflow efficiency and elimination of the works-on-my-machine problem.",
        ],
        id: [
          "Isolasi sempurna antara frontend Next.js, backend Express.js, dan database PostgreSQL.",
          "Konfigurasi automasi satu perintah untuk spin-up environment lokal maupun staging.",
          "Peningkatan efisiensi workflow developer dan penghapusan masalah works on my machine.",
        ],
      },
      techStack: ["Docker", "Docker Compose", "WSL Ubuntu", "GitLab CI/CD", "Linux Shell Scripting"],
      details: {
        slug: "dockerized-multi-repo",
        role: { en: "DevOps Architect & Infrastructure Lead", id: "DevOps Architect & Infrastructure Lead" },
        timeline: { en: "2022 – Present", id: "2022 – Sekarang" },
        organization: "PT. Jurnalindo Aksara Grafika (Bisnis Indonesia Group)",
        overview: {
          en: "Design and implementation of a Docker container-based development architecture on WSL Ubuntu that became the standard work environment for the developer team. This solution eliminated environment inconsistencies, accelerated new developer onboarding from days to under an hour, and guaranteed identical behavior between local, staging, and production.",
          id: "Perancangan dan implementasi arsitektur pengembangan berbasis Docker container di atas WSL Ubuntu yang menjadi standar lingkungan kerja tim developer. Solusi ini menghilangkan inkonsistensi environment, mempercepat onboarding developer baru dari berhari-hari menjadi hitungan jam, dan menjamin bahwa kode yang berjalan di lokal developer akan identik perilakunya di staging dan production.",
        },
        problemStatement: {
          en: "Developer team members worked on Windows machines with different configurations, causing the classic works-on-my-machine problem. Setting up a new project environment required 1-3 days. There was no standardization between local, staging, and production environments.",
          id: "Tim developer bekerja di mesin Windows dengan konfigurasi yang berbeda-beda, menyebabkan masalah klasik works on my machine. Setup environment untuk project baru membutuhkan waktu 1-3 hari. Tidak ada standarisasi antara environment lokal, staging, dan production.",
        },
        solutionArchitecture: {
          en: "A fully Docker Compose-managed container ecosystem where each service (frontend, backend, database, cache) runs in an isolated container with an internal bridge network. All configuration is stored in code (Infrastructure as Code), making it reproducible on any machine.",
          id: "Ekosistem container yang sepenuhnya dikelola oleh Docker Compose, di mana setiap service berjalan dalam container terisolasi dengan network bridge internal. Seluruh konfigurasi tersimpan dalam kode (Infrastructure as Code), sehingga reproducible di mesin manapun.",
        },
        architecturePoints: {
          en: [
            "Docker Compose as the main orchestrator with complete service, network, and volume definitions.",
            "WSL Ubuntu as the host layer on Windows, providing Linux performance for toolchains that need it.",
            "Multi-stage Dockerfile for each service: base to development to optimal production build.",
            "Named Docker volumes for PostgreSQL and Redis data persistence between container restarts.",
            "Environment-specific .env files with .env.example as a documented template.",
            "Automation shell scripts for common tasks: ./dev.sh up, ./dev.sh db:migrate, ./dev.sh logs.",
            "GitLab CI/CD pipeline that uses the same Docker image to ensure build consistency.",
          ],
          id: [
            "Docker Compose sebagai orchestrator utama dengan definisi service, network, dan volume yang lengkap.",
            "WSL Ubuntu sebagai host layer di atas Windows, memberikan performa Linux untuk toolchain yang membutuhkannya.",
            "Multi-stage Dockerfile untuk setiap service: base ke development ke production build yang optimal.",
            "Named volumes Docker untuk persistensi data PostgreSQL dan Redis di antara container restarts.",
            "Environment-specific .env files dengan .env.example sebagai template yang terdokumentasi.",
            "Shell scripts automasi untuk common tasks: ./dev.sh up, ./dev.sh db:migrate, ./dev.sh logs.",
            "GitLab CI/CD pipeline yang menggunakan image Docker yang sama untuk menjamin konsistensi build.",
          ],
        },
        keyModules: [
          {
            title: { en: "Docker Compose Multi-Service Stack", id: "Docker Compose Multi-Service Stack" },
            description: { en: "Container orchestration for frontend, API, database, cache, and reverse proxy in a single command.", id: "Orkestrasi container untuk frontend (Next.js), API (Express.js), database (PostgreSQL), cache (Redis), dan reverse proxy (Nginx) dalam satu perintah." },
            tech: ["Docker Compose", "Docker", "YAML"],
          },
          {
            title: { en: "WSL Ubuntu Configuration", id: "Konfigurasi WSL Ubuntu" },
            description: { en: "Optimal WSL2 Ubuntu setup on Windows including memory limits, Docker Desktop integration, and symlink path configuration.", id: "Setup optimal WSL2 Ubuntu sebagai development environment di atas Windows, termasuk konfigurasi memory limits, Docker Desktop integration, dan symlink path." },
            tech: ["WSL2", "Ubuntu", "Docker Desktop"],
          },
          {
            title: { en: "Automated Shell Scripts", id: "Shell Scripts Otomatis" },
            description: { en: "A collection of shell scripts for initial setup, database migration, dev data seeding, backup, and staging deployment with a single command.", id: "Koleksi shell scripts untuk setup awal, migrasi database, seeding data development, backup, dan deployment ke staging dengan satu perintah." },
            tech: ["Bash", "Shell Scripting", "Make"],
          },
          {
            title: { en: "GitLab CI/CD Pipeline", id: "GitLab CI/CD Pipeline" },
            description: { en: "Automated pipeline for lint, test, Docker image build, and staging deployment on every push to the develop branch.", id: "Pipeline otomatis untuk lint, test, build Docker image, dan deploy ke staging environment setiap kali ada push ke branch develop." },
            tech: ["GitLab CI", ".gitlab-ci.yml", "Docker"],
          },
          {
            title: { en: "Developer Onboarding Kit", id: "Developer Onboarding Kit" },
            description: { en: "Complete README documentation with setup steps a new developer can complete in under one hour.", id: "Dokumentasi lengkap README dengan langkah setup yang dapat diselesaikan developer baru dalam waktu kurang dari satu jam." },
            tech: ["Markdown", "Docker", "Git"],
          },
        ],
        challengesAndSolutions: [
          {
            challenge: { en: "File I/O performance in WSL2 was very slow when node_modules was mounted from the Windows filesystem.", id: "Performa I/O file di WSL2 sangat lambat saat node_modules di-mount dari filesystem Windows." },
            solution: { en: "Moved all project files to the Linux filesystem (/home/user/) inside WSL, combined with named Docker volumes for node_modules.", id: "Memindahkan seluruh project files ke filesystem Linux (/home/user/) di dalam WSL, dikombinasikan dengan named Docker volumes untuk node_modules." },
          },
          {
            challenge: { en: "Port conflicts between projects when multiple projects ran simultaneously.", id: "Port conflicts antar project yang berbeda saat beberapa project berjalan bersamaan." },
            solution: { en: "Standardized port allocation with each project having an allocated port range (3000-3010 frontend, 4000-4010 API, 5432/5433 PostgreSQL).", id: "Standardisasi port allocation: setiap project memiliki range port yang dialokasikan dan didokumentasikan." },
          },
          {
            challenge: { en: "Synchronizing environment variables between developers without exposing secrets.", id: "Sinkronisasi environment variables antara developer tanpa mengekspos secrets." },
            solution: { en: "Templating with a comprehensive .env.example and inline documentation. Production secrets managed in GitLab CI/CD variables, not in the repository.", id: "Templating dengan .env.example yang komprehensif dan documentation inline. Secrets production dikelola di GitLab CI/CD variables, bukan di repository." },
          },
        ],
        metricsImpact: [
          { value: "<1 Hour", label: { en: "Developer Onboarding", id: "Onboarding Developer" }, description: { en: "From a previous 1-3 days for full environment setup to under one hour.", id: "Dari sebelumnya 1-3 hari untuk setup environment lengkap menjadi kurang dari satu jam." } },
          { value: "0 Bugs", label: { en: "Environment Mismatch", id: "Environment Mismatch" }, description: { en: "Total elimination of works-on-my-machine issues that previously consumed much debugging time.", id: "Eliminasi total masalah works on my machine yang sebelumnya menyita banyak waktu debugging." } },
          { value: "Identical", label: { en: "Environment Parity", id: "Paritas Environment" }, description: { en: "Local, staging, and production environments use the same image with zero configuration drift.", id: "Environment lokal, staging, dan production menggunakan image yang sama, zero configuration drift." } },
          { value: "Automated", label: { en: "Deployment Pipeline", id: "Deployment Pipeline" }, description: { en: "Pushing to develop branch automatically triggers build and deploy to staging without manual intervention.", id: "Push ke branch develop otomatis trigger build dan deploy ke staging tanpa intervensi manual." } },
        ],
      },
    },
  ],
  skills: [
    {
      category: "Full-Stack & Frontend",
      description: {
        en: "Modern, fast, interactive, and user-oriented interface development.",
        id: "Pengembangan antarmuka modern yang cepat, interaktif, dan berorientasi pengguna.",
      },
      skills: [
        { name: "Next.js", highlight: true, level: "Advanced" },
        { name: "React.js", highlight: true, level: "Advanced" },
        { name: "TypeScript", highlight: true, level: "Advanced" },
        { name: "JavaScript (ES6+)", highlight: true, level: "Advanced" },
        { name: "Tailwind CSS", highlight: true, level: "Advanced" },
        { name: "HTML5 & Modern CSS3", level: "Expert" },
      ],
    },
    {
      category: "Backend & API Architecture",
      description: {
        en: "Building robust, secure, and scalable backend services for enterprise scale.",
        id: "Membangun service backend yang tangguh, aman, dan scalable untuk skala enterprise.",
      },
      skills: [
        { name: "Node.js", highlight: true, level: "Advanced" },
        { name: "Express.js", highlight: true, level: "Advanced" },
        { name: "PHP (Laravel / CodeIgniter)", highlight: true, level: "Expert" },
        { name: "RESTful API Design", highlight: true, level: "Advanced" },
        { name: "Microservices & Decoupled", level: "Advanced" },
      ],
    },
    {
      category: "Databases & Storage",
      description: {
        en: "Schema design, data replication, maintenance, and advanced query tuning.",
        id: "Desain skema, replikasi data, pemeliharaan, serta tuning query tingkat lanjut.",
      },
      skills: [
        { name: "PostgreSQL", highlight: true, level: "Advanced" },
        { name: "Oracle Database (10g/11g)", highlight: true, level: "Expert" },
        { name: "MySQL / MariaDB", highlight: true, level: "Expert" },
        { name: "Database Replication (Master-Slave)", level: "Advanced" },
        { name: "SQL Performance Tuning", level: "Expert" },
      ],
    },
    {
      category: "DevOps & Infrastructure",
      description: {
        en: "Deployment automation, containerization, and high-load system reliability.",
        id: "Automasi deployment, containerization, dan keandalan sistem berbeban tinggi.",
      },
      skills: [
        { name: "Docker & Containerization", highlight: true, level: "Advanced" },
        { name: "Kubernetes", level: "Intermediate" },
        { name: "Linux (Ubuntu / Oracle Linux)", highlight: true, level: "Expert" },
        { name: "WSL (Windows Subsystem for Linux)", level: "Advanced" },
        { name: "GitLab CI/CD & Jenkins", level: "Intermediate" },
        { name: "Nginx & System Profiling", highlight: true, level: "Advanced" },
      ],
    },
    {
      category: "Enterprise & Methodology",
      description: {
        en: "Software engineering team management, AI adoption, and agile project planning.",
        id: "Manajemen tim rekayasa perangkat lunak, adopsi AI, dan perencanaan proyek agile.",
      },
      skills: [
        { name: "System Architecture & Design", highlight: true, level: "Expert" },
        { name: "AI Coding Assistant Integration", highlight: true, level: "Advanced" },
        { name: "Agile / Scrum Collaboration", level: "Advanced" },
        { name: "Technical Team Leadership", level: "Advanced" },
        { name: "Legacy System Modernization", highlight: true, level: "Expert" },
      ],
    },
  ],
  education: [
    {
      institution: "Universitas Gunadarma",
      degree: {
        en: "Bachelor of Information Technology (S1)",
        id: "Sarjana Teknik Informatika (S1)",
      },
      period: "2007 – 2011",
      gpa: "GPA 3.30",
      description: {
        en: "Focus on Software Engineering, Relational Databases, and Computer Network Architecture.",
        id: "Fokus pada Rekayasa Perangkat Lunak, Basis Data Relasional, dan Arsitektur Jaringan Komputer.",
      },
    },
    {
      institution: "SMKN 1 Cibinong",
      degree: {
        en: "Software Engineering Vocational School",
        id: "Rekayasa Perangkat Lunak (Software Engineering)",
      },
      period: "2004 – 2007",
      description: {
        en: "Foundation of programming skills, algorithmic logic, and basic database administration.",
        id: "Fondasi keahlian pemrograman, logika algoritma, dan administrasi basis data dasar.",
      },
    },
  ],
  certifications: [
    { title: "Optimize Internal Spend & Maximize Your Cost Function", issuer: "PT. Metrodata Electronics", year: "2023" },
    { title: "Create The Future With Google Gen-AI", issuer: "PT. Metrodata Electronics", year: "2023" },
    { title: "Kubernetes for the Absolute Beginners", issuer: "Udemy Online Course", year: "2023" },
    { title: "Next.js & React - The Complete Guide", issuer: "Udemy Online Course", year: "2021" },
    { title: "Oracle Database 10g: Admin 1 & 2", issuer: "PT. Jurnalindo Aksara Grafika", year: "2013" },
    { title: "Building Mobile Commerce Solution & Basic User Linux", issuer: "Gunadarma University", year: "2009 & 2011" },
  ],
};
