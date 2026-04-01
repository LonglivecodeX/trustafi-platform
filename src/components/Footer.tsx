import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-background border-t border-border py-10">
    <div className="max-w-[1400px] mx-auto px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-2">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="font-sans text-sm font-bold tracking-wider uppercase">
              <span className="text-foreground">Trust</span>
              <span className="text-gold">AFI</span>
            </span>
          </div>
          <p className="text-muted-foreground text-xs">
            Capital Governance Operating System
          </p>
          <p className="text-muted-foreground/50 text-[11px]">
            AFI Continental Resources Limited
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-2">
          {[
            { label: "The System", path: "/trustafi" },
            { label: "Acquisition", path: "/acquisition" },
            { label: "Who We Serve", path: "/who-we-serve" },
            { label: "Request Access", path: "/engage" },
          ].map(({ label, path }) => (
            <Link key={path} to={path} className="text-xs text-muted-foreground hover:text-accent transition-colors">
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground/40 text-[11px]">
          © {new Date().getFullYear()} TrustAFI. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-status-active" />
          <span className="text-[11px] text-muted-foreground/60">Verification Layer Active</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
