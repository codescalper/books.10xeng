"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"


import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




export function Header() {
    const { setTheme } = useTheme()
    const router = useRouter()


    return (
        <div className="flex justify-between m-4 ">
            <div className="text-xl font-bold sm:text-2xl xl:text-3xl">
                10xEng
            </div>
            <div className="flex items-center cursor-pointer">
                <Link legacyBehavior href="/books" onClick={() => router.push('/books')}>
                    <a className="text-gray-500 hover:text-white mx-2">Books</a>
                </Link>

                <Link legacyBehavior href="https://mayankonweb.hashnode.dev/">
                    <a className="text-gray-500 hover:text-white mx-2" target="blank">Blogs</a>
                </Link>
                <Link href="/courses" legacyBehavior onClick={() => router.push('/courses')}>
                    <a className="text-gray-500 hover:text-white mx-2">Courses</a>
                </Link>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>

        </div >
    )
}
