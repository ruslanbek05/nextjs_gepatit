import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "./ThemeRegistry";

export const metadata: Metadata = {
  title: "Гепатит UZ — Информация и поддержка",
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
  ],
  openGraph: {
    title: "Гепатит UZ — Информация и поддержка",
    description:
      "Информационный портал о гепатите в Узбекистане. Присоединяйтесь к нашему Telegram-сообществу.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
