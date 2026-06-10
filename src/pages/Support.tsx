import { Link } from "react-router-dom";
import { Heart, Star, Award, Users } from "lucide-react";

const PageHero = () => (
  <section
    className="relative py-32 flex items-center"
    style={{
      backgroundImage:
        "url(https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=1920&q=80)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />
    <div className="relative z-10 max-w-4xl mx-auto px-4">
      <p className="text-white/80 tracking-[0.25em] uppercase text-xs font-source_sans_pro mb-3 drop-shadow">
        Make a Difference
      </p>
      <h1 className="font-playfair text-5xl md:text-6xl text-white mb-4 drop-shadow-lg">
        Support the Club
      </h1>
      <p className="text-white/80 text-lg leading-relaxed max-w-2xl font-source_sans_pro drop-shadow">
        Your generosity directly funds scholarships for the next generation of
        musicians in Hot Springs and Garland County.
      </p>
    </div>
  </section>
);

const WhySupport = () => (
  <section className="bg-cream py-20">
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-burgundy text-xs tracking-widets uppercase font-source_sans_pro mb-3">
            Why It Matters
          </p>
          <h2 className="font-playfair text-4xl text-navy mb-6 leading-tight">
            Investing in Music Education
          </h2>
          <p className="text-navy/65 leading-relaxed mb-5 font-source_sans_pro">
            For over 75 years, the Hot Springs Music Club has relied on the
            generosity of community members, local businesses, and music
            advocates to fund scholarships for talented young musicians.
          </p>
          <p className="text-navy/65 leading-relaxed mb-5 font-source_sans_pro">
            Your donation goes directly toward supporting Garland County
            students who are pursuing music degrees and careers — students who
            might not otherwise have the financial means to continue their
            musical education.
          </p>
          <p className="text-navy/65 leading-relaxed font-source_sans_pro">
            The Hot Springs Music Club is a non-commercial, community-focused
            organization. Every dollar donated is channeled back into the
            community through scholarships and programming.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {[
            {
              Icon: Award,
              label: "Scholarships Funded",
              desc: "Direct financial aid for music students",
            },
            {
              Icon: Users,
              label: "Students Supported",
              desc: "Dozens of Garland County musicians aided",
            },
            {
              Icon: Heart,
              label: "Community Driven",
              desc: "100% non-commercial, contributor-funded",
            },
            {
              Icon: Star,
              label: "75+ Years",
              desc: "A legacy of supporting musical excellence",
            },
          ].map(({ Icon, label, desc }) => (
            <div
              key={label}
              className="bg-cream-dark p-5 border-t-2 border-gold"
            >
              <Icon size={22} className="text-burgundy mb-3" />
              <h4 className="font-playfair text-base text-navy mb-1">
                {label}
              </h4>
              <p className="text-navy/55 text-xs font-source_sans_pro">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const DonationInfo = () => (
  <section className="bg-navy py-20">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <p className="text-gold tracking-[0.25em] uppercase text-xs font-source_sans_pro mb-4">
        Individual Giving
      </p>
      <h2 className="font-playfair text-4xl text-cream mb-5">
        Make a Donation
      </h2>
      <p className="text-cream/65 leading-relaxed mb-12 max-w-2xl mx-auto font-source_sans_pro">
        Every contribution, regardless of size, helps the Hot Springs Music Club
        continue its mission of supporting young musicians. Gifts may be made in
        memory or honor of a loved one who supported music education.
      </p>
      <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
        {[
          {
            level: "Friend",
            range: "Any Amount",
            perks: [
              "Recognition in club programs",
              "Satisfaction of supporting local music education",
              "Invitation to member events",
            ],
          },
          {
            level: "Patron",
            range: "Suggested: $50–$249",
            highlight: true,
            perks: [
              "All Friend benefits",
              "Named recognition in scholarship materials",
              "Annual newsletter and updates",
            ],
          },
          {
            level: "Benefactor",
            range: "Suggested: $250+",
            perks: [
              "All Patron benefits",
              "Named scholarship consideration",
              "Special recognition at annual events",
            ],
          },
        ].map(({ level, range, highlight, perks }) => (
          <div
            key={level}
            className={`p-7 border ${
              highlight ? "border-gold bg-navy-light" : "border-gold/30"
            }`}
          >
            {highlight && (
              <p className="text-gold text-[10px] tracking-widest uppercase mb-2 font-source_sans_pro">
                Popular
              </p>
            )}
            <h3 className="font-playfair text-2xl text-cream mb-1">{level}</h3>
            <p className="text-gold text-sm mb-5 font-source_sans_pro">
              {range}
            </p>
            <ul className="space-y-2">
              {perks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-start gap-2 text-cream/60 text-sm font-source_sans_pro"
                >
                  <span className="text-gold mt-0.5">&#8212;</span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Link
        to="/contact"
        className="inline-block bg-black hover:bg-neutral-800 text-white px-10 py-4 font-source_sans_pro tracking-wide transition-colors rounded-lg"
      >
        Contact Us to Donate
      </Link>
    </div>
  </section>
);

const Sponsorships = () => (
  <section className="bg-cream-dark py-20">
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-burgundy text-xs tracking-widets uppercase font-source_sans_pro mb-3">
          For Businesses
        </p>
        <h2 className="font-playfair text-4xl text-navy">Event Sponsorships</h2>
        <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-5 text-navy/65 leading-relaxed font-source_sans_pro">
          <p>
            Local businesses and community organizations are invited to sponsor
            the Hot Springs Music Club&#39;s annual scholarship auditions,
            member recitals, and community concerts.
          </p>
          <p>
            Sponsorships provide visibility for your business while directly
            supporting music education in Garland County. All sponsorship
            opportunities include recognition in event programs and club
            communications.
          </p>
          <p>
            For sponsorship inquiries, please contact the Scholarship Committee
            Chair or reach out through the contact page.
          </p>
        </div>
        <div className="bg-white border border-cream-dark p-8 border-l-4 border-l-gold">
          <h3 className="font-playfair text-2xl text-navy mb-5">
            Sponsorship Benefits
          </h3>
          <ul className="space-y-3">
            {[
              "Recognition in event programs and promotional materials",
              "Acknowledgment at scholarship auditions and recitals",
              "Featured listing on club communications",
              "Association with 75 years of community musical heritage",
              "Support for local student musicians in Garland County",
            ].map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-navy/65 text-sm font-source_sans_pro"
              >
                <span className="text-gold mt-0.5 shrink-0">&#9654;</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const LegacyGiving = () => (
  <section className="bg-cream py-20 border-t border-gold/20">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <p className="text-burgundy text-xs tracking-widets uppercase font-source_sans_pro mb-3">
        Lasting Impact
      </p>
      <h2 className="font-playfair text-4xl text-navy mb-6">Legacy Giving</h2>
      <p className="text-navy/65 leading-relaxed mb-5 max-w-2xl mx-auto font-source_sans_pro">
        A legacy gift to the Hot Springs Music Club ensures that your support
        for music education endures for generations. Named scholarships and
        endowment gifts are welcome and deeply appreciated.
      </p>
      <p className="text-navy/65 leading-relaxed mb-8 max-w-2xl mx-auto font-source_sans_pro">
        Whether in honor of a beloved teacher, family member, or music mentor, a
        named scholarship is a meaningful way to create a lasting tribute while
        investing in the musical future of Hot Springs.
      </p>
      <Link
        to="/contact"
        className="inline-block bg-black hover:bg-neutral-800 text-white px-8 py-4 font-source_sans_pro transition-colors tracking-wide rounded-lg"
      >
        Inquire About Legacy Giving
      </Link>
    </div>
  </section>
);

export const Support = () => (
  <div>
    <PageHero />
    <WhySupport />
    <DonationInfo />
    <Sponsorships />
    <LegacyGiving />
  </div>
);
