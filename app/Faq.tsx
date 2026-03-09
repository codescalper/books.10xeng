"use client";

import { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Are the books really free? No hidden fees?",
    a: "Yes, completely free. No login, no paywall, no catch. We believe education should be accessible to everyone.",
  },
  {
    q: "What format are the books in?",
    a: "All books and study materials are provided in high-quality PDF format, optimized for viewing on laptops, tablets, and phones.",
  },
  {
    q: "Do you have books for branches other than CS?",
    a: "Currently, first-year materials cover all branches. From 2nd year onwards, our focus is primarily on Computer Science/IT. We plan to expand based on community contributions.",
  },
  {
    q: "Do you provide VIVA preparation materials?",
    a: "Yes! We have dedicated sections for VIVA preparation, especially for core CS subjects, to help you ace your practical exams.",
  },
  {
    q: "When will notes and PYQs be available?",
    a: "Very soon. They are currently in the works. Follow us on socials or join our Discord to get notified the moment they drop.",
  },
];

export default function Faq() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
          entry.target.classList.remove("opacity-0");
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto opacity-0"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-clash font-bold text-white mb-4">
          System queries.
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto"></div>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border border-border bg-card px-6 rounded-none data-[state=open]:border-primary/50 transition-colors"
          >
            <AccordionTrigger className="font-clash text-xl md:text-2xl text-left hover:text-primary hover:no-underline py-6">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="font-satoshi text-muted-foreground text-base md:text-lg pb-6 leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
