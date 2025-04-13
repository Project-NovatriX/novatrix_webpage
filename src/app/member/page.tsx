"use client";

import React from "react";
import Hero1 from "./hero1";

const MemberHero = () => {
  return (
    <section className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white py-20 px-6 md:px-20">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">メンバー紹介</h1>
      <Hero1 />
    </section>
  );
};

export default function MemberPage() {
  return (
    <main className="bg-white text-black dark:bg-black dark:text-white">
      <MemberHero />
    </main>
  );
}
