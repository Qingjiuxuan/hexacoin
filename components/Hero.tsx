import React from 'react';
import { Rocket, Zap } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const content = {
    en: {
      badge: "Web3 Website Launchpad",
      title: "Build Your Web3 Identity In One Click",
      desc: "HEX platform redefines Web3 project launches. Powered by our Intelligent Build Engine, get an enterprise-grade official website without coding.",
      launchBtn: "Launch Now (0.02 BNB)",
      docsBtn: "Read Docs"
    },
    cn: {
      badge: "Web3 官网发射台",
      title: "一键构建您的 Web3 数字身份",
      desc: "HEX 平台重新定义了 Web3 项目的启动标准。我们内嵌了先进的智能构建引擎，为您提供企业级的 Web3 官网解决方案，无需任何编程基础。",
      launchBtn: "立即启动 (0.02 BNB)",
      docsBtn: "查看文档"
    }
  };

  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-hex-gold/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-hex-gold/30 bg-hex-gold/10 mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-hex-gold mr-2 animate-pulse"></span>
          <span className="text-hex-gold text-sm font-semibold uppercase tracking-wide">{content[lang].badge}</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {lang === 'en' ? (
            <>Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-hex-gold to-yellow-200">Web3 Identity</span> In One Click</>
          ) : (
            <>一键构建您的 <span className="text-transparent bg-clip-text bg-gradient-to-r from-hex-gold to-yellow-200">Web3 数字身份</span></>
          )}
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10">
          {content[lang].desc}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="flex items-center justify-center gap-2 bg-hex-gold hover:bg-hex-goldHover text-black px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(240,185,11,0.3)]">
            <Rocket className="w-5 h-5" />
            {content[lang].launchBtn}
          </button>
          <button className="flex items-center justify-center gap-2 bg-transparent border border-gray-600 hover:border-hex-gold text-white hover:text-hex-gold px-8 py-4 rounded-xl font-semibold text-lg transition-all">
            <Zap className="w-5 h-5" />
            {content[lang].docsBtn}
          </button>
        </div>
      </div>
    </div>
  );
};