import * as React from "react";
import { useRouter } from "next/navigation";  
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,  
} from "@/components/ui/card";
import { Header } from "@/app/Header";
import Footer from "@/app/Footer";


export default function Sem7() {

  return (
    <>
      <Header />
   
      <div className="flex flex-col items-center h-screen pt-16">

        <div className="flex-grow">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 lg:gap-40 mx-auto">

            <Card className="w-[350px]">
              <CardContent></CardContent>
              <CardFooter className="flex justify-center">
                <a href="https://drive.google.com/file/d/1M32pp432UKrEtjRnEAS3meya8FMy9fRR/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <Button size={"lg"}>
                    Machine Learning (ML)
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-[350px]">
              <CardContent></CardContent>
              <CardFooter className="flex justify-center">
                <a href="https://drive.google.com/drive/folders/1LCutS9lHDNK2V-eq_e8hFsawKNtpKvXl?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button size={"lg"}>
                    Big Data Analytics (BDA)
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-[350px]">
              <CardContent></CardContent>
              <CardFooter className="flex justify-center">
                <a href="https://drive.google.com/drive/folders/1UJfqVbTvzcuDPGPlBbmNGVEIl0YfazVV?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button size={"lg"}>
                    Natural Language Processing (NLP)
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-[350px]">
              <CardContent></CardContent>
              <CardFooter className="flex justify-center">
                <a href="https://drive.google.com/file/d/1ZUNJLPX5nE0xzGE2Bv3pVyCGZvNzBqg2/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button size={"lg"}>
                    Blockchain (BC)
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-[350px]">
              <CardContent></CardContent>
              <CardFooter className="flex justify-center">
                <a href="https://drive.google.com/file/d/1hXJtZBovdhRtzpXpqNcL_yJSmLBcIjQV/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button size={"lg"}>
                    Disaster Management & Mitigation Measures (DMMM)
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-[350px]">
              <CardContent></CardContent>
              <CardFooter className="flex justify-center">
                <a href="https://drive.google.com/file/d/1h8jLaS33utHbAtjkyYbam13fPFXX76Z-/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button size={"lg"}>
                    Management Information System (MIS)  
                  </Button>
                </a>
              </CardFooter>
            </Card>
            
            <Card className="w-[350px]">
            <CardContent></CardContent>
            <CardFooter className="flex justify-center">
                <a href="https://drive.google.com/file/d/1Zrj1QGJKeqL6VAkwZKLA4n_WmilMf0-x/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button size={"lg"}>
                    Cyber Security and Laws (CSL)
                </Button>
                </a>
            </CardFooter>
            </Card>

            </div>

            </div>

            <footer className="fixed bottom-0 left-0 right-0">
            <Footer />
            </footer>

            </div>
        

            </>
            );

            }