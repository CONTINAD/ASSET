import React, { useState } from 'react';
import { Copy, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Hero = () => {
    const contractAddress = "0x000000000000000000000000000000000000dead"; // Placeholder
    const [imageError, setImageError] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(contractAddress);
        alert("CA COPIED! LFG! 🚀");
    };

    return (
        <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            {/* Background Noise/Chaos */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            <div className="container grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 md:order-1 text-center md:text-left"
                >
                    <h1 className="text-8xl md:text-[10rem] mb-6 leading-[0.8] text-white drop-shadow-[5px_5px_0px_#ff9500]">
                        THE <br />
                        <span className="text-[var(--color-primary)] text-stroke">$ASS</span> <br />
                        <span className="text-white text-stroke">ASSET</span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-white font-bold mb-8 uppercase tracking-widest bg-black inline-block px-4 -rotate-1">
                        The Asset That Backs Itself 🍑
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                        <button className="btn-primary animate-pulse-fast flex items-center justify-center gap-2 text-2xl">
                            BUY NOW <ArrowRight size={32} />
                        </button>
                        <button className="btn-secondary flex items-center justify-center gap-2 text-2xl">
                            CHART <ExternalLink size={32} />
                        </button>
                    </div>

                    <div className="mt-12 flex flex-col items-center md:items-start gap-2">
                        <span className="text-xl font-bold text-[var(--color-primary)] uppercase animate-bounce">Contract Address:</span>
                        <div className="flex gap-2 w-full max-w-md">
                            <code className="bg-black border-2 border-[var(--color-primary)] text-white p-4 font-mono text-lg truncate flex-1">
                                {contractAddress}
                            </code>
                            <button
                                onClick={copyToClipboard}
                                className="bg-[var(--color-primary)] text-black p-4 border-2 border-white hover:bg-white hover:text-black transition-colors"
                                title="Copy CA"
                            >
                                <Copy size={24} />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-1 md:order-2 flex justify-center perspective-1000"
                >
                    <div className="relative w-[350px] h-[350px] md:w-[600px] md:h-[600px] animate-shake">
                        {/* Coin / Logo Image */}
                        <div className="w-full h-full flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-[var(--color-primary)] opacity-40 blur-[80px] rounded-full animate-pulse"></div>

                            {!imageError ? (
                                <img
                                    src="/src/assets/logo.png"
                                    alt="$AssAsset Logo"
                                    className="w-full h-full object-contain drop-shadow-[10px_10px_0px_rgba(0,0,0,1)] z-10 hover:scale-110 transition-transform duration-100"
                                    onError={() => setImageError(true)}
                                />
                            ) : (
                                <Logo className="w-full h-full text-[var(--color-primary)] drop-shadow-[10px_10px_0px_rgba(0,0,0,1)] z-10" />
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
