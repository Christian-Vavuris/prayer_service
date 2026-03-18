import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Nav from "@/components/Nav";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Prayer API",
  description:
    "Submit prayer requests to be offered by a community of believers. Open to anyone, anytime.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} min-h-screen`} style={{ background: "#0a0a0a" }}>
        <Nav />
        <main className="max-w-2xl mx-auto px-6 py-10">{children}</main>
        <footer
          className="max-w-2xl mx-auto px-6 py-8 flex gap-6 justify-center"
          style={{ borderTop: "1px solid rgba(201, 184, 154, 0.08)" }}
        >
          <Link
            href="/privacy"
            className="text-xs uppercase"
            style={{ color: "var(--muted-text)", textDecoration: "none", letterSpacing: "0.1em" }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-xs uppercase"
            style={{ color: "var(--muted-text)", textDecoration: "none", letterSpacing: "0.1em" }}
          >
            Terms of Service
          </Link>
        </footer>
      </body>
    </html>
  );
}
