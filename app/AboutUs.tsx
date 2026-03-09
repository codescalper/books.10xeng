"use client";

import { useEffect, useRef } from "react";
import { BookOpen, Target, Users, Mic } from "lucide-react";
import { Card } from "@/components/ui/card";

const pillars = [
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    title: "Free Resources",
    desc: "Curated PDF books, notes, and PYQs organized semester-wise. No paywalls, ever.",
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Career Training",
    desc: "Academics aren't enough. We provide roadmaps and training for real-world engineering.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Networking",
    desc: "Connect with peers, alumni, and industry experts through our events and community.",
  },
  {
    icon: <Mic className="w-8 h-8 text-primary" />,
    title: "Live Q&A",
    desc: "Weekly Discord sessions to solve doubts, review resumes, and discuss tech trends.",
  },
];

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal-elem");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 reveal-elem opacity-0">
          <div>
            <h2 className="text-4xl md:text-5xl font-clash font-bold text-white mb-4">
              More than just books.
            </h2>
            <div className="h-1 w-20 bg-primary mb-6"></div>
          </div>
          <p className="text-xl text-muted-foreground font-satoshi leading-relaxed">
            10xEng is a movement to build better engineers. We bypass the
            outdated curriculum by providing modern resources, career guidance,
            and a community of builders.
          </p>
          <div className="pt-4 border-l-2 border-primary/50 pl-6 space-y-4">
            <p className="text-white font-mono italic">
              &quot;We essentially want to build the ultimate open-source
              engineering toolkit.&quot;
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((pillar, idx) => (
            <Card
              key={idx}
              className={`reveal-elem opacity-0 bg-card border-border p-6 rounded-none hover:border-primary/50 transition-colors delay-${(idx + 1) * 100}`}
            >
              <div className="mb-4 bg-primary/10 w-16 h-16 flex items-center justify-center rounded-none border border-primary/20">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-clash font-bold text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground font-satoshi text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
