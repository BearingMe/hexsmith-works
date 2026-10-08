import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pages.hexsmith.tech"),
  title: "Hexsmith Works | Software Reliability for the AI Era",
  description:
    "Hexsmith Works is exploring the next generation of software verification. Meet Forge, an AI-assisted approach to auditing, challenging, and strengthening AI-generated code.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hexsmith Works | Software Reliability for the AI Era",
    description:
      "Meet Forge: an AI-assisted approach to inspecting, challenging, and strengthening software changes.",
    url: "https://pages.hexsmith.tech",
    siteName: "Hexsmith Works",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hexsmith Works | Software Reliability for the AI Era",
    description:
      "Meet Forge: an AI-assisted approach to inspecting, challenging, and strengthening software changes.",
  },
};

export const viewport: Viewport = {
  themeColor: "#090d12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
