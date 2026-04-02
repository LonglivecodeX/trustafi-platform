import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import trustAFILogo from "@/assets/TrustAFI_updated_logo.jpeg";

const XIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
  </svg>
);

const navLinks = [
  { label: "System", path: "/trustafi" },
  { label: "Acquisition", path: "/acquisition" },
  { label: "Who We Serve", path: "/who-we-serve" },
  { label: "Access", path: "/engage" },
];

const Footer = () => (
  <footer className="bg-background border-t border-border/60 pt-12 pb-8">
    <div className="max-w-[1400px] mx-auto px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        {/* Left — Brand */}
        <div className="flex flex-col items-start gap-3">
          <img src={trustAFILogo} alt="TrustAFI" className="h-14 w-auto rounded" />
          <span className="text-muted-foreground/60 text-[11px] leading-snug">
            AFI Continental Resources Limited
          </span>
          <span className="text-muted-foreground/40 text-[11px] mt-1">
            © {new Date().getFullYear()} TrustAFI
          </span>
        </div>

        {/* Middle — Contact */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50 mb-1">
            Contact
          </span>
          <a
            href="mailto:info@afi.africa"
            className="text-[12px] text-muted-foreground hover:text-foreground transition-colors"
          >
            info@afi.africa
          </a>
          <a
            href="tel:+2340000000000"
            className="text-[12px] text-muted-foreground hover:text-foreground transition-colors"
          >
            +234 000 000 0000
          </a>
        </div>

        {/* Right — Nav + Social */}
        <div className="flex flex-col gap-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50 mb-1">
            Navigate
          </span>
          <nav className="flex flex-col gap-2">
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className="text-[12px] text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 mt-2">
            {[
              { Icon: Instagram, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Facebook, href: "#" },
              { Icon: XIcon, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 pt-4 border-t border-border/40 flex items-center justify-end">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-status-active" />
          <span className="text-[10px] text-muted-foreground/40 font-mono tracking-wider">ACTIVE</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
