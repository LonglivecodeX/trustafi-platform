import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Database, Search, BarChart3, Signal, Banknote } from "lucide-react";

const stages = [
  {
    icon: Database,
    title: "Data Structuring",
    desc: "Businesses submit raw operational and financial data. Unstructured data becomes decision-readable.",
  },
  {
    icon: Search,
    title: "Verification",
    desc: "Data is validated through financial, operational, and field checks. Claims become verified reality.",
  },
  {
    icon: BarChart3,
    title: "Bankability Scoring",
    desc: "DRR (Decision Readiness Rating), DQI (Data Quality Index), VIS (Verification Integrity Score).",
  },
  {
    icon: Signal,
    title: "Signal Layer",
    desc: "Only verified opportunities are surfaced with clear metrics. Trust replaces speculation.",
  },
  {
    icon: Banknote,
    title: "Capital Engagement",
    desc: "Investors deploy capital into verified assets. Capital moves with speed and precision.",
  },
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
      title={
        <>
          Capital Does Not Move on Hope.{" "}
          <span className="text-gold italic">It Moves on Verified Reality.</span>
        </>
      }
      subtitle="TrustAFI is a Capital Governance System that transforms unstructured business data into verified, decision-ready intelligence — enabling capital to move with certainty."
    />

    {/* System Philosophy */}
    <section className="bg-off-white py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 text-center">
        <span className="text-gold text-xs font-semibold uppercase tracking-[0.25em]">
          System Philosophy
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
          Capital does not respond to ideas.
        </h2>
        <p className="text-muted-foreground text-lg mt-2">
          Capital responds to certainty signals.
        </p>
      </div>
    </section>

    {/* How Capital Moves */}
    <section className="bg-off-white py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center mb-16">
          <span className="text-gold text-xs font-semibold uppercase tracking-[0.25em]">
            The Process
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
            How Capital Moves Through TrustAFI
          </h2>
        </div>

        <div className="space-y-8">
          {stages.map((stage, i) => (
            <div
              key={stage.title}
              className="flex items-start gap-6 bg-card rounded-xl border border-border p-6 md:p-8 shadow-card"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-earth/10 flex items-center justify-center">
                <span className="text-earth font-bold text-lg">{i + 1}</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground">{stage.title}</h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust Signal Framework */}
    <section className="bg-earth py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center mb-12">
          <span className="text-gold text-xs font-semibold uppercase tracking-[0.25em]">
            Trust Signals
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mt-4">
            What We Verify
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {trustSignals.map((label) => (
            <div
              key={label}
              className="bg-earth-deep/40 border border-gold/10 rounded-xl p-6 text-center hover:border-gold/30 transition-colors"
            >
              <span className="text-gold text-lg">✔</span>
              <p className="text-primary-foreground text-sm font-medium mt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Positioning */}
    <section className="bg-earth py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 text-center">
        <span className="text-gold text-xs font-semibold uppercase tracking-[0.25em]">
          Positioning
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mt-4 max-w-3xl mx-auto">
          TrustAFI is not a marketplace. Not a loan platform.
        </h2>
        <p className="text-primary-foreground/60 text-lg mt-6 max-w-2xl mx-auto">
          TrustAFI is a{" "}
          <span className="text-gold font-semibold">Decision-Responsive Capital Interface</span>{" "}
          — where capital only moves after reality confirms readiness.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link
            to="/engage"
            className="bg-gold text-foreground font-semibold px-8 py-3.5 rounded-md hover:brightness-110 transition-all"
          >
            Submit Asset for Verification
          </Link>
          <Link
            to="/engage"
            className="border-2 border-gold text-gold font-semibold px-8 py-3.5 rounded-md hover:bg-gold hover:text-foreground transition-all"
          >
            Access Verified Pipeline
          </Link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default TrustAFIPage;
