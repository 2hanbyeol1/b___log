import { Metadata } from "next";
import localFont from "next/font/local";

import Header from "@/components/common/header";
import { ModalProvider } from "@/lib/hooks/context/useModal";

import "./globals.css";

const pretendard = localFont({
  src: "../../public/font/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "별로그",
  description: "경험, 생각, 새로운 IT 지식을 정리해서 공유합니다.",
  openGraph: {
    type: "website",
    title: "별로그",
    description: "경험, 생각, 새로운 IT 지식을 정리해서 공유합니다.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "별로그",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className="font-pretendard">
        <ModalProvider>
          <Header className="h-18 px-4" />
          <div id="0" className="pt-18">
            {children}
          </div>
        </ModalProvider>
      </body>
    </html>
  );
}
