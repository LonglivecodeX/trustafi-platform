import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { Database, Search, BarChart3, Signal, Banknote, ChevronRight } from "lucide-react";

const stages = [
  { icon: Database, num: "01", title: "Data Structuring", desc: "Businesses submit raw operational and financial data. Unstructured information becomes decision-readable intelligence across governance, operations, and financial dimensions." },
  { icon: Search, num: "02", title: "Independent Verification", desc: "Every claim is validated through financial audits, operational evidence, and independent field checks. Belief is replaced by verified reality." },
  { icon: BarChart3, num: "03", title: "Bankability Scoring", desc: "Assets receive institutional-grade scores: Decision Readiness Rating (DRR), Data Quality Index (DQI), and Verification Integrity Score (VIS)." },
  { icon: Signal, num: "04", title: "Signal Layer", desc: "Only verified opportunities surface with clear, decision-ready metrics. Trust replaces speculation. Quality replaces volume." },
  { icon: Banknote, num: "05", title: "Capital Engagement", desc: "Qualified capital allocators deploy into verified assets. Capital moves with precision, speed, and institutional confidence." },
];

const trustSignals = [
  "Verified Financial Records",
  "Operational Evidence",
  "Cashflow Validation",
  "Governance Alignment",
  "Independent Data Checks",
];

const TrustAFIPage = () => (
  <div className="min-h-screen">
    <Navbar />

    <PageHero
      label="The System"
      title={<>Capital Does Not Move on Hope.{" "}<span className="text-accent italic">It Moves on Verified Reality.</span></>}
      subtitle="TrustAFI is a Capital Governance System that transforms unstructured business data into verified, decision-ready intelligence — enabling capital to move with certainty."
    />

    {/* System Philosophy */}
    <section className="bg-background py-20 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <ScrollReveal>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-accent" />
              <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.3em]">System Philosophy</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Capital does not respond to ideas.
            </h2>
            <p className="text-muted-foreground text-lg mt-3 leading-relaxed">
              Capital responds to certainty signals. TrustAFI exists to generate those signals — through structure, verification, and transparent governance.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* 5-Stage Process */}
    <section className="bg-background py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-14">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.3em]">The Process</span>
          </div>
        </ScrollReveal>

        <div className="space-y-px">
          {stages.map((stage, i) => (
            <ScrollReveal key={stage.title} delay={i * 80}>
              <div className="flex items-start gap-6 md:gap-10 bg-card border border-border rounded-md p-6 md:p-8 group hover:border-accent/20 transition-colors">
                <span className="text-accent/30 font-mono text-sm font-bold mt-1 shrink-0">{stage.num}</span>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <stage.icon size={18} className="text-accent" />
                    <h3 className="font-serif text-xl font-bold text-foreground">{stage.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">{stage.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Trust Signals */}
    <section className="bg-card py-20 border-y border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.3em]">What We Verify</span>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {trustSignals.map((label, i) => (
            <ScrollReveal key={label} delay={i * 60} direction="none">
              <div className="border border-border rounded-md p-5 text-center hover:border-accent/30 transition-colors">
                <div className="w-2 h-2 rounded-full bg-accent mx-auto mb-3" />
                <p className="text-foreground text-sm font-medium">{label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Positioning */}
    <section className="bg-background py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 text-center">
        <ScrollReveal>
          <p className="text-muted-foreground text-xs font-semibold uppercase tracking-[0.3em] mb-6">Positioning</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground max-w-3xl mx-auto">
            TrustAFI is not a marketplace. Not a loan platform.
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            It is a{" "}
            <span className="text-accent font-semibold">Decision-Responsive Capital Interface</span>{" "}
            — where capital only moves after reality confirms readiness.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link to="/engage" className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-7 py-3.5 rounded-md text-sm hover:brightness-110 transition-all">
              Submit Asset for Verification <ChevronRight size={14} />
            </Link>
            <Link to="/engage" className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-7 py-3.5 rounded-md text-sm hover:border-accent hover:text-accent transition-all">
              Access Verified Pipeline
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);

export default TrustAFIPage;
