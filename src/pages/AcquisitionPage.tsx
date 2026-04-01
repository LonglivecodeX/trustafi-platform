import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Search, FileCheck, BarChart3, Target, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Identification",
    desc: "We identify businesses with real operational activity, revenue, and growth indicators across key sectors.",
  },
  {
    icon: FileCheck,
    title: "Structuring",
    desc: "Raw business data is organized into a structured format — financial records, operations, governance, and capacity.",
  },
  {
    icon: BarChart3,
    title: "Verification",
    desc: "Every claim is verified through independent checks — financial audits, operational evidence, and field validation.",
  },
  {
    icon: Target,
    title: "Capital Positioning",
    desc: "Verified businesses are positioned with bankability scores (DRR, DQI, VIS) that investors can trust.",
  },
];

const AcquisitionPage = () => (
  <div className="min-h-screen">
    <Navbar />

    <PageHero
      label="Acquisition"
      title={
        <>
          How We Acquire &{" "}
          <span className="text-gold italic">Structure Assets</span>
        </>
      }
      subtitle="TrustAFI doesn't just list businesses. We identify, structure, verify, and position real assets for capital engagement — creating bankable opportunities from operational reality."
    />

    {/* Process */}
    <section className="bg-off-white py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center mb-16">
          <span className="text-gold text-xs font-semibold uppercase tracking-[0.25em]">
            The Process
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
            From Raw Asset to Capital-Ready Opportunity
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="bg-card rounded-xl border border-border p-8 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-earth/10 flex items-center justify-center">
                  <span className="text-earth font-bold text-sm">{i + 1}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">{step.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-off-white py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          Ready to Structure Your Asset?
        </h2>
        <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
          Submit your business for structuring and verification. Our team will assess your readiness and guide you through the process.
        </p>
        <Link
          to="/engage"
          className="inline-flex items-center gap-2 bg-gold text-foreground font-semibold px-8 py-3.5 rounded-md mt-8 hover:brightness-110 transition-all"
        >
          Submit for Verification <ArrowRight size={18} />
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default AcquisitionPage;
