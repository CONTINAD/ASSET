import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 bg-black border-t-2 border-[#333]">
            <div className="container mx-auto px-4 text-center">
                <div className="text-4xl font-display text-white mb-8">
                    $ASS<span className="text-[#ff5500]">ASSET</span>
                </div>

                <div className="flex justify-center gap-8 mb-8">
                    {['Telegram', 'Twitter', 'DexScreener'].map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="text-xl font-bold text-gray-400 hover:text-[#ff5500] hover:scale-110 transition-all uppercase"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                <div className="text-gray-600 font-mono text-sm">
                    &copy; 2026 $AssAsset. All rights reserved. This is a meme coin.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
