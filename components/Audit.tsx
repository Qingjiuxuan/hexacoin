import React from 'react';
import { ShieldCheck, CheckCircle, Lock } from 'lucide-react';

export const Audit: React.FC = () => {
  return (
    <section id="audit" className="py-20 bg-gradient-to-t from-hex-card/20 to-hex-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-4">
             <ShieldCheck className="w-10 h-10 text-green-500" />
           </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            安全审计
          </h2>
          <p className="text-xl text-green-400 font-bold">
            HEX 合约安全性检测 | 100%
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-hex-card p-6 rounded-xl border border-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <Lock className="w-5 h-5 text-hex-gold" />
              <h3 className="text-lg font-bold text-white">权限与控制权</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span><strong>权限已放弃:</strong> 创建者已放弃所有权。</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span><strong>无升级风险:</strong> 合约逻辑永久固定。</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span><strong>无暂停:</strong> 无法暂停交易。</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-hex-card p-6 rounded-xl border border-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <Lock className="w-5 h-5 text-hex-gold" />
              <h3 className="text-lg font-bold text-white">交易机制</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span><strong>无黑名单:</strong> 所有人自由买卖。</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span><strong>无限制:</strong> 大户可自由进出。</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span><strong>无貔貅风险:</strong> 代码逻辑严谨。</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-hex-card p-6 rounded-xl border border-gray-700">
             <div className="flex items-center gap-2 mb-4">
              <Lock className="w-5 h-5 text-hex-gold" />
              <h3 className="text-lg font-bold text-white">资产与税费</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span><strong>无增发:</strong> 总量恒定。</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span><strong>无余额操纵:</strong> 余额安全。</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span><strong>固定 0 税:</strong> 永久零税。</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};