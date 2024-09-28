import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Header } from "@/app/Header";
import Footer from "@/app/Footer";

const resources = [
  { title: "Machine Learning (ML)", link: "https://drive.google.com/file/d/1M32pp432UKrEtjRnEAS3meya8FMy9fRR/view?usp=sharing" },
  { title: "Big Data Analytics (BDA)", link: "https://drive.google.com/drive/folders/1LCutS9lHDNK2V-eq_e8hFsawKNtpKvXl?usp=sharing" },
  { title: "Natural Language Processing (NLP)", link: "https://drive.google.com/drive/folders/1UJfqVbTvzcuDPGPlBbmNGVEIl0YfazVV?usp=sharing" },
  { title: "Blockchain (BC)", link: "https://drive.google.com/file/d/1ZUNJLPX5nE0xzGE2Bv3pVyCGZvNzBqg2/view?usp=sharing" },
  { title: "Disaster Management & Mitigation Measures (DMMM)", link: "https://drive.google.com/file/d/1hXJtZBovdhRtzpXpqNcL_yJSmLBcIjQV/view?usp=sharing" },
  { title: "Management Information System (MIS)", link: "https://drive.google.com/file/d/1h8jLaS33utHbAtjkyYbam13fPFXX76Z-/view?usp=sharing" },
  { title: "Cyber Security and Laws (CSL)", link: "https://drive.google.com/file/d/1Zrj1QGJKeqL6VAkwZKLA4n_WmilMf0-x/view?usp=sharing" },
];

const ResourceCard: React.FC<{ title: string; link: string }> = ({ title, link }) => (
  <Card className="w-[350px]">
    <CardContent></CardContent>
    <CardFooter className="flex justify-center">
      <Link legacyBehavior href={link}>
        <Button size="lg">{title}</Button>
      </Link>
    </CardFooter>
  </Card>
);

export default function Sem7() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow flex-col items-center pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 lg:gap-40 mx-auto pb-16">
          {resources.map((resource, index) => (
            <ResourceCard key={index} title={resource.title} link={resource.link} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
