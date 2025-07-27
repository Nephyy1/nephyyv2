import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CSS-Only Retro Site",
  description: "A responsive retro game style website built only with CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
