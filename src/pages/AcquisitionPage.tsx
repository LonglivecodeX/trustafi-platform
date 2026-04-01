import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { Search, FileCheck, BarChart3, Target, ChevronRight } from "lucide-react";

const steps = [
  { icon: Search, num: "01", title: "Identification", desc: "We identify businesses with real operational activity, revenue, and growth indicators across key sectors. No assumptions — only observable signal." },
  { icon: FileCheck, num: "02", title: "Structuring", desc: "Raw business data is organized into a structured format — financial records, operations, governance, and capacity — creating a decision-readable asset profile." },
  { icon: BarChart3, num: "03", title: "Verification", desc: "Every claim is verified through independent checks — financial audits, operational evidence, field validation. Only verified reality survives." },
  { icon: Target, num: "04", title: "Capital Positioning", desc: "Verified businesses are positioned with institutional bankability scores (DRR, DQI, VIS) that capital allocators can trust and act on." },
];

const AcquisitionPage = () => (
  <div className="min-h-screen">
    <Navbar />

    <PageHero
      label="Acquisition"
      title={<>How We Acquire &{" "}<span className="text-accent italic">Structure Assets</span></>}
      subtitle="TrustAFI doesn't list businesses. We identify, structure, verify, and position real assets for capital engagement — creating bankable opportunities from operational reality."
    />

    <section className="bg-background py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-14">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.3em]">The Process</span>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 100}>
              <div className="bg-card p-8 md:p-10 space-y-4 h-full group hover:bg-surface-elevated transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-accent/30 font-mono text-xs font-bold">{step.num}</span>
                  <step.icon size={18} className="text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-background py-20 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <ScrollReveal>
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Ready to Structure Your Asset?</h2>
            <p className="text-muted-foreground text-base mt-4 leading-relaxed">
              Submit your business for structuring and verification. Our team will assess your readiness and guide you through the process.
            </p>
            <Link to="/engage" className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-7 py-3.5 rounded-md text-sm mt-8 hover:brightness-110 transition-all">
              Submit for Verification <ChevronRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);

export default AcquisitionPage;
