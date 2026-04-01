import { ReactNode } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface PageHeroProps {
  label: string;
  title: ReactNode;
  subtitle: string;
}

const PageHero = ({ label, title, subtitle }: PageHeroProps) => (
  <section className="bg-background py-24 md:py-32 border-b border-border">
    <div className="max-w-[1400px] mx-auto px-6 md:px-16">
      <ScrollReveal>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-px bg-accent" />
          <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.3em]">
            {label}
          </span>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] max-w-4xl">
          {title}
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <p className="text-muted-foreground text-base md:text-lg mt-6 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default PageHero;
