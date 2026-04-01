import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Shield, Eye, BarChart3, Target, ArrowRight } from "lucide-react";

const WhoWeServePage = () => (
  <div className="min-h-screen">
    <Navbar />

    <PageHero
      label="Who We Work With"
      title={
        <>
          Built for Those Who Take{" "}
          <span className="text-gold italic">Capital Seriously</span>
        </>
      }
      subtitle="TrustAFI serves two sides of the same equation — asset owners who need to become bankable, and investors who need verified certainty before deploying capital."
    />

    {/* For Investors */}
    <section className="bg-off-white py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
              For Investors
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
              Deploy Capital With Certainty
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Stop spending time on deals that aren't ready. Access a pipeline of businesses that have been structured, verified, and scored for bankability.
            </p>
            <ul className="space-y-4 mt-6">
              {[
                [Shield, "Verified financial and operational data"],
                [Eye, "Full transparency — no hidden risks"],
                [BarChart3, "Bankability scores you can trust (DRR, DQI, VIS)"],
              ].map(([Icon, text]) => (
                <li key={text as string} className="flex items-center gap-3 text-foreground text-sm">
                  <div className="w-8 h-8 rounded-full bg-earth/10 flex items-center justify-center shrink-0">
                    {/* @ts-ignore */}
                    <Icon size={16} className="text-earth" />
                  </div>
                  {text as string}
                </li>
              ))}
            </ul>
            <Link
              to="/engage"
              className="inline-flex items-center gap-2 bg-gold text-foreground font-semibold px-6 py-3 rounded-md mt-8 hover:brightness-110 transition-all"
            >
              Access Pipeline <ArrowRight size={16} />
            </Link>
          </div>

          <div>
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
              For Asset Owners
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
              Become Bankable
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Your business may be profitable, but is it bankable? TrustAFI structures your data, verifies your claims, and positions you for capital access.
            </p>
            <ul className="space-y-4 mt-6">
              {[
                [Target, "Structured positioning for investment"],
                [Shield, "Verification credibility that investors trust"],
                [BarChart3, "Clear path from raw data to capital readiness"],
              ].map(([Icon, text]) => (
                <li key={text as string} className="flex items-center gap-3 text-foreground text-sm">
                  <div className="w-8 h-8 rounded-full bg-earth/10 flex items-center justify-center shrink-0">
                    {/* @ts-ignore */}
                    <Icon size={16} className="text-earth" />
                  </div>
                  {text as string}
                </li>
              ))}
            </ul>
            <Link
              to="/engage"
              className="inline-flex items-center gap-2 border-2 border-gold text-gold font-semibold px-6 py-3 rounded-md mt-8 hover:bg-gold hover:text-foreground transition-all"
            >
              Submit Asset <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default WhoWeServePage;
