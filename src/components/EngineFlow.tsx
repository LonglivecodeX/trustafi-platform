import { Database, Search, BarChart3, Signal, Banknote, ArrowRight } from "lucide-react";

const stages = [
  {
    icon: Database,
    title: "Data Structuring",
    desc: "From chaos to order",
    outcome: "Unstructured data becomes decision-readable",
  },
  {
    icon: Search,
    title: "Verification",
    desc: "From claims to reality",
    outcome: "Claims become verified reality",
  },
  {
    icon: BarChart3,
    title: "Bankability Scoring",
    desc: "DRR · DQI · VIS",
    outcome: "Investors see signals, not stories",
  },
  {
    icon: Signal,
    title: "Signal Layer",
    desc: "From information to trust",
    outcome: "Trust replaces speculation",
  },
  {
    icon: Banknote,
    title: "Capital Engagement",
    desc: "From signal to action",
    outcome: "Capital moves with precision",
  },
];

const EngineFlow = () => (
  <section id="engine" className="py-24 bg-off-white">
    <div className="max-w-[1440px] mx-auto px-6 md:px-20">
      <div className="text-center mb-16">
        <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
          The Engine
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
          How Capital Moves Through TrustAFI
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          A 5-stage system that transforms unstructured business data into
          verified, decision-ready intelligence.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-4">
        {stages.map((stage, i) => (
          <div key={stage.title} className="flex-1 flex flex-col md:flex-row items-center gap-4 w-full">
            <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-200 w-full text-center">
              <div className="w-12 h-12 rounded-full bg-earth/10 flex items-center justify-center mx-auto mb-4">
                <stage.icon size={24} className="text-earth" />
              </div>
              <span className="text-gold text-xs font-semibold">Stage {i + 1}</span>
              <h3 className="text-base font-bold text-foreground mt-1">{stage.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{stage.desc}</p>
              <p className="text-xs text-earth font-medium mt-3 border-t border-border pt-3">
                {stage.outcome}
              </p>
            </div>
            {i < stages.length - 1 && (
              <ArrowRight size={20} className="text-gold hidden md:block shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EngineFlow;
