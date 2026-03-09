import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Header } from "@/app/Header";
import Footer from "@/app/Footer";

const resources = [
  {
    title: "Engineering Mathematics (EM-4)",
    link: "https://drive.google.com/drive/folders/1v6GHyRA-oTQ3QCEGKievapw5oVewTHpi?usp=drive_link",
  },
  {
    title: "Analysis of Algorithms (AOA)",
    link: "https://drive.google.com/drive/folders/1VHFYXYqi6lv81mft0aa1rrbRFryIXdDn?usp=drive_link",
  },
  {
    title: "Database Management System (DBMS)",
    link: "https://drive.google.com/drive/folders/1McIOxDze2GlpH_hM5MC-yqo-zDzKJiI9?usp=drive_link",
  },
  {
    title: "Operating System (OS)",
    link: "https://drive.google.com/drive/folders/1x_O5SRepGEXxMbVgcleoAL6OMAcpH3UH?usp=drive_link",
  },
  {
    title: "Microprocessor (MP)",
    link: "https://drive.google.com/drive/folders/1KWgNSywvk0E0Zqy4bmbcUOmx7kCQfSc6?usp=drive_link",
  },
];

const ResourceCard: React.FC<{ title: string; link: string }> = ({
  title,
  link,
}) => (
  <Card className="group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-none border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:bg-glow">
    <div className="absolute right-0 top-0 h-24 w-24 -translate-y-12 translate-x-12 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20" />
    <div className="z-10 mb-8 space-y-4">
      <div className="inline-block border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-primary">
        PDF Resource
      </div>
      <h3 className="font-clash text-2xl font-bold leading-tight text-white transition-colors group-hover:text-primary">
        {title}
      </h3>
    </div>
    <div className="z-10 mt-auto pt-6">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        <Button className="h-12 w-full rounded-none border border-border bg-secondary font-mono font-bold text-white transition-all duration-300 hover:border-primary hover:bg-primary hover:text-black">
          Download PDF
        </Button>
      </a>
    </div>
  </Card>
);

export default function Sem4() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-grow flex-col items-center pt-24 px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center animate-fade-in-up">
          <h1 className="font-clash text-4xl font-bold text-white md:text-5xl">
            Semester Resources
          </h1>
          <div className="mx-auto mt-4 h-1 w-20 bg-primary"></div>
        </div>
        <div className="grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto pb-24">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              link={resource.link}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
