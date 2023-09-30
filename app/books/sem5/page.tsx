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


    export default function Sem5() {

    return (
        <>
 <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-grow flex-col items-center pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 lg:gap-40 mx-auto pb-16">
                <Card className="w-[350px]">
                <CardContent></CardContent>
                <CardFooter className="flex justify-center">
                    <a href="https://drive.google.com/file/d/1PLGOhNFt7onB6Fl1F9coaP4LUvRia94k/view?usp=sharing">
                    <Button size={"lg"}>
                        Theoretical Computer Science (TCS)
                    </Button>
                    </a>
                </CardFooter>
                </Card>

                <Card className="w-[350px]">
                <CardContent></CardContent>
                <CardFooter className="flex justify-center">
                    <a href="https://drive.google.com/drive/folders/1lKhwXy7WVjox_NZtEfyxrPig25VCvvoe?usp=sharing">
                    <Button size={"lg"}>
                        Software Engineering (SE)
                    </Button>
                    </a>
                </CardFooter>
                </Card>

                <Card className="w-[350px]">
                <CardContent></CardContent>
                <CardFooter className="flex justify-center">
                    <a href="https://drive.google.com/file/d/1MG3QysmzKBWvarkW5dRg7FaBQEkpILIJ/view?usp=sharing">
                    <Button size={"lg"}>
                        Computer Networks (CN)
                    </Button>
                    </a>
                </CardFooter>
                </Card>

                <Card className="w-[350px]">
                <CardContent></CardContent>
                <CardFooter className="flex justify-center">
                    <a href="https://drive.google.com/drive/folders/198il1hTudXtdV5UF9Xw4jnAWd92uTF9u?usp=drive_link" >
                    <Button size={"lg"}>
                        Data Warehousing & Mining (DWM)
                    </Button>
                    </a>
                </CardFooter>
                </Card>

                <Card className="w-[350px]">
                <CardContent></CardContent>
                <CardFooter className="flex justify-center">
                    <a href="https://drive.google.com/file/d/1yhM8XdAqdQVcmPZ15ohth65Y_pMi0_ry/view?usp=sharing">
                    <Button size={"lg"}>
                        Internet Programming (IP)
                    </Button>
                    </a>
                </CardFooter>
                </Card>

                <Card className="w-[350px]">
                <CardContent></CardContent>
                <CardFooter className="flex justify-center">
                    <a href="">
                    <Button size={"lg"}>
                        Advance Database Management System (ADBMS)
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