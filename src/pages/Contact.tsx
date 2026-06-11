import { useState } from "react";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const PageHero = () => (
  <section
    className="relative py-32 flex items-center"
    style={{
      backgroundImage:
        "url(https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&w=1920&q=80)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />
    <div className="relative z-10 max-w-4xl mx-auto px-4">
      <p className="text-white/80 tracking-[0.25em] uppercase text-xs font-source_sans_pro mb-3 drop-shadow">
        We&#39;d Love to Hear from You
      </p>
      <h1 className="font-playfair text-5xl md:text-6xl text-white mb-4 drop-shadow-lg">
        Contact Us
      </h1>
      <p className="text-white/80 text-lg leading-relaxed max-w-2xl font-source_sans_pro drop-shadow">
        Questions about scholarships, events, membership, or donations? Reach
        out to the club officers below.
      </p>
    </div>
  </section>
);

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const RECIPIENT = "tbolton728@gmail.com";
const PHONE = "(502) 889-1520";
const ADDRESS_LINE1 = "132 Apple Blossom Circle";
const ADDRESS_LINE2 = "Hot Springs National Park, Arkansas 71913";

const ContactForm = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || "General Inquiry");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputCls =
    "w-full border border-cream-dark bg-white px-4 py-3 text-sm text-navy font-source_sans_pro focus:outline-none focus:border-gold transition-colors placeholder:text-navy/30";

  return (
    <section className="bg-navy py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gold tracking-[0.25em] uppercase text-xs font-source_sans_pro mb-3">
            Send a Message
          </p>
          <h2 className="font-playfair text-4xl text-cream">Get in Touch</h2>
          <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />

          {/* Contact details */}
          <div className="mt-8 flex flex-col items-center gap-3 text-sm font-source_sans_pro text-cream/75">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-gold shrink-0" />
              <span>
                {ADDRESS_LINE1},&nbsp;{ADDRESS_LINE2}
              </span>
            </span>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-8">
              <span className="flex items-center gap-2">
                <Phone size={14} className="text-gold shrink-0" />
                {PHONE}
              </span>
              <span className="flex items-center gap-2">
                <Mail size={14} className="text-gold shrink-0" />
                {RECIPIENT}
              </span>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="bg-navy-light border border-gold p-10 text-center">
            <div className="text-gold text-4xl mb-4">&#9654;</div>
            <h3 className="font-playfair text-2xl text-cream mb-3">
              Thank you for reaching out!
            </h3>
            <p className="text-cream/65 font-source_sans_pro">
              We appreciate your message and will be in touch as soon as
              possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-cream/70 text-xs tracking-widests uppercase mb-1.5 font-source_sans_pro">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputCls}
                />
              </div>
              <div>
                <label className="block text-cream/70 text-xs tracking-widests uppercase mb-1.5 font-source_sans_pro">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputCls}
                />
              </div>
            </div>
            <div>
              <label className="block text-cream/70 text-xs tracking-widests uppercase mb-1.5 font-source_sans_pro">
                Subject
              </label>
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={inputCls}
              >
                <option value="">Select a subject</option>
                <option value="Scholarship Inquiry">Scholarship Inquiry</option>
                <option value="Membership">Membership</option>
                <option value="Donation / Support">Donation / Support</option>
                <option value="Events">Events</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>
            <div>
              <label className="block text-cream/70 text-xs tracking-widests uppercase mb-1.5 font-source_sans_pro">
                Message *
              </label>
              <textarea
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder="How can we help you?"
                className={`${inputCls} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black hover:bg-neutral-800 text-white py-4 font-source_sans_pro tracking-widest uppercase text-sm transition-colors rounded-lg flex items-center justify-center gap-2"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

const FederationLinks = () => (
  <section className="bg-cream-dark py-14 border-t border-gold/20">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <p className="text-navy/45 text-xs tracking-widests uppercase font-source_sans_pro mb-7">
        Our Affiliations
      </p>
      <div className="flex flex-col md:flex-row gap-5 justify-center">
        {[
          {
            name: "National Federation of Music Clubs",
            url: "https://www.nfmc-music.org",
          },
          {
            name: "Hot Springs Music Club Website",
            url: "https://www.hotspringsmusicclub.com",
          },
        ].map(({ name, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gold/35 px-8 py-3 text-navy font-source_sans_pro text-sm hover:border-gold hover:text-burgundy transition-colors"
          >
            {name}
            <ExternalLink size={13} />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export const Contact = () => {
  usePageMeta({
    title: "Contact Us",
    description:
      "Contact Hot Springs Music Connection for scholarship inquiries, membership, donations, or general questions. Reach us at 132 Apple Blossom Circle, Hot Springs, AR.",
  });
  return (
    <div>
      <PageHero />
      <ContactForm />
      <FederationLinks />
    </div>
  );
};
