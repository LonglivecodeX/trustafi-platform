import { ReactNode } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface PageHeroProps {
  label: string;
  title: ReactNode;
  subtitle: string;
}

const PageHero = ({ label, title, subtitle }: PageHeroProps) => (
  <section className="bg-background py-20 md:py-28 border-b border-border">
    <div className="max-w-[1400px] mx-auto px-6 md:px-16">
      <ScrollReveal>
        <div className="flex items-center gap-2 mb-5">
          <div className="w-6 h-px bg-accent" />
          <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.25em]">{label}</span>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] max-w-3xl">
          {title}
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={160}>
        <p className="text-muted-foreground text-base mt-4 max-w-xl leading-relaxed">{subtitle}</p>
      </ScrollReveal>
    </div>
  </section>
);

export default PageHero;
