import { ShieldCheck, Eye, BarChart3, Zap } from "lucide-react";

const signals = [
  { icon: ShieldCheck, label: "Verified Financials" },
  { icon: Eye, label: "Cashflow Visibility" },
  { icon: BarChart3, label: "Risk Transparency" },
  { icon: Zap, label: "Decision Readiness" },
];

const TrustSignalStrip = () => (
  <section className="bg-off-white border-y border-border py-8">
    <div className="max-w-[1440px] mx-auto px-6 md:px-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {signals.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 justify-center">
            <div className="w-10 h-10 rounded-full bg-earth/10 flex items-center justify-center">
              <Icon size={20} className="text-earth" />
            </div>
            <span className="text-sm font-medium text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSignalStrip;
