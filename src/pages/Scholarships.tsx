import { Link } from "react-router-dom";
import { Download, CheckCircle, Calendar, AlertCircle } from "lucide-react";

const PageHero = () => (
  <section
    className="relative py-32 flex items-center"
    style={{
      backgroundImage:
        "url(https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1920&q=80)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />
    <div className="relative z-10 max-w-4xl mx-auto px-4">
      <p className="text-white/80 tracking-[0.25em] uppercase text-xs font-source_sans_pro mb-3 drop-shadow">
        Invest in Your Future
      </p>
      <h1 className="font-playfair text-5xl md:text-6xl text-white mb-4 drop-shadow-lg">
        Scholarships
      </h1>
      <p className="text-white/80 text-lg leading-relaxed max-w-2xl font-source_sans_pro drop-shadow">
        Financial assistance for Garland County students pursuing music-related
        degrees at accredited institutions of higher education.
      </p>
    </div>
  </section>
);

const Letter = () => (
  <section className="bg-cream py-20">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-burgundy text-xs tracking-widest uppercase font-source_sans_pro mb-3">
          From the Committee
        </p>
        <h2 className="font-playfair text-4xl text-navy mb-4">
          A Message to Music Teachers
        </h2>
        <div className="w-14 h-0.5 bg-gold mx-auto" />
      </div>
      <div className="bg-white border border-cream-dark shadow-sm p-10 border-l-4 border-l-burgundy">
        <p className="text-navy font-semibold mb-5 font-source_sans_pro">
          Dear Music Teachers of Garland County Students,
        </p>
        <p className="text-navy/65 leading-relaxed mb-4 font-source_sans_pro">
          The Hot Springs Music Club will be holding our annual scholarship
          auditions in the spring at the{" "}
          <strong className="text-navy">
            First United Methodist Church on Central Avenue
          </strong>
          . Students from Garland County who are seeking a music-related degree
          — or plan to seek a music-related degree — at any accredited
          institution of higher education are eligible to audition.
        </p>
        <p className="text-navy/65 leading-relaxed mb-4 font-source_sans_pro">
          The amount and number of scholarships awarded will be determined by
          the quantity of applicants and the quality of the auditions.
        </p>
        <p className="text-navy/65 leading-relaxed mb-8 font-source_sans_pro">
          If you have interested and qualified students, please pass the
          information on to them. Students may also download the application
          forms below. Feel free to reproduce additional copies as needed and
          contact us with any questions.
        </p>
        <div className="border-t border-cream-dark pt-6">
          <p className="text-navy/70 text-sm font-source_sans_pro">
            Sincerely,
          </p>
          <p className="font-playfair text-2xl text-navy mt-1">
            Sheree O&#39;Rorke
          </p>
          <p className="text-navy/55 text-sm mt-0.5 font-source_sans_pro">
            Chair, Scholarship Committee
          </p>
        </div>
      </div>
    </div>
  </section>
);

const EligibilityAndDates = () => (
  <section className="bg-cream-dark py-20">
    <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-14">
      <div>
        <p className="text-burgundy text-xs tracking-widest uppercase font-source_sans_pro mb-3">
          Requirements
        </p>
        <h2 className="font-playfair text-3xl text-navy mb-7">
          Eligibility Criteria
        </h2>
        <ul className="space-y-4">
          {[
            "Must be a student from Garland County",
            "Seeking or planning to seek a music-related degree",
            "Enrolled or accepted at an accredited institution of higher education",
            "Must participate in a live audition",
            "All musical disciplines welcome — vocal, instrumental, or music education",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle size={17} className="text-gold mt-0.5 shrink-0" />
              <span className="text-navy/65 text-sm leading-relaxed font-source_sans_pro">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-burgundy text-xs tracking-widest uppercase font-source_sans_pro mb-3">
          Important Dates
        </p>
        <h2 className="font-playfair text-3xl text-navy mb-7">Key Deadlines</h2>
        <div className="space-y-4">
          {[
            {
              Icon: Calendar,
              label: "Application Deadline",
              value:
                "April 15, 2026 — submit completed forms to the Scholarship Committee",
            },
            {
              Icon: Calendar,
              label: "Audition Date",
              value:
                "Spring 2026 — First United Methodist Church, Central Avenue, Hot Springs",
            },
            {
              Icon: AlertCircle,
              label: "Award Notification",
              value: "Recipients notified promptly following the auditions",
            },
          ].map(({ Icon, label, value }) => (
            <div
              key={label}
              className="flex gap-4 items-start bg-white p-5 border-l-2 border-gold"
            >
              <Icon size={16} className="text-burgundy mt-0.5 shrink-0" />
              <div>
                <p className="text-navy font-semibold text-sm mb-0.5 font-source_sans_pro">
                  {label}
                </p>
                <p className="text-navy/55 text-sm font-source_sans_pro">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ApplicationDownload = () => (
  <section className="bg-navy py-20">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <p className="text-gold tracking-[0.25em] uppercase text-xs font-source_sans_pro mb-4">
        Ready to Apply?
      </p>
      <h2 className="font-playfair text-4xl text-cream mb-5">
        2026 Scholarship Application
      </h2>
      <p className="text-cream/65 mb-10 leading-relaxed font-source_sans_pro">
        Download the official scholarship application form. Complete all
        sections and submit by April 15, 2026. Music teachers may reproduce
        additional copies for qualified students.
      </p>
      <a
        href="https://irp.cdn-website.com/b6e33f4b/files/uploaded/Scholarship_App_2025.docx"
        className="inline-flex items-center gap-3 bg-black hover:bg-neutral-800 text-white px-10 py-5 font-source_sans_pro tracking-wide transition-colors rounded-lg"
      >
        <Download size={19} />
        Download 2026 Scholarship Application
      </a>
      <p className="text-cream/35 text-xs mt-5 font-source_sans_pro">
        .DOCX format &middot; Questions? Contact Tom Bolton at
        tbolton728@gmail.com
      </p>
    </div>
  </section>
);

// ─── Update this list to add new scholarship recipients ──────────────────────
const SCHOLARSHIP_WINNERS: { year: string; recipients: string[] }[] = [
  {
    year: "2022–2023",
    recipients: ["Carlee McCrary", "Catie Canu", "Jacob Happy"],
  },
  // { year: "2023–2024", recipients: ["First Last", "First Last"] },
  // { year: "2024–2025", recipients: ["First Last"] },
];

const PastRecipients = () => (
  <section className="bg-cream py-20">
    <div className="max-w-3xl mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-burgundy text-xs tracking-widest uppercase font-source_sans_pro mb-3">
          Honoring Excellence
        </p>
        <h2 className="font-playfair text-4xl text-navy mb-5">
          Scholarship Recipients
        </h2>
        <p className="text-navy/60 max-w-2xl mx-auto leading-relaxed font-source_sans_pro">
          Dr. Tom Bolton, President of the Hot Springs Music Club, announced
          that the organization awarded college music scholarships for the
          2022–2023 academic year. Three applicants were successful in their
          auditions.
        </p>
        <div className="w-14 h-0.5 bg-gold mx-auto mt-8" />
      </div>

      <div className="space-y-10">
        {SCHOLARSHIP_WINNERS.map(({ year, recipients }) => (
          <div key={year}>
            <h3 className="font-playfair text-2xl text-navy mb-5 text-center">
              {year} Academic Year
            </h3>
            <ul className="divide-y divide-cream-dark">
              {recipients.map((name) => (
                <li
                  key={name}
                  className="flex items-center justify-between py-4 px-6 bg-white hover:bg-cream-dark/40 transition-colors"
                >
                  <span className="font-playfair text-lg text-navy">
                    {name}
                  </span>
                  <span className="text-burgundy text-[10px] tracking-widest uppercase font-source_sans_pro bg-burgundy/8 px-3 py-1 border border-burgundy/20">
                    Scholarship Recipient
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Scholarships = () => (
  <div>
    <PageHero />
    <Letter />
    <EligibilityAndDates />
    <ApplicationDownload />
    <PastRecipients />
  </div>
);
