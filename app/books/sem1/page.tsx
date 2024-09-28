"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Header } from "@/app/Header";
import Footer from "@/app/Footer";


interface ResourceCardProps {
  title: string;
  link: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, link }) => (
  <Card className="w-[350px]">
    <CardContent />
    <CardFooter className="flex justify-center">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Button size="lg">{title}</Button>
      </a>
    </CardFooter>
  </Card>
);

const resources = [
  {
    title: "Basic Electrical Engineering (BEE)",
    link: "https://drive.google.com/drive/folders/1Ogo7FHJzWdIqYTXtb6mYXvpZkq_aatwH?usp=sharing",
  },
  {
    title: "Engineering Chemistry (EC-1)",
    link: "https://drive.google.com/drive/folders/1aqJ0ZCG-zHocfu-Ubkqbkpi0lAjt5Vfu?usp=sharing",
  },
  {
    title: "Engineering Mathematics (EM-1)",
    link: "https://drive.google.com/file/d/1EgUNxI37c7DYyAI8WV62yq-TDZdXZYDy/view?usp=sharing",
  },
  {
    title: "Engineering Mechanics",
    link: "https://drive.google.com/file/d/1pB8iOiACiK8STwcf95ytiG3cL19kwQ8-/view?usp=sharing",
  },
  {
    title: "Engineering Physics (EP-1)",
    link: "https://drive.google.com/file/d/10moVO_zCNEK1Pv1JDVECecP-EpHXMrGF/view?usp=sharing",
  },
];

export default function Sem1() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex flex-grow flex-col items-center pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 lg:gap-40 mx-auto pb-16">
          {resources.map((resource, index) => (
            <ResourceCard key={index} title={resource.title} link={resource.link} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
