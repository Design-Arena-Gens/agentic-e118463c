import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CPK Real Estate | Nairobi",
  description: "Find CPK Real Estate in Nairobi. View location, map, and directions.",
  openGraph: {
    title: "CPK Real Estate | Nairobi",
    description: "Find CPK Real Estate in Nairobi. View location, map, and directions.",
    url: "https://agentic-e118463c.vercel.app",
    siteName: "CPK Real Estate",
    type: "website"
  },
  metadataBase: new URL("https://agentic-e118463c.vercel.app")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
