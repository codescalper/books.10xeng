"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import confetti from "canvas-confetti";

export default function ClientHero() {
  const router = useRouter();
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleCTA = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#a3e635", "#ffffff", "#222222"],
    });
    setTimeout(() => {
      router.push("/books");
    }, 400);
  };
  ``;
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
    };

    const handleMouseLeave = () => {
      btn.style.transform = `translate(0px, 0px) scale(1)`;
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="ambient-bg"></div>

      <div className="text-center max-w-5xl mx-auto z-10 space-y-8">
        <div className="opacity-0 animate-fade-in-up flex justify-center">
          <Badge
            variant="outline"
            className="font-mono text-primary border-primary/30 bg-primary/5 px-4 py-1.5 text-sm uppercase tracking-wider"
          >
            Open Source &middot; Free Forever
          </Badge>
        </div>

        <h1 className="opacity-0 animate-fade-in-up delay-200 text-5xl md:text-7xl lg:text-8xl font-clash font-bold text-white tracking-tighter leading-[1.05]">
          Stop cramming.
          <br />
          <span className="text-primary text-glow">Start engineering.</span>
        </h1>

        <p className="opacity-0 animate-fade-in-up delay-300 mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-satoshi font-medium">
          Free books, notes & resources for every semester.
          <br />
          Built by engineers, for engineers.
        </p>

        <div className="opacity-0 animate-fade-in-up delay-400 mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            ref={btnRef}
            onClick={handleCTA}
            size="lg"
            className="transition-all duration-300 ease-out bg-primary text-primary-foreground hover:bg-primary/90 font-mono font-bold text-base h-16 px-8 rounded-none border border-primary relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Free Books
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
