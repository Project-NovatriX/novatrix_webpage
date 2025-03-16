"use client";

import Hero1 from "./home/hero1"; // hero1.tsx をインポート
import Hero2 from "./home/hero2";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden relative">
      <Hero1 />
      <Hero2 />
    </main>
  );
}