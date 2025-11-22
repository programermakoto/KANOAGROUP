import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "株式会社KANOA GROUP",
  description:
    "IT会社であるKANOA GROUPは「これは面白い!を創り ∴ 自由を広げる。」をミッションに、ホームページ制作・システム開発で新規ビジネスを支援します。",
  openGraph: {
    title: "株式会社KANOA GROUP",
    description: "ホームページ制作・システム開発で新規ビジネスを支援します。",
    url: "https://your-domain.example", // 本番URLに変更
    siteName: "KANOA GROUP",
    images: [{ url: "https://your-domain.example/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1 },
  },
  alternates: {
    canonical: "https://your-domain.example",
    languages: {
      "ja": "/",
      "en": "/en"
    }
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/site.webmanifest" }]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh font-inter select-none`}>
        <Header />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

