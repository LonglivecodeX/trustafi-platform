import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

type Tab = "founder" | "investor";

const inputClass =
  "w-full bg-background border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent/40 focus:border-accent transition-colors";

const EngagePage = () => {
  const [tab, setTab] = useState<Tab>("founder");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Submission received. We will review and respond within 48 hours.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <PageHero
        label="Request Access"
        title={<>Enter the Verified{" "}<span className="text-accent italic">Capital Environment</span></>}
        subtitle="Whether you're an asset owner seeking capital readiness or an investor seeking verified opportunities — access begins here."
      />

      <section className="bg-background py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="flex mb-10">
              <div className="bg-card border border-border rounded-md p-1 inline-flex">
                <button
                  onClick={() => setTab("founder")}
                  className={`px-6 py-2.5 rounded text-sm font-medium transition-all duration-200 ${
                    tab === "founder"
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Asset Owner
                </button>
                <button
                  onClick={() => setTab("investor")}
                  className={`px-6 py-2.5 rounded text-sm font-medium transition-all duration-200 ${
                    tab === "investor"
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Investor
                </button>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal className="md:col-span-2" delay={100}>
              {tab === "founder" ? (
                <FounderForm onSubmit={handleSubmit} />
              ) : (
                <InvestorForm onSubmit={handleSubmit} />
              )}
            </ScrollReveal>

            <ScrollReveal delay={250} direction="right">
              <div className="bg-card border border-border rounded-lg p-8 h-fit">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-px bg-accent" />
                  <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.25em]">Process</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground">
                  What Happens Next
                </h3>
                <div className="space-y-5 mt-6">
                  {[
                    "Submit your application",
                    "Our team reviews within 48 hours",
                    tab === "founder"
                      ? "We assess your bankability readiness"
                      : "We verify your investor profile",
                    tab === "founder"
                      ? "You receive your structuring roadmap"
                      : "You gain access to verified pipeline",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-md bg-accent/10 flex items-center justify-center shrink-0 text-accent text-[11px] font-bold font-mono">
                        {i + 1}
                      </span>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[11px] text-muted-foreground">Access is not automatic. All submissions are reviewed.</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const FounderForm = ({ onSubmit }: { onSubmit: (e: React.FormEvent<HTMLFormElement>) => void }) => (
  <form onSubmit={onSubmit} className="bg-card border border-border rounded-lg p-8 space-y-5">
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wide">Full Name *</label>
        <input required className={inputClass} placeholder="Your full name" />
      </div>
      <div>
        <label className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wide">Email *</label>
        <input required type="email" className={inputClass} placeholder="you@company.com" />
      </div>
    </div>
    <div>
      <label className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wide">Company Name</label>
      <input className={inputClass} placeholder="Your company name" />
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wide">Sector</label>
        <select className={inputClass}>
          <option value="">Select sector</option>
          <option>Agriculture</option>
          <option>Manufacturing</option>
          <option>Logistics</option>
          <option>Real Estate</option>
          <option>Technology</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wide">Annual Revenue</label>
        <select className={inputClass}>
          <option value="">Select range</option>
          <option>Under ₦10M</option>
          <option>₦10M – ₦50M</option>
          <option>₦50M – ₦200M</option>
          <option>₦200M – ₦1B</option>
          <option>Above ₦1B</option>
        </select>
      </div>
    </div>
    <div>
      <label className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wide">Audited Financial Records?</label>
      <select className={inputClass}>
        <option value="">Select</option>
        <option>Yes — fully audited</option>
        <option>Partially — some records available</option>
        <option>No — unaudited</option>
      </select>
    </div>
    <button type="submit" className="w-full bg-accent text-accent-foreground font-semibold py-3.5 rounded-md text-sm hover:brightness-110 transition-all">
      Submit for Verification
    </button>
    <p className="text-[11px] text-muted-foreground text-center">Your data will be reviewed for structuring eligibility.</p>
  </form>
);

const InvestorForm = ({ onSubmit }: { onSubmit: (e: React.FormEvent<HTMLFormElement>) => void }) => (
  <form onSubmit={onSubmit} className="bg-card border border-border rounded-lg p-8 space-y-5">
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wide">Full Name *</label>
        <input required className={inputClass} placeholder="Your full name" />
      </div>
      <div>
        <label className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wide">Email *</label>
        <input required type="email" className={inputClass} placeholder="you@company.com" />
      </div>
    </div>
    <div>
      <label className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wide">Firm / Company</label>
      <input className={inputClass} placeholder="Your firm or company" />
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wide">Investor Type</label>
        <select className={inputClass}>
          <option value="">Select type</option>
          <option>Angel Investor</option>
          <option>Private Credit</option>
          <option>Acquisition Buyer</option>
          <option>Strategic Investor</option>
          <option>Institutional</option>
        </select>
      </div>
      <div>
        <label className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wide">Typical Ticket Size</label>
        <select className={inputClass}>
          <option value="">Select range</option>
          <option>Under ₦10M</option>
          <option>₦10M – ₦50M</option>
          <option>₦50M – ₦200M</option>
          <option>₦200M – ₦1B</option>
          <option>Above ₦1B</option>
        </select>
      </div>
    </div>
    <div>
      <label className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wide">Sector / Geography Interest</label>
      <input className={inputClass} placeholder="e.g. Agriculture, Lagos, West Africa" />
    </div>
    <div>
      <label className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wide">LinkedIn or Website</label>
      <input className={inputClass} placeholder="https://" />
    </div>
    <button type="submit" className="w-full bg-accent text-accent-foreground font-semibold py-3.5 rounded-md text-sm hover:brightness-110 transition-all">
      Apply for Access
    </button>
    <p className="text-[11px] text-muted-foreground text-center">Access is reviewed before activation. This is not automatic approval.</p>
  </form>
);

export default EngagePage;
