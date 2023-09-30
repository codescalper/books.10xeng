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


export default function Sem3(){

  return (
    <>
     <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-grow flex-col items-center pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 lg:gap-40 mx-auto pb-16">

            <Card className="w-[350px]">
              <CardContent></CardContent>
              <CardFooter className="flex justify-center">
                <a href="https://drive.google.com/drive/folders/15Xp9fyur9Alqiq-FrmuclJB9Nmp4Xn8U?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button size={"lg"}>
                    Engineering Mathematics (EM-3)
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-[350px]">
              <CardContent></CardContent>
              <CardFooter className="flex justify-center">
              <a href="" target="_blank" rel="noopener noreferrer">
                  <Button size={"lg"}>
                    Discrete Structures and Graph Theory (DSGT)
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-[350px]">
              <CardContent></CardContent>
              <CardFooter className="flex justify-center">
              <a href="https://drive.google.com/file/d/1faDrFa8BTY0c9snaudYrttjXmM5yDDYn/view?usp=sharing" target="_blank" rel="noopener noreferrer">                  
                  <Button size={"lg"}>
                    Data Structures (DS)
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-[350px]">
              <CardContent></CardContent>
              <CardFooter className="flex justify-center">
              <a href="" target="_blank" rel="noopener noreferrer"> 
                  <Button size={"lg"}>
                    Digital Logic & Computer Architecture
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-[350px]">
              <CardContent></CardContent>
              <CardFooter className="flex justify-center">
              <a href="https://drive.google.com/drive/folders/15Xp9fyur9Alqiq-FrmuclJB9Nmp4Xn8U?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button size={"lg"}>
                    Computer Graphics
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-[350px]">
              <CardContent></CardContent>
              <CardFooter className="flex justify-center">
              <a href="https://drive.google.com/drive/folders/17mxcsCJqoHWJHbqT2v9k9sL1uwCd2-VN?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button size={"lg"}>
                   Java OOPS
                  </Button>
                </a>
              </CardFooter>
            </Card>

          </div>

        </div>

          <Footer />  


      </div>

    </>
  );

}