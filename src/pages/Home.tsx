import { Link } from "react-router-dom";
import { Award, Calendar, Users, BookOpen, Heart, Star } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

// ── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => (
  <section className="w-full">
    <img
      src="https://c.animaapp.com/mq88tjouY4jneQ/img/uploaded-asset-1781280147292-0.png"
      alt="Where Music Meets Community — Hot Springs Music Connection"
      className="w-full block"
    />
  </section>
);

// ── Impact Stats ─────────────────────────────────────────────────────────────
const ImpactStats = () => (
  <section className="bg-cream py-16 border-b border-gold/20">
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {[
          { value: "75+", label: "Years of Service" },
          { value: "1951", label: "Year Founded" },
          { value: "100s", label: "Scholarships Awarded" },
          { value: "2", label: "Federation Affiliations" },
        ].map(({ value, label }) => (
          <div key={label}>
            <p className="font-playfair text-4xl text-burgundy mb-1">{value}</p>
            <p className="text-navy/55 text-xs tracking-[0.2em] uppercase font-source_sans_pro">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── Mission ───────────────────────────────────────────────────────────────────
const Mission = () => (
  <section className="bg-cream-dark py-24">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <p className="text-burgundy text-xs tracking-widest uppercase font-source_sans_pro mb-4">
        Our Purpose
      </p>
      <h2 className="font-playfair text-4xl md:text-5xl text-navy mb-8">
        Music Education &amp; Community
      </h2>
      <div className="w-14 h-0.5 bg-gold mx-auto mb-10" />
      <blockquote className="font-playfair text-xl md:text-2xl text-navy/80 italic leading-relaxed">
        &ldquo;Hot Springs Music Connection exists to celebrate and showcase a
        wide array of artistic music styles both within and outside our
        organization while nurturing the education of young musicians and the
        traditions of American music. Since 1951, the organization has worked to
        foster a lifelong appreciation of music while encouraging artistic
        excellence throughout the Hot Springs community.&rdquo;
      </blockquote>
    </div>
  </section>
);

const Affiliations = () => (
  <section className="bg-cream py-16 border-y border-gold/20">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <p className="text-burgundy text-xs tracking-widest uppercase font-source_sans_pro mb-3">
        Affiliated Since 1951
      </p>
      <h2 className="font-playfair text-3xl text-navy mb-8">
        Federation Affiliations
      </h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {[
          {
            name: "National Federation of Music Clubs",
            logo: "assets/images/NFMC.png",
          },
          {
            name: "Arkansas Federation of Music Clubs",
            logo: "assets/images/FMC.png",
          },
        ].map((affiliation) => (
          <div
            key={affiliation.name}
            className="bg-cream-dark border-l-4 border-burgundy p-6 flex flex-col items-center"
          >
            <img
              src={affiliation.logo}
              alt={`${affiliation.name} logo`}
              className="h-28 w-28 object-contain mb-5"
            />
            <p className="font-playfair text-xl text-navy">
              {affiliation.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── Mission Pillars ───────────────────────────────────────────────────────────
const MissionPillars = () => (
  <section className="bg-cream py-24">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-burgundy text-xs tracking-widest uppercase font-source_sans_pro mb-3">
          What We Do
        </p>
        <h2 className="font-playfair text-4xl text-navy">
          Five Pillars of Our Mission
        </h2>
        <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          {
            icon: <BookOpen size={22} className="text-gold" />,
            theme: "Music Education",
            desc: "Supporting young musicians through scholarships and opportunities.",
          },
          {
            icon: <Users size={22} className="text-gold" />,
            theme: "Community",
            desc: "Bringing music appreciation to all residents of Hot Springs.",
          },
          {
            icon: <Star size={22} className="text-gold" />,
            theme: "Excellence",
            desc: "Encouraging high standards in musical achievement.",
          },
          {
            icon: <Heart size={22} className="text-gold" />,
            theme: "Heritage",
            desc: "Serving our community with pride in our 75-year history.",
          },
          {
            icon: <Award size={22} className="text-gold" />,
            theme: "Accessibility",
            desc: "Making music appreciation available to everyone.",
          },
        ].map(({ icon, theme, desc }) => (
          <div
            key={theme}
            className="bg-cream-dark p-7 border-t-4 border-burgundy text-center hover:shadow-md transition-shadow"
          >
            <div className="flex justify-center mb-4">{icon}</div>
            <h3 className="font-playfair text-lg text-navy mb-2">{theme}</h3>
            <p className="text-navy/55 text-xs leading-relaxed font-source_sans_pro">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── Scholarship CTA ───────────────────────────────────────────────────────────
const ScholarshipCTA = () => (
  <section className="bg-navy py-24 relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1920&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
      <p className="text-gold tracking-[0.3em] uppercase text-xs font-source_sans_pro mb-4">
        For Students &amp; Families
      </p>
      <h2 className="font-playfair text-4xl md:text-5xl text-cream mb-6">
        Scholarship Auditions
      </h2>
      <div className="w-14 h-0.5 bg-gold mx-auto mb-8" />
      <p className="text-cream/70 leading-relaxed mb-4 font-source_sans_pro max-w-2xl mx-auto">
        Each spring, Hot Springs Music Connection holds competitive auditions
        open to student musicians throughout Garland County. Scholarships are
        awarded to exceptional students who demonstrate musical talent and
        dedication.
      </p>
      <p className="text-cream/55 text-sm mb-10 font-source_sans_pro">
        Auditions held at First United Methodist Church on Central Avenue, Hot
        Springs.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/scholarships"
          className="inline-block bg-black hover:bg-neutral-800 text-white px-10 py-3.5 font-source_sans_pro text-sm tracking-wide uppercase transition-colors rounded-lg"
        >
          Scholarship Details
        </Link>
        <Link
          to="/contact"
          className="inline-block bg-black hover:bg-neutral-800 text-white px-10 py-3.5 font-source_sans_pro text-sm tracking-wide uppercase transition-colors rounded-lg"
        >
          Contact Us
        </Link>
      </div>
    </div>
  </section>
);

// ── Upcoming Events Preview ───────────────────────────────────────────────────
const PUBLIC_PROGRAMS = [
  {
    title: "A Tapestry of Sound",
    date: "Sunday, September 13, 2026",
    time: "3:00 pm",
    venue: "St. Luke's Episcopal Church Parish Hall",
    address: "228 Spring Street",
  },
  {
    title: "A Chamber Music Sampler",
    date: "Sunday, October 11, 2026",
    time: "3:00 pm",
    venue: "St. Mary of the Springs Catholic Church Parish Hall",
    address: "100 Central Avenue",
  },
  {
    title: "Sounds of the American Spirit",
    date: "Sunday, November 8, 2026",
    time: "3:00 pm",
    venue: "First United Methodist Church Cupp Hall",
    address: "1100 Central Avenue",
  },
  {
    title: "A Heritage of Sound: 1000 Years of Music in Hot Springs",
    date: "Sunday, January 10, 2027",
    time: "3:00 pm",
    venue: "Place TBA",
    address: "",
  },
  {
    title: "Mutual Admiration: SAI and HSMC",
    date: "Saturday, February 13, 2027",
    time: "3:00 pm",
    venue: "First Presbyterian Church",
    address: "213 Whittington Avenue",
  },
  {
    title: "Music of the Church: Where Faith Finds a Voice",
    date: "Sunday, March 14, 2027",
    time: "3:00 pm",
    venue: "TBA",
    address: "",
  },
  {
    title: "From Highlands to Heartland: The Celtic Thread in American Song",
    date: "Sunday, April 25, 2027",
    time: "3:00 pm",
    venue: "TBA",
    address: "",
  },
  {
    title: "The Promise of Tomorrow: The Next Generation in Recital",
    date: "Sunday, May 16, 2027",
    time: "3:00 pm",
    venue: "Grand Avenue United Methodist Church",
    address: "841 Quapaw Avenue",
  },
];

const EventsPreview = () => (
  <section className="bg-cream py-24">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
        <div>
          <p className="text-burgundy text-xs tracking-widest uppercase font-source_sans_pro mb-3">
            Mark Your Calendar
          </p>
          <h2 className="font-playfair text-4xl text-navy">
            Calendar of Events
          </h2>
          <p className="text-navy/60 font-source_sans_pro mt-3">
            Free public programs and other HSMC-sponsored events.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {PUBLIC_PROGRAMS.map(({ title, date, time, venue, address }) => (
          <div
            key={title}
            className="bg-cream-dark p-7 border-b-4 border-gold hover:shadow-md transition-shadow"
          >
            <span className="inline-block text-xs tracking-widest uppercase text-burgundy font-source_sans_pro bg-burgundy/10 px-2.5 py-1 mb-4">
              Free Public Program
            </span>
            <h3 className="font-playfair text-xl text-navy mb-1">{title}</h3>
            <p className="text-navy/70 text-sm font-source_sans_pro mb-3">
              {time}, {date}
            </p>
            <p className="text-navy/55 text-sm leading-relaxed font-source_sans_pro">
              {venue}
              {address && (
                <>
                  <br />
                  {address}
                </>
              )}
            </p>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {[
          {
            title: "Annual Scholarship Auditions",
            date: "Spring 2027",
            details:
              "Competitive auditions open to student musicians throughout Garland County. Contact Peggy Stratton for application details.",
          },
          {
            title: "Junior Festival",
            date: "2027 Date TBA",
            details: "Westminster Presbyterian Church, 3819 Central Avenue.",
          },
          {
            title: "National Music Week",
            date: "May 2-9, 2027",
            details:
              "A national celebration of music supported by HSMC-sponsored programs and community music activities.",
          },
        ].map(({ title, date, details }) => (
          <div key={title} className="bg-navy p-6">
            <p className="text-gold text-xs tracking-widest uppercase font-source_sans_pro mb-2">
              Other Event
            </p>
            <h3 className="font-playfair text-xl text-cream mb-1">{title}</h3>
            <p className="text-cream/75 text-sm font-source_sans_pro mb-3">
              {date}
            </p>
            <p className="text-cream/60 text-sm leading-relaxed font-source_sans_pro">
              {details}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── Audience Quick Links ──────────────────────────────────────────────────────
const AudienceLinks = () => (
  <section className="bg-cream-dark py-20">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-burgundy text-xs tracking-widest uppercase font-source_sans_pro mb-3">
          Find What You Need
        </p>
        <h2 className="font-playfair text-4xl text-navy">
          How Can We Help You?
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          {
            audience: "Students",
            icon: <BookOpen size={26} className="text-burgundy" />,
            links: [
              { to: "/scholarships", label: "Apply for a Scholarship" },
              { to: "/scholarships", label: "Audition Details" },
              { to: "/contact", label: "Ask a Question" },
            ],
          },
          {
            audience: "Parents",
            icon: <Users size={26} className="text-burgundy" />,
            links: [
              { to: "/scholarships", label: "Scholarship Details" },
              { to: "/education", label: "Find a Teacher" },
              { to: "/contact", label: "Contact Us" },
            ],
          },
          {
            audience: "Donors",
            icon: <Heart size={26} className="text-burgundy" />,
            links: [
              { to: "/get-involved", label: "Support Us" },
              { to: "/get-involved", label: "Fund a Scholarship" },
              { to: "/about", label: "Our Impact" },
            ],
          },
          {
            audience: "Members",
            icon: <Calendar size={26} className="text-burgundy" />,
            links: [
              { to: "/about", label: "Club History" },
              { to: "/contact", label: "Get in Touch" },
              { to: "/get-involved", label: "Volunteer" },
            ],
          },
        ].map(({ audience, icon, links }) => (
          <div
            key={audience}
            className="bg-cream p-7 border-t-4 border-burgundy"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="font-playfair text-xl text-navy mb-4">{audience}</h3>
            <ul className="space-y-2.5">
              {links.map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-navy/65 hover:text-burgundy text-sm font-source_sans_pro transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── Support Banner ────────────────────────────────────────────────────────────
const SupportBanner = () => (
  <section className="bg-burgundy py-16">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="font-playfair text-4xl text-cream mb-4">
        Support Music Education in Hot Springs
      </h2>
      <p className="text-cream/70 leading-relaxed mb-8 font-source_sans_pro max-w-2xl mx-auto">
        Your generosity directly funds scholarships for exceptional young
        musicians in our community. Every contribution strengthens the legacy of
        music education in Hot Springs.
      </p>
      <Link
        to="/get-involved"
        className="inline-block bg-black hover:bg-neutral-800 text-white px-10 py-3.5 font-source_sans_pro text-sm tracking-wide uppercase transition-colors rounded-lg"
      >
        Support Us
      </Link>
    </div>
  </section>
);

// ── Page export ───────────────────────────────────────────────────────────────
export const Home = () => {
  usePageMeta({
    title: "Home",
    description:
      "Hot Springs Music Connection has supported music education and artistic excellence in Hot Springs, Arkansas since 1951. Learn about scholarships, find a teacher, and join us.",
  });
  return (
    <div>
      <Hero />
      <ImpactStats />
      <Mission />
      <Affiliations />
      <MissionPillars />
      <ScholarshipCTA />
      <EventsPreview />
      <AudienceLinks />
      <SupportBanner />
    </div>
  );
};
