import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

type Tab = "asset" | "investor";

const inputClass =
  "w-full bg-background border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent/40 focus:border-accent transition-colors";

const EngagePage = () => {
  const [tab, setTab] = useState<Tab>("asset");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Submission received. Review within 48 hours.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <PageHero
        label="Request Access"
        title={<>Enter the Verification <span className="text-accent">Layer</span></>}
        subtitle="Submit for verification or request investor access. All submissions are reviewed."
      />

      <section className="bg-background py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="flex mb-8">
              <div className="bg-card border border-border rounded-md p-1 inline-flex">
                <button
                  onClick={() => setTab("asset")}
                  className={`px-5 py-2 rounded text-sm font-medium transition-all ${
                    tab === "asset" ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Asset Owner
                </button>
                <button
                  onClick={() => setTab("investor")}
                  className={`px-5 py-2 rounded text-sm font-medium transition-all ${
                    tab === "investor" ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Investor
                </button>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal className="md:col-span-2" delay={100}>
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wide">Full Name *</label>
                    <input required className={inputClass} placeholder="Full name" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wide">Email *</label>
                    <input required type="email" className={inputClass} placeholder="Email" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wide">
                    {tab === "asset" ? "Company Name" : "Firm / Company"}
                  </label>
                  <input className={inputClass} placeholder={tab === "asset" ? "Company name" : "Firm or company"} />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wide">
                      {tab === "asset" ? "Sector" : "Investor Type"}
                    </label>
                    <select className={inputClass}>
                      <option value="">Select</option>
                      {tab === "asset" ? (
                        <>
                          <option>Agriculture</option>
                          <option>Manufacturing</option>
                          <option>Logistics</option>
                          <option>Real Estate</option>
                          <option>Technology</option>
                        </>
                      ) : (
                        <>
                          <option>Angel Investor</option>
                          <option>Private Credit</option>
                          <option>Acquisition Buyer</option>
                          <option>Institutional</option>
                        </>
                      )}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wide">
                      {tab === "asset" ? "Annual Revenue" : "Typical Ticket Size"}
                    </label>
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

                {tab === "asset" && (
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wide">Audited Financial Records?</label>
                    <select className={inputClass}>
                      <option value="">Select</option>
                      <option>Yes — fully audited</option>
                      <option>Partially</option>
                      <option>No — unaudited</option>
                    </select>
                  </div>
                )}

                {tab === "investor" && (
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wide">Sector / Geography Interest</label>
                    <input className={inputClass} placeholder="e.g. Agriculture, Lagos, West Africa" />
                  </div>
                )}

                <button type="submit" className="w-full bg-accent text-accent-foreground font-semibold py-3 rounded-md text-sm hover:brightness-110 transition-all">
                  {tab === "asset" ? "Submit for Verification" : "Apply for Access"}
                </button>
              </form>
            </ScrollReveal>

            <ScrollReveal delay={200} direction="right">
              <div className="bg-card border border-border rounded-lg p-8 h-fit">
                <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.2em]">Process</span>
                <div className="space-y-4 mt-5">
                  {[
                    "Submit application",
                    "Review within 48 hours",
                    tab === "asset" ? "Bankability assessment" : "Profile verification",
                    tab === "asset" ? "Structuring roadmap issued" : "Pipeline access granted",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded bg-accent/10 flex items-center justify-center shrink-0 text-accent text-[10px] font-bold font-mono">
                        {i + 1}
                      </span>
                      <p className="text-muted-foreground text-sm">{step}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-status-active" />
                    <span className="text-[11px] text-muted-foreground">All submissions reviewed. Access is not automatic.</span>
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

export default EngagePage;
