import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronRight } from "lucide-react";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Signal Header */}
    <section className="relative gradient-hero">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-28 md:py-36">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-status-active" />
            <span className="text-muted-foreground text-[11px] font-mono tracking-[0.25em] uppercase">
              Verification Layer Active
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] max-w-[780px]">
            Capital moves on{" "}
            <span className="text-accent">verified signal</span>.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-muted-foreground text-base mt-6 max-w-[520px] leading-relaxed">
            TrustAFI structures, verifies, and signals asset readiness — so capital deploys with certainty.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex gap-3 mt-10">
            <Link
              to="/engage"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-md text-sm hover:brightness-110 transition-all"
            >
              Submit Asset <ChevronRight size={14} />
            </Link>
            <Link
              to="/engage"
              className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-6 py-3 rounded-md text-sm hover:border-accent hover:text-accent transition-all"
            >
              Investor Access
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* System Status */}
    <section className="border-y border-border bg-card py-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "12", label: "Verified Assets" },
            { value: "₦2.4B", label: "Aggregate Revenue" },
            { value: "68%", label: "Avg Utilization" },
            { value: "Active", label: "Signal Layer" },
          ].map(({ value, label }, i) => (
            <ScrollReveal key={label} delay={i * 60} direction="none">
              <div>
                <span className="text-accent font-bold text-2xl md:text-3xl font-mono">{value}</span>
                <p className="text-muted-foreground text-xs mt-1 font-medium">{label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Verification Process — 3 stages only */}
    <section className="bg-background py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-10">
            <div className="w-6 h-px bg-accent" />
            <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.25em]">Process</span>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
          {[
            { num: "01", title: "Structure", signal: "Raw data → decision-readable format" },
            { num: "02", title: "Verify", signal: "Independent checks confirm every claim" },
            { num: "03", title: "Signal", signal: "Verified assets surface to qualified capital" },
          ].map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 80} direction="none">
              <div className="bg-card p-8 h-full">
                <span className="text-accent/40 font-mono text-xs font-bold">{step.num}</span>
                <h3 className="font-serif text-lg font-bold text-foreground mt-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{step.signal}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Dual Entry */}
    <section className="bg-background py-16 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
          <ScrollReveal direction="left">
            <div className="bg-card p-8 md:p-10 h-full">
              <span className="text-muted-foreground text-[11px] font-semibold uppercase tracking-[0.2em]">Asset Owners</span>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-3">
                Get verified. Get capital-ready.
              </h2>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                Submit data. Receive structured verification. Surface to investors.
              </p>
              <Link to="/engage" className="inline-flex items-center gap-2 text-accent text-sm font-medium mt-5 hover:gap-3 transition-all">
                Submit Asset <ChevronRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-card p-8 md:p-10 h-full">
              <span className="text-muted-foreground text-[11px] font-semibold uppercase tracking-[0.2em]">Investors</span>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-3">
                Access verified pipeline only.
              </h2>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                Structured assets. Verified data. Decision-ready metrics.
              </p>
              <Link to="/engage" className="inline-flex items-center gap-2 text-accent text-sm font-medium mt-5 hover:gap-3 transition-all">
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

export default Index;
