import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Providers from "./components/Providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NickOD.xyz | Freelance Web Developer",
  description:
    "NickOD.xyz - Hertford-based freelance web developer, specialising in React, Next.js, JavaScript, Sanity, and WordPress. Offering tailor-made, efficient, and responsive web development services for businesses and individuals.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-black selection:text-white selection:bg-purple-600 dark:bg-black dark:text-white `}
      >
        <Providers>
          <Header />
          <main className=''>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
