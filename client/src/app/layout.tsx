import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "YE77I Tech — IT xizmatlari, biznesni avtomatlashtirish va raqamlashtirish",
  description:
    "YE77I Tech kompaniyasi — biznesingizni rivojlantirish uchun IT xizmatlari, ERP va CRM tizimlari, veb-sayt va mobil ilovalar yaratish, avtomatlashtirish hamda raqamlashtirish bo‘yicha professional yechimlar taqdim etadi.",
  keywords: [
    "IT xizmatlari",
    "biznesni avtomatlashtirish",
    "raqamlashtirish",
    "ERP tizimlari",
    "CRM tizimlari",
    "mobil ilovalar",
    "veb sayt yaratish",
    "dasturlash",
    "YE77I Tech",
    "raqamli yechimlar",
    "biznesni optimallashtirish",
    "AI yechimlar",
    "full-stack development",
  ],
  openGraph: {
    title: "YE77I Tech — IT xizmatlari va biznesni raqamlashtirish",
    description:
      "YE77I Tech ERP/CRM tizimlari, avtomatlashtirish, veb-sayt va mobil ilovalar orqali biznesingizni yangi bosqichga olib chiqadi.",
    url: "https://ye77i.com",
    siteName: "YE77I Tech",
    images: [
      {
        url: "/og-image.png", // public/ ichida rasm bo‘lishi kerak
        width: 1200,
        height: 630,
        alt: "YE77I Tech IT xizmatlari",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YE77I Tech — IT xizmatlari va biznesni avtomatlashtirish",
    description:
      "Biznesingizni rivojlantirish uchun YE77I Tech’dan premium IT yechimlar: ERP, CRM, raqamlashtirish, veb va mobil ilovalar.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://ye77i.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <head>
        {/* Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "YE77I Tech",
              url: "https://ye77i.com",
              logo: "https://ye77i.com/logo.png",
              sameAs: [
                "https://www.facebook.com/ye77i",
                "https://www.instagram.com/ye77i",
                "https://www.linkedin.com/company/ye77i",
              ],
              description:
                "YE77I Tech — IT xizmatlari, ERP/CRM tizimlari, biznesni raqamlashtirish va avtomatlashtirish bo‘yicha professional yechimlar.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+998-90-123-45-67",
                contactType: "customer service",
                availableLanguage: ["uz", "ru", "en"],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-display`}
      >
        {children}
      </body>
    </html>
  );
}
