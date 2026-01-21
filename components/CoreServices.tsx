import React from 'react';
import { Cpu, Globe, Smartphone, Languages } from 'lucide-react';

export const CoreServices: React.FC = () => {
  const benefits = [
    {
      icon: <Cpu className="w-6 h-6 text-hex-gold" />,
      title: "AI 构建引擎",
      desc: "摒弃传统模板堆砌，采用 AI 驱动的自动化逻辑，确保代码结构严谨、运行高效。"
    },
    {
      icon: <Globe className="w-6 h-6 text-hex-gold" />,
      title: "全球 CDN 分发",
      desc: "依托分布式节点部署技术，将您的官网内容分发至全球边缘节点，实现毫秒级加载速度。"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-hex-gold" />,
      title: "全端完美适配",
      desc: "深度优化的响应式框架，完美支持 iOS、Android 移动端及 PC 端浏览器展示。"
    },
    {
      icon: <Languages className="w-6 h-6 text-hex-gold" />,
      title: "双语自适应",
      desc: "内置中/英双语切换引擎，助力项目无缝走向国际化市场。"
    }
  ];

  return (
    <section id="services" className="py-20 bg-hex-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              核心服务
            </h2>
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">极速官网构建协议</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              HEX 平台内嵌了先进的 <strong>🧩 AI 构建引擎</strong>，该引擎能够深度解析您的项目参数，自动编写并优化前端代码。您无需任何编程基础，无需购买昂贵的服务器，即可获得一套企业级的 Web3 官网解决方案。
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((item, idx) => (
                <div key={idx} className="bg-hex-bg border border-gray-800 p-5 rounded-lg hover:border-hex-gold/50 transition-colors">
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative flex justify-center items-center">
             <div className="absolute inset-0 bg-hex-gold/10 blur-3xl rounded-full -z-10"></div>
             
             <div className="relative w-full max-w-[400px]">
               <svg className="w-full h-auto drop-shadow-2xl" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <style>
                    {`
                    /* 定义加载动画：透明度从高到低变化 */
                    @keyframes triangle-load {
                      0% { opacity: 1; fill: #F0B90B; }
                      100% { opacity: 0.1; fill: #F0B90B; }
                    }
                    
                    /* 应用动画到每个三角形 */
                    .loader-tri {
                      fill: #F0B90B; /* 基础填充色 */
                      opacity: 0.1;  /* 默认低透明度 */
                      animation: triangle-load 1.2s infinite ease-in-out;
                    }

                    /* 为每个三角形设置延迟，形成旋转效果 */
                    .t1 { animation-delay: 0s; }
                    .t2 { animation-delay: 0.2s; }
                    .t3 { animation-delay: 0.4s; }
                    .t4 { animation-delay: 0.6s; }
                    .t5 { animation-delay: 0.8s; }
                    .t6 { animation-delay: 1.0s; }
                    `}
                  </style>

                  <circle cx="100" cy="100" r="95" fill="#1E2329"/>

                  <g>
                    <path className="loader-tri t1" d="M100 100 L100 55 L139 77.5 Z" />
                    <path className="loader-tri t2" d="M100 100 L139 77.5 L139 122.5 Z" />
                    <path className="loader-tri t3" d="M100 100 L139 122.5 L100 145 Z" />
                    <path className="loader-tri t4" d="M100 100 L100 145 L61 122.5 Z" />
                    <path className="loader-tri t5" d="M100 100 L61 122.5 L61 77.5 Z" />
                    <path className="loader-tri t6" d="M100 100 L61 77.5 L100 55 Z" />
                  </g>

                  <circle cx="100" cy="100" r="85" fill="none" stroke="#F0B90B" strokeWidth="10"/>

                  <path d="M100 55 L139 77.5 V122.5 L100 145 L61 122.5 V77.5 L100 55 Z"
                    fill="none"
                    stroke="#F0B90B"
                    strokeWidth="10"
                    strokeLinejoin="round"/>
                  
                  <path d="M100 55 V145 M61 77.5 L139 122.5 M139 77.5 L61 122.5"
                    fill="none"
                    stroke="#F0B90B"
                    strokeWidth="6"
                    strokeLinecap="round"/>

                  <circle cx="100" cy="100" r="15" fill="#F0B90B"/>
                </svg>
             </div>

             <div className="absolute -bottom-6 -right-6 bg-hex-card p-4 rounded-xl border border-hex-gold/30 shadow-lg hidden md:block">
               <div className="text-hex-gold font-mono text-sm">状态: 在线</div>
               <div className="text-white font-bold text-xl">运行稳定</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};