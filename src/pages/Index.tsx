import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import { ChevronRight } from "lucide-react";
import heroSkyline from "@/assets/hero-skyline.jpg";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Signal Header */}
    <section className="relative gradient-hero">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-28 md:py-36">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-status-active" />
                <span className="text-muted-foreground text-[11px] font-mono tracking-[0.25em] uppercase">
                  Qualification Layer Active
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] max-w-[780px]">
                Capital moves on <span className="text-accent">verified signal</span>.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-muted-foreground text-base mt-6 max-w-[520px] leading-relaxed">
                TrustAFI qualifies, verifies, structures and signals asset readiness so capital deploys with certainty.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex gap-3 mt-10">
                <Link
                  to="/engage"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-md text-sm hover:brightness-110 transition-all"
                >
                  Start Qualification <ChevronRight size={14} />
                </Link>
                <Link
                  to="/engage"
                  className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-6 py-3 rounded-md text-sm hover:border-accent hover:text-accent transition-all"
                >
                  Investor Access
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200} direction="right">
            <div className="hidden md:block rounded-lg overflow-hidden shadow-xl">
              <img
                src={heroSkyline}
                alt="City skyline at golden hour"
                width={800}
                height={900}
                className="w-full h-auto object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* System Status */}
    <section className="border-y border-border bg-primary text-primary-foreground py-14">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <ScrollReveal>
          <div className="border border-primary-foreground/20 rounded-lg overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-primary-foreground/20">
              {[
                {
                  end: 12,
                  prefix: "",
                  suffix: "",
                  label: "Qualified Assets",
                  context: "↑ +3 this quarter",
                  decimals: 0,
                },
                { end: 2.4, prefix: "₦", suffix: "B", label: "Aggregate Revenue", context: "↑ +18% YoY", decimals: 1 },
                {
                  end: 68,
                  prefix: "",
                  suffix: "%",
                  label: "Avg Utilization",
                  context: "↑ Above benchmark",
                  decimals: 0,
                },
                {
                  end: 0,
                  prefix: "",
                  suffix: "",
                  label: "Signal Layer",
                  context: "● Live",
                  decimals: 0,
                  isActive: true,
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="group cursor-default p-6 md:p-8 text-center transition-all duration-300 hover:bg-primary-foreground/5 rounded-none"
                >
                  <span className="text-accent font-bold text-[40px] md:text-[56px] leading-none font-mono block text-primary-foreground">
                    {"isActive" in stat && stat.isActive ? (
                      <span className="inline-flex items-center gap-3 text-3xl">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-active opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-status-active" />
                        </span>
                        Active
                      </span>
                    ) : (
                      <CountUp end={stat.end} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
                    )}
                  </span>
                  <p className="text-[11px] mt-2 font-medium text-secondary bg-primary">{stat.context}</p>
                  <p className="text-primary-foreground/40 text-[10px] mt-1.5 font-semibold uppercase tracking-[0.25em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <Link
            to="/engage"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-md text-lg hover:brightness-110 transition-all"
          >
            Submit for Qualification <ChevronRight size={18} />
          </Link>
          <Link
            to="/engage"
            className="inline-flex items-center justify-center gap-2 border border-accent text-accent font-semibold px-8 py-4 rounded-md text-lg hover:bg-accent/10 transition-all"
          >
            Investor Access
          </Link>
        </div>
      </div>
    </section>

    {/* Process — 4 stages */}
    <section className="bg-background py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-10">
            <div className="w-6 h-px bg-accent" />
            <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.25em]">Process</span>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
          {[
            { num: "01", title: "Qualification", signal: "All entries screened before proceeding to review" },
            {
              num: "02",
              title: "Bankability Assessment",
              signal: "Intelligence-driven evaluation of capital readiness",
            },
            { num: "03", title: "Structuring", signal: "Data organized into decision-readable format" },
            { num: "04", title: "Capital Signaling", signal: "Qualified assets surface to capital allocators" },
          ].map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 80} direction="none">
              <div className="bg-card p-8 h-full">
                <span className="text-accent/40 font-mono text-xs font-bold">{step.num}</span>
                <h3 className="font-serif text-lg font-bold text-foreground mt-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{step.signal}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Dual Entry */}
    <section className="bg-background py-16 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
          <ScrollReveal direction="left">
            <div className="bg-card p-8 md:p-10 h-full">
              <span className="text-muted-foreground text-[11px] font-semibold uppercase tracking-[0.2em]">
                Asset Owners
              </span>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-3">
                Start verification. Get capital-ready.
              </h2>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                Submit for qualification. All entries are screened before proceeding to capital review.
              </p>
              <Link
                to="/engage"
                className="inline-flex items-center gap-2 text-accent text-sm font-medium mt-5 hover:gap-3 transition-all"
              >
                Submit for Qualification <ChevronRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-card p-8 md:p-10 h-full">
              <span className="text-muted-foreground text-[11px] font-semibold uppercase tracking-[0.2em]">
                Investors
              </span>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-3">Access verified pipeline only.</h2>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                Structured assets. Qualified data. Decision-ready metrics.
              </p>
              <Link
                to="/engage"
                className="inline-flex items-center gap-2 text-accent text-sm font-medium mt-5 hover:gap-3 transition-all"
              >
                Request Access <ChevronRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;
