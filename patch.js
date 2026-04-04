const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

code = code.replace(
  'eduJamSub: "Medan Chapter (3 Years Total)",',
  'eduJamSub: "Medan Chapter (3 Years Total)",\n    websiteTitle: "Web Projects",'
);

code = code.replace(
  'eduJamSub: "Chapter Medan (Total 3 Tahun)",',
  'eduJamSub: "Chapter Medan (Total 3 Tahun)",\n    websiteTitle: "Proyek Web",'
);

code = code.replace(
  /    \{\n      title: "Portfolio Website",[\s\S]*?icon: "https:\/\/cdn-icons-png\.flaticon\.com\/512\/1005\/1005141\.png",\n    \},\n/,
  ''
);

code = code.replace(
  /  awards: \[/,
  `  websites: [
    {
      title: "Placeholder Website",
      desc: {
        en: "Website description and details will go here.",
        id: "Deskripsi website dan detail akan diletakkan di sini.",
      },
      link: "#",
      screenshot: "https://placehold.co/600x400?text=Screenshot+Placeholder"
    }
  ],
  awards: [`
);

code = code.replace(
  /\{"all", "Unity", "Backend", "Web"\}/,
  '{"all", "Unity", "Backend"}'
);
code = code.replace(
  /\{\["all", "Unity", "Backend", "Web"\]\}\.map\(\(filter\) => \(/,
  '{["all", "Unity", "Backend"]}.map((filter) => ('
);

code = code.replace(
  /\{\/\* Awards and Education \*\/\}/,
  `{/* Websites Section */}
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
                  <a href={w.link} target="_blank" className="inline-block bg-stone-900 hover:bg-stone-700 text-white px-6 py-2 rounded-lg font-bold transition-colors">
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards and Education */}`
);

fs.writeFileSync('src/app/page.tsx', code);
