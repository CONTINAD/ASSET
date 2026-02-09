import React from 'react';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#ff5500] selection:text-black">
      <Hero />
      <Marquee />
      <Tokenomics />
      <Footer />
    </div>
  );
}

export default App;
