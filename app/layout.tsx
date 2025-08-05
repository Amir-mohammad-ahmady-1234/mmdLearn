import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/main-header/Header";

export const metadata: Metadata = {
  title: "mmdLearn",
  description: "make your future, with learning in roocket!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
