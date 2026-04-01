import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Shield, Activity, Lock, ChevronRight } from "lucide-react";

const tickerItems = [
  "Verified Financials",
  "Cashflow Visibility",
  "Governance Alignment",
  "Risk Transparency",
  "Decision Readiness",
  "Operational Evidence",
  "Capital Positioning",
  "Independent Verification",
];

const Index = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="relative gradient-hero overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 py-28 md:py-40">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-status-active" />
            <span className="text-muted-foreground text-[11px] font-medium tracking-[0.3em] uppercase">
              Capital Governance Operating System
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] max-w-[900px]">
            Capital doesn't move
            <br />
            on belief.{" "}
            <span className="text-accent italic">It moves on<br />verification.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-muted-foreground text-lg md:text-xl mt-8 max-w-[620px] leading-relaxed">
            TrustAFI is the institutional verification layer between assets and capital. 
            We structure, verify, and signal — so capital can move with certainty.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <Link
              to="/engage"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-7 py-3.5 rounded-md text-sm hover:brightness-110 transition-all"
            >
              Submit Asset for Verification
              <ChevronRight size={16} />
            </Link>
            <Link
              to="/engage"
              className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-7 py-3.5 rounded-md text-sm hover:border-accent hover:text-accent transition-all"
            >
              Request Investor Access
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Ticker - Chainlink style */}
    <div className="border-y border-border bg-background overflow-hidden py-4">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-6">
            <span className="w-1 h-1 rounded-full bg-accent" />
            <span className="text-[13px] text-muted-foreground font-medium tracking-wide">{item}</span>
          </span>
        ))}
      </div>
    </div>

    {/* Institutional Stats */}
    <section className="bg-background py-20 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { value: "12", label: "Verified Assets", sub: "In pipeline" },
            { value: "₦2.4B", label: "Aggregate Revenue", sub: "Across portfolio" },
            { value: "68%", label: "Avg Capacity", sub: "Utilization rate" },
            { value: "Active", label: "Verification Layer", sub: "Real-time" },
          ].map(({ value, label, sub }, i) => (
            <ScrollReveal key={label} delay={i * 80} direction="none">
              <div className="space-y-1">
                <span className="text-accent font-bold text-3xl md:text-4xl font-serif">{value}</span>
                <p className="text-foreground text-sm font-medium">{label}</p>
                <p className="text-muted-foreground text-xs">{sub}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Dual Audience - Calm, institutional */}
    <section className="bg-background py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.3em]">Two Sides of Certainty</span>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
          {/* Asset Owners */}
          <ScrollReveal direction="left">
            <div className="bg-card p-10 md:p-14 space-y-6">
              <Shield size={24} className="text-accent" />
              <span className="text-muted-foreground text-[11px] font-semibold uppercase tracking-[0.25em]">
                For Asset Owners & Founders
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-[1.1]">
                Stop asking capital to{" "}
                <span className="text-accent italic">believe</span> you.
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Structure your business so capital can verify you. Get scored, structured, and
                positioned for investment readiness.
              </p>
              <Link
                to="/engage"
                className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all"
              >
                Test Your Bankability <ChevronRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          {/* Investors */}
          <ScrollReveal direction="right">
            <div className="bg-card p-10 md:p-14 space-y-6">
              <Activity size={24} className="text-accent" />
              <span className="text-muted-foreground text-[11px] font-semibold uppercase tracking-[0.25em]">
                For Investors & Capital Allocators
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-[1.1]">
                Stop guessing.{" "}
                <span className="text-accent italic">Start verifying.</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Access structured, decision-ready cashflow assets. Deploy capital into
                verified opportunities with clarity.
              </p>
              <Link
                to="/engage"
                className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all"
              >
                Access Verified Pipeline <ChevronRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Trust Architecture */}
    <section className="bg-background py-20 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center gap-2 justify-center mb-4">
              <div className="w-8 h-px bg-accent" />
              <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.3em]">Infrastructure</span>
              <div className="w-8 h-px bg-accent" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              The Verification Layer
            </h2>
            <p className="text-muted-foreground text-base mt-3 max-w-lg mx-auto">
              Every asset passes through five verification stages before capital engagement.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
          {[
            { icon: Lock, title: "Data Structuring", desc: "Unstructured data becomes decision-readable intelligence." },
            { icon: Shield, title: "Independent Verification", desc: "Financial, operational, and field checks validate every claim." },
            { icon: Activity, title: "Capital Signal", desc: "Only verified assets surface to qualified capital allocators." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100} direction="none">
              <div className="bg-card p-8 md:p-10 space-y-4 h-full">
                <item.icon size={20} className="text-accent" />
                <h3 className="font-serif text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Positioning Statement */}
    <section className="bg-background py-24 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 text-center">
        <ScrollReveal>
          <p className="text-muted-foreground text-xs font-semibold uppercase tracking-[0.3em] mb-6">Positioning</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto leading-[1.15]">
            Not a marketplace. Not a loan platform.
            <br />
            <span className="text-accent italic">A verification layer for capital.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <Link
            to="/trustafi"
            className="inline-flex items-center gap-2 text-accent text-sm font-medium mt-8 hover:gap-3 transition-all"
          >
            Explore the System <ChevronRight size={14} />
          </Link>
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;
