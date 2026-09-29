import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  ...buildMetadata({
    title: `${site.tagline}: Browse Finds, Prices & QC Guidance | ${site.name}`,
    description: site.description,
    path: "/",
  }),
  keywords: [
    "hipobuy spreadsheet",
    "hipobuy",
    "weidian finds",
    "taobao agent",
    "qc photos",
    "china shopping agent",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
