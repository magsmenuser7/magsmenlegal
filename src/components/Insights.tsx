import { ArrowRight, ArrowUpRight } from 'lucide-react';

const articles = [
  {
    category: 'Corporate Law',
    jurisdiction: 'India',
    title: "SEBI's New Insider Trading Regulations: What Listed Companies Must Know",
    excerpt:
      'The Securities and Exchange Board of India has tightened its insider trading framework. We break down the key amendments and their operational impact on listed entities.',
    date: 'April 2025',
    readTime: '6 min',
  },
  {
    category: 'US Immigration',
    jurisdiction: 'US',
    title: 'H-1B Cap 2026: How Indian Tech Professionals Can Prepare',
    excerpt:
      'With USCIS introducing a revised lottery system and enhanced specialty occupation scrutiny, Indian applicants must adapt their strategy for the FY2026 filing season.',
    date: 'March 2025',
    readTime: '8 min',
  },
  {
    category: 'M&A',
    jurisdiction: 'India · US',
    title: 'Cross-Border M&A: Navigating FEMA, CFIUS, and Competition Law',
    excerpt:
      'A practical guide to the regulatory clearances required when Indian and US entities engage in cross-border acquisitions, including the latest CFIUS guidance.',
    date: 'March 2025',
    readTime: '10 min',
  },
];

export default function Insights() {
  return (
    <section id="insights" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="divider" />
              <span className="label-tag">Knowledge</span>
            </div>
            <h2 className="section-heading">Legal Insights</h2>
          </div>
          <a href="#insights" className="flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-ink-500 hover:text-ink-950 transition-colors group">
            All Articles
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Articles */}
        <div className="grid lg:grid-cols-3 gap-px bg-ink-200">
          {articles.map((article) => (
            <article
              key={article.title}
              className="bg-white p-8 group cursor-pointer hover:bg-ink-950 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className={`text-[9px] font-bold tracking-[0.2em] uppercase px-2 py-1 group-hover:bg-white group-hover:text-ink-950 transition-all ${
                  article.jurisdiction === 'US'
                    ? 'bg-ink-950 text-white'
                    : 'bg-ink-100 text-ink-600'
                }`}>
                  {article.jurisdiction}
                </span>
                <ArrowUpRight className="w-4 h-4 text-ink-300 group-hover:text-white/40 transition-colors" />
              </div>

              <div className="text-[10px] text-ink-400 group-hover:text-white/30 tracking-[0.15em] uppercase mb-3 transition-colors">
                {article.category}
              </div>

              <h3 className="font-serif text-lg text-ink-950 group-hover:text-white font-semibold leading-snug mb-4 transition-colors">
                {article.title}
              </h3>

              <p className="text-sm text-ink-500 group-hover:text-white/50 leading-relaxed mb-8 transition-colors">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between text-[10px] text-ink-300 group-hover:text-white/25 transition-colors pt-6 border-t border-ink-100 group-hover:border-white/10">
                <span>{article.date}</span>
                <span>{article.readTime} read</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
