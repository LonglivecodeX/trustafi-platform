import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-earth py-12 border-t border-gold/10">
    <div className="max-w-[1440px] mx-auto px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-serif text-lg">
            <span className="text-primary-foreground font-normal italic">Trust</span>
            <span className="text-gold font-bold not-italic">AFI</span>
          </span>
          <p className="text-primary-foreground/40 text-sm mt-1">
            AFI Continental Resources Limited
          </p>
        </div>
        <p className="text-primary-foreground/30 text-xs">
          Capital Governance Operating System · © {new Date().getFullYear()} TrustAFI
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
