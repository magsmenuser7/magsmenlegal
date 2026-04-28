import { ArrowRight, Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
  'Practice': [
    'Corporate & M&A',
    'Dispute Resolution',
    'Intellectual Property',
    'Immigration',
    'Banking & Finance',
    'Tax & Regulatory',
  ],
  'Firm': [
    'About Us',
    'Insights',
    'Careers',
    'Contact',
  ],
  'Offices': [
    'Guntur (Head Office)',
    'Hyderabad',
    'Melbourne, Australia',
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-white">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-serif text-2xl font-bold">Ready to discuss your matter?</div>
            <div className="text-white/40 text-sm mt-1">No-obligation consultation with a senior attorney.</div>
          </div>
          <a href="#contact" className="flex items-center gap-3 border border-white/20 hover:border-white text-white text-xs font-semibold tracking-[0.15em] uppercase px-7 py-3 transition-all group">
            Book a Consultation
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="font-serif text-2xl font-bold text-white">Magsmen</div>
              <div className="text-[9px] tracking-[0.3em] uppercase text-white/30 mt-0.5">Legal Consultants</div>
            </div>

            <p className="text-white/40 text-xs leading-relaxed mb-8 max-w-xs">
              A full-service boutique law firm with offices in Guntur, Hyderabad,
              and Melbourne. Trusted by corporations and individuals across India
              and Australia.
            </p>

            <div className="flex gap-3 mb-8">
              {[Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 border border-white/15 hover:border-white/60 flex items-center justify-center transition-colors">
                  <Icon className="w-3.5 h-3.5 text-white/40 hover:text-white transition-colors" />
                </a>
              ))}
            </div>

            <div className="text-white/20 text-[10px] leading-relaxed tracking-wide">
              +91 90449 10449<br />
              +61 406 017 663
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/30 mb-5">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-white/40 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-[10px] text-white/25">© {year} Magsmen Legal Consultants. All rights reserved.</span>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Disclaimer'].map((link) => (
              <a key={link} href="#" className="text-[10px] text-white/25 hover:text-white/60 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
