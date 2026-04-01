import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { Shield, Eye, BarChart3, Target, ChevronRight } from "lucide-react";

const WhoWeServePage = () => (
  <div className="min-h-screen">
    <Navbar />

    <PageHero
      label="Who We Serve"
      title={<>Built for Those Who Take{" "}<span className="text-accent italic">Capital Seriously</span></>}
      subtitle="TrustAFI serves two sides of the same equation — asset owners who need to become bankable, and investors who need verified certainty before deploying capital."
    />

    <section className="bg-background py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
          {/* Investors */}
          <ScrollReveal direction="left">
            <div className="bg-card p-10 md:p-14 space-y-6 h-full">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-accent" />
                <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.25em]">For Investors</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Deploy Capital With Certainty</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Stop spending time on deals that aren't ready. Access a pipeline of businesses that have been structured, verified, and scored for bankability.
              </p>
              <ul className="space-y-4">
                {[
                  [Shield, "Verified financial and operational data"],
                  [Eye, "Full transparency — no hidden risks"],
                  [BarChart3, "Institutional bankability scores (DRR, DQI, VIS)"],
                ].map(([Icon, text]) => (
                  <li key={text as string} className="flex items-center gap-3 text-foreground text-sm">
                    <div className="w-7 h-7 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                      {/* @ts-ignore */}
                      <Icon size={14} className="text-accent" />
                    </div>
                    {text as string}
                  </li>
                ))}
              </ul>
              <Link to="/engage" className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all">
                Request Pipeline Access <ChevronRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          {/* Asset Owners */}
          <ScrollReveal direction="right">
            <div className="bg-card p-10 md:p-14 space-y-6 h-full">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-accent" />
                <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.25em]">For Asset Owners</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Become Bankable</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your business may be profitable, but is it bankable? TrustAFI structures your data, verifies your claims, and positions you for capital access.
              </p>
              <ul className="space-y-4">
                {[
                  [Target, "Structured positioning for investment"],
                  [Shield, "Verification credibility that investors trust"],
                  [BarChart3, "Clear path from raw data to capital readiness"],
                ].map(([Icon, text]) => (
                  <li key={text as string} className="flex items-center gap-3 text-foreground text-sm">
                    <div className="w-7 h-7 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                      {/* @ts-ignore */}
                      <Icon size={14} className="text-accent" />
                    </div>
                    {text as string}
                  </li>
                ))}
              </ul>
              <Link to="/engage" className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all">
                Submit Asset <ChevronRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default WhoWeServePage;
