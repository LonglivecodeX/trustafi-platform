import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

type Tab = "founder" | "investor";

const inputClass =
  "w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors";

const EngagePage = () => {
  const [tab, setTab] = useState<Tab>("founder");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Submission received! We'll be in touch shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <PageHero
        label="Take Action"
        title={
          <>
            Enter the Verified{" "}
            <span className="text-gold italic">Capital Environment</span>
          </>
        }
        subtitle="Whether you're a founder seeking capital readiness or an investor seeking verified deals — start here."
      />

      <section className="bg-off-white py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          {/* Tab Toggle */}
          <div className="flex mb-10">
            <div className="bg-muted rounded-lg p-1 inline-flex">
              <button
                onClick={() => setTab("founder")}
                className={`px-6 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 ${
                  tab === "founder"
                    ? "bg-earth text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                I'm a Founder
              </button>
              <button
                onClick={() => setTab("investor")}
                className={`px-6 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 ${
                  tab === "investor"
                    ? "bg-earth text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                I'm an Investor
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Form */}
            <div className="md:col-span-2">
              {tab === "founder" ? (
                <FounderForm onSubmit={handleSubmit} />
              ) : (
                <InvestorForm onSubmit={handleSubmit} />
              )}
            </div>

            {/* What Happens Next sidebar */}
            <div className="bg-earth rounded-xl p-8 h-fit">
              <h3 className="font-serif text-xl font-bold text-primary-foreground italic">
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
                    <span className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center shrink-0 text-gold text-xs font-bold">
                      {i + 1}
                    </span>
                    <p className="text-primary-foreground/70 text-sm leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const FounderForm = ({ onSubmit }: { onSubmit: (e: React.FormEvent<HTMLFormElement>) => void }) => (
  <form onSubmit={onSubmit} className="bg-card rounded-xl border border-border p-8 shadow-card space-y-5">
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
        <input required className={inputClass} placeholder="Your full name" />
      </div>
      <div>
        <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
        <input required type="email" className={inputClass} placeholder="you@company.com" />
      </div>
    </div>
    <div>
      <label className="text-sm font-medium text-foreground mb-1.5 block">Company Name</label>
      <input className={inputClass} placeholder="Your company name" />
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="text-sm font-medium text-foreground mb-1.5 block">Sector</label>
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
        <label className="text-sm font-medium text-foreground mb-1.5 block">Annual Revenue Range</label>
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
      <label className="text-sm font-medium text-foreground mb-1.5 block">
        Do you have audited financial records?
      </label>
      <select className={inputClass}>
        <option value="">Select</option>
        <option>Yes — fully audited</option>
        <option>Partially — some records available</option>
        <option>No — unaudited</option>
      </select>
    </div>
    <button
      type="submit"
      className="w-full bg-gold text-foreground font-semibold py-3.5 rounded-md hover:brightness-110 transition-all shadow-gold"
    >
      Submit for Verification
    </button>
    <p className="text-xs text-muted-foreground text-center">
      Your data will be reviewed for structuring eligibility.
    </p>
  </form>
);

const InvestorForm = ({ onSubmit }: { onSubmit: (e: React.FormEvent<HTMLFormElement>) => void }) => (
  <form onSubmit={onSubmit} className="bg-card rounded-xl border border-border p-8 shadow-card space-y-5">
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
        <input required className={inputClass} placeholder="Your full name" />
      </div>
      <div>
        <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
        <input required type="email" className={inputClass} placeholder="you@company.com" />
      </div>
    </div>
    <div>
      <label className="text-sm font-medium text-foreground mb-1.5 block">Firm / Company</label>
      <input className={inputClass} placeholder="Your firm or company" />
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="text-sm font-medium text-foreground mb-1.5 block">Investor Type</label>
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
        <label className="text-sm font-medium text-foreground mb-1.5 block">Typical Ticket Size</label>
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
      <label className="text-sm font-medium text-foreground mb-1.5 block">Sector / Geography Interest</label>
      <input className={inputClass} placeholder="e.g. Agriculture, Lagos, West Africa" />
    </div>
    <div>
      <label className="text-sm font-medium text-foreground mb-1.5 block">LinkedIn or Website (optional)</label>
      <input className={inputClass} placeholder="https://" />
    </div>
    <button
      type="submit"
      className="w-full bg-gold text-foreground font-semibold py-3.5 rounded-md hover:brightness-110 transition-all shadow-gold"
    >
      Apply for Access
    </button>
    <p className="text-xs text-muted-foreground text-center">
      Access is reviewed before activation. This is not automatic approval.
    </p>
  </form>
);

export default EngagePage;
