import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "出差预订助手",
  description: "AI 驱动的企业出差预订系统",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
