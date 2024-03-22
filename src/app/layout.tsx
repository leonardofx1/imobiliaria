import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Head from "next/head";

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
      <Head>
      <link sizes="any" rel="icon" href="logo.png" type="image/x-icon" />

      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
