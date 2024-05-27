"use client";
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,  
} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Header } from "@/app/Header";
import Footer from "@/app/Footer";

interface Resource {
  title: string;
  link?: string;
  links?: { text: string; url: string }[];
}

const resources: Resource[] = [
  {
    title: "Distributed Computing (DC)",
    links: [
      { text: "Study Material", url: "https://drive.google.com/file/d/1eIq_n3d8ZbMa4Vp8fwWVa7COYvTOTsax/view?usp=sharing" },
      { text: "Tech Knowledge", url: "https://drive.google.com/file/d/1eidXpka65wESDGXVxtPe1WK5fGSBt3uk/view?usp=sharing" },
      { text: "Importance", url: "https://drive.google.com/file/d/1SG7U48y3a--E6wY8uRxcLuLgQ95dKrHw/view?usp=sharing" },
    ]
  },
  {
    title: "Social Media Analytics (SMA)",
    link: "https://drive.google.com/file/d/1207ufAwlCT1TM5oQLfAJACsF5aKkmQTe/view?usp=sharing"
  },
  {
    title: "Deep Learning (DL)",
    links: [
      { text: "Study Material", url: "https://drive.google.com/file/d/14NLvVlN2Nrs0R-ZFfzI8UEkTH0G6Xqtr/view?usp=sharing" },
      { text: "Tech Knowledge", url: "https://drive.google.com/file/d/1h8i6fgV-EZ33AB2AVsZgs09W2ZqXcoRZ/view?usp=sharing" },
      { text: "Importance", url: "https://drive.google.com/file/d/1SMh11xWgdcTPMoZRvTelVANzaeCYhOd3/view?usp=sharing" },
    ]
  },
  {
    title: "Environmental Management (EM)",
    link: "https://drive.google.com/file/d/1ekVYqOucUVfD4TYlsAxq7Tn0Gr6AaWn_/view?usp=sharing"
  },
];

interface ResourceCardProps {
  title: string;
  link?: string;
  links?: { text: string; url: string }[];
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, link, links }) => (
  <Card className="w-[350px]">
    <CardContent></CardContent>
    <CardFooter className="flex justify-center">
      {link ? (
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <Button size="lg">{title}</Button>
        </Link>
      ) : (
        <Dialog>
          <DialogTrigger>
            <Button size="lg">{title}</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription className="flex flex-col space-y-5">
                {links?.map((item, idx) => (
                  <Link key={idx} href={item.url} target="_blank">
                    <Button className="w-full mt-5">{item.text}</Button>
                  </Link>
                ))}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </CardFooter>
  </Card>
);

const Page: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-grow flex flex-col items-center pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 lg:gap-40 mx-auto pb-16">
        {resources.map((resource, idx) => (
          <ResourceCard key={idx} {...resource} />
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

export default Page;
