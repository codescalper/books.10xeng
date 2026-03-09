"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { Github, MessageSquare } from "lucide-react";

const OpenSource = () => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-y border-border opacity-0"
    >
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-clash font-bold text-white">
          Community Driven. <br className="md:hidden" />
          <span className="text-primary text-glow">Proudly Open Source.</span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground font-satoshi max-w-2xl mx-auto">
          10xEng is built by students, for students. We believe education should
          be free, accessible, and transparent. View our code, contribute
          resources, or join the discussion.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 max-w-3xl mx-auto border-y border-border/50">
          <div className="p-4">
            <div className="font-mono text-4xl font-bold text-white mb-2">
              100%
            </div>
            <div className="text-sm font-mono text-muted-foreground">
              Free Forever
            </div>
          </div>
          <div className="p-4">
            <div className="font-mono text-4xl font-bold text-white mb-2">
              8+
            </div>
            <div className="text-sm font-mono text-muted-foreground">
              Semesters
            </div>
          </div>
          <div className="p-4">
            <div className="font-mono text-4xl font-bold text-white mb-2">
              24/7
            </div>
            <div className="text-sm font-mono text-muted-foreground">
              Access
            </div>
          </div>
          <div className="p-4">
            <div className="font-mono text-4xl font-bold text-white mb-2">
              All
            </div>
            <div className="text-sm font-mono text-muted-foreground">
              Open Source
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <a
            href="https://github.com/codescalper/books.10xeng"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 font-mono font-bold rounded-none h-14 px-8 w-full sm:w-auto"
            >
              <Github className="mr-2 h-5 w-5" />
              Star on GitHub
            </Button>
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="border-border text-white hover:bg-secondary hover:text-white font-mono font-bold rounded-none h-14 px-8 w-full sm:w-auto"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Join Discord
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
