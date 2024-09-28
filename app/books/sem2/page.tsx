import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
    title: "C Programming",
    link: "https://drive.google.com/drive/folders/18msafgxzeMUVpIHDRqZICj1FtkC7Jfsn?usp=sharing",
  },
  {
    title: "Engineering Physics (EP-2)",
    link: "https://drive.google.com/file/d/1YoRKgbNPYJOL2X5zphCHOJ8J9D1Vg_bU/view?usp=sharing",
  },
  {
    title: "Engineering Chemistry (EC-2)",
    link: "https://drive.google.com/file/d/1-l6vIEQPobX5fegv5WKiuzgP09_o4MBf/view?usp=sharing",
  },
  {
    title: "Engineering Graphics (EG)",
    link: "https://drive.google.com/file/d/1_uu7mMdM5fU-QxyQWI0z3Mvh9UnpfUUX/view?usp=sharing",
  },
  {
    title: "Engineering Mathematics (EM-2)",
    link: "https://drive.google.com/file/d/1v6MKDUtkmAxmLeJZhnf65Apuau_f2Ni8/view?usp=sharing",
  },
  {
    title: "Professional Communication and Ethics (PCE)",
    link: "https://drive.google.com/file/d/1224x6Bn4TDCN1JXvVKZXc8hBiEdMO4zk/view?usp=sharing",
  },
];

export default function Sem2() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
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
