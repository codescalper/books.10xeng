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
          <Header />
          <div className="flex flex-col items-center h-screen pt-16">
          <div className="flex-grow"> 
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 lg:gap-40 mx-auto ">

              <Card className="w-[350px]">               
                <CardContent></CardContent>
                <CardFooter className="flex justify-center">
                  <Link legacyBehavior href="">
                    <Button size={"lg"}>
                      Basic Electrical Engineering (BEE)
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              
              <Card className="w-[350px] ">
                <CardContent></CardContent>
                <CardFooter className="flex justify-center">
                  <Link legacyBehavior href="">
                    <Button size={"lg"}>
                      Engineering Chemistry (EC-1)
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              
              <Card className="w-[350px] ">
                <CardContent></CardContent>
                <CardFooter className="flex justify-center">
                  <Link legacyBehavior href="">
                    <Button size={"lg"}>
                      Engineering Mathematics (EM-1)
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              
              <Card className="w-[350px] ">
                <CardContent></CardContent>
                <CardFooter className="flex justify-center">
                  <Link legacyBehavior href="">
                    <Button size={"lg"}>
                      Engineering Mechanics
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              
              <Card className="w-[350px] ">
                <CardContent></CardContent>
                <CardFooter className="flex justify-center">
                  <Link legacyBehavior href="">
                    <Button size={"lg"}>
                      Engineering Physics (EP-1)
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

            </div>
            <footer className="xl:absolute bottom-0 left-0 right-0 ">
            <Footer />  
            </footer>
          </div>
          </div>
         
        </>
    )
}