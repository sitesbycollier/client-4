import { Link } from "react-router-dom";
import {
  Download,
  Send,
  FileText,
  CheckCircle,
  Heart,
  Star,
  Award,
  Users,
} from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const MEMBERSHIP_STEPS = [
  {
    icon: Download,
    step: "1",
    title: "Download the Form",
    description:
      "Click the button below to download the membership application as a Word document.",
  },
  {
    icon: FileText,
    step: "2",
    title: "Complete the Form",
    description:
      "Fill out all sections of the application, including your contact information and musical background.",
  },
  {
    icon: Send,
    step: "3",
    title: "Mail Your Application",
    description:
      "Print and mail your completed form with a $30 check made out to HSMC to the address printed at the bottom of the application.",
  },
  {
    icon: CheckCircle,
    step: "4",
    title: "We'll Be in Touch",
    description:
      "A club representative will follow up with you about next steps and upcoming HSMC-sponsored program dates.",
  },
];

const GIVING_LEVELS = [
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
];

const IMPACT_METRICS = [
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
];

export const GetInvolved = () => {
  usePageMeta({
    title: "Get Involved",
    description:
      "Join Hot Springs Music Connection through membership, donations, sponsorships, and legacy giving to support music education in Garland County.",
  });

  return (
    <main className="bg-cream min-h-screen">
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/80 tracking-[0.25em] uppercase text-xs font-source_sans_pro mb-3 drop-shadow">
            Join + Give
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl text-white mb-4 drop-shadow-lg">
            Get Involved
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl font-source_sans_pro drop-shadow">
            Become a member, make a donation, sponsor events, or create a legacy
            gift to help fund scholarships for young musicians in Hot Springs
            and Garland County.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-burgundy text-xs tracking-widest uppercase font-source_sans_pro mb-3">
                Why It Matters
              </p>
              <h2 className="font-playfair text-4xl text-navy mb-6 leading-tight">
                One Place to Join and Support
              </h2>
              <p className="text-navy/65 leading-relaxed mb-5 font-source_sans_pro">
                For over 75 years, the Hot Springs Music Connection has relied on
                members, donors, and local partners to sustain scholarships and
                music opportunities for students.
              </p>
              <p className="text-navy/65 leading-relaxed mb-5 font-source_sans_pro">
                Whether you join as a member, give financially, or sponsor a
                club event, your support directly strengthens music education in
                our community.
              </p>
              <p className="text-navy/65 leading-relaxed font-source_sans_pro">
                Every contribution helps keep this mission active, local, and
                focused on students and families in Garland County.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {IMPACT_METRICS.map(({ Icon, label, desc }) => (
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

      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-burgundy/70 text-xs tracking-[0.3em] uppercase font-source_sans_pro mb-3">
            Membership
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-navy">
            Four Simple Steps to Join
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {MEMBERSHIP_STEPS.map(({ icon: Icon, step, title, description }) => (
            <div
              key={step}
              className="bg-white rounded-xl p-7 shadow-sm border border-gold/15 flex flex-col items-start gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-burgundy/10 text-burgundy text-sm font-bold font-source_sans_pro flex items-center justify-center shrink-0">
                  {step}
                </span>
                <Icon size={18} className="text-gold" />
              </div>
              <div>
                <h3 className="font-playfair text-lg text-navy mb-2">
                  {title}
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed font-source_sans_pro">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-navy py-20 rounded-xl">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-source_sans_pro mb-4">
              Get Started
            </p>
            <h3 className="font-playfair text-3xl md:text-4xl text-cream mb-4">
              Ready to Join?
            </h3>
            <div className="w-14 h-0.5 bg-gold mx-auto mb-8" />
            <p className="text-cream/70 font-source_sans_pro mb-10 max-w-lg mx-auto leading-relaxed">
              Download and print the membership application form below. Mail
              your completed form along with a{" "}
              <span className="text-gold font-medium">
                $30 check made out to HSMC
              </span>{" "}
              to the mailing address printed at the bottom of the application.
            </p>
            <a
              href="/assets/docs/HSMC_Annual_Membership_Form.docx"
              download="HSMC-Membership-Application.docx"
              className="inline-flex items-center gap-2.5 bg-black hover:bg-neutral-800 text-white font-source_sans_pro text-sm tracking-wide uppercase px-8 py-3.5 rounded-lg transition-colors shadow"
            >
              <Download size={17} />
              Download Application
            </a>
            <p className="text-cream/35 text-xs mt-5 font-source_sans_pro">
              .DOCX format &middot; Questions? Contact Tom Bolton at
              tbolton728@gmail.com
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.25em] uppercase text-xs font-source_sans_pro mb-4">
            Individual Giving
          </p>
          <h2 className="font-playfair text-4xl text-cream mb-5">
            Make a Donation
          </h2>
          <p className="text-cream/65 leading-relaxed mb-12 max-w-2xl mx-auto font-source_sans_pro">
            Every contribution, regardless of size, helps Hot Springs Music
            Connection continue its mission of supporting young musicians. Gifts may
            be made in memory or honor of a loved one who supported music
            education.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
            {GIVING_LEVELS.map(({ level, range, highlight, perks }) => (
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
                <h3 className="font-playfair text-2xl text-cream mb-1">
                  {level}
                </h3>
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

      <section className="bg-cream-dark py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-burgundy text-xs tracking-widest uppercase font-source_sans_pro mb-3">
              For Businesses
            </p>
            <h2 className="font-playfair text-4xl text-navy">
              Sponsorships and Legacy Giving
            </h2>
            <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white border border-cream-dark p-8 border-l-4 border-l-gold">
              <h3 className="font-playfair text-2xl text-navy mb-5">
                Event Sponsorship Benefits
              </h3>
              <ul className="space-y-3">
                {[
                  "Recognition in event programs and promotional materials",
                  "Acknowledgment at scholarship auditions and recitals",
                  "Featured listing on club communications",
                  "Association with 75 years of community musical heritage",
                  "Support for local student musicians in Garland County",
                ].map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-navy/65 text-sm font-source_sans_pro"
                  >
                    <span className="text-gold mt-0.5 shrink-0">&#9654;</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5 text-navy/65 leading-relaxed font-source_sans_pro">
              <p>
                Local businesses and community organizations are invited to
                sponsor annual scholarship auditions, member recitals, and club
                performances.
              </p>
              <p>
                Named scholarships and endowment gifts are also welcome. Legacy
                giving is a meaningful way to honor a teacher, family member, or
                mentor while investing in future student musicians.
              </p>
              <p>
                For sponsorship or legacy inquiries, please contact us directly.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-block bg-black hover:bg-neutral-800 text-white px-8 py-4 font-source_sans_pro transition-colors tracking-wide rounded-lg"
                >
                  Inquire About Sponsorships or Legacy Giving
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
