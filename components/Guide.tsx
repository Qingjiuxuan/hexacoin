import React from 'react';
import { Database, Zap, Gift } from 'lucide-react';

export const Guide: React.FC = () => {
  return (
    <section id="guide" className="py-20 bg-gradient-to-b from-hex-card/20 to-hex-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            如何启动您的官网？
          </h2>
          <p className="text-gray-400">
            我们极简了繁琐的传统建站流程，提供一站式技术托管方案，只需三步，即刻上线。
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-800 -translate-y-1/2 z-0"></div>

          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="bg-hex-card p-8 rounded-2xl border border-gray-700 flex flex-col items-center text-center hover:border-hex-gold transition-colors">
              <div className="w-16 h-16 bg-hex-bg rounded-full flex items-center justify-center border-2 border-hex-gold mb-6 shadow-[0_0_15px_rgba(240,185,11,0.3)]">
                <Database className="w-8 h-8 text-hex-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">步骤 1: 提交元数据</h3>
              <p className="text-gray-400 text-sm">
                在 HEX DApp 中填写您的项目信息（Logo、合约地址、项目叙事、代币经济学等）。
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-hex-card p-8 rounded-2xl border border-gray-700 flex flex-col items-center text-center hover:border-hex-gold transition-colors">
              <div className="w-16 h-16 bg-hex-bg rounded-full flex items-center justify-center border-2 border-hex-gold mb-6 shadow-[0_0_15px_rgba(240,185,11,0.3)]">
                <Zap className="w-8 h-8 text-hex-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">步骤 2: 激活构建服务</h3>
              <p className="text-gray-400 text-sm">
                支付 <span className="text-hex-gold font-bold">0.02 BNB</span> 即可激活智能构建引擎。
              </p>
              <span className="mt-4 text-xs bg-gray-700 px-3 py-1 rounded-full text-gray-300">
                费用已包含服务器及部署成本
              </span>
            </div>

            {/* Step 3 */}
            <div className="bg-hex-card p-8 rounded-2xl border border-gray-700 flex flex-col items-center text-center hover:border-hex-gold transition-colors">
              <div className="w-16 h-16 bg-hex-bg rounded-full flex items-center justify-center border-2 border-hex-gold mb-6 shadow-[0_0_15px_rgba(240,185,11,0.3)]">
                <Gift className="w-8 h-8 text-hex-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">步骤 3: 交付与上线</h3>
              <p className="text-gray-400 text-sm">
                系统将自动为您配置并赠送 <span className="text-white font-bold">永久二级域名</span>。
              </p>
              <code className="mt-3 text-xs bg-black/50 p-2 rounded text-hex-gold">
                https://meme-coin.hex.com
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};