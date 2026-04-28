import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Vikram Aggarwal',
    title: 'Founding Partner',
    specialisation: 'Corporate Law · M&A',
    bio: 'Harvard Law LLM. Practising since 2003. Former associate at Sullivan & Cromwell, New York. Leads the firm\'s cross-border M&A and private equity practice.',
    image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg',
    jurisdictions: ['India', 'US'],
  },
  {
    name: 'Sunita Ramachandran',
    title: 'Partner',
    specialisation: 'Dispute Resolution',
    bio: 'National Law School of India alumna. Argued over 180 matters before the Supreme Court and various High Courts. SIAC and ICC arbitration specialist.',
    image: 'https://images.pexels.com/photos/5668773/pexels-photo-5668773.jpeg',
    jurisdictions: ['India'],
  },
  {
    name: 'Nikhil Mehra',
    title: 'Partner — US Practice',
    specialisation: 'US Business & Immigration',
    bio: 'NYU School of Law JD. New York Bar admitted. Leads all US-facing mandates with a focus on Indo-US business structuring and employment-based immigration.',
    image: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg',
    jurisdictions: ['US'],
  },
  {
    name: 'Kavitha Nair',
    title: 'Partner',
    specialisation: 'Intellectual Property',
    bio: 'IP specialist with 15 years of experience in patent prosecution, trademark portfolio management, and technology licensing across India and the US.',
    image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg',
    jurisdictions: ['India', 'US'],
  },
  {
    name: 'Arjun Bose',
    title: 'Senior Associate',
    specialisation: 'Banking & Finance · IBC',
    bio: 'NLSIU graduate. Specialises in IBC insolvency proceedings, SARFAESI enforcement, and project finance for lenders and developers.',
    image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg',
    jurisdictions: ['India'],
  },
  {
    name: 'Pooja Chadha',
    title: 'Senior Associate',
    specialisation: 'Tax & Regulatory',
    bio: 'Chartered Accountant and LLB holder. Advises on GST structuring, FEMA compliance, and transfer pricing for multinational groups and family offices.',
    image: 'https://images.pexels.com/photos/5792627/pexels-photo-5792627.jpeg',
    jurisdictions: ['India', 'US'],
  },
];

export default function Team() {
  return (
    <section id="team" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="divider" />
              <span className="label-tag">Our People</span>
            </div>
            <h2 className="section-heading">The Team</h2>
          </div>
          <p className="text-ink-500 text-[15px] leading-relaxed md:max-w-md">
            Senior counsel with deep expertise, hands-on partner involvement, and
            proven track records in their respective domains.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group">
              {/* Image */}
              <div className="relative overflow-hidden mb-5 h-72">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                {/* Bio overlay */}
                <div className="absolute inset-0 bg-ink-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white/80 text-xs leading-relaxed">{member.bio}</p>
                </div>
                {/* Jurisdiction tags */}
                <div className="absolute top-4 left-4 flex gap-1">
                  {member.jurisdictions.map((j) => (
                    <span key={j} className="text-[9px] font-bold tracking-[0.15em] uppercase px-2 py-0.5 bg-white text-ink-950">
                      {j}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-lg text-ink-950 font-semibold leading-tight">{member.name}</h3>
                  <div className="text-ink-500 text-xs mt-1">{member.title}</div>
                  <div className="text-ink-400 text-[10px] mt-1 tracking-[0.1em] uppercase">{member.specialisation}</div>
                </div>
                <div className="flex gap-1.5 mt-0.5">
                  <button className="w-7 h-7 border border-ink-200 hover:bg-ink-950 hover:border-ink-950 flex items-center justify-center transition-colors group/btn">
                    <Linkedin className="w-3 h-3 text-ink-400 group-hover/btn:text-white" />
                  </button>
                  <button className="w-7 h-7 border border-ink-200 hover:bg-ink-950 hover:border-ink-950 flex items-center justify-center transition-colors group/btn">
                    <Mail className="w-3 h-3 text-ink-400 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-ink-100 text-center">
          <a href="#contact" className="btn-outline">View All Professionals</a>
        </div>
      </div>
    </section>
  );
}
