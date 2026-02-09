import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Tek from './components/Tek';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Ambience */}
      <div className="bg-orb w-[500px] h-[500px] top-[-100px] left-[-100px]" style={{ background: 'radial-gradient(circle, var(--color-primary), transparent 70%)' }}></div>
      <div className="bg-orb w-[400px] h-[400px] bottom-0 right-0" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1), transparent 70%)' }}></div>

      <Header />
      <main>
        <Hero />
        <Tek />
      </main>
      <Footer />
    </div>
  );
}

export default App;
