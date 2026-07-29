import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "./ThemeRegistry";

export const metadata: Metadata = {
  metadataBase: new URL("https://gepatit.uz"),
  title: {
    default: "Гепатит UZ — Информация и поддержка в Узбекистане",
    template: "%s | Гепатит UZ",
  },
  description:
    "Информационный портал о гепатите в Узбекистане. Узнайте о типах гепатита, симптомах, профилактике и лечении. Присоединяйтесь к нашему сообществу в Telegram.",
  keywords: [
    "гепатит",
    "гепатит Узбекистан",
    "гепатит B",
    "гепатит C",
    "лечение гепатита",
    "gepatit",
    "hepatitis",
    "gepatit uz",
    "гепатит УЗ",
  ],
  alternates: {
    canonical: "https://gepatit.uz",
    languages: {
      "ru-UZ": "https://gepatit.uz",
      "x-default": "https://gepatit.uz",
    },
  },
  openGraph: {
    title: "Гепатит UZ — Информация и поддержка в Узбекистане",
    description:
      "Информационный портал о гепатите в Узбекистане. Узнайте о типах, профилактике и лечении. Присоединяйтесь к нашему Telegram-сообществу.",
    url: "https://gepatit.uz",
    siteName: "Гепатит UZ",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Гепатит UZ — Информация и поддержка",
    description: "Информационный портал о гепатите в Узбекистане.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "UZ",
    "geo.placename": "Tashkent, Uzbekistan",
    "geo.position": "41.2995;69.2401",
    ICBM: "41.2995, 69.2401",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Гепатит UZ — Информация и поддержка",
    url: "https://gepatit.uz",
    description: "Информационный портал о гепатите в Узбекистане. Узнайте о типах гепатита, симптомах, профилактике и лечении.",
    about: {
      "@type": "MedicalCondition",
      name: "Hepatitis",
    },
    publisher: {
      "@type": "Organization",
      name: "Гепатит UZ",
      url: "https://gepatit.uz",
    },
    inLanguage: "ru-UZ",
  };

  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
