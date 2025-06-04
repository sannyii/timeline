'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaWeixin } from 'react-icons/fa';
import Link from 'next/link';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="flex justify-end mb-8">
        <Link
          href="/"
          className="neon-link inline-flex items-center px-4 py-2 rounded-md"
        >
          <span>返回主页</span>
        </Link>
      </div>
      <div className="max-w-4xl mx-auto space-y-16">
        {/* 网站介绍部分 */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6 border-b pb-2">
            关于时间线
          </h2>
          <p className="text-lg text-foreground/80">
            这是一个专注于展示历史事件和个人故事的时间线工具。通过直观的可视化界面，
            让用户能够轻松创建、编辑和分享他们的时间线故事。
          </p>
        </motion.section>

        {/* 制作者信息部分 */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6 border-b pb-2">
            制作者
          </h2>
          <div className="bg-foreground/5 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2">王三一</h3>
            <p className="text-foreground/80">
              全栈开发者，热衷于创造有趣且实用的工具。专注于用户体验和界面设计，
              致力于让技术产品更加人性化和易用。
            </p>
          </div>
        </motion.section>

        {/* 赞助部分 */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6 border-b pb-2">
            支持我们
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-foreground/5 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">赞助</h3>
              <p className="text-foreground/80 mb-4">
                如果您觉得这个工具对您有帮助，可以考虑赞助我们，帮助我们持续改进。
              </p>
              <button className="neon-link px-6 py-2 rounded-md">
                成为赞助者
              </button>
            </div>
            <div className="bg-foreground/5 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">其他支持方式</h3>
              <p className="text-foreground/80">
                您也可以通过 Star 我们的 GitHub 仓库、分享给更多人等方式支持我们。
              </p>
            </div>
          </div>
        </motion.section>

        {/* 联系方式部分 */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6 border-b pb-2">
            联系我们
          </h2>
          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              <FaGithub className="text-2xl" />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="flex items-center space-x-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              <FaEnvelope className="text-2xl" />
              <span>Email</span>
            </a>
            <button
              onClick={() => alert('微信号：your_wechat')}
              className="flex items-center space-x-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              <FaWeixin className="text-2xl" />
              <span>WeChat</span>
            </button>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}
