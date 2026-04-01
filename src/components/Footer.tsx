import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-background border-t border-border py-8">
    <div className="max-w-[1400px] mx-auto px-6 md:px-16">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-sans text-sm font-bold tracking-wider uppercase">
            <span className="text-foreground">Trust</span>
            <span className="text-gold">AFI</span>
          </span>
          <span className="text-muted-foreground/50 text-[11px] ml-2">AFI Continental Resources Limited</span>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {[
            { label: "System", path: "/trustafi" },
            { label: "Acquisition", path: "/acquisition" },
            { label: "Who We Serve", path: "/who-we-serve" },
            { label: "Access", path: "/engage" },
          ].map(({ label, path }) => (
            <Link key={path} to={path} className="text-xs text-muted-foreground hover:text-accent transition-colors">
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
        <p className="text-muted-foreground/40 text-[11px]">© {new Date().getFullYear()} TrustAFI</p>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-status-active" />
          <span className="text-[11px] text-muted-foreground/50 font-mono">ACTIVE</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
