"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
    const { setTheme, theme, resolvedTheme } = useTheme();
    const router = useRouter();

    // Determine the theme to use based on the user's system preference
    const selectedTheme = resolvedTheme || theme;

    const linkStyles =
        selectedTheme === 'dark'
            ? 'text-gray-500 hover:text-white mx-2'
            : 'text-black hover:text-violet-500 mx-2';

    const headerStyles =
        selectedTheme === 'dark'
        ? 'bg-slate-950 backdrop-blur-md bg-opacity-50 sm:pb-3 md:pb-4 xl:pb-5'
        : 'backdrop-blur-md bg-opacity-50 sm:pb-3 md:pb-4 xl:pb-5';

    return (
        <div className={`flex justify-between m-4 sticky top-0 ${headerStyles}`}>
          
             <Link legacyBehavior href="/" onClick={() => router.push('/')}>
            <div className="text-xl font-bold sm:text-2xl xl:text-3xl cursor-pointer">EngHub</div>
            </Link>
            <div className="flex items-center cursor-pointer">
                <Link legacyBehavior href="/books" onClick={() => router.push('/books/sem1')}>
                    <a className={`${linkStyles} mx-2`}>Books</a>
                </Link>

                <Link legacyBehavior href="https://mayankonweb.hashnode.dev/">
                    <a className={`${linkStyles} mx-2`} target="blank">Blogs</a>
                </Link>
                <Link href="/courses" legacyBehavior onClick={() => router.push('/courses')}>
                    <a className={`${linkStyles}  mx-2`}>Courses</a>
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
                        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
