import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const stages = [
  { num: "01", title: "Data Structuring", signal: "Unstructured business data → decision-readable format across financial, operational, and governance dimensions." },
  { num: "02", title: "Independent Verification", signal: "Financial audits, operational evidence, and field checks validate every claim. No assumptions survive." },
  { num: "03", title: "Bankability Scoring", signal: "Assets receive institutional scores: Decision Readiness Rating (DRR), Data Quality Index (DQI), Verification Integrity Score (VIS)." },
  { num: "04", title: "Signal Emission", signal: "Verified assets surface to qualified capital allocators with structured, machine-readable metrics." },
  { num: "05", title: "Capital Engagement", signal: "Capital deploys into verified assets. Precision replaces speculation." },
];

const TrustAFIPage = () => (
  <div className="min-h-screen">
    <Navbar />

    <PageHero
      label="The System"
      title={<>Verification Infrastructure for <span className="text-accent">Capital Certainty</span></>}
      subtitle="Five stages. Every claim verified. Only confirmed reality reaches capital."
    />

    {/* Process */}
    <section className="bg-background py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-10">
            <div className="w-6 h-px bg-accent" />
            <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.25em]">Process</span>
          </div>
        </ScrollReveal>

        <div className="space-y-px">
          {stages.map((stage, i) => (
            <ScrollReveal key={stage.title} delay={i * 60}>
              <div className="flex items-start gap-6 bg-card border border-border rounded-md p-6 group hover:border-accent/20 transition-colors">
                <span className="text-accent/30 font-mono text-sm font-bold mt-0.5 shrink-0">{stage.num}</span>
                <div className="space-y-1.5">
                  <h3 className="font-serif text-lg font-bold text-foreground">{stage.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">{stage.signal}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-background py-16 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/engage" className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-md text-sm hover:brightness-110 transition-all">
              Submit Asset for Verification <ChevronRight size={14} />
            </Link>
            <Link to="/engage" className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-6 py-3 rounded-md text-sm hover:border-accent hover:text-accent transition-all">
              Request Investor Access
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);

export default TrustAFIPage;
