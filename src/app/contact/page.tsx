"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 md:px-16 py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">Contact</h1>

      <div className="max-w-3xl mx-auto space-y-8 text-lg md:text-xl leading-relaxed">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0 }}>
          <p>
            お問い合わせは以下のメールアドレスまでお願いいたします：
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <a href="mailto:contact@novatrix-pj.com" className="font-semibold text-blue-600 dark:text-blue-400 underline">
            contact@novatrix-pj.com
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <p>以下を記載していただけますとありがたいです。</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>お問い合わせの目的（例：業務依頼・コラボ提案・メディア掲載）</li>
            <li>ご自身の氏名・ご所属（会社名・団体名など）</li>
            <li>ご連絡先（メールアドレスやSNSなど）</li>
            <li>具体的な内容や希望事項</li>
            <li>可能であれば希望の返信期限</li>
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <p>星狛つらら個人宛へのお問い合わせは以下のいずれかまでお願いいたします：</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <a href="mailto:contact@turara.me" className="font-semibold text-blue-600 dark:text-blue-400 underline">
            contact@turara.me
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
          <a href="mailto:contact@hoshikoma.com" className="font-semibold text-blue-600 dark:text-blue-400 underline">
            contact@hoshikoma.com
          </a>
        </motion.div>
      </div>
    </main>
  );
};

export default ContactPage;
