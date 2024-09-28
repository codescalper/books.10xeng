import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Header } from "@/app/Header";
import Footer from "@/app/Footer";

const resources = [
  { title: "System Programming & Compiler Construction (SPCC)", link: "https://drive.google.com/drive/folders/12fMQ6wjJCXvvr-yVou3b2MZsK70_GdLF?usp=sharing" },
  { title: "Cryptography & System Security (CSS)", link: "https://drive.google.com/file/d/1TXh2DZl6lmWoqDYXoh7OHqUtDrYBkcxj/view?usp=sharing" },
  { title: "Mobile Computing (MC)", link: "https://drive.google.com/file/d/1pzujMR21O3cteVkIRa-_6spznx9m2sHj/view?usp=drive_link" },
  { title: "Artificial Intelligence (AI)", link: "https://drive.google.com/file/d/1ZjMGPVcMpQ9OLqTqgJGvZtFg-Lxmx7YA/view?usp=drive_link" },
  { title: "Internet of Things (IOT)", link: "" },
  { title: "Quantitative Analysis (QA)", link: "https://drive.google.com/file/d/1WlsSqo2UrVRvGiGq-f8Xp68jxNYozyS9/view?usp=drive_link" },
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

export default function Sem6() {
  return (
    <div className="flex flex-col min-h-screen">

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
