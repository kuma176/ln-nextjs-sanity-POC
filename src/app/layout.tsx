import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/sections/Footer/Fotoer";
import Header from "@/components/sections/Header/Header";

export const metadata: Metadata = {
  title: "LexisNexis Sanity Blog",
  description: "LexisNexis Sanity Blog built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased")}
    >
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
