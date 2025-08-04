import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/main-header/Hedaer";

export const metadata: Metadata = {
  title: "DeepMinutes",
  description: "control own time with this site.",
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
