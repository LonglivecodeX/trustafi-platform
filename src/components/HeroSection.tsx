import heroPattern from "@/assets/hero-pattern.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        id="hero"
        className="relative flex items-center gradient-hero overflow-hidden pt-20 pb-8 md:pb-0 md:min-h-screen"
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroPattern})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 w-full">
          <div className="grid md:grid-cols-2 gap-10 md:gap-8 items-center md:min-h-[80vh] py-6 md:py-0">
            {/* Left - Entrepreneur */}
            <div className="space-y-6 animate-fade-up">
              <span className="inline-block text-gold/70 text-xs font-semibold uppercase tracking-[0.2em] border border-gold/20 px-3 py-1 rounded-full">
                For Founders & Asset Owners
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1]">
                Stop asking investors to{" "}
                <span className="text-gold">believe</span> you
              </h1>
              <p className="text-primary-foreground/60 text-base md:text-xl max-w-md leading-relaxed">
                Structure your business so capital can verify you. Get scored,
                verified, and positioned for investment.
              </p>
              <button
                onClick={() => scrollTo("engage")}
                className="bg-gold text-foreground font-semibold px-8 py-3.5 rounded-md text-base hover:brightness-110 transition-all duration-200 shadow-gold"
              >
                Test Your Bankability
              </button>
            </div>

            {/* Right - Capital */}
            <div className="space-y-6 animate-fade-up delay-200">
              <span className="inline-block text-gold/70 text-xs font-semibold uppercase tracking-[0.2em] border border-gold/20 px-3 py-1 rounded-full">
                For Investors & Capital Allocators
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1]">
                Stop guessing.{" "}
                <span className="text-gold">Start verifying.</span>
              </h1>
              <p className="text-primary-foreground/60 text-base md:text-xl max-w-md leading-relaxed">
                Access structured, decision-ready cashflow assets with verified
                financials and risk transparency.
              </p>
              <button
                onClick={() => scrollTo("pipeline")}
                className="border-2 border-gold text-gold font-semibold px-8 py-3.5 rounded-md text-base hover:bg-gold hover:text-foreground transition-all duration-200"
              >
                View Verified Pipeline
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Center strip - separate from hero to avoid overlap */}
      <div className="bg-earth-deep border-t border-gold/20 py-4">
        <p className="text-center text-gold text-sm md:text-base font-medium tracking-wide px-4">
          Capital doesn't move on belief. It moves on verification.
        </p>
      </div>
    </>
  );
};

export default HeroSection;
