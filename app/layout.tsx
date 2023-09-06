import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Providers from "./components/Providers"
import { getSiteMetadata } from "./lib/getSanityData"
import { Metadata } from "./lib/interface"

const inter = Inter({ subsets: ["latin"] })

const meta = (await getSiteMetadata()) as Metadata

export const metadata = {
  metadataBase: new URL(meta.siteUrl),
  alternates: {
    canonical: "/",
  },
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
    card: "summary_large_image",
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
        className={`${inter.className} bg-white text-black selection:text-white selection:bg-purple-600 dark:bg-black dark:text-white container mx-auto `}
      >
        <Providers>
          <Header />
          <main className='px-3 '>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
