"use client"

import type React from "react"
import { Quicksand, Nunito } from "next/font/google"

// Fonts for Cajuínas - soft, friendly fonts
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
})

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
})

export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${nunito.variable} ${quicksand.variable}`}>
      <style jsx global>{`
        :root {
          --font-sans: ${nunito.style.fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          --font-heading: ${quicksand.style.fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: var(--font-heading);
        }
      `}</style>
      {children}
    </div>
  )
}
