import React from 'react';
import { ShieldCheck, CheckCircle, Lock } from 'lucide-react';
import { Language } from '../types';

interface AuditProps {
  lang: Language;
}

export const Audit: React.FC<AuditProps> = ({ lang }) => {
  const content = {
    en: {
      title: "Security Audit",
      score: "Safety Score: 100%",
      cards: [
        {
          title: "Permissions & Control",
          items: [
            { label: "Renounced:", text: "Creator has no ownership." },
            { label: "No Upgrade:", text: "Logic is permanently fixed." },
            { label: "No Pause:", text: "Trading cannot be halted." }
          ]
        },
        {
          title: "Trading Mechanism",
          items: [
            { label: "No Blacklist:", text: "Free trading for everyone." },
            { label: "No Limits:", text: "Whales can enter/exit freely." },
            { label: "Honeypot Free:", text: "Verified logic." }
          ]
        },
        {
          title: "Assets & Tax",
          items: [
            { label: "Fixed Supply:", text: "No minting possible." },
            { label: "Safe Balances:", text: "No balance manipulation." },
            { label: "0% Tax:", text: "Permanently zero tax." }
          ]
        }
      ]
    },
    cn: {
      title: "安全审计",
      score: "HEX 合约安全性检测 | 100%",
      cards: [
        {
          title: "权限与控制权",
          items: [
            { label: "权限已放弃:", text: "创建者已放弃所有权。" },
            { label: "无升级风险:", text: "合约逻辑永久固定。" },
            { label: "无暂停:", text: "无法暂停交易。" }
          ]
        },
        {
          title: "交易机制",
          items: [
            { label: "无黑名单:", text: "所有人自由买卖。" },
            { label: "无限制:", text: "大户可自由进出。" },
            { label: "无貔貅风险:", text: "代码逻辑严谨。" }
          ]
        },
        {
          title: "资产与税费",
          items: [
            { label: "无增发:", text: "总量恒定。" },
            { label: "无余额操纵:", text: "余额安全。" },
            { label: "固定 0 税:", text: "永久零税。" }
          ]
        }
      ]
    }
  };

  return (
    <section id="audit" className="py-20 bg-gradient-to-t from-hex-card/20 to-hex-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-4">
             <ShieldCheck className="w-10 h-10 text-green-500" />
           </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {content[lang].title}
          </h2>
          <p className="text-xl text-green-400 font-bold">
            {content[lang].score}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {content[lang].cards.map((card, idx) => (
            <div key={idx} className="bg-hex-card p-6 rounded-xl border border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <Lock className="w-5 h-5 text-hex-gold" />
                <h3 className="text-lg font-bold text-white">{card.title}</h3>
              </div>
              <ul className="space-y-3">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span><strong>{item.label}</strong> {item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};