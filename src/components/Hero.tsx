import { ArrowRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden bg-ink-950">
      {/* Background image with strong overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg"
          alt="Law firm"
          className="w-full h-full object-cover opacity-25"
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pb-20 pt-40">
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          {/* Left — Main copy */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-px bg-white/40" />
              <span className="text-[10px] text-white/50 tracking-[0.3em] uppercase">Est. 2005 · New Delhi & New York</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-8">
              Counsel<br />
              <span className="italic text-white/60">for the</span><br />
              Discerning.
            </h1>

            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-10 font-light">
              Magsmen Legal Consultants is a boutique full-service law firm
              practising Indian and US law — built on rigour, trust, and an
              uncompromising commitment to client outcomes.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-outline-white group">
                Request a Consultation
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#practice-areas" className="text-white/50 hover:text-white text-xs tracking-[0.15em] uppercase font-semibold flex items-center gap-2 transition-colors">
                Practice Areas
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
            {[
              { value: '20+', label: 'Years of Practice' },
              { value: '1800+', label: 'Matters Handled' },
              { value: '40+', label: 'Legal Professionals' },
              { value: '2', label: 'Jurisdictions' },
            ].map((stat) => (
              <div key={stat.label} className="bg-ink-950 p-8">
                <div className="font-serif text-4xl text-white font-bold mb-2">{stat.value}</div>
                <div className="text-white/40 text-[10px] tracking-[0.2em] uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-16 flex items-center gap-3">
          <ArrowDown className="w-3.5 h-3.5 text-white animate-bounce" />
          <span className="text-[10px] text-white tracking-[0.3em] uppercase">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
