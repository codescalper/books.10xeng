"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const semesters = [
  {
    id: 1,
    name: "Semester 1",
    year: "First Year",
    dept: "All Branches",
    status: "Available",
    link: "/books/sem1",
  },
  {
    id: 2,
    name: "Semester 2",
    year: "First Year",
    dept: "All Branches",
    status: "Available",
    link: "/books/sem2",
  },
  {
    id: 3,
    name: "Semester 3",
    year: "Second Year",
    dept: "Computer Science",
    status: "Available",
    link: "/books/sem3",
  },
  {
    id: 4,
    name: "Semester 4",
    year: "Second Year",
    dept: "Computer Science",
    status: "Available",
    link: "/books/sem4",
  },
  {
    id: 5,
    name: "Semester 5",
    year: "Third Year",
    dept: "Computer Science",
    status: "Coming Soon",
    link: "/books/sem5",
  },
  {
    id: 6,
    name: "Semester 6",
    year: "Third Year",
    dept: "Computer Science",
    status: "Coming Soon",
    link: "/books/sem6",
  },
  {
    id: 7,
    name: "Semester 7",
    year: "Fourth Year",
    dept: "Computer Science",
    status: "Coming Soon",
    link: "/books/sem7",
  },
  {
    id: 8,
    name: "Semester 8",
    year: "Fourth Year",
    dept: "Computer Science",
    status: "Coming Soon",
    link: "/books/sem8",
  },
];

export default function SemesterGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

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

    const cards = gridRef.current?.querySelectorAll(".sem-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      id="semesters"
    >
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-clash font-bold text-white mb-4">
          Choose your sem.
        </h2>
        <div className="h-1 w-20 bg-primary mb-6"></div>
        <p className="text-muted-foreground font-satoshi text-lg max-w-2xl">
          Structured roadmaps, PDFs, and notes curated for your exact syllabus.
        </p>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {semesters.map((sem, idx) => (
          <Link
            href={sem.link}
            key={sem.id}
            className="block group sem-card opacity-0"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <Card className="h-full bg-card border-border p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:bg-glow rounded-none">
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-5xl font-bold text-white/10 group-hover:text-primary/20 transition-colors">
                  0{sem.id}
                </span>
                <Badge
                  variant="outline"
                  className={`font-mono text-xs ${sem.status === "Available" ? "text-primary border-primary/30" : "text-muted-foreground border-border"}`}
                >
                  {sem.status}
                </Badge>
              </div>

              <div>
                <p className="font-mono text-sm text-primary mb-2">
                  {sem.year}
                </p>
                <h3 className="font-clash text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                  {sem.name}
                </h3>
                <p className="font-satoshi text-sm text-muted-foreground">
                  {sem.dept}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
