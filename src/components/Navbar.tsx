import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-earth/95 backdrop-blur-md border-b border-gold/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex items-center justify-between h-16">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <span className="text-gold font-bold text-xl tracking-tight">TrustAFI</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {[
            ["How It Works", "engine"],
            ["Trust Signals", "trust"],
            ["Pipeline", "pipeline"],
            ["Who We Serve", "paths"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm text-primary-foreground/70 hover:text-gold transition-colors duration-200"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("engage")}
            className="bg-gold text-foreground text-sm font-semibold px-5 py-2 rounded-md hover:brightness-110 transition-all duration-200"
          >
            Get Started
          </button>
        </div>

        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-earth border-t border-gold/10 px-6 py-4 space-y-3">
          {[
            ["How It Works", "engine"],
            ["Trust Signals", "trust"],
            ["Pipeline", "pipeline"],
            ["Who We Serve", "paths"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="block w-full text-left text-primary-foreground/70 hover:text-gold text-sm py-2"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("engage")}
            className="w-full bg-gold text-foreground text-sm font-semibold px-5 py-2.5 rounded-md"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
