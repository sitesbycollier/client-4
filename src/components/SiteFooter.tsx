import { Link } from "react-router-dom";
import { Mail, MapPin, Music } from "lucide-react";

export const SiteFooter = () => {
  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-great_vibes text-4xl text-gold mb-3">
              Hot Springs Music Connection
            </h3>
            <p className="text-cream/60 text-sm leading-relaxed mb-5">
              Supporting and inspiring the next generation of musicians through
              scholarships, performance opportunities, and community engagement
              since 1951.
            </p>
            <div className="space-y-1">
              <p className="text-gold/70 text-xs tracking-widest uppercase">
                National Federation of Music Clubs
              </p>
              <p className="text-gold/70 text-xs tracking-widets uppercase">
                Arkansas Federation of Music Clubs
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-playfair text-lg text-gold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                ["/scholarships", "Scholarships"],
                ["/education", "Education & Programs"],
                ["/get-involved", "Get Involved"],
                ["/about", "Our History"],
                ["/contact", "Contact Us"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-cream/60 hover:text-gold text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-playfair text-lg text-gold mb-5">Contact</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 shrink-0" />
                <span className="text-cream/60">
                  132 Apple Blossom Circle, Hot Springs National Park, Arkansas
                  71913
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={15} className="text-gold mt-0.5 shrink-0" />
                <a
                  href="mailto:tbolton728@gmail.com"
                  className="text-cream/60 hover:text-gold transition-colors"
                >
                  tbolton728@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Music size={15} className="text-gold mt-0.5 shrink-0" />
                <span className="text-cream/60">
                  Scholarship auditions held each spring
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 text-center">
          <p className="text-cream/30 text-xs leading-relaxed">
            Copyright &copy; 2025 Hot Springs Music Connection &mdash; All
            Rights Reserved.
            <br />
            Founded February 8, 1951 &middot; Hot Springs, Arkansas
            <br /> Design by{" "}
            <a
              href="https://sitesbycollier.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
            >
              Sites By Collier
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
