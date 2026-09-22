import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Flow",
  description: "Web-compatible UI animation clone",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full select-none bg-neutral-950 text-white">
      <body className="h-full antialiased font-sf overflow-hidden">
        {children}
      </body>
    </html>
  );
}