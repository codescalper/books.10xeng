"use client";
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Header } from "../Header";
import Footer from "../Footer";

const data = [
  {
    title: "First Year",
    desc: "All Departments",
    sems: [
      { id: 1, name: "Sem 1", path: "/books/sem1" },
      { id: 2, name: "Sem 2", path: "/books/sem2" },
    ],
  },
  {
    title: "Second Year",
    desc: "Computer Engineering",
    sems: [
      { id: 3, name: "Sem 3", path: "/books/sem3" },
      { id: 4, name: "Sem 4", path: "/books/sem4" },
    ],
  },
  {
    title: "Third Year",
    desc: "Computer Engineering",
    sems: [
      { id: 5, name: "Sem 5", path: "/books/sem5" },
      { id: 6, name: "Sem 6", path: "/books/sem6" },
    ],
  },
  {
    title: "Fourth Year",
    desc: "Computer Engineering",
    sems: [
      { id: 7, name: "Sem 7", path: "/books/sem7" },
      { id: 8, name: "Sem 8", path: "/books/sem8" },
    ],
  },
];

export default function Books() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex flex-grow flex-col items-center px-4 pt-24 sm:px-6 lg:px-8">
        <div className="mb-16 text-center animate-fade-in-up">
          <h1 className="font-clash text-5xl font-bold tracking-tight text-white md:text-6xl">
            Syllabus <span className="text-primary text-glow">Archives.</span>
          </h1>
          <p className="mt-6 font-satoshi text-lg text-muted-foreground md:text-xl">
            Select your year and semester to access curated resources.
          </p>
          <div className="mx-auto mt-8 h-1 w-20 bg-primary"></div>
        </div>

        <div className="mx-auto mb-24 grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {data.map((year, i) => (
            <Card
              key={i}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-none border border-border bg-card p-2 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:bg-glow animate-fade-in-up delay-${(i + 1) * 100}`}
            >
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />

              <CardHeader className="relative z-10 pb-4 pt-8 text-center border-b border-border/50 mx-4">
                <div className="font-mono text-sm tracking-wider text-primary mb-2 uppercase">
                  {year.desc}
                </div>
                <h2 className="font-clash text-3xl font-bold text-white group-hover:text-primary transition-colors">
                  {year.title}
                </h2>
              </CardHeader>

              <CardContent className="flex flex-col gap-4 pt-8 px-6 pb-6 relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  {year.sems.map((sem) => (
                    <Link key={sem.id} href={sem.path} className="block w-full">
                      <Button
                        variant="outline"
                        className="h-14 w-full rounded-none border-border bg-secondary/50 font-mono text-base font-bold transition-all hover:border-primary hover:bg-primary hover:text-black"
                      >
                        {sem.name}
                      </Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
