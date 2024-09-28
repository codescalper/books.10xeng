import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Providers } from './providers'
import { Analytics } from '@vercel/analytics/react';
import { Header } from './Header'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '10xEng | Books',
  description: 'Books and materials for Mumbai & Pune University engineering student',
}
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body>
      <Header />
          <ThemeProvider
            attribute="class" 
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
             <Providers>{children}</Providers>
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </>
  )
}