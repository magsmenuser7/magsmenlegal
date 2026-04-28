import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

const offices = [
  {
    city: 'Guntur',
    label: 'Head Office',
    address: '4th Floor, Icon Spaces, 5-98-57/5, 6th Lane, Brodipet, Guntur, AP 522002',
    phone: '+91 90449 10449',
    email: 'guntur@magsmen.com',
  },
  {
    city: 'Hyderabad',
    label: 'Corporate Office',
    address: 'Metro Pillar No. C1762, 3rd Floor, Plot No. 23, H.No. 1/90/2/A/23, Near Image Hospital, Silicon Valley, Madhapur, Hyderabad, Telangana 500081',
    phone: '+91 90449 10449',
    email: 'hyderabad@magsmen.com',
  },
  {
    city: 'Melbourne',
    label: 'Australia Office',
    address: '1/9, Fifth Avenue, Rowville, VIC, Australia 3178',
    phone: '+61 406 017 663',
    email: 'australia@magsmen.com',
  },
];

const practiceOptions = [
  'Corporate & M&A',
  'Dispute Resolution',
  'Intellectual Property',
  'Real Estate',
  'US Law Practice',
  'Immigration',
  'Employment & Labour',
  'Banking & Finance',
  'Tax & Regulatory',
  'Other',
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  practice: string;
  jurisdiction: string;
  message: string;
}

const initial: FormState = {
  name: '', email: '', phone: '', company: '',
  practice: '', jurisdiction: '', message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const { error: dbError } = await supabase.from('contact_enquiries').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        company: form.company || null,
        practice_area: form.practice || null,
        jurisdiction: form.jurisdiction || null,
        message: form.message,
      });
      if (dbError) throw dbError;
      setSubmitted(true);
      setForm(initial);
    } catch {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full border-b border-ink-200 bg-transparent px-0 py-3 text-sm text-ink-950 placeholder:text-ink-300 focus:outline-none focus:border-ink-950 transition-colors";
  const selectClass = "w-full border-b border-ink-200 bg-transparent px-0 py-3 text-sm text-ink-950 focus:outline-none focus:border-ink-950 transition-colors appearance-none";
  const labelClass = "block text-[10px] font-semibold text-ink-400 tracking-[0.2em] uppercase mb-1";

  return (
    <section id="contact" className="py-28 bg-ink-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="divider" />
              <span className="label-tag">Get in Touch</span>
            </div>
            <h2 className="section-heading">Request a<br />Consultation</h2>
          </div>
          <p className="text-ink-500 text-[15px] leading-relaxed md:max-w-md">
            Speak with one of our attorneys at no obligation. All enquiries
            receive a response within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="lg:col-span-3 bg-white p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-12 h-12 border border-ink-950 flex items-center justify-center mb-6">
                  <ArrowRight className="w-5 h-5 text-ink-950" />
                </div>
                <h3 className="font-serif text-2xl text-ink-950 mb-3">Enquiry Received</h3>
                <p className="text-ink-500 text-sm max-w-xs leading-relaxed">
                  Thank you. A member of our team will be in touch within one business day.
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-8 btn-outline">
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid sm:grid-cols-2 gap-7">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-7">
                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 or +61 number" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Company / Organisation</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your company" className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-7">
                  <div>
                    <label className={labelClass}>Practice Area</label>
                    <select name="practice" value={form.practice} onChange={handleChange} className={selectClass}>
                      <option value="">Select area</option>
                      {practiceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Jurisdiction</label>
                    <select name="jurisdiction" value={form.jurisdiction} onChange={handleChange} className={selectClass}>
                      <option value="">Select jurisdiction</option>
                      <option value="India">India</option>
                      <option value="Australia">Australia</option>
                      <option value="Cross-border India-Australia">Cross-border India–Australia</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Brief Description of Matter *</label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Please describe your legal matter..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {error && <p className="text-red-600 text-xs">{error}</p>}

                <div className="pt-4">
                  <button type="submit" disabled={submitting} className="btn-primary w-full justify-center disabled:opacity-50">
                    {submitting ? 'Submitting...' : 'Submit Enquiry'}
                    {!submitting && <ArrowRight className="w-3.5 h-3.5" />}
                  </button>
                  <p className="text-ink-400 text-[10px] text-center mt-4 tracking-wide">
                    All communications are protected by attorney-client privilege.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Offices */}
          <div className="lg:col-span-2 space-y-4">
            {offices.map((office) => (
              <div key={office.city} className="bg-white p-6 hover:bg-ink-950 group transition-all duration-300 cursor-default">
                <div className="mb-4">
                  <div className="font-serif text-lg text-ink-950 group-hover:text-white font-semibold transition-colors">{office.city}</div>
                  <div className="text-[10px] text-ink-400 group-hover:text-white/40 tracking-[0.15em] uppercase mt-0.5 transition-colors">{office.label}</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-3.5 h-3.5 text-ink-400 group-hover:text-white/40 flex-shrink-0 mt-0.5 transition-colors" />
                    <span className="text-xs text-ink-500 group-hover:text-white/50 leading-snug transition-colors">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-3.5 h-3.5 text-ink-400 group-hover:text-white/40 flex-shrink-0 transition-colors" />
                    <a href={`tel:${office.phone}`} className="text-xs text-ink-500 group-hover:text-white/50 transition-colors">{office.phone}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-3.5 h-3.5 text-ink-400 group-hover:text-white/40 flex-shrink-0 transition-colors" />
                    <a href={`mailto:${office.email}`} className="text-xs text-ink-500 group-hover:text-white/50 transition-colors">{office.email}</a>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-ink-950 p-6 flex items-start gap-3">
              <Clock className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-white text-xs font-semibold mb-1.5">Office Hours</div>
                <div className="text-white/40 text-xs leading-relaxed">
                  India: Mon–Sat, 9:00 AM – 7:00 PM IST<br />
                  Australia: Mon–Fri, 9:00 AM – 6:00 PM AEST
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
