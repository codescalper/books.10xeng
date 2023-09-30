"use client"
import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button"; 
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Header } from "@/app/Header";
import Footer from "@/app/Footer";


export default function Sem1(){
    const router = useRouter();
    return(
        <>
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-grow flex-col items-center pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 lg:gap-40 mx-auto pb-16">

              <Card className="w-[350px]">               
                <CardContent></CardContent>
                <CardFooter className="flex justify-center">
                  <a  href="https://drive.google.com/drive/folders/1Ogo7FHJzWdIqYTXtb6mYXvpZkq_aatwH?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Button size={"lg"}>
                      Basic Electrical Engineering (BEE)
                    </Button>
                  </a>
                </CardFooter>
              </Card>
              
              <Card className="w-[350px] ">
                <CardContent></CardContent>
                <CardFooter className="flex justify-center">
                  <a  href="https://drive.google.com/drive/folders/1aqJ0ZCG-zHocfu-Ubkqbkpi0lAjt5Vfu?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Button size={"lg"}>
                      Engineering Chemistry (EC-1)
                    </Button>
                  </a>
                </CardFooter>
              </Card>
              
              <Card className="w-[350px] ">
                <CardContent></CardContent>
                <CardFooter className="flex justify-center">
                  <a href="https://drive.google.com/file/d/1EgUNxI37c7DYyAI8WV62yq-TDZdXZYDy/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Button size={"lg"}>
                      Engineering Mathematics (EM-1)
                    </Button>
                  </a>
                </CardFooter>
              </Card>
              
              <Card className="w-[350px] ">
                <CardContent></CardContent>
                <CardFooter className="flex justify-center">
                  <a href="https://drive.google.com/file/d/1pB8iOiACiK8STwcf95ytiG3cL19kwQ8-/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Button size={"lg"}>
                      Engineering Mechanics
                    </Button>
                  </a>
                </CardFooter>
              </Card>
              
              <Card className="w-[350px] ">
                <CardContent></CardContent>
                <CardFooter className="flex justify-center">
                  <a  href="https://drive.google.com/file/d/10moVO_zCNEK1Pv1JDVECecP-EpHXMrGF/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Button size={"lg"}>
                      Engineering Physics (EP-1)
                    </Button>
                  </a>
                </CardFooter>
              </Card>

            </div>
           
            <Footer />  
         
        
          </div>
          </div>
        </>
    )
}