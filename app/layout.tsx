import type { Metadata } from "next";
import { Noto_Sans_JP, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

// Primary font: Noto Sans JP - Beautiful, modern font with excellent Japanese support
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

// Secondary font: IBM Plex Sans - Technical yet refined, perfect for UI elements
const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Monospace font: JetBrains Mono - Clean, modern monospace for code
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
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
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${notoSansJP.variable} ${ibmPlexSans.variable} ${jetBrainsMono.variable} antialiased font-sans`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
