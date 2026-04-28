import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  {
    label: 'Practice Areas',
    href: '#practice-areas',
    children: [
      { label: 'Corporate & M&A', href: '#practice-areas' },
      { label: 'Dispute Resolution', href: '#practice-areas' },
      { label: 'Intellectual Property', href: '#practice-areas' },
      { label: 'Real Estate', href: '#practice-areas' },
      { label: 'Immigration', href: '#practice-areas' },
      { label: 'Employment & Labour', href: '#practice-areas' },
      { label: 'Banking & Finance', href: '#practice-areas' },
      { label: 'Tax & Regulatory', href: '#practice-areas' },
    ],
  },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? 'bg-white border-b border-ink-200 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex flex-col leading-none">
            <span className={`font-serif text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-ink-950' : 'text-white'}`}>
              Magsmen
            </span>
            <span className={`text-[9px] pt-1 tracking-[0.3em] uppercase font-medium transition-colors ${scrolled ? 'text-ink-500' : 'text-white/60'}`}>
              Legal Consultants
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className={`flex items-center gap-1 px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase transition-colors duration-200 ${
                    scrolled ? 'text-ink-700 hover:text-ink-950' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3 h-3" />}
                </a>

                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 w-52 bg-white border border-ink-100 shadow-lg animate-fade-in">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-3 text-xs text-ink-700 hover:text-ink-950 hover:bg-ink-50 transition-colors border-b border-ink-100 last:border-0 tracking-wide"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#contact"
              className={`ml-6 text-xs font-semibold tracking-[0.15em] uppercase px-6 py-2.5 border transition-all duration-300 ${
                scrolled
                  ? 'border-ink-950 text-ink-950 hover:bg-ink-950 hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-ink-950'
              }`}
            >
              Consult Us
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 ${scrolled ? 'text-ink-950' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-ink-100 animate-fade-in">
          {navLinks.map((link) => (
            <div key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 text-xs font-medium tracking-[0.1em] uppercase text-ink-700 hover:text-ink-950 hover:bg-ink-50 border-b border-ink-100 transition-colors"
              >
                {link.label}
              </a>
              {link.children?.map((child) => (
                <a
                  key={child.label}
                  href={child.href}
                  onClick={() => setMenuOpen(false)}
                  className="block pl-10 pr-6 py-3 text-xs text-ink-500 hover:text-ink-950 hover:bg-ink-50 border-b border-ink-100/60 transition-colors tracking-wide"
                >
                  {child.label}
                </a>
              ))}
            </div>
          ))}
          <div className="p-6">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-ink-950 text-white py-3 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-ink-800 transition-colors"
            >
              Consult Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
