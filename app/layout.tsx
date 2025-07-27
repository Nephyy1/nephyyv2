import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Retro Website",
  description: "Website pribadi dengan gaya game retro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
