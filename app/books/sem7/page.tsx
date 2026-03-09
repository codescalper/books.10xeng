import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Header } from "@/app/Header";
import Footer from "@/app/Footer";

const resources = [
  {
    title: "Machine Learning (ML)",
    link: "https://drive.google.com/file/d/1M32pp432UKrEtjRnEAS3meya8FMy9fRR/view?usp=sharing",
  },
  {
    title: "Big Data Analytics (BDA)",
    link: "https://drive.google.com/drive/folders/1LCutS9lHDNK2V-eq_e8hFsawKNtpKvXl?usp=sharing",
  },
  {
    title: "Natural Language Processing (NLP)",
    link: "https://drive.google.com/drive/folders/1UJfqVbTvzcuDPGPlBbmNGVEIl0YfazVV?usp=sharing",
  },
  {
    title: "Blockchain (BC)",
    link: "https://drive.google.com/file/d/1ZUNJLPX5nE0xzGE2Bv3pVyCGZvNzBqg2/view?usp=sharing",
  },
  {
    title: "Disaster Management & Mitigation Measures (DMMM)",
    link: "https://drive.google.com/file/d/1hXJtZBovdhRtzpXpqNcL_yJSmLBcIjQV/view?usp=sharing",
  },
  {
    title: "Management Information System (MIS)",
    link: "https://drive.google.com/file/d/1h8jLaS33utHbAtjkyYbam13fPFXX76Z-/view?usp=sharing",
  },
  {
    title: "Cyber Security and Laws (CSL)",
    link: "https://drive.google.com/file/d/1Zrj1QGJKeqL6VAkwZKLA4n_WmilMf0-x/view?usp=sharing",
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

export default function Sem7() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow flex-col items-center pt-24 px-4 sm:px-6 lg:px-8">
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
      </div>
      <Footer />
    </div>
  );
}
