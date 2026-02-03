import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SAM サービス紹介 | AICE Inc.",
    template: "%s | AICE Inc.",
  },
  description:
    "AICE Inc. による Meta SAM（Segment Anything Model）のサービスデモ。AI画像セグメンテーション、3Dオブジェクト抽出、ヒートマップ分析、背景分離など、最先端の技術でビジネスを革新します。",
  keywords: [
    "AICE",
    "SAM",
    "Segment Anything Model",
    "画像セグメンテーション",
    "AI",
    "Meta SAM",
  ],
  authors: [{ name: "AICE Inc." }],
  creator: "AICE Inc.",
  openGraph: {
    title: "SAM サービス紹介 | AICE Inc.",
    description:
      "AICE Inc. による Meta SAM のサービスデモ。AI画像セグメンテーションでビジネスを革新。",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAM サービス紹介 | AICE Inc.",
    description:
      "AICE Inc. による Meta SAM のサービスデモ。AI画像セグメンテーションでビジネスを革新。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
