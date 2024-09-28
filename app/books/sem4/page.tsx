import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Header } from "@/app/Header";
import Footer from "@/app/Footer";

const resources = [
  { title: "Engineering Mathematics (EM-4)", link: "https://drive.google.com/drive/folders/1v6GHyRA-oTQ3QCEGKievapw5oVewTHpi?usp=drive_link" },
  { title: "Analysis of Algorithms (AOA)", link: "https://drive.google.com/drive/folders/1VHFYXYqi6lv81mft0aa1rrbRFryIXdDn?usp=drive_link" },
  { title: "Database Management System (DBMS)", link: "https://drive.google.com/drive/folders/1McIOxDze2GlpH_hM5MC-yqo-zDzKJiI9?usp=drive_link" },
  { title: "Operating System (OS)", link: "https://drive.google.com/drive/folders/1x_O5SRepGEXxMbVgcleoAL6OMAcpH3UH?usp=drive_link" },
  { title: "Microprocessor (MP)", link: "https://drive.google.com/drive/folders/1KWgNSywvk0E0Zqy4bmbcUOmx7kCQfSc6?usp=drive_link" }
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

export default function Sem4() {
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
