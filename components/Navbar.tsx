import React from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = {
    en: [
      { name: 'Core Services', href: '#services' },
      { name: 'Features', href: '#features' },
      { name: 'How to Launch', href: '#guide' },
      { name: 'Tokenomics', href: '#tokenomics' },
      { name: 'Audit', href: '#audit' },
    ],
    cn: [
      { name: '核心服务', href: '#services' },
      { name: '功能亮点', href: '#features' },
      { name: '启动指南', href: '#guide' },
      { name: '代币经济', href: '#tokenomics' },
      { name: '安全审计', href: '#audit' },
    ]
  };

  const toggleLang = () => {
    setLang(lang === 'cn' ? 'en' : 'cn');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-hex-bg/90 backdrop-blur-md border-b border-hex-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <svg className="w-10 h-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="95" fill="#1E2329"/>
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
            <span className="text-xl font-bold tracking-wider text-white">HEX</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks[lang].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-hex-gold px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 bg-hex-gold hover:bg-hex-goldHover text-black px-6 py-2 rounded-full font-bold text-sm transition-transform hover:scale-105"
            >
              <Globe className="w-4 h-4" />
              {lang === 'cn' ? 'English' : '中文'}
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-hex-card border-b border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks[lang].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-hex-gold block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                toggleLang();
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-hex-gold text-black mt-4 px-6 py-3 rounded-md font-bold"
            >
              <Globe className="w-4 h-4" />
              {lang === 'cn' ? 'Switch to English' : '切换至中文'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};