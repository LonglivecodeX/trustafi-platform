const Footer = () => (
  <footer className="bg-earth-deep py-12 border-t border-gold/10">
    <div className="max-w-[1440px] mx-auto px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-gold font-bold text-lg">TrustAFI</span>
          <p className="text-primary-foreground/40 text-sm mt-1">
            AFI Continental Resources Limited · Capital Governance Operating System
          </p>
        </div>
        <p className="text-primary-foreground/30 text-xs">
          © {new Date().getFullYear()} TrustAFI. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
