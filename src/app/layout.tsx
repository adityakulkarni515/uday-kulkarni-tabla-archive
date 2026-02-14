import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pandit Uday Kulkarni — Tabla Archive",
    template: "%s | Pandit Uday Kulkarni",
  },
  description:
    "A digital archive of original tabla compositions by Pandit Uday Kulkarni, renowned tabla artist from Goa. Preserving the classical tradition of Hindustani tabla.",
  keywords: [
    "tabla",
    "Pandit Uday Kulkarni",
    "Hindustani classical music",
    "Goa",
    "tabla compositions",
    "Kayda",
    "Peshkar",
    "Teentaal",
    "classical archive",
  ],
  openGraph: {
    title: "Pandit Uday Kulkarni — Tabla Archive",
    description: "A digital archive of original tabla compositions from Goa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-canvas antialiased">
        {children}
      </body>
    </html>
  );
}
