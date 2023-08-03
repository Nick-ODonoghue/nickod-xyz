import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NickOD.xyz | Freelance Web Developer",
  description:
    "NickOD.xyz - Hertford-based freelance web developer, specialising in React, Next.js, JavaScript, Sanity, and WordPress. Offering tailor-made, efficient, and responsive web development services for businesses and individuals.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
