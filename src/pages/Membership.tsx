import { Download, Mail, FileText, CheckCircle } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const STEPS = [
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
    icon: Mail,
    step: "3",
    title: "Email Your Application",
    description:
      "Save your completed form and email it to us at tbolton728@gmail.com.",
  },
  {
    icon: CheckCircle,
    step: "4",
    title: "We'll Be in Touch",
    description:
      "A club representative will follow up with you about next steps and upcoming meeting dates.",
  },
];

export const Membership = () => {
  usePageMeta({
    title: "Membership",
    description:
      "Join Hot Springs Music Connection — download the membership application, complete it, and email it to us. Become part of Hot Springs' oldest music organization.",
  });
  return (
    <main className="bg-cream min-h-screen">
      {/* Hero */}
      <section
        className="relative py-32 flex items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?auto=format&fit=crop&w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/80 tracking-[0.25em] uppercase text-xs font-source_sans_pro mb-3 drop-shadow">
            Join Us
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl text-white mb-4 drop-shadow-lg">
            Membership Application
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl font-source_sans_pro drop-shadow">
            Become a part of Hot Springs' oldest music organization. Download
            the application, fill it out, and send it our way — we'd love to
            have you.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-burgundy/70 text-xs tracking-[0.3em] uppercase font-source_sans_pro mb-3">
            How to Apply
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-navy">
            Four Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {STEPS.map(({ icon: Icon, step, title, description }) => (
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

        {/* Download CTA */}
        <div className="bg-navy py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-source_sans_pro mb-4">
              Get Started
            </p>
            <h3 className="font-playfair text-3xl md:text-4xl text-cream mb-4">
              Ready to Join?
            </h3>
            <div className="w-14 h-0.5 bg-gold mx-auto mb-8" />
            <p className="text-cream/70 font-source_sans_pro mb-10 max-w-lg mx-auto leading-relaxed">
              Download the membership application form below. Once completed,
              email it to{" "}
              <a
                href="mailto:tbolton728@gmail.com"
                className="text-gold hover:underline font-medium"
              >
                tbolton728@gmail.com
              </a>{" "}
              and we'll get back to you shortly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="./assets/docs/HSMC_Annual_Membership_Form.docx"
                download="HSMC-Membership-Application.docx"
                className="inline-flex items-center gap-2.5 bg-black hover:bg-neutral-800 text-white font-source_sans_pro text-sm tracking-wide uppercase px-8 py-3.5 rounded-lg transition-colors shadow"
              >
                <Download size={17} />
                Download Application
              </a>
              <a
                href="mailto:tbolton728@gmail.com?subject=Membership Application"
                className="inline-flex items-center gap-2.5 bg-black hover:bg-neutral-800 text-white font-source_sans_pro text-sm tracking-wide uppercase px-8 py-3.5 rounded-lg transition-colors shadow"
              >
                <Mail size={17} />
                Email Us Directly
              </a>
            </div>
            <p className="text-cream/35 text-xs mt-5 font-source_sans_pro">
              .DOCX format &middot; Questions? Contact Tom Bolton at
              tbolton728@gmail.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
