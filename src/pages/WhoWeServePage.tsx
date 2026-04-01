import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const WhoWeServePage = () => (
  <div className="min-h-screen">
    <Navbar />

    <PageHero
      label="Who We Serve"
      title={<>Two Sides of <span className="text-accent">Capital Certainty</span></>}
      subtitle="Asset owners seeking verification. Investors seeking verified signal."
    />

    <section className="bg-background py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
          <ScrollReveal direction="left">
            <div className="bg-card p-8 md:p-10 h-full space-y-4">
              <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.2em]">Asset Owners</span>
              <h2 className="font-serif text-2xl font-bold text-foreground">Become Verified</h2>
              <ul className="space-y-2.5 text-muted-foreground text-sm">
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent shrink-0" /> Structured financial and operational data</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent shrink-0" /> Independent verification of all claims</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent shrink-0" /> Institutional bankability scores (DRR, DQI, VIS)</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent shrink-0" /> Capital-ready positioning</li>
              </ul>
              <Link to="/engage" className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all">
                Submit Asset <ChevronRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-card p-8 md:p-10 h-full space-y-4">
              <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.2em]">Investors</span>
              <h2 className="font-serif text-2xl font-bold text-foreground">Access Verified Pipeline</h2>
              <ul className="space-y-2.5 text-muted-foreground text-sm">
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent shrink-0" /> Pre-verified asset data</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent shrink-0" /> Decision-ready metrics and scores</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent shrink-0" /> Sector and geography filtering</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent shrink-0" /> No unverified deals in pipeline</li>
              </ul>
              <Link to="/engage" className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all">
                Request Access <ChevronRight size={14} />
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
