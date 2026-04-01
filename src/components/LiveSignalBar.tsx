import { Activity, TrendingUp, Gauge, Shield } from "lucide-react";

const metrics = [
  { icon: Shield, value: "12", label: "Verified Assets" },
  { icon: TrendingUp, value: "₦2.4B", label: "Aggregate Revenue" },
  { icon: Gauge, value: "68%", label: "Avg Capacity Utilization" },
  { icon: Activity, value: "Active", label: "Verification Layer" },
];

const LiveSignalBar = () => (
  <section className="bg-earth py-6 border-b border-gold/10">
    <div className="max-w-[1440px] mx-auto px-6 md:px-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon size={18} className="text-gold" />
            <div>
              <span className="text-gold font-bold text-lg">{value}</span>
              <p className="text-primary-foreground/50 text-xs">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LiveSignalBar;
