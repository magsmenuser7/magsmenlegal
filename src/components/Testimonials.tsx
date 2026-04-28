import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Agarwal',
    role: 'Managing Director, Agarwal Ventures',
    quote:
      'Magsmen guided our entire US market entry — from Delaware incorporation to FDA regulatory compliance. Their coordination between the India and US teams was seamless and saved us months of work.',
  },
  {
    name: 'Sarah Mitchell',
    role: 'General Counsel, NovaTech Inc. (USA)',
    quote:
      'When we needed to acquire a Bangalore-based startup, Magsmen handled all Indian regulatory clearances, competition filings, and FEMA compliance flawlessly. Exceptional cross-border capability.',
  },
  {
    name: 'Pradeep Kumar',
    role: 'CEO, InfoSys Partners',
    quote:
      'Their dispute resolution team concluded a complex ICC arbitration for us in under nine months. The preparation was exhaustive and communication was proactive throughout.',
  },
  {
    name: 'Anika Patel',
    role: 'Founder, HealthBridge Technologies',
    quote:
      'Magsmen secured H-1B approvals for 14 of our employees in a single filing cycle. Their immigration team is thorough, strategic, and always accessible when it matters.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="py-28 bg-ink-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Left label */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-white/30" />
              <span className="text-[10px] text-white/40 tracking-[0.25em] uppercase">Client Voices</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight">
              What Our<br />
              <span className="italic text-white/40">Clients Say</span>
            </h2>

            {/* Nav controls */}
            <div className="flex gap-3 mt-10">
              <button
                onClick={prev}
                className="w-11 h-11 border border-white/15 hover:border-white/60 text-white/40 hover:text-white flex items-center justify-center transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 border border-white/15 hover:border-white/60 text-white/40 hover:text-white flex items-center justify-center transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-px transition-all duration-300 ${
                    i === current ? 'w-8 bg-white' : 'w-3 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="lg:col-span-2" key={current}>
            <blockquote className="font-serif text-2xl md:text-3xl text-white/80 italic leading-relaxed mb-10">
              "{t.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-white/20" />
              <div>
                <div className="text-sm font-semibold text-white">{t.name}</div>
                <div className="text-white/40 text-xs mt-0.5 tracking-wide">{t.role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
