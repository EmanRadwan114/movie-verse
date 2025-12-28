import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoreProvider from "@/app/StoreProvider";
import { Suspense } from "react";

const interSans = Inter({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MovieVerse",
  description:
    "A modern movies browsing app that allows users to explore movies, view detailed movie information, and manage a personalized favorites list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.className} antialiased`}>
        <ToastContainer />
        <StoreProvider>
          <div className="flex flex-col min-h-screen">
            <Suspense>
              <Navbar />
            </Suspense>
            {children}
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
