import "../app/globals.css";
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
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}