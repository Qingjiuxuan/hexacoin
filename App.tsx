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

function App() {
  const [loading, setLoading] = useState(true);

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
        <Navbar />
        <main>
          <Hero />
          <CoreServices />
          <Features />
          <Guide />
          <Tokenomics />
          <Audit />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;