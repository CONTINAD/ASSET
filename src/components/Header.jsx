import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container flex items-center justify-between">
                <div className="text-2xl font-bold font-display tracking-tighter text-gradient">
                    $AssAsset
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    <a href="#hero" className="text-sm font-medium hover:text-[var(--color-primary)] transition-colors">Home</a>
                    <a href="#tek" className="text-sm font-medium hover:text-[var(--color-primary)] transition-colors">The Tek</a>
                    <a href="#" className="btn-primary text-xs">Buy Now</a>
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl p-6 flex flex-col gap-6 items-center md:hidden border-b border-white/10">
                    <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="text-lg">Home</a>
                    <a href="#tek" onClick={() => setMobileMenuOpen(false)} className="text-lg">The Tek</a>
                    <a href="#" className="btn-primary w-full text-center">Buy Now</a>
                </div>
            )}
        </header>
    );
};

export default Header;
