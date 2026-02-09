import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 border-t-4 border-[var(--color-primary)] bg-black text-center">
            <div className="container flex flex-col items-center gap-6">
                <div className="text-6xl font-display text-white drop-shadow-[4px_4px_0px_#ff9500]">
                    $ASS<span className="text-[var(--color-primary)]">ASSET</span>
                </div>

                <div className="flex gap-8">
                    <a href="#" className="text-2xl font-bold text-white hover:text-[var(--color-primary)] hover:scale-110 transition-transform uppercase">Telegram</a>
                    <a href="#" className="text-2xl font-bold text-white hover:text-[var(--color-primary)] hover:scale-110 transition-transform uppercase">Twitter</a>
                    <a href="#" className="text-2xl font-bold text-white hover:text-[var(--color-primary)] hover:scale-110 transition-transform uppercase">DexScreener</a>
                </div>

                <div className="text-lg text-[var(--color-text-muted)] font-mono mt-8">
                    &copy; 2026 $AssAsset. All rights reserved. Not financial advice. We just like the asset.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
