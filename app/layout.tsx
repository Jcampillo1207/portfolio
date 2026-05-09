import type { Metadata } from "next"
import {
  Geist,
  Geist_Mono,
  JetBrains_Mono,
  Space_Grotesk,
} from "next/font/google"

// @ts-ignore: side-effect import for global CSS
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const spaceGroteskHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const siteUrl = "https://jmcr.beer"
const title = "José Campillo — Self-taught engineer & co-founder at Intello"
const description =
  "Self-taught engineer from Mexico. Co-founder at Intello. I build digital innovation projects for governments and private companies."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — José Campillo",
  },
  description,
  keywords: [
    "José Campillo",
    "Intello",
    "IntelloAI",
    "self-taught engineer",
    "frontend developer",
    "Next.js",
    "React",
    "Mexico",
    "Knoott",
    "Slabsz",
    "Tribuna",
    "Ágora",
  ],
  authors: [{ name: "José Campillo", url: siteUrl }],
  creator: "José Campillo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "José Campillo",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@Chema12071",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "tracking-tight antialiased text-pretty [&_p]:leading-relaxed",
        fontSans.variable,
        "font-mono",
        jetbrainsMono.variable,
        spaceGroteskHeading.variable
      )}
      style={{ "--header-height": "4rem" } as React.CSSProperties}
    >
      <body suppressHydrationWarning>
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      </body>
    </html>
  )
}
