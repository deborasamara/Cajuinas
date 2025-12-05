import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LayoutClient } from "./layout-client"

export const metadata: Metadata = {
  title: "Cajuínas - Mural de Aniversários",
  description: "Celebrando as mulheres fortes, criativas e nordestinas apaixonadas por tecnologia",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        <LayoutClient>{children}</LayoutClient>
        <Analytics />
      </body>
    </html>
  )
}
