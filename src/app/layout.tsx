import "../app/globals.css"; // CSSを適用
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Project-NovatriX",
  description: "Creating the future with innovation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main className="max-w-6xl mx-auto px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}