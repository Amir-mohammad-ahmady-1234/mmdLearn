import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/main-header/Header";

export const metadata: Metadata = {
  title: "mmdLearn",
  description: "make your future, with learning in roocket!",
  icons: {
    icon: "./favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className="bg-bg">
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
