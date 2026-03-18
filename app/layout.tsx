import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Prayer Service — St. Kevin's Church",
  description:
    "Submit prayer requests for St. Kevin's Church in Bernal Heights, San Francisco. Prayers are offered every Sunday.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen" style={{ background: "#0a0a0a" }}>
        <Nav />
        <main className="max-w-2xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
