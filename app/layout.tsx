import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Portfolio | Modern Developer",
  description: "Ultra-modern portfolio with advanced animations and interactions",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/logoYPerfil/Favicon.svg", sizes: "any" },
      { url: "/logoYPerfil/Favicon.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/logoYPerfil/Favicon.svg", sizes: "16x16", type: "image/svg+xml" },
    ],
    shortcut: "/logoYPerfil/Favicon.svg",
    apple: [
      { url: "/logoYPerfil/Favicon.svg", sizes: "180x180" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        <link rel="icon" href="/logoYPerfil/Favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="icon" href="/logoYPerfil/Favicon.svg" type="image/svg+xml" sizes="32x32" />
        <link rel="icon" href="/logoYPerfil/Favicon.svg" type="image/svg+xml" sizes="16x16" />
        <link rel="shortcut icon" href="/logoYPerfil/Favicon.svg" />
        <link rel="apple-touch-icon" href="/logoYPerfil/Favicon.svg" sizes="180x180" />
        <meta name="msapplication-TileImage" content="/logoYPerfil/Favicon.svg" />
      </head>
      <body className="antialiased overflow-x-hidden">
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
