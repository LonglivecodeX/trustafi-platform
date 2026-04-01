import { useState } from "react";
import { toast } from "sonner";

type Tab = "founder" | "investor";

const EngageSection = () => {
  const [tab, setTab] = useState<Tab>("founder");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Submission received! We'll be in touch shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="engage" className="py-24 bg-off-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center mb-12">
          <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Enter the Verified Capital Environment
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Whether you're seeking capital or deploying it, start here.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-muted rounded-lg p-1 inline-flex">
            <button
              onClick={() => setTab("founder")}
              className={`px-6 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 ${
                tab === "founder"
                  ? "bg-earth text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Founder / Asset Owner
            </button>
            <button
              onClick={() => setTab("investor")}
              className={`px-6 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 ${
                tab === "investor"
                  ? "bg-earth text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Investor / Capital Allocator
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {tab === "founder" ? <FounderForm onSubmit={handleSubmit} /> : <InvestorForm onSubmit={handleSubmit} />}
        </div>
      </div>
    </section>
  );
};

const inputClass =
  "w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors";

const FounderForm = ({ onSubmit }: { onSubmit: (e: React.FormEvent<HTMLFormElement>) => void }) => (
  <form onSubmit={onSubmit} className="bg-card rounded-xl border border-border p-8 shadow-card space-y-5">
    <h3 className="text-xl font-bold text-foreground">Submit Your Business for Verification</h3>
    <p className="text-sm text-muted-foreground">
      Start the structuring process. We'll assess your bankability and guide you through verification.
    </p>
    <div className="grid md:grid-cols-2 gap-4">
      <input required className={inputClass} placeholder="Full Name" />
      <input required type="email" className={inputClass} placeholder="Email Address" />
      <input required className={inputClass} placeholder="Business Name" />
      <select required className={inputClass}>
        <option value="">Business Sector</option>
        <option>Agriculture</option>
        <option>Manufacturing</option>
        <option>Logistics</option>
        <option>Real Estate</option>
        <option>Technology</option>
        <option>Other</option>
      </select>
      <input className={inputClass} placeholder="Annual Revenue (estimate)" />
      <input className={inputClass} placeholder="Years in Operation" />
    </div>
    <textarea
      className={inputClass}
      rows={3}
      placeholder="Brief description of your business and what you're seeking"
    />
    <button
      type="submit"
      className="w-full bg-gold text-foreground font-semibold py-3.5 rounded-md hover:brightness-110 transition-all shadow-gold"
    >
      Start Assessment
    </button>
    <p className="text-xs text-muted-foreground text-center">
      Your information is kept confidential and used only for verification purposes.
    </p>
  </form>
);

const InvestorForm = ({ onSubmit }: { onSubmit: (e: React.FormEvent<HTMLFormElement>) => void }) => (
  <form onSubmit={onSubmit} className="bg-card rounded-xl border border-border p-8 shadow-card space-y-5">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-xs font-semibold text-gold bg-gold/10 px-2.5 py-1 rounded-full">
        Verified Investor Access
      </span>
    </div>
    <h3 className="text-xl font-bold text-foreground">Apply for Pipeline Access</h3>
    <p className="text-sm text-muted-foreground">
      Full financials, verification detail, and deeper deal materials are available to verified investors only.
    </p>
    <div className="grid md:grid-cols-2 gap-4">
      <input required className={inputClass} placeholder="Full Name" />
      <input required type="email" className={inputClass} placeholder="Email Address" />
      <input required className={inputClass} placeholder="Firm / Company" />
      <select required className={inputClass}>
        <option value="">Investor Type</option>
        <option>Angel Investor</option>
        <option>Private Credit</option>
        <option>Acquisition Buyer</option>
        <option>Strategic Investor</option>
        <option>Institutional</option>
      </select>
      <input className={inputClass} placeholder="Typical Ticket Size" />
      <input className={inputClass} placeholder="Sector / Geography Interest" />
    </div>
    <input className={inputClass} placeholder="LinkedIn or Website (optional)" />
    <textarea
      className={inputClass}
      rows={3}
      placeholder="Reason for access / investment focus"
    />
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

export default EngageSection;
