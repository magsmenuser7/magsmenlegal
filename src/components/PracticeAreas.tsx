import { useState } from 'react';
import {
  Building2, Scale, Lightbulb, Home, Globe, Users,
  Briefcase, Shield, ArrowRight, FileText
} from 'lucide-react';

const areas = [
  {
    icon: Building2,
    title: 'Corporate & M&A',
    jurisdiction: 'India · US',
    description:
      'End-to-end corporate advisory, mergers and acquisitions, joint ventures, private equity structuring, and foreign investment across Indian and US markets.',
    highlights: ['Foreign Direct Investment', 'Cross-border M&A', 'Joint Ventures', 'Private Equity'],
  },
  {
    icon: Scale,
    title: 'Dispute Resolution',
    jurisdiction: 'India',
    description:
      'Representation before the Supreme Court, High Courts, and all quasi-judicial forums. Commercial arbitration under ICC, SIAC, and DIAC rules.',
    highlights: ['Supreme Court Litigation', 'Commercial Arbitration', 'Mediation', 'NCLT Proceedings'],
  },
  {
    icon: Lightbulb,
    title: 'Intellectual Property',
    jurisdiction: 'India · US',
    description:
      'Comprehensive IP protection, enforcement, and licensing for patents, trademarks, copyrights, and trade secrets across both jurisdictions.',
    highlights: ['Patent Prosecution', 'Trademark Registration', 'Copyright Advisory', 'IP Litigation'],
  },
  {
    icon: Home,
    title: 'Real Estate',
    jurisdiction: 'India',
    description:
      'Transaction advisory, title due diligence, RERA compliance, and dispute resolution for residential, commercial, and infrastructure projects.',
    highlights: ['Title Due Diligence', 'RERA Compliance', 'Property Transactions', 'Construction Disputes'],
  },
  {
    icon: Globe,
    title: 'US Law Practice',
    jurisdiction: 'United States',
    description:
      'Full-spectrum US legal services including business formation, contract law, employment matters, and regulatory compliance for Indian companies entering the US market.',
    highlights: ['Business Formation', 'Contract Drafting', 'Employment Law', 'Regulatory Compliance'],
  },
  {
    icon: Users,
    title: 'Immigration',
    jurisdiction: 'India · US',
    description:
      'Comprehensive immigration services including H-1B, L-1, and EB visa categories, OCI cards, and Indian citizenship matters for individuals and corporations.',
    highlights: ['H-1B Visas', 'L-1 Transfers', 'EB Green Cards', 'OCI Cards'],
  },
  {
    icon: Briefcase,
    title: 'Employment & Labour',
    jurisdiction: 'India',
    description:
      'Advisory on industrial relations, employment contracts, POSH compliance, retrenchment procedures, and representation before labour courts and tribunals.',
    highlights: ['Labour Tribunals', 'POSH Advisory', 'Employment Contracts', 'Industrial Disputes'],
  },
  {
    icon: Shield,
    title: 'Banking & Finance',
    jurisdiction: 'India · US',
    description:
      'Structured finance, project finance, debt restructuring, SARFAESI matters, and insolvency proceedings under the Insolvency and Bankruptcy Code.',
    highlights: ['IBC Proceedings', 'Debt Restructuring', 'Project Finance', 'SARFAESI'],
  },
  {
    icon: FileText,
    title: 'Tax & Regulatory',
    jurisdiction: 'India · US',
    description:
      'Tax structuring, GST advisory, FEMA compliance, transfer pricing, and cross-border tax planning for multinational corporations and high-net-worth individuals.',
    highlights: ['GST Advisory', 'FEMA Compliance', 'Transfer Pricing', 'Tax Litigation'],
  },
];

export default function PracticeAreas() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="practice-areas" className="py-28 bg-ink-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="divider" />
              <span className="label-tag">What We Do</span>
            </div>
            <h2 className="section-heading">Practice Areas</h2>
          </div>
          <p className="text-ink-500 text-[15px] leading-relaxed md:max-w-md">
            Comprehensive legal expertise spanning Indian and US jurisdictions,
            delivered by specialists with deep domain knowledge in each field.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-200">
          {areas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className={`bg-white p-8 cursor-pointer transition-all duration-300 ${
                  hovered === idx ? 'bg-ink-950' : ''
                }`}
                // onMouseEnter={() => setHovered(idx)}
                // onMouseLeave={() => setHovered(null)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-10 h-10 border flex items-center justify-center transition-all duration-300 ${
                    hovered === idx ? 'border-white/20 bg-white/10' : 'border-ink-200'
                  }`}>
                    <Icon className={`w-4 h-4 transition-colors duration-300 ${hovered === idx ? 'text-white' : 'text-ink-800'}`} />
                  </div>
                  <span className={`text-[9px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
                    hovered === idx ? 'text-white/40' : 'text-ink-400'
                  }`}>
                    {area.jurisdiction}
                  </span>
                </div>

                <h3 className={`font-serif text-xl font-semibold mb-3 transition-colors duration-300 ${
                  hovered === idx ? 'text-white' : 'text-ink-950'
                }`}>
                  {area.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-5 transition-colors duration-300 ${
                  hovered === idx ? 'text-white/60' : 'text-ink-500'
                }`}>
                  {area.description}
                </p>

                <ul className="space-y-1.5 mb-6">
                  {area.highlights.map((h) => (
                    <li key={h} className={`flex items-center gap-2 text-[11px] transition-colors duration-300 ${
                      hovered === idx ? 'text-white/50' : 'text-ink-400'
                    }`}>
                      <div className={`w-1 h-1 flex-shrink-0 transition-colors duration-300 ${
                        hovered === idx ? 'bg-white/40' : 'bg-ink-400'
                      }`} />
                      {h}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`flex items-center gap-2 text-[11px] font-semibold tracking-[0.1em] uppercase transition-colors duration-300 ${
                    hovered === idx ? 'text-white' : 'text-ink-800'
                  }`}
                >
                  Enquire
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
