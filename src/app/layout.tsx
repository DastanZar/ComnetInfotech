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
  title: "Comnet Infotech | Cloud Solutions, IT Support & Hardware Services",
  description: "Your trusted partner for cloud solutions, IT support, and hardware services. We help homes and businesses navigate technology with confidence since 2005.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
