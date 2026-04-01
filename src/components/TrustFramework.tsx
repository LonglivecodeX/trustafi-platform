import { FileCheck, Factory, DollarSign, Scale, ClipboardCheck } from "lucide-react";

const items = [
  { icon: FileCheck, label: "Verified Financial Records" },
  { icon: Factory, label: "Operational Evidence" },
  { icon: DollarSign, label: "Cashflow Validation" },
  { icon: Scale, label: "Governance Alignment" },
  { icon: ClipboardCheck, label: "Independent Data Checks" },
];

const TrustFramework = () => (
  <section id="trust" className="py-24 bg-earth">
    <div className="max-w-[1440px] mx-auto px-6 md:px-20">
      <div className="text-center mb-16">
        <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
          Trust Signals
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-3">
          What We Verify
        </h2>
        <p className="text-primary-foreground/50 mt-4 max-w-lg mx-auto">
          Every asset passes through a rigorous verification framework before
          being surfaced to capital allocators.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="bg-earth-deep/40 backdrop-blur-sm border border-gold/10 rounded-xl p-6 text-center hover:border-gold/30 transition-colors duration-200 group"
          >
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
              <Icon size={22} className="text-gold" />
            </div>
            <p className="text-primary-foreground text-sm font-medium">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustFramework;
