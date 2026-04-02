import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import trustAFILogo from "@/assets/trustafi-logo.png";

const navLinks = [
  { label: "System", path: "/trustafi" },
  { label: "Acquisition", path: "/acquisition" },
  { label: "Who We Serve", path: "/who-we-serve" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex items-center justify-between h-14">
        <Link to="/" className="flex items-center">
          <img src={trustAFILogo} alt="TrustAFI" className="h-16 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`text-[13px] font-medium tracking-wide transition-colors ${
                location.pathname === path ? "text-accent" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/engage" className="text-[13px] font-medium text-accent hover:text-foreground transition-colors">
            Request Access
          </Link>
          <span className="w-px h-4 bg-border" />
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-status-active" />
            <span className="text-[11px] text-muted-foreground font-mono tracking-wide">ACTIVE</span>
          </div>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-3">
          {navLinks.map(({ label, path }) => (
            <Link key={path} to={path} onClick={() => setOpen(false)} className="block text-muted-foreground hover:text-accent text-sm py-2">
              {label}
            </Link>
          ))}
          <Link to="/engage" onClick={() => setOpen(false)} className="block w-full text-center border border-accent text-accent text-sm font-medium px-5 py-2.5 rounded-md hover:bg-accent hover:text-accent-foreground transition-all">
            Request Access
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
