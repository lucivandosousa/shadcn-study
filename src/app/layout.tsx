import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teste Shadcn/UI",
  description: "Aplicação de teste do Shadcn/UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased"
      >
        {children}
      </body>
    </html>
  );
}
