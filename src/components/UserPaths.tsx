import { ArrowRight, BarChart3, Shield, Eye, Target } from "lucide-react";

const UserPaths = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="paths" className="py-24 bg-earth">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center mb-16">
          <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
            Your Path
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-3">
            Who We Serve
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Investors */}
          <div className="bg-earth-deep/40 border border-gold/10 rounded-xl p-8 space-y-6">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
              For Investors
            </span>
            <h3 className="text-2xl font-bold text-primary-foreground">
              Access verified deals only
            </h3>
            <ul className="space-y-4">
              {[
                [Shield, "Structured, verified insights"],
                [Eye, "Full transparency on financials"],
                [BarChart3, "Risk-mitigated decisions"],
              ].map(([Icon, text]) => (
                <li key={text as string} className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    {/* @ts-ignore */}
                    <Icon size={16} className="text-gold" />
                  </div>
                  {text as string}
                </li>
              ))}
            </ul>
            <button
              onClick={() => scrollTo("engage")}
              className="flex items-center gap-2 bg-gold text-foreground font-semibold px-6 py-3 rounded-md hover:brightness-110 transition-all"
            >
              Access Pipeline <ArrowRight size={16} />
            </button>
          </div>

          {/* Asset Owners */}
          <div className="bg-earth-deep/40 border border-gold/10 rounded-xl p-8 space-y-6">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
              For Founders & Asset Owners
            </span>
            <h3 className="text-2xl font-bold text-primary-foreground">
              Become bankable
            </h3>
            <ul className="space-y-4">
              {[
                [Target, "Structured positioning for capital"],
                [Shield, "Verification credibility"],
                [BarChart3, "Direct capital access"],
              ].map(([Icon, text]) => (
                <li key={text as string} className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    {/* @ts-ignore */}
                    <Icon size={16} className="text-gold" />
                  </div>
                  {text as string}
                </li>
              ))}
            </ul>
            <button
              onClick={() => scrollTo("engage")}
              className="flex items-center gap-2 border-2 border-gold text-gold font-semibold px-6 py-3 rounded-md hover:bg-gold hover:text-foreground transition-all"
            >
              Submit Asset <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPaths;
