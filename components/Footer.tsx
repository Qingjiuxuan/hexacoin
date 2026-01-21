import React from 'react';
import { Send, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
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

          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-4">社区与服务</h4>
            <div className="flex space-x-6">
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-hex-gold transition-colors">
                <div className="p-2 bg-gray-800 rounded-full group-hover:bg-hex-gold">
                   <Send className="w-5 h-5" />
                </div>
                <span>Telegram</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-hex-gold transition-colors">
                <div className="p-2 bg-gray-800 rounded-full group-hover:bg-hex-gold">
                   <Twitter className="w-5 h-5" />
                </div>
                <span>Twitter / X</span>
              </a>
            </div>
          </div>

          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} HEX Ecosystem.<br/>版权所有。
          </div>
        </div>
      </div>
    </footer>
  );
};