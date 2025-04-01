"use client";

import React from "react";
import Link from "next/link";

const Hero5 = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">お問い合わせ</h2>
        <p className="text-lg md:text-xl mb-8">
          ご質問やご相談がございましたら、ぜひお気軽にお問い合わせください。
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-700 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          お問い合わせフォームへ
        </Link>
      </div>
    </section>
  );
};

export default Hero5;