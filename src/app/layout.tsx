import { Metadata } from "next";
import localFont from "next/font/local";

import Header from "@/components/common/header";
import { ModalProvider } from "@/lib/hooks/context/useModal";
import { ToastProvider } from "@/lib/hooks/context/useToast";

import "./globals.css";

const pretendard = localFont({
  src: "../../public/font/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "별로그",
  description: "경험, 생각, 새로운 IT 지식을 정리해서 공유합니다.",
  verification: {
    google: "J_oaP0Pd9UNMiSTbiqkijZvP8X1S75HWKQtj_NKy3Jg",
    other: {
      "naver-site-verification": "0d56f7c5f693b5f7f57bd2b3df32ed801d4d50eb",
    },
  },
  openGraph: {
    title: "별로그",
    description: "경험, 생각, 새로운 IT 지식을 정리해서 공유합니다.",
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
          <ToastProvider>
            <Header className="h-18 px-4" />
            <div id="0" className="pt-18">
              {children}
            </div>
          </ToastProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
