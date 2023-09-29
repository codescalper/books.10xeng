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
import { Header } from "../Header";
import Footer from "../Footer";

export default function Books() {
    const router = useRouter();
    return (
        <>
            <Header />
            <div className="flex flex-col items-center ">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 lg:gap-40 mx-auto">
                    <Card className="w-[300px] ">
                        <CardHeader>
                            <CardTitle className="flex justify-center">First Year</CardTitle>
                            <CardDescription className="flex justify-center">
                                Computer Engineering
                            </CardDescription>
                        </CardHeader>
                        <CardContent></CardContent>
                        <CardFooter className="flex justify-between">
                            <Link legacyBehavior href="/books/sem1" onClick={() => router.push("/books/sem1")}>
                                <Button size={"lg"}>Sem 1</Button>
                            </Link>
                            <Link legacyBehavior href="/books/sem2" onClick={() => router.push("/books/sem2")}>
                                <Button size={"lg"}>Sem 2</Button>
                            </Link>
                        </CardFooter>
                    </Card>

                    <Card className="w-[300px] ">
                        <CardHeader>
                            <CardTitle className="flex justify-center">Second Year</CardTitle>
                            <CardDescription className="flex justify-center">
                                Computer Engineering
                            </CardDescription>
                        </CardHeader>
                        <CardContent></CardContent>
                        <CardFooter className="flex justify-between">
                            <Link legacyBehavior href="/books/sem3" onClick={() => router.push("/books/sem3")}>
                                <Button size={"lg"}>Sem 3</Button>
                            </Link>
                            <Link legacyBehavior href="/books/sem4" onClick={() => router.push("/books/sem4")}>
                                <Button size={"lg"}>Sem 4</Button>
                            </Link>
                        </CardFooter>
                    </Card>

                    <Card className="w-[300px] ">
                        <CardHeader>
                            <CardTitle className="flex justify-center">Third Year</CardTitle>
                            <CardDescription className="flex justify-center">
                                Computer Engineering
                            </CardDescription>
                        </CardHeader>
                        <CardContent></CardContent>
                        <CardFooter className="flex justify-between">
                            <Link legacyBehavior href="/books/sem5" onClick={() => router.push("/books/sem5")}>
                                <Button size={"lg"}>Sem 5</Button>
                            </Link>
                            <Link legacyBehavior href="/books/sem6" onClick={() => router.push("/books/sem6")}>
                                <Button size={"lg"}>Sem 6</Button>
                            </Link>
                        </CardFooter>
                    </Card>

                    <Card className="w-[300px] ">
                        <CardHeader>
                            <CardTitle className="flex justify-center">Fourth Year</CardTitle>
                            <CardDescription className="flex justify-center">
                                Computer Engineering
                            </CardDescription>
                        </CardHeader>
                        <CardContent></CardContent>
                        <CardFooter className="flex justify-between">
                            <Link legacyBehavior href="/books/sem7" onClick={() => router.push("/books/sem7")}>
                                <Button size={"lg"}>Sem 7</Button>
                            </Link>
                            <Link legacyBehavior href="/books/sem8" onClick={() => router.push("/books/sem8")}>
                                <Button size={"lg"}>Sem 8</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
                <footer className="xl:absolute bottom-0 left-0 right-0">
          <Footer />
        </footer>
            </div>
        </>
    );
}