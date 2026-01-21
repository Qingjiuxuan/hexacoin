import React from 'react';
import { FileCode, Activity, Share2, Palette } from 'lucide-react';
import { Language } from '../types';

interface FeaturesProps {
  lang: Language;
}

export const Features: React.FC<FeaturesProps> = ({ lang }) => {
  const content = {
    en: {
      title: "Feature Highlights",
      desc: "Designed specifically for Meme & \"Degen\" projects. We know every great project needs a respectable storefront.",
      features: [
        {
          title: "Smart Contract Integration",
          desc: "Prominent display of contract address with 'One-Click Copy' for easy wallet interaction."
        },
        {
          title: "Dynamic Token Parameters",
          desc: "Auto-formatted display of token symbols, total supply, and tax rates. Clear and transparent."
        },
        {
          title: "Social Matrix Aggregation",
          desc: "Perfect integration with Telegram communities and X (Twitter) links to consolidate private traffic."
        },
        {
          title: "Visual Style Customization",
          desc: "Variety of Web3 templates (Cyberpunk, Minimalist, Meme styles) randomly or specifically adapted."
        }
      ]
    },
    cn: {
      title: "功能亮点",
      desc: "专为 Meme 与土狗项目打造。我们深知每一个伟大的项目都需要一个体面的门面。",
      features: [
        {
          title: "智能合约集成",
          desc: "首页醒目展示合约地址，支持“一键复制”，方便用户通过钱包交互。"
        },
        {
          title: "动态代币参数",
          desc: "自动格式化展示代币符号、发行总量及买卖税率，数据清晰透明。"
        },
        {
          title: "社交矩阵聚合",
          desc: "完美集成 Telegram 社区与 X (Twitter) 跳转入口，沉淀私域流量。"
        },
        {
          title: "视觉风格定制",
          desc: "提供多种 Web3 潮流设计模板（赛博朋克、极简风、Meme风等）随机或指定适配。"
        }
      ]
    }
  };

  const icons = [
    <FileCode className="w-8 h-8 text-hex-gold" />,
    <Activity className="w-8 h-8 text-hex-gold" />,
    <Share2 className="w-8 h-8 text-hex-gold" />,
    <Palette className="w-8 h-8 text-hex-gold" />
  ];

  return (
    <section id="features" className="py-20 bg-hex-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {content[lang].title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {content[lang].desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content[lang].features.map((feature, idx) => (
            <div key={idx} className="group p-6 bg-hex-card rounded-2xl border border-gray-800 hover:border-hex-gold transition-all hover:-translate-y-2">
              <div className="mb-4 bg-hex-bg w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-hex-gold/10 transition-colors">
                {icons[idx]}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};