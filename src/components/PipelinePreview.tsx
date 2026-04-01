import { BadgeCheck, TrendingUp, Gauge } from "lucide-react";

const assets = [
  {
    name: "Poultry Farm",
    revenue: "₦45M",
    capacity: "70%",
    badge: "Verified Financials",
  },
  {
    name: "Palm Oil Processing",
    revenue: "₦120M",
    capacity: "82%",
    badge: "3yr Track Record",
  },
  {
    name: "Logistics Business",
    revenue: "₦88M",
    capacity: "65%",
    badge: "EBITDA Positive",
  },
];

const PipelinePreview = () => (
  <section id="pipeline" className="py-24 bg-off-white">
    <div className="max-w-[1440px] mx-auto px-6 md:px-20">
      <div className="text-center mb-16">
        <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
          Pipeline
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
          Verified Asset Preview
        </h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
          A sample of structured, verified opportunities. Full data rooms
          available to verified investors.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {assets.map((asset) => (
          <div
            key={asset.name}
            className="bg-card rounded-xl border border-border p-6 shadow-card hover:shadow-card-hover transition-all duration-200 group"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-foreground text-lg">{asset.name}</h3>
              <span className="flex items-center gap-1 text-xs font-medium text-earth bg-earth/10 px-2.5 py-1 rounded-full">
                <BadgeCheck size={14} />
                Verified
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-gold" />
                <span className="text-sm text-muted-foreground">Revenue:</span>
                <span className="text-sm font-semibold text-foreground">{asset.revenue}</span>
              </div>
              <div className="flex items-center gap-2">
                <Gauge size={16} className="text-gold" />
                <span className="text-sm text-muted-foreground">Capacity:</span>
                <span className="text-sm font-semibold text-foreground">{asset.capacity}</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-border">
              <span className="text-xs text-gold font-medium">{asset.badge}</span>
            </div>

            <button className="mt-4 w-full border border-gold/30 text-gold text-sm font-medium py-2.5 rounded-md hover:bg-gold hover:text-foreground transition-all duration-200">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Authority block */}
      <div className="mt-16 text-center bg-earth rounded-xl p-10">
        <p className="text-gold text-2xl md:text-3xl font-bold">
          Only 1 in 5 businesses pass TrustAFI verification.
        </p>
        <p className="text-primary-foreground/50 mt-3 text-base">
          We do not list opportunities. We filter for bankability.
        </p>
      </div>
    </div>
  </section>
);

export default PipelinePreview;
