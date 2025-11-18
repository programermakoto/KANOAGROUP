import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

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
  description: "IT会社であるKANOA GROUPは「これは面白い!を創り ∴ 自由を広げる。」をミッションとして様々な「企業様のホームページ制作、新規ビジネス創出を目的にしてオーダーシステム開発」で誰もが自由に生きられる社会をつくる...",
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


        <Footer/>
      </body>
    </html>
  );
}

