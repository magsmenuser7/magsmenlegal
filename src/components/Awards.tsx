const awards = [
  { name: 'India Business Law Journal', year: '2024', category: 'Top 50 Indian Law Firms' },
  { name: 'Legal 500 Asia Pacific', year: '2023', category: 'Tier 1 — Corporate / M&A' },
  { name: 'Chambers & Partners', year: '2023', category: 'Band 2 — Dispute Resolution' },
  { name: 'Asian Legal Business', year: '2022', category: 'Boutique Law Firm of the Year' },
  { name: 'IFLR 1000', year: '2023', category: 'Highly Regarded — Finance' },
  { name: 'Forbes Legal Power List', year: '2023', category: 'Top Immigration Practice' },
];

const clients = [
  'Tata Consultancy Services',
  'Infosys Limited',
  'Wipro Technologies',
  'Reliance Industries',
  'Goldman Sachs India',
  'Microsoft India',
  'Amazon Web Services',
  'HSBC India',
];

export default function Awards() {
  return (
    <section id="awards" className="py-28 bg-ink-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-14">
          <div className="divider" />
          <span className="label-tag">Recognition</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Awards */}
          <div>
            <h2 className="section-heading mb-10">Awards &<br />Rankings</h2>
            <div className="space-y-px">
              {awards.map((award, i) => (
                <div
                  key={award.name}
                  className="group bg-white hover:bg-ink-950 flex items-center gap-6 px-6 py-5 transition-all duration-300 cursor-default"
                >
                  <span className="font-serif text-2xl font-bold text-ink-200 group-hover:text-white/20 transition-colors w-8 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-ink-950 group-hover:text-white transition-colors truncate">
                      {award.name}
                    </div>
                    <div className="text-xs text-ink-400 group-hover:text-white/50 transition-colors mt-0.5">
                      {award.category}
                    </div>
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.15em] text-ink-300 group-hover:text-white/30 transition-colors">
                    {award.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Clients */}
          <div>
            <h2 className="section-heading mb-10">Trusted<br />By</h2>
            <div className="grid grid-cols-2 gap-px bg-ink-200">
              {clients.map((client) => (
                <div
                  key={client}
                  className="bg-white hover:bg-ink-950 flex items-center justify-center p-7 transition-all duration-300 group cursor-default"
                >
                  <span className="text-xs font-semibold text-ink-400 group-hover:text-white/60 tracking-wide text-center transition-colors">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
