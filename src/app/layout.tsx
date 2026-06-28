import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "AI4TELECOM 2026 - Hội thảo Khoa học Quốc gia",
  description: "Hội thảo Khoa học Quốc gia AI & Điện tử Viễn thông (AI4TELECOM 2026). Ngày tổ chức: 10/09/2026 tại Hà Nội, Việt Nam.",
  icons: {
    icon: '/ptit.png',
  },
  openGraph: {
    title: "AI4TELECOM 2026 - Hội thảo Khoa học Quốc gia",
    description: "Hội thảo Khoa học Quốc gia AI & Điện tử Viễn thông (AI4TELECOM 2026): Cơ hội, thách thức và hướng đi tương lai.",
    url: "https://ai4telecom.vercel.app",
    siteName: "AI4TELECOM 2026",
    images: [
      {
        url: "/bg.jpg", // Using the hero background image for the link preview
        width: 1200,
        height: 630,
        alt: "AI4TELECOM 2026 Banner",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
