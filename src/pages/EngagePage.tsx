import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Checkbox } from "@/components/ui/checkbox";

type Tab = "asset" | "investor";

const WEBHOOK_URL = "https://trustafi.app.n8n.cloud/webhook/trustafi-intake";

const inputClass =
  "w-full bg-background border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent/40 focus:border-accent transition-colors";

const labelClass = "text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wide";

const sectorOptions = ["Agriculture", "Real Estate", "Energy", "Technology", "Finance", "Healthcare", "Other"];
const geoOptions = ["Sub-Saharan Africa", "North Africa", "West Africa", "East Africa", "Southern Africa", "Global"];

const EngagePage = () => {
  const [tab, setTab] = useState<Tab>("asset");
  const [submitting, setSubmitting] = useState(false);
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [selectedGeo, setSelectedGeo] = useState<string[]>([]);

  const toggleCheckbox = (value: string, list: string[], setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const data: Record<string, unknown> = {};
    fd.forEach((val, key) => { data[key] = val; });

    data.intakeType = tab === "asset" ? "Asset Owner" : "Capital Allocator";

    if (tab === "investor") {
      data.targetSectors = selectedSectors;
      data.geographicFocus = selectedGeo;
    }

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      toast.success("Submission received. Review within 48 hours.");
      form.reset();
      setSelectedSectors([]);
      setSelectedGeo([]);
    } catch {
      toast.error("Submission failed. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <PageHero
        label="Start Qualification"
        title={<>Enter the TrustAFI Environment for <span className="text-accent">Structured Capital Readiness</span></>}
        subtitle="Submit for qualification. All entries are screened before proceeding to verification and capital review."
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
                {/* Common fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input required name="fullName" className={inputClass} placeholder="Full name" />
                  </div>
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input required type="email" name="email" className={inputClass} placeholder="Email" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <input type="tel" name="phone" className={inputClass} placeholder="+234 000 000 0000" />
                  </div>
                  <div>
                    <label className={labelClass}>
                      {tab === "asset" ? "Company Name" : "Firm / Company"}
                    </label>
                    <input name="company" className={inputClass} placeholder={tab === "asset" ? "Company name" : "Firm or company"} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Country</label>
                    <input name="country" className={inputClass} placeholder="Country" />
                  </div>
                  <div>
                    <label className={labelClass}>City</label>
                    <input name="city" className={inputClass} placeholder="City" />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>LinkedIn Profile (username or URL)</label>
                  <input type="text" name="linkedinUrl" className={inputClass} placeholder="username or https://linkedin.com/in/..." />
                </div>

                {/* Asset Owner specific fields */}
                {tab === "asset" && (
                  <>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Sector</label>
                        <select name="sector" className={inputClass}>
                          <option value="">Select</option>
                          <option>Agriculture</option>
                          <option>Manufacturing</option>
                          <option>Logistics</option>
                          <option>Real Estate</option>
                          <option>Technology</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Annual Revenue</label>
                        <select name="annualRevenue" className={inputClass}>
                          <option value="">Select range</option>
                          <option>₦100M – ₦500M</option>
                          <option>₦500M – ₦1B</option>
                          <option>₦1B – ₦5B</option>
                          <option>Above ₦5B</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Audited Financial Records?</label>
                      <select name="auditedRecords" className={inputClass}>
                        <option value="">Select</option>
                        <option>Yes — fully audited</option>
                        <option>Partially</option>
                        <option>No — unaudited</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Funding Sought (USD)</label>
                        <input type="number" name="fundingSought" className={inputClass} placeholder="e.g. 500000" />
                      </div>
                      <div>
                        <label className={labelClass}>Investment Readiness</label>
                        <select name="investmentReadiness" className={inputClass}>
                          <option value="">Select</option>
                          <option>Bankable</option>
                          <option>Nearly Bankable</option>
                          <option>Not Ready</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Intended Use of Funds</label>
                      <textarea name="intendedUseOfFunds" className={`${inputClass} min-h-[80px] resize-y`} placeholder="Describe intended use of funds..." />
                    </div>

                    <div>
                      <label className={labelClass}>Legal Documentation Status</label>
                      <select name="legalDocStatus" className={inputClass}>
                        <option value="">Select</option>
                        <option>Submitted</option>
                        <option>Pending</option>
                        <option>Not Available</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Collateral / Security</label>
                        <input name="collateral" className={inputClass} placeholder="e.g. Land title, equipment" />
                      </div>
                      <div>
                        <label className={labelClass}>Offtake Agreements</label>
                        <input name="offtakeAgreements" className={inputClass} placeholder="e.g. Confirmed buyer contracts" />
                      </div>
                    </div>
                  </>
                )}

                {/* Investor specific fields */}
                {tab === "investor" && (
                  <>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Allocator Type</label>
                        <select name="allocatorType" className={inputClass}>
                          <option value="">Select</option>
                          <option>Fund</option>
                          <option>Family Office</option>
                          <option>Angel</option>
                          <option>Corporate</option>
                          <option>DFI</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Preferred Instrument</label>
                        <select name="preferredInstrument" className={inputClass}>
                          <option value="">Select</option>
                          <option>Equity</option>
                          <option>Debt</option>
                          <option>Grant</option>
                          <option>Blended Finance</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className={labelClass}>Minimum Ticket Size (USD)</label>
                        <input type="number" name="minTicketSize" className={inputClass} placeholder="e.g. 100000" />
                      </div>
                      <div>
                        <label className={labelClass}>Maximum Ticket Size (USD)</label>
                        <input type="number" name="maxTicketSize" className={inputClass} placeholder="e.g. 5000000" />
                      </div>
                      <div>
                        <label className={labelClass}>Risk Appetite</label>
                        <select name="riskAppetite" className={inputClass}>
                          <option value="">Select</option>
                          <option>Low</option>
                          <option>Medium</option>
                          <option>High</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Sector / Geography Interest</label>
                      <input name="sectorGeoInterest" className={inputClass} placeholder="e.g. Agriculture, Lagos, West Africa" />
                    </div>

                    <div>
                      <label className={labelClass}>Deployment Readiness</label>
                      <select name="deploymentReadiness" className={inputClass}>
                        <option value="">Select</option>
                        <option>Ready to Deploy</option>
                        <option>Exploring</option>
                        <option>Not Ready</option>
                      </select>
                    </div>

                    <div>
                      <label className={`${labelClass} mb-3`}>Target Sectors</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {sectorOptions.map((s) => (
                          <label key={s} className="flex items-center gap-2 cursor-pointer">
                            <Checkbox
                              checked={selectedSectors.includes(s)}
                              onCheckedChange={() => toggleCheckbox(s, selectedSectors, setSelectedSectors)}
                            />
                            <span className="text-sm text-muted-foreground">{s}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className={`${labelClass} mb-3`}>Geographic Focus</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {geoOptions.map((g) => (
                          <label key={g} className="flex items-center gap-2 cursor-pointer">
                            <Checkbox
                              checked={selectedGeo.includes(g)}
                              onCheckedChange={() => toggleCheckbox(g, selectedGeo, setSelectedGeo)}
                            />
                            <span className="text-sm text-muted-foreground">{g}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-accent text-accent-foreground font-semibold py-3 rounded-md text-sm hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting
                    ? "Submitting..."
                    : tab === "asset"
                      ? "Submit for Qualification"
                      : "Apply for Access"}
                </button>
              </form>
            </ScrollReveal>

            <ScrollReveal delay={200} direction="right">
              <div className="bg-card border border-border rounded-lg p-8 h-fit">
                <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.2em]">Process</span>
                <div className="space-y-4 mt-5">
                  {[
                    "Submit for qualification",
                    "Screening within 48 hours",
                    tab === "asset" ? "Bankability intelligence assessment" : "Profile review",
                    tab === "asset" ? "Structuring and capital readiness signaling" : "Pipeline access granted",
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
                    <span className="text-[11px] text-muted-foreground">All entries are screened. Access is not automatic.</span>
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
