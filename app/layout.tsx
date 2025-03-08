import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "DataDip - Data Consultancy Services",
  description: "Transform your raw data into actionable insights with DataDip's expert data consultancy services.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

