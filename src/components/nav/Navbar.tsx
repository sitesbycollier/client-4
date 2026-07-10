import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/scholarships", label: "Scholarships" },
  { to: "/education", label: "Education & Programs" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 shadow-md"
      style={{ background: "#ffffff" }}
    >
      {/* Main nav — always solid white */}
      <div
        style={{
          background: "#ffffff",
          borderBottom: "1px solid rgba(184,148,68,0.25)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex flex-col leading-none group shrink-0 min-w-0"
            >
              <span className="font-great_vibes text-[1.7rem] sm:text-[2rem] text-burgundy leading-none group-hover:text-burgundy-light transition-colors whitespace-nowrap">
                Hot Springs Music Connection
              </span>
              <span className="text-navy/50 text-[10px] tracking-[0.2em] uppercase font-source_sans_pro mt-0.5 whitespace-nowrap">
                Hot Springs, Arkansas
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-source_sans_pro tracking-wide transition-colors rounded-sm ${
                      isActive
                        ? "text-burgundy font-semibold"
                        : "text-navy hover:text-burgundy hover:bg-burgundy/5"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/get-involved"
                className="ml-3 bg-black hover:bg-neutral-800 text-white text-sm font-source_sans_pro tracking-wide uppercase px-5 py-2 transition-colors rounded-lg"
                style={{ whiteSpace: "nowrap" }}
              >
                Join Now
              </Link>
            </nav>

            {/* Mobile button */}
            <button
              className="lg:hidden p-2 text-navy hover:text-burgundy transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            style={{
              background: "#faf7f2",
              borderTop: "1px solid rgba(184,148,68,0.2)",
            }}
          >
            <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-0.5">
              {NAV_LINKS.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `px-4 py-2.5 text-sm font-source_sans_pro rounded-sm transition-colors ${
                      isActive
                        ? "text-navy font-bold"
                        : "text-navy hover:bg-burgundy/10 hover:text-burgundy"
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
