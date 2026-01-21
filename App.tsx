import React, { useState, useEffect } from 'react';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoreServices } from './components/CoreServices';
import { Features } from './components/Features';
import { Guide } from './components/Guide';
import { Tokenomics } from './components/Tokenomics';
import { Audit } from './components/Audit';
import { Footer } from './components/Footer';
import { Language } from './types';

function App() {
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState<Language>('cn');

  useEffect(() => {
    // Simulate loading time for the entrance animation (Rotate and Enter)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // 1.2s animation cycle + buffer

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-hex-bg text-white selection:bg-hex-gold selection:text-black">
      {/* Loader Overlay */}
      <div 
        className={`fixed inset-0 z-[60] transition-opacity duration-700 pointer-events-none ${
          loading ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {loading && <Loader />}
      </div>

      {/* Main Content */}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar lang={lang} setLang={setLang} />
        <main>
          <Hero lang={lang} />
          <CoreServices lang={lang} />
          <Features lang={lang} />
          <Guide lang={lang} />
          <Tokenomics lang={lang} />
          <Audit lang={lang} />
        </main>
        <Footer lang={lang} />
      </div>
    </div>
  );
}

export default App;