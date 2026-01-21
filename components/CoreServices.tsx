import React from 'react';
import { Cpu, Globe, Smartphone, Languages } from 'lucide-react';
import { Language } from '../types';

interface CoreServicesProps {
  lang: Language;
}

export const CoreServices: React.FC<CoreServicesProps> = ({ lang }) => {
  const content = {
    en: {
      title: "Core Services",
      subtitle: "Rapid Website Construction Protocol",
      description: "HEX platform embeds an advanced AI Build Engine that deeply analyzes your project parameters to automatically write and optimize frontend code. No programming skills required, no expensive servers needed.",
      benefits: [
        {
          title: "AI Build Engine",
          desc: "AI-driven logic ensures rigorous code structure and efficient runtime, ditching traditional templates."
        },
        {
          title: "Global CDN Distribution",
          desc: "Distributed node deployment delivers content to global edge nodes for millisecond-level loading."
        },
        {
          title: "Perfect Multi-Device Adaption",
          desc: "Deeply optimized responsive framework supporting iOS, Android, and PC browsers perfectly."
        },
        {
          title: "Bilingual Adaptive",
          desc: "Built-in EN/CN language switching engine to help projects seamlessly enter the international market."
        }
      ],
      status: "Status: Online",
      uptime: "Stable Running"
    },
    cn: {
      title: "核心服务",
      subtitle: "极速官网构建协议",
      description: "HEX 平台内嵌了先进的 AI 构建引擎，该引擎能够深度解析您的项目参数，自动编写并优化前端代码。您无需任何编程基础，无需购买昂贵的服务器，即可获得一套企业级的 Web3 官网解决方案。",
      benefits: [
        {
          title: "AI 构建引擎",
          desc: "摒弃传统模板堆砌，采用 AI 驱动的自动化逻辑，确保代码结构严谨、运行高效。"
        },
        {
          title: "全球 CDN 分发",
          desc: "依托分布式节点部署技术，将您的官网内容分发至全球边缘节点，实现毫秒级加载速度。"
        },
        {
          title: "全端完美适配",
          desc: "深度优化的响应式框架，完美支持 iOS、Android 移动端及 PC 端浏览器展示。"
        },
        {
          title: "双语自适应",
          desc: "内置中/英双语切换引擎，助力项目无缝走向国际化市场。"
        }
      ],
      status: "状态: 在线",
      uptime: "运行稳定"
    }
  };

  const icons = [
    <Cpu className="w-6 h-6 text-hex-gold" />,
    <Globe className="w-6 h-6 text-hex-gold" />,
    <Smartphone className="w-6 h-6 text-hex-gold" />,
    <Languages className="w-6 h-6 text-hex-gold" />
  ];

  return (
    <section id="services" className="py-20 bg-hex-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {content[lang].title}
            </h2>
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">{content[lang].subtitle}</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              {lang === 'en' ? (
                <>HEX platform embeds an advanced <strong>🧩 AI Build Engine</strong> that deeply analyzes your project parameters to automatically write and optimize frontend code. No programming skills required, no expensive servers needed.</>
              ) : (
                <>HEX 平台内嵌了先进的 <strong>🧩 AI 构建引擎</strong>，该引擎能够深度解析您的项目参数，自动编写并优化前端代码。您无需任何编程基础，无需购买昂贵的服务器，即可获得一套企业级的 Web3 官网解决方案。</>
              )}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {content[lang].benefits.map((item, idx) => (
                <div key={idx} className="bg-hex-bg border border-gray-800 p-5 rounded-lg hover:border-hex-gold/50 transition-colors">
                  <div className="mb-3">{icons[idx]}</div>
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
                    @keyframes triangle-load {
                      0% { opacity: 1; fill: #F0B90B; }
                      100% { opacity: 0.1; fill: #F0B90B; }
                    }
                    .loader-tri {
                      fill: #F0B90B;
                      opacity: 0.1;
                      animation: triangle-load 1.2s infinite ease-in-out;
                    }
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
               <div className="text-hex-gold font-mono text-sm">{content[lang].status}</div>
               <div className="text-white font-bold text-xl">{content[lang].uptime}</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};