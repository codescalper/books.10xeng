import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Header } from "@/app/Header";
import Footer from "@/app/Footer";

const resources = [
  { title: "Theoretical Computer Science (TCS)", link: "https://drive.google.com/file/d/1PLGOhNFt7onB6Fl1F9coaP4LUvRia94k/view?usp=sharing" },
  { title: "Software Engineering (SE)", link: "https://drive.google.com/drive/folders/1lKhwXy7WVjox_NZtEfyxrPig25VCvvoe?usp=sharing" },
  { title: "Computer Networks (CN)", link: "https://drive.google.com/file/d/1MG3QysmzKBWvarkW5dRg7FaBQEkpILIJ/view?usp=sharing" },
  { title: "Data Warehousing & Mining (DWM)", link: "https://drive.google.com/drive/folders/198il1hTudXtdV5UF9Xw4jnAWd92uTF9u?usp=drive_link" },
  { title: "Internet Programming (IP)", link: "https://drive.google.com/file/d/1yhM8XdAqdQVcmPZ15ohth65Y_pMi0_ry/view?usp=sharing" },
  { title: "Advance Database Management System (ADBMS)", link: "" },
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

export default function Sem5() {
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
