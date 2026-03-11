import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Load Inter font with Next.js optimization
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ComnetTech | Cloud, IT Support & Hardware — Delhi",
  description: "Managed IT services, cloud infrastructure, and hardware solutions for SMBs, family offices, and lean businesses across Delhi NCR.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/logo.png?v=2" type="image/png" />
        <link rel="shortcut icon" href="/logo.png?v=2" />
        <link rel="apple-touch-icon" href="/logo.png?v=2" />
        <meta name="theme-color" content="#0D0D0D" />
      </head>
      <body className="antialiased font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
