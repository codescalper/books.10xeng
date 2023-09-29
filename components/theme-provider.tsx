"use client"

import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { ReactNode } from 'react';
export function ThemeProvider({ children }: { children: ReactNode }) {
    return (
        <NextThemesProvider
            defaultTheme='dark' // Set default theme 
            attribute='class'
        >
            {children}
        </NextThemesProvider>
    )
}