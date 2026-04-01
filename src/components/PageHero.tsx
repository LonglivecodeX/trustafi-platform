import { ReactNode } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface PageHeroProps {
  label: string;
  title: ReactNode;
  subtitle: string;
}

const PageHero = ({ label, title, subtitle }: PageHeroProps) => (
  <section className="bg-earth py-24 md:py-32">
    <div className="max-w-[1440px] mx-auto px-6 md:px-20 text-center">
      <ScrollReveal>
        <span className="text-gold text-xs font-semibold uppercase tracking-[0.25em]">
          {label}
        </span>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-6 leading-[1.15] max-w-4xl mx-auto">
          {title}
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <p className="text-primary-foreground/60 text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default PageHero;
