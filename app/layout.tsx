import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Providers from "./components/Providers"
import { getSiteMetadata } from "./lib/getSanityData"
import { Metadata } from "./lib/interface"

const inter = Inter({ subsets: ["latin"] })

const meta = (await getSiteMetadata()) as Metadata

export const metadata = {
  title: {
    default: meta.title,
    template: "%s | " + meta.title,
  },
  description: meta.description,
  keywords: meta.keywords,
  openGraph: {
    title: meta.ogTitle,
    description: meta.ogDescription,
    siteName: meta.title,
    url: meta.ogUrl,
    image: meta.ogImage,
  },
  twitter: {
    card: meta.twitterTitle,
    title: meta.twitterTitle,
    description: meta.twitterDescription,
    url: meta.twitterUrl,
    image: meta.twitterImage,
  },
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
