import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/Header";


export const metadata: Metadata = {
  title: "Imobiliária irecê",
  description: "imobiliária irecê",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {" "}
        <Header />
        {children}
      </body>
    </html>
  );
}
