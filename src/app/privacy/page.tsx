"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-6 md:px-20 py-20 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 min-h-screen"
    >
      <h1 className="text-4xl font-bold mb-10">プライバシーポリシー</h1>

      <section className="space-y-6">
        <p>
          Project-NovatriX（以下、「当プロジェクト」といいます）は、利用者のプライバシーを尊重し、個人情報を適切に保護することを重要な責務と認識しております。
        </p>

        <h2 className="text-2xl font-semibold">1. 取得する情報</h2>
        <p>
          当プロジェクトは、サービス提供のために次の情報を取得することがあります：
          氏名、メールアドレス、IPアドレス、Cookie情報、利用者の操作履歴など。
        </p>

        <h2 className="text-2xl font-semibold">2. 利用目的</h2>
        <p>取得した情報は以下の目的に利用されます：</p>
        <ul className="list-disc list-inside pl-4">
          <li>サービスの提供・改善</li>
          <li>お問い合わせへの対応</li>
          <li>利用規約等に違反する行為への対応</li>
          <li>重要なお知らせの通知</li>
        </ul>

        <h2 className="text-2xl font-semibold">3. 第三者提供</h2>
        <p>
          当プロジェクトは、法令に基づく場合を除き、本人の同意を得ることなく第三者に個人情報を提供しません。
        </p>

        <h2 className="text-2xl font-semibold">4. セキュリティ</h2>
        <p>
          当プロジェクトは、取得した情報に対し、適切な安全対策を講じ、不正アクセスや情報漏洩の防止に努めます。
        </p>

        <h2 className="text-2xl font-semibold">5. お問い合わせ</h2>
        <p>
          プライバシーポリシーに関するご質問は以下のメールアドレスまでお問い合わせください：
          <br />
          <a href="mailto:contact@novatrix-pj.com" className="text-blue-500 underline">
            contact@novatrix-pj.com
          </a>
        </p>

        <div className="mt-6 space-y-2 text-gray-800 dark:text-gray-200 text-sm md:text-base">
          <p>
            <a
              href="https://x.com/Hoshikoma_0220"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Twitter: @Hoshikoma_0220
            </a>
          </p>
          <p>
            <a
              href="https://hoshikoma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Webサイト: hoshikoma.com
            </a>
          </p>
          <p>
            メール:{" "}
            <a
              href="mailto:contact@hoshikoma.com"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              contact@hoshikoma.com
            </a>
          </p>
        </div>

        <p className="text-sm mt-10">（制定日：2025年4月10日）</p>
      </section>
    </motion.main>
  );
}
