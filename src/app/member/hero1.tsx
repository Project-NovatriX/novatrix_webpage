"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaTwitter, FaGlobe, FaEnvelope } from "react-icons/fa";

interface MemberProfileProps {
  name: string;
  role?: string;
  image: string;
  descriptionList: { label: string; value: string }[];
  detailDescription: string;
}

const MemberProfile: React.FC<MemberProfileProps> = ({ name, role, image, descriptionList, detailDescription }) => {
  
  return (
    <motion.section
      className="w-full px-6 py-16 bg-white text-black dark:bg-black dark:text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-start gap-10">
        <div className="w-full md:w-1/3 flex flex-col justify-end items-start">
          {role && (
            <div className="text-6xl font-bold mb-2 text-black dark:text-white flex items-baseline gap-4">
              <span>{role}</span>
              {role === "代表" && (
                <span className="text-xl text-gray-500 dark:text-gray-400">Representative</span>
              )}
            </div>
          )}
          <div className="relative aspect-square w-full">
            <Image
              src={image}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 flex flex-col self-start mt-[-2rem] md:mt-0 justify-start">
          <div className="mt-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {name.split('/')[0]}{" "}
              <span className="text-xl md:text-2xl text-gray-400 font-normal">{name.split('/')[1]}</span>
            </h2>
            <motion.ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
              {descriptionList.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <strong>{item.label}</strong>{item.value}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div className="mt-6 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {detailDescription.split("<br />").map((line, index) => (
                <p key={index} className="mb-4">{line}</p>
              ))}
            </motion.div>
            <motion.div
              className="mt-6 flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a href="https://x.com/Hoshikoma_0220" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={32} />
              </a>
              <a href="https://hoshikoma.com" target="_blank" rel="noopener noreferrer">
                <FaGlobe size={32} />
              </a>
              <a href="mailto:contact@hoshikoma.com">
                <FaEnvelope size={32} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const Hero1 = () => {
  return (
    <div>
      <MemberProfile
        name="星狛 つらら/Turara_Hoshikoma"
        role="代表"
        image="/member_photo/Turara_Hoshikoma.png"
        descriptionList={[
          { label: "役職：", value: "代表、設立者" },
          { label: "得意分野：", value: "UI設計、Web制作、アプリ制作、映像画像編集、撮影など" },
          { label: "担当領域：", value: "総括、エンジニア" },
          { label: "経験：", value: "公開までお待ち下さい" },
          { label: "学歴・経歴：", value: "S高等学校所属" },
        ]}
        detailDescription="Project-NovatriXの立ち上げをはじめ、全体統括などを担当しています。<br />webページの作成や動画編集、動画撮影など幅広い分野を担当しております。"
      />
    </div>
  );
};

export default Hero1;