import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mannheim Brewery - Craft Beer Excellence",
  description: "Experience premium craft beer at Mannheim Brewery. Discover our unique brews, brewery tours, and authentic German beer culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/swh4yok.css" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
