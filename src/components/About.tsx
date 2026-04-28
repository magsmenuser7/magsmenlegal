import { CheckCircle, Award, Globe as Globe2, Users } from 'lucide-react';

const differentiators = [
  'Full-service Indian and Australian legal practice under one roof',
  'Two decades of courtroom and transactional excellence',
  'Dedicated cross-border M&A and regulatory teams',
  'Transparent, predictable fee structures',
  'Rapid-response availability for time-critical mandates',
  'Multilingual teams: English, Hindi, Tamil, and Telugu',
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg"
              alt="Magsmen Legal Consultants office"
              className="w-full h-[560px] object-cover grayscale"
            />
            {/* Stat block */}
            <div className="absolute -bottom-6 -right-6 bg-ink-950 text-white p-8 w-64 hidden md:block">
              <div className="font-serif text-5xl text-white font-bold">20+</div>
              <div className="text-white/50 text-xs mt-2 leading-relaxed tracking-wide">
                Years delivering legal excellence across jurisdictions
              </div>
              <div className="mt-5 grid grid-cols-3 gap-4 pt-5 border-t border-white/10">
                <div>
                  <div className="font-serif text-xl text-white">3</div>
                  <div className="text-white/40 text-[10px] uppercase tracking-wide mt-0.5">Offices</div>
                </div>
                <div>
                  <div className="font-serif text-xl text-white">40+</div>
                  <div className="text-white/40 text-[10px] uppercase tracking-wide mt-0.5">Lawyers</div>
                </div>
                <div>
                  <div className="font-serif text-xl text-white">1.8k</div>
                  <div className="text-white/40 text-[10px] uppercase tracking-wide mt-0.5">Clients</div>
                </div>
              </div>
            </div>
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-0.5 h-20 bg-ink-950" />
          </div>

          {/* Content side */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="divider" />
              <span className="label-tag">About the Firm</span>
            </div>
            <h2 className="section-heading mb-8">
              A Firm Built on<br />
              <span className="italic">Principle &amp; Precision</span>
            </h2>
            <p className="text-ink-600 leading-relaxed mb-5 text-[15px]">
              Magsmen Legal Consultants was established with one purpose: to provide
              sophisticated legal counsel that combines deep domain expertise with genuine
              partner-level attention on every mandate. Today we operate across offices
              in Guntur, Hyderabad, and Melbourne, Australia.
            </p>
            <p className="text-ink-600 leading-relaxed mb-10 text-[15px]">
              Our proficiency across Indian and Australian legal frameworks makes us the natural
              choice for cross-border transactions, commercial disputes, and global
              companies entering or operating across these markets.
            </p>

            {/* Differentiators */}
            <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6 mb-10">
              {differentiators.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-3.5 h-3.5 text-ink-950 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-ink-700 leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-ink-200">
              {[
                { icon: Award, label: 'Award Winning' },
                { icon: Globe2, label: 'Global Reach' },
                { icon: Users, label: 'Client First' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="text-center">
                  <div className="w-10 h-10 border border-ink-200 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-4 h-4 text-ink-800" />
                  </div>
                  <div className="text-[10px] text-ink-500 font-semibold tracking-[0.15em] uppercase">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
