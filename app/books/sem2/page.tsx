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


export default function Sem2(){

  return (
    <>
      <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-grow flex-col items-center pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 lg:gap-40 mx-auto pb-16">

            <Card className="w-[350px]">
            <CardContent></CardContent>
              <CardFooter className="flex justify-center">
              <a href="https://drive.google.com/drive/folders/18msafgxzeMUVpIHDRqZICj1FtkC7Jfsn?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button size={"lg"}>
                    C Programming
                  </Button>
                  </a>
              </CardFooter>
            </Card>


            <Card className="w-[350px]">
            <CardContent></CardContent>
              <CardFooter className="flex justify-center">
              <a href="https://drive.google.com/file/d/1YoRKgbNPYJOL2X5zphCHOJ8J9D1Vg_bU/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button size={"lg"}>
                    Engineering Physics (EP-2)
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-[350px]">
            <CardContent></CardContent>
              <CardFooter className="flex justify-center">
              <a href="https://drive.google.com/file/d/1-l6vIEQPobX5fegv5WKiuzgP09_o4MBf/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button size={"lg"}>
                    Engineering Chemistry (EC-2)
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-[350px]">
            <CardContent></CardContent>
              <CardFooter className="flex justify-center">
              <a href="https://drive.google.com/file/d/1_uu7mMdM5fU-QxyQWI0z3Mvh9UnpfUUX/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button size={"lg"}>
                    Engineering Graphics (EG)
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-[350px]">
            <CardContent></CardContent>
              <CardFooter className="flex justify-center">
              <a href="https://drive.google.com/file/d/1v6MKDUtkmAxmLeJZhnf65Apuau_f2Ni8/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button size={"lg"}>
                    Engineering Mathematics (EM-2)
                  </Button>
               </a>
              </CardFooter>
            </Card>

            <Card className="w-[350px]">
            <CardContent></CardContent>
              <CardFooter className="flex justify-center">
              <a href="https://drive.google.com/file/d/1224x6Bn4TDCN1JXvVKZXc8hBiEdMO4zk/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button size={"lg"}>
                    Professional Communication and Ethics (PCE)
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