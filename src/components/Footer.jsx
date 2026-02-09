import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/10 bg-black">
            <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-2xl font-bold font-display text-gradient">
                    $AssAsset
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-[var(--color-text-muted)] hover:text-white transition-colors">Telegram</a>
                    <a href="#" className="text-[var(--color-text-muted)] hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="text-[var(--color-text-muted)] hover:text-white transition-colors">DexScreener</a>
                </div>

                <div className="text-sm text-[var(--color-text-muted)]">
                    &copy; 2026 $AssAsset. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
