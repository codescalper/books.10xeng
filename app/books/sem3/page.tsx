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
    title: "Engineering Mathematics (EM-3)",
    link: "https://drive.google.com/drive/folders/15S4ImvulYdKCBG6U0bpxUw14fWXpogeO?usp=drive_link",
  },
  {
    title: "Discrete Structures and Graph Theory (DSGT)",
    link: "https://drive.google.com/file/d/1ktPCeO8xjEKLua-xj_fWe7ZdsKVvIbxk/view?usp=sharing",
  },
  {
    title: "Data Structures (DS)",
    link: "https://drive.google.com/file/d/1faDrFa8BTY0c9snaudYrttjXmM5yDDYn/view?usp=sharing",
  },
  {
    title: "Digital Logic & Computer Architecture",
    link: "https://drive.google.com/drive/folders/1lfUJfi2dnnppDxTRDGuw5BMeaeHmMXCt?usp=drive_link",
  },
  {
    title: "Computer Graphics",
    link: "https://drive.google.com/drive/folders/15Xp9fyur9Alqiq-FrmuclJB9Nmp4Xn8U?usp=sharing",
  },
  {
    title: "Java OOPS",
    link: "https://drive.google.com/drive/folders/17mxcsCJqoHWJHbqT2v9k9sL1uwCd2-VN?usp=sharing",
  },
];

export default function Sem3() {
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
