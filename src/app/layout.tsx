import type { Metadata } from "next";
import "./globals.css";


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
      className="h-full antialiased"
    >
      <body>{children}</body>
    </html>
  );
}
