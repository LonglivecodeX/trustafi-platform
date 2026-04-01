import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const steps = [
  { num: "01", title: "Identify", signal: "Observable revenue, operations, and growth indicators across key sectors." },
  { num: "02", title: "Structure", signal: "Raw data organized into decision-readable asset profiles — financials, governance, capacity." },
  { num: "03", title: "Verify", signal: "Independent audits and field validation. Only verified reality survives." },
  { num: "04", title: "Position", signal: "Verified assets scored (DRR, DQI, VIS) and surfaced to qualified capital." },
];

const AcquisitionPage = () => (
  <div className="min-h-screen">
    <Navbar />

    <PageHero
      label="Acquisition"
      title={<>Asset Structuring <span className="text-accent">Pipeline</span></>}
      subtitle="Identification → Structuring → Verification → Capital positioning."
    />

    <section className="bg-background py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 80}>
              <div className="bg-card p-8 h-full hover:bg-surface-elevated transition-colors">
                <span className="text-accent/30 font-mono text-xs font-bold">{step.num}</span>
                <h3 className="font-serif text-lg font-bold text-foreground mt-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{step.signal}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-background py-14 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <ScrollReveal>
          <Link to="/engage" className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-md text-sm hover:brightness-110 transition-all">
            Submit Asset for Structuring <ChevronRight size={14} />
          </Link>
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);

export default AcquisitionPage;
