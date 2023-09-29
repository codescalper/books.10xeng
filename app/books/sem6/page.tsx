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


export default function Sem6() {

  return (
    <>
      <Header />

      <div className="flex flex-col items-center h-screen pt-16">

        <div className="flex-grow">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 lg:gap-40 mx-auto">

            <Card className="w-[350px]">
              <CardContent></CardContent>
              <CardFooter className="flex justify-center">
                <a href="https://drive.google.com/drive/folders/12fMQ6wjJCXvvr-yVou3b2MZsK70_GdLF?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button size={"lg"}>
                    System Programming & Compiler Construction (SPCC)
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-[350px]">
              <CardContent></CardContent>
              <CardFooter className="flex justify-center">
                <a href="https://drive.google.com/file/d/1TXh2DZl6lmWoqDYXoh7OHqUtDrYBkcxj/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button size={"lg"}>
                    Cryptography & System Security (CSS)
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-[350px]">
              <CardContent></CardContent>
              <CardFooter className="flex justify-center">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Button size={"lg"}>
                    Mobile Computing (MC)
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-[350px]">
              <CardContent></CardContent>
              <CardFooter className="flex justify-center">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Button size={"lg"}>
                    Artificial Intelligence (AI)
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-[350px]">
              <CardContent></CardContent>
              <CardFooter className="flex justify-center">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Button size={"lg"}>
                   Internet of Things (IOT)
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-[350px]">
              <CardContent></CardContent>
              <CardFooter className="flex justify-center">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Button size={"lg"}>
                    Quantitative Analysis (QA)
                  </Button>
                </a>
              </CardFooter>
            </Card>

          </div>

        </div>

        <footer className="xl:absolute bottom-0 left-0 right-0">
          <Footer />
        </footer>

      </div>

    </>
  );

}