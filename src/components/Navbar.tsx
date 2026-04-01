import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "TrustAFI", path: "/trustafi" },
  { label: "Acquisition", path: "/acquisition" },
  { label: "Who We Serve", path: "/who-we-serve" },
  { label: "Engage", path: "/engage" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-earth/95 backdrop-blur-md border-b border-gold/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <span className="font-serif text-xl">
            <span className="text-primary-foreground font-normal italic">Trust</span>
            <span className="text-gold font-bold not-italic">AFI</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === path
                  ? "text-gold"
                  : "text-primary-foreground/70 hover:text-gold"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/engage"
            className="bg-gold text-foreground text-sm font-semibold px-5 py-2 rounded-md hover:brightness-110 transition-all duration-200"
          >
            Get Started
          </Link>
        </div>

        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-earth border-t border-gold/10 px-6 py-4 space-y-3">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className="block text-primary-foreground/70 hover:text-gold text-sm py-2"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/engage"
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-gold text-foreground text-sm font-semibold px-5 py-2.5 rounded-md"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
