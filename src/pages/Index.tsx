import heroPattern from "@/assets/hero-pattern.jpg";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Manifesto strip */}
    <div className="bg-earth py-10 md:py-14">
      <p className="text-center text-gold text-sm md:text-base font-semibold uppercase tracking-[0.25em] px-6">
        Capital doesn't move on belief. It moves on verification.
      </p>
    </div>

    {/* Split Hero */}
    <section
      className="relative bg-earth overflow-hidden"
      style={{
        backgroundImage: `url(${heroPattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="absolute inset-0 bg-earth/85" />
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-16 md:gap-12">
          {/* Left - Founders */}
          <div className="space-y-6">
            <span className="text-primary-foreground/50 text-xs font-semibold uppercase tracking-[0.2em]">
              For Founders & Businesses
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-primary-foreground leading-[1.1]">
              Stop asking investors to{" "}
              <span className="text-gold italic">believe</span> you.
            </h2>
            <p className="text-primary-foreground/60 text-base md:text-lg max-w-md leading-relaxed">
              Structure your business so capital can verify you. Get scored, structured, and
              positioned for investment readiness.
            </p>
            <Link
              to="/engage"
              className="inline-block bg-gold text-foreground font-semibold px-8 py-3.5 rounded-md text-base hover:brightness-110 transition-all duration-200 shadow-gold"
            >
              Test Your Bankability
            </Link>
          </div>

          {/* Right - Investors */}
          <div className="space-y-6">
            <span className="text-primary-foreground/50 text-xs font-semibold uppercase tracking-[0.2em]">
              For Investors & Capital Allocators
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-primary-foreground leading-[1.1]">
              Stop guessing.{" "}
              <span className="text-gold italic">Start verifying.</span>
            </h2>
            <p className="text-primary-foreground/60 text-base md:text-lg max-w-md leading-relaxed">
              Access structured, decision-ready cashflow assets. Deploy capital into
              verified opportunities with clarity and confidence.
            </p>
            <Link
              to="/engage"
              className="inline-block border-2 border-gold text-gold font-semibold px-8 py-3.5 rounded-md text-base hover:bg-gold hover:text-foreground transition-all duration-200"
            >
              View Verified Pipeline
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Live Signal Bar */}
    <section className="bg-off-white border-y border-border py-6">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "12", label: "Verified Assets" },
            { value: "₦2.4B", label: "Aggregate Revenue" },
            { value: "68%", label: "Avg Capacity Utilization" },
            { value: "Active", label: "Verification Layer" },
          ].map(({ value, label }) => (
            <div key={label}>
              <span className="text-earth font-bold text-xl">{value}</span>
              <p className="text-muted-foreground text-xs mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust Signals */}
    <section className="bg-off-white py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Verified Financials", "Cashflow Visibility", "Risk Transparency", "Decision Readiness"].map((label) => (
            <div key={label} className="flex items-center gap-3 justify-center">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-sm font-medium text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;
