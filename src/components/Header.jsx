import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-black border-b-4 border-[var(--color-primary)]">
            <div className="container flex items-center justify-between">
                <div className="text-4xl font-bold font-display tracking-wide text-white drop-shadow-[2px_2px_0px_#ff9500]">
                    $ASS<span className="text-[var(--color-primary)]">ASSET</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    <a href="#hero" className="text-xl font-bold uppercase hover:text-[var(--color-primary)] hover:underline decoration-4">Home</a>
                    <a href="#tek" className="text-xl font-bold uppercase hover:text-[var(--color-primary)] hover:underline decoration-4">Alpha</a>
                    <a href="#" className="btn-primary text-xl px-6 py-2 border-2 shadow-none hover:shadow-none hover:translate-y-1">Buy Now</a>
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div className={`md:hidden fixed inset-0 top-[76px] bg-black p-8 flex flex-col gap-8 items-center transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-black uppercase text-white hover:text-[var(--color-primary)]">Home</a>
                <a href="#tek" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-black uppercase text-white hover:text-[var(--color-primary)]">The Alpha</a>
                <a href="#" className="btn-primary w-full text-center text-3xl">Buy Now</a>
            </div>
        </header>
    );
};

export default Header;
