"use client";

import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

type Language = "en" | "id";
type Mode = "all" | "game" | "backend";

const translations = {
  en: {
    role: "Game & Backend Programmer",
    connect: "Connect",
    summaryTitle: "Summary",
    summaryText:
      "Founder and Owner of PT Anoa Interactive Studio. Bridging creative game design with high-performance backend systems. Expert in Unity engine upgrades, live-ops, and cross-platform porting for global markets.",
    statExp: "Years Exp",
    statApps: "Live Apps",
    statAwards: "Jam Awards",
    statJams: "Organized Jams",
    radarTitle: "Attribute Radar",
    stackTitle: "Technical Stack",
    featuredBadge: "FEATURED WEBGL PORT",
    featuredTitle: "Rogue Farm: WebGL Migration",
    featuredDesc:
      "Successfully managed the end-to-end conversion from Mobile to WebGL. Overcame technical hurdles including building a custom <b>Save System</b> for web browsers and re-engineering the <b>Dragging Mechanism</b> for mouse/trackpad precision.",
    featStat1: "Fixed",
    featStat2: "Added",
    featVal1: "Conversion Bugs",
    featVal2: "Web Storage API",
    playArmor: "PLAY ON ARMOR GAMES",
    expTitle: "Professional Quest Log",
    projectTitle: "Project Arcade",
    awardTitle: "Achievement Log",
    eduTitle: "Education & Community",
    eduDeg: "B.CS in Informatics",
    eduJam: "Global Game Jam Organizer",
    eduJamSub: "Medan Chapter (3 Years Total)",
    websiteTitle: "Web Projects",
    clickExpand: "Click to expand details",
    playNow: "PLAY NOW",
  },
  id: {
    role: "Programmer Game & Backend",
    connect: "Hubungi",
    summaryTitle: "Ringkasan",
    summaryText:
      "Pendiri dan Pemilik PT Anoa Interactive Studio. Menghubungkan desain game kreatif dengan sistem backend berperforma tinggi. Ahli dalam peningkatan engine Unity, live-ops, dan porting lintas platform untuk pasar global.",
    statExp: "Tahun Pengalaman",
    statApps: "Aplikasi Live",
    statAwards: "Penghargaan Jam",
    statJams: "Jam Terorganisir",
    radarTitle: "Radar Atribut",
    stackTitle: "Tumpukan Teknologi",
    featuredBadge: "PORT WEBGL UNGGULAN",
    featuredTitle: "Rogue Farm: Migrasi WebGL",
    featuredDesc:
      "Berhasil mengelola konversi ujung-ke-ujung dari Seluler ke WebGL. Mengatasi rintangan teknis termasuk membangun Sistem Simpan (Save) khusus untuk browser web dan merekayasa ulang Mekanisme Seret (Dragging) untuk presisi mouse/trackpad.",
    featStat1: "Memperbaiki",
    featStat2: "Menambahkan",
    featVal1: "Bug Konversi",
    featVal2: "API Penyimpanan Web",
    playArmor: "MAIN DI ARMOR GAMES",
    expTitle: "Log Misi Profesional",
    projectTitle: "Project Arcade",
    awardTitle: "Log Pencapaian",
    eduTitle: "Pendidikan & Komunitas",
    eduDeg: "S.Kom Teknik Informatika",
    eduJam: "Penyelenggara Global Game Jam",
    eduJamSub: "Chapter Medan (Total 3 Tahun)",
    websiteTitle: "Proyek Web",
    clickExpand: "Klik untuk melihat detail",
    playNow: "MAIN SEKARANG",
  },
};

const cvData = {
  skills: [
    {
      name: "C# / Unity",
      value: 95,
      items: ["Unity 3D", "WebGL", "C# scripting", "Engine Upgrade"],
      type: "game",
    },
    {
      name: "Web / JS",
      value: 85,
      items: ["JavaScript", "HTML5/CSS", "React (Basic)"],
      type: "dev",
    },
    {
      name: "Backend",
      value: 80,
      items: ["Node.js", "PHP", "SQL", "REST APIs"],
      type: "backend",
    },
    {
      name: "Ops & Cloud",
      value: 75,
      items: ["Firebase Firestore", "Functions", "Git", "Play Console"],
      type: "backend",
    },
    {
      name: "LiveOps",
      value: 90,
      items: ["Unity IAP", "AdMob", "GameAnalytics", "Firebase Analytics"],
      type: "game",
    },
  ],
  experience: [
    {
      role: {
        en: "Owner | Game & Backend Programmer",
        id: "Pemilik | Programmer Game & Backend",
      },
      company: "PT Anoa Interactive Studio",
      period: "2018 – Present",
      tags: ["Ownership", "Game Programming", "Backend Systems", "Unity"],
      description: {
        en: "Founder and owner of the studio, leading technical execution for internal IPs and client projects.",
        id: "Pendiri dan pemilik studio, memimpin eksekusi teknis untuk IP internal dan proyek klien.",
      },
      details: {
        en: [
          "<b>Business Ownership:</b> Founded and managing all operations for PT Anoa Interactive Studio.",
          "<b>Game Programming:</b> Developing core gameplay mechanics, UI systems, and cross-platform architecture in Unity.",
          "<b>Backend Architecture:</b> Building secure, scalable Node.js and PHP backends for real-time game data.",
          "<b>Engine Upgrades:</b> Managing technical debt by migrating legacy projects to modern Unity versions.",
          "<b>Web & Publishing:</b> Developed the official studio site and handled publishing pipelines.",
        ],
        id: [
          "<b>Business Ownership:</b> Mendirikan dan mengelola seluruh operasional PT Anoa Interactive Studio.",
          "<b>Game Programming:</b> Mengembangkan mekanik inti gameplay, sistem UI, dan arsitektur lintas platform di Unity.",
          "<b>Backend Architecture:</b> Membangun backend Node.js dan PHP yang aman dan terukur untuk data game real-time.",
          "<b>Engine Upgrades:</b> Mengelola hutang teknis dengan memigrasikan proyek lama ke versi Unity modern.",
          "<b>Web & Publishing:</b> Mengembangkan situs resmi studio dan menangani alur penerbitan game.",
        ],
      },
    },
  ],
  projects: [
    {
      title: "Handy Farm: Roguelike",
      category: ["Unity", "Backend", "LiveOps"],
      desc: {
        en: "Implemented IAP, Ads SDKs, and data tracking via Firebase.",
        id: "Implementasi IAP, Ads SDK, dan pelacakan data melalui Firebase.",
      },
      link: "https://play.google.com/store/apps/details?id=com.anoa.handyfarm",
      icon: "/Handy Farm icon.png",
    },
    {
      title: "Water Ring Toss 3D",
      category: ["Unity", "Game"],
      desc: {
        en: "Updated Unity from legacy version to newest version. Added shop system for skin customization. Original game from Gamebot Air.",
        id: "Memperbarui Unity dari versi legasi ke versi terbaru. Menambahkan sistem toko untuk kustomisasi skin. Game asli dari Gamebot Air.",
      },
      link: "https://play.google.com/store/apps/details?id=com.Anoa.WRT3D",
      icon: "/WRT Icon 512.png",
    },
    {
      title: "Suku Kata",
      category: ["Unity", "Backend"],
      desc: {
        en: "Developed base gameplay mechanics. Word database using JSON. Added monetization system. Indonesian version of Wordle.",
        id: "Mengembangkan mekanik gameplay dasar. Database kata menggunakan JSON. Menambahkan sistem monetisasi. Versi Indonesia dari Wordle.",
      },
      link: "https://play.google.com/store/apps/details?id=com.Anoa.SukuKata",
      icon: "/Suku Kata icon.png",
    },
    {
      title: "Punch It 3D",
      category: ["Unity", "Game", "WebGL"],
      desc: {
        en: "3rd Place winner at GameSeed 2023. My role: Added monetization, analytics, and additional features.",
        id: "Pemenang Juara 3 di GameSeed 2023. Peran saya: Menambahkan monetisasi, analitik, dan fitur tambahan.",
      },
      link: "https://play.google.com/store/apps/details?id=com.Anoa.PI3D",
      icon: "/Punch it icon.png",
    },
    {
      title: "Supermarket Packing",
      category: ["Unity", "Game", "WebGL"],
      desc: {
        en: "Added monetization system. Ported to WebGL for publisher Plug in Digital.",
        id: "Menambahkan sistem monetisasi. Di-port ke WebGL untuk penerbit Plug in Digital.",
      },
      link: "https://play.google.com/store/apps/details?id=com.anoa.supermarketpacking",
      icon: "/Super market packing.png",
    },
    {
      title: "Soda Factory",
      category: ["Unity", "Game", "WebGL"],
      desc: {
        en: "Added monetization system. Ported to WebGL for publisher Plug in Digital. Similar to Supermarket Packing.",
        id: "Menambahkan sistem monetisasi. Di-port ke WebGL untuk penerbit Plug in Digital. Mirip dengan Supermarket Packing.",
      },
      link: "https://play.google.com/store/apps/details?id=com.anoa.SodaFactory",
      icon: "/Soda Factory icon.png",
    },
    {
      title: "Crop Crush Garden",
      category: ["Unity", "Game", "WebGL"],
      desc: {
        en: "Added monetization system. Ported to WebGL for publisher Plug in Digital. Similar to Supermarket Packing.",
        id: "Menambahkan sistem monetisasi. Di-port ke WebGL untuk penerbit Plug in Digital. Mirip dengan Supermarket Packing.",
      },
      link: "https://play.google.com/store/apps/details?id=com.Anoa.CCG",
      icon: "https://play-lh.googleusercontent.com/gVpGMjFcqNzy27U8b3JCUmTplhuzGZIv7iqo6UkT2Pr_2_8iUZwmG5TbzeK2ztwCgFQ=w240-h480-rw",
    },
  ],
  websites: [
    {
      title: "Block Royale Admin Panel",
      desc: {
        en: "An admin panel built with Laravel for the game Block Royale, released on the Google Play Store for a client.",
        id: "Panel admin yang dibangun dengan Laravel untuk game Block Royale, dirilis di Google Play Store untuk klien.",
      },
      link: "#",
      screenshot: "/block-royale-admin.png"
    },
    {
      title: "Anoa Interactive Studio",
      desc: {
        en: "Official website for Anoa Interactive, an Indonesian indie game development studio dedicated to creating immersive and engaging gaming experiences.",
        id: "Website resmi untuk Anoa Interactive, studio pengembangan game indie Indonesia yang berdedikasi untuk menciptakan pengalaman bermain game yang imersif dan menarik.",
      },
      link: "https://www.anoainteractive.co.id/",
      screenshot: "/anoa-interactive-website.png"
    }
  ],
  awards: [
    { title: "3rd Place - GameSeed", project: "Punch It 3D", year: "2023" },
    {
      title: "Best Technical - Game Jam+",
      project: "The Bot of Us",
      year: "2023",
    },
    {
      title: "2nd Place - Tiltspot Jam",
      project: "Controller System",
      year: "2019",
    },
  ],
};

export default function Portfolio() {
  const [currentLang, setCurrentLang] = useState<Language>("en");
  const [currentMode, setCurrentMode] = useState<Mode>("all");
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const [projectFilter, setProjectFilter] = useState<string>("all");

  const t = translations[currentLang];

  const getSkillValues = () => {
    if (currentMode === "game") {
      return cvData.skills.map((s) =>
        s.type === "game" || s.type === "dev" ? s.value : s.value * 0.4,
      );
    }
    if (currentMode === "backend") {
      return cvData.skills.map((s) =>
        s.type === "backend" || s.type === "dev" ? s.value : s.value * 0.4,
      );
    }
    return cvData.skills.map((s) => s.value);
  };

  const chartData = {
    labels: cvData.skills.map((s) => s.name),
    datasets: [
      {
        data: getSkillValues(),
        backgroundColor: "rgba(217, 119, 6, 0.2)",
        borderColor: "#d97706",
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: { display: false },
        grid: { color: "#e7e5e4" },
      },
    },
    plugins: { legend: { display: false } },
  };

  const filteredProjects = cvData.projects.filter(
    (p) =>
      projectFilter === "all" ||
      p.category.some((c) => c.includes(projectFilter)),
  );

  const isSkillDimmed = (type: string) => {
    if (currentMode === "game" && type === "backend") return true;
    if (currentMode === "backend" && type === "game") return true;
    return false;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Sidebar Profile */}
      <aside className="lg:col-span-3 lg:sticky lg:top-8 h-fit space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 text-center">
          <h1 className="text-2xl font-bold mb-1">Auryan Pratama</h1>
          <p className="text-stone-600 font-medium mb-4">{t.role}</p>

          <div className="flex flex-wrap justify-center gap-2 mb-6 text-sm">
            <span className="px-3 py-1 bg-stone-100 rounded-full text-stone-600">
              📍 Medan, Indonesia
            </span>
          </div>

          {/* Language Switcher */}
          <div className="mb-4 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentLang("en")}
              className={`text-xs font-bold px-2 py-1 rounded border border-stone-200 ${
                currentLang === "en"
                  ? "bg-white text-amber-600 shadow-sm"
                  : "bg-stone-50 text-stone-600"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setCurrentLang("id")}
              className={`text-xs font-bold px-2 py-1 rounded border border-stone-200 ${
                currentLang === "id"
                  ? "bg-white text-amber-600 shadow-sm"
                  : "bg-stone-50 text-stone-600"
              }`}
            >
              ID
            </button>
          </div>

          <div className="bg-stone-50 p-1 rounded-lg flex text-sm font-medium mb-4">
            {(["all", "game", "backend"] as Mode[]).map((mode) => (
              <button
                key={mode}
                onClick={() => {
                  setCurrentMode(mode);
                  setProjectFilter(
                    mode === "game"
                      ? "Unity"
                      : mode === "backend"
                        ? "Backend"
                        : "all",
                  );
                }}
                className={`flex-1 py-1.5 rounded-md transition-colors ${
                  currentMode === mode
                    ? "bg-white shadow-sm text-amber-600 font-bold"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
          <h3 className="font-bold text-lg mb-4 border-b border-stone-200 pb-2">
            {t.connect}
          </h3>
          <div className="space-y-4 text-sm">
            <div className="flex flex-col gap-2">
              <a
                href="mailto:auryanmail@gmail.com"
                className="flex items-center gap-2 text-stone-600 hover:text-amber-600"
              >
                <FontAwesomeIcon icon={faEnvelope} /> auryanmail@gmail.com
              </a>
              <a
                href="https://wa.me/62895611746668"
                target="_blank"
                className="flex items-center gap-2 text-stone-600 hover:text-amber-600"
              >
                <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
              </a>
              <a
                href="https://linkedin.com/in/auryan-pratama-80b928238"
                target="_blank"
                className="flex items-center gap-2 text-stone-600 hover:text-amber-600"
              >
                <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:col-span-9 space-y-8">
        {/* Summary Section */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 animate-fadeIn">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>📜</span> {t.summaryTitle}
          </h2>
          <p className="text-stone-600 leading-relaxed text-lg">
            {t.summaryText}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-stone-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">6+</div>
              <div className="text-[10px] uppercase text-stone-600">
                {t.statExp}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">10+</div>
              <div className="text-[10px] uppercase text-stone-600">
                {t.statApps}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">3</div>
              <div className="text-[10px] uppercase text-stone-600">
                {t.statAwards}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">3</div>
              <div className="text-[10px] uppercase text-stone-600">
                {t.statJams}
              </div>
            </div>
          </div>
        </section>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
              <span>📊</span> {t.radarTitle}
            </h2>
            <div className="h-[350px] md:h-[400px] max-w-[500px] mx-auto">
              <Radar data={chartData} options={chartOptions} />
            </div>
          </section>
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 flex flex-col">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>🛠️</span> {t.stackTitle}
            </h2>
            <div className="flex-1 overflow-y-auto pr-2">
              {cvData.skills.map((cat, idx) => (
                <div
                  key={idx}
                  className={`mb-4 transition-all ${
                    isSkillDimmed(cat.type)
                      ? "opacity-30 grayscale"
                      : "opacity-100"
                  }`}
                >
                  <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-2">
                    {cat.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white border border-stone-200 text-xs rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Featured Porting Project */}
        <section className="bg-stone-900 text-white p-8 rounded-2xl shadow-lg border border-stone-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl">
            ⚙️
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-gradient-to-br from-amber-600 to-amber-500 text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-wide">
                {t.featuredBadge}
              </span>
              <span className="text-xs font-bold text-stone-400">
                Armor Games
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-4">{t.featuredTitle}</h2>
            <p
              className="text-stone-300 mb-6 max-w-2xl leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.featuredDesc }}
            />
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-white/10 px-3 py-2 rounded-lg border border-white/10">
                <span className="block text-[10px] uppercase text-stone-400">
                  {t.featStat1}
                </span>
                <span className="text-sm font-bold">{t.featVal1}</span>
              </div>
              <div className="bg-white/10 px-3 py-2 rounded-lg border border-white/10">
                <span className="block text-[10px] uppercase text-stone-400">
                  {t.featStat2}
                </span>
                <span className="text-sm font-bold">{t.featVal2}</span>
              </div>
              <div className="bg-white/10 px-3 py-2 rounded-lg border border-white/10">
                <span className="block text-[10px] uppercase text-stone-400">
                  Platform
                </span>
                <span className="text-sm font-bold">Armor Games</span>
              </div>
            </div>
            <a
              href="https://armorgames.com/rogue-farm-game/19606"
              target="_blank"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-400 text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105"
            >
              <span>🎮</span> {t.playArmor}
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
            <span>🗺️</span> {t.expTitle}
          </h2>
          <div className="relative border-l-2 border-stone-200 ml-3 space-y-8 py-2">
            {cvData.experience.map((job, idx) => (
              <div key={idx} className="relative pl-8 pb-4">
                <div
                  className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-600 border-4 border-white shadow-sm cursor-pointer z-10 hover:scale-110 hover:bg-amber-500 transition-all"
                  onClick={() =>
                    setExpandedExp(expandedExp === idx ? null : idx)
                  }
                />
                <div
                  className="bg-stone-50 p-4 rounded-lg border border-stone-200 cursor-pointer hover:bg-white transition-all"
                  onClick={() =>
                    setExpandedExp(expandedExp === idx ? null : idx)
                  }
                >
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-stone-900">
                      {job.role[currentLang]}
                    </h3>
                    <span className="text-[10px] font-bold text-stone-400">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-xs text-amber-600 font-bold mb-2">
                    {job.company}
                  </p>
                  {expandedExp === idx && (
                    <div className="mt-3 pt-3 border-t border-stone-200 text-xs text-stone-600 space-y-2">
                      <ul className="list-disc pl-4 space-y-1">
                        {job.details[currentLang].map((d, i) => (
                          <li key={i} dangerouslySetInnerHTML={{ __html: d }} />
                        ))}
                      </ul>
                    </div>
                  )}
                  <p className="text-[10px] text-center text-stone-300 mt-2">
                    {t.clickExpand}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span>🎮</span> {t.projectTitle}
            </h2>
            <div className="flex gap-2 text-xs font-bold">
              {["all", "Unity", "Backend"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setProjectFilter(filter)}
                  className={`px-3 py-1 rounded transition-colors ${
                    projectFilter === filter
                      ? "bg-amber-600 text-white"
                      : "bg-stone-100 text-stone-500"
                  }`}
                >
                  {filter.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 flex flex-col h-full border border-stone-200 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <img
                    src={p.icon}
                    alt={p.title}
                    className="w-14 h-14 rounded-xl object-cover bg-stone-100 shadow-sm border border-black/5"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://cdn-icons-ng.flaticon.com/512/5260/5260479.png";
                    }}
                  />
                  <div className="flex gap-1">
                    {p.category.map((c, i) => (
                      <span
                        key={i}
                        className="text-[8px] bg-stone-100 px-1 rounded font-bold text-stone-400"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="font-bold text-base mb-2">{p.title}</h3>
                <p className="text-xs text-stone-600 flex-grow mb-4 leading-relaxed">
                  {p.desc[currentLang]}
                </p>
                <a
                  href={p.link}
                  target="_blank"
                  className="w-full flex items-center justify-center"
                >
                  <img
                    src="/GetItOnGooglePlay_Badge_Web_color_English.svg"
                    alt="Get it on Google Play"
                    className="w-full max-w-[140px] hover:opacity-90 transition-opacity"
                  />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Websites Section */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
            <span>🌐</span> {t.websiteTitle}
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {cvData.websites.map((w, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 items-center bg-stone-50 p-6 rounded-xl border border-stone-200">
                <div className="w-full md:w-1/2">
                  <img src={w.screenshot} alt={w.title} className="w-full rounded-lg shadow-sm border border-stone-200" />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold">{w.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{w.desc[currentLang]}</p>
                  {w.link && w.link !== "#" && (
                    <a href={w.link} target="_blank" className="inline-block bg-stone-900 hover:bg-stone-700 text-white px-6 py-2 rounded-lg font-bold transition-colors">
                      Visit Website
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards and Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>🏆</span> {t.awardTitle}
            </h2>
            <div className="space-y-4">
              {cvData.awards.map((a, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 items-center p-2 border-b border-stone-50 last:border-0"
                >
                  <span className="text-xl">🎖️</span>
                  <div className="text-xs font-bold">
                    {a.title}
                    <br />
                    <span className="font-normal text-stone-400">
                      {a.project} ({a.year})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>🎓</span> {t.eduTitle}
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-amber-600 pl-4">
                <h3 className="font-bold text-stone-900">{t.eduDeg}</h3>
                <p className="text-sm text-stone-600">
                  Universitas Potensi Utama (2015-2019)
                </p>
              </div>
              <div className="border-l-4 border-stone-300 pl-4">
                <h3 className="font-bold text-stone-900">{t.eduJam}</h3>
                <p className="text-sm text-stone-600">{t.eduJamSub}</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
