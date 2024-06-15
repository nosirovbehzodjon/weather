import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather App",
  description:
    "Get the latest and most accurate weather forecasts for your location. Stay updated with real-time weather updates, severe weather alerts, and detailed radar maps. Plan your day with confidence using our reliable weather reports and predictions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>
          Weather App - Accurate Weather Forecasts and Real-Time Updates
        </title>
        <meta
          name="description"
          content="Get the latest and most accurate weather forecasts for your location. Stay updated with real-time weather updates, severe weather alerts, and detailed radar maps. Plan your day with confidence using our reliable weather reports and predictions."
        />
        <meta
          name="keywords"
          content="weather, weather forecast, real-time weather, severe weather alerts, radar maps, weather updates, reliable weather, accurate weather"
        />
        <meta name="author" content="Weather App" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
