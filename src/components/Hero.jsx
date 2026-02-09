import React from 'react';
import { Copy, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    const contractAddress = "0x000000000000000000000000000000000000dead"; // Placeholder

    const copyToClipboard = () => {
        navigator.clipboard.writeText(contractAddress);
        alert("CA Copied!");
    };

    return (
        <section id="hero" className="min-h-screen flex items-center pt-20 relative">
            <div className="container grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 md:order-1"
                >
                    <h1 className="text-6xl md:text-8xl mb-6 leading-tight">
                        The <span className="text-gradient">Asset</span> <br />
                        That Backs <br />
                        Itself.
                    </h1>
                    <p className="text-xl text-[var(--color-text-muted)] mb-8 max-w-lg">
                        $AssAsset isn't just a coin. It's a self-sustaining ecosystem powered by advanced buyback and burn technology.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="btn-primary flex items-center justify-center gap-2">
                            Buy $AssAsset <ArrowRight size={18} />
                        </button>
                        <button className="btn-secondary flex items-center justify-center gap-2">
                            View Chart <ExternalLink size={18} />
                        </button>
                    </div>

                    <div className="mt-8 flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 w-fit backdrop-blur-sm">
                        <span className="text-sm text-[var(--color-text-muted)] font-mono">CA:</span>
                        <code className="text-[var(--color-primary)] font-mono text-sm truncate max-w-[150px] sm:max-w-[300px]">
                            {contractAddress}
                        </code>
                        <button onClick={copyToClipboard} className="text-white hover:text-[var(--color-primary)] transition-colors">
                            <Copy size={16} />
                        </button>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-1 md:order-2 flex justify-center"
                >
                    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] animate-float">
                        {/* Placeholder for 3D Coin */}
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-[var(--color-primary)] to-black flex items-center justify-center shadow-[0_0_100px_var(--color-primary-glow)] border-4 border-[var(--color-primary)] relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay"></div>
                            <span className="text-9xl font-bold text-white drop-shadow-2xl z-10 group-hover:scale-110 transition-transform duration-500">
                                A
                            </span>

                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rotate-45 transform translate-y-full hover:translate-y-[-200%] transition-transform duration-1000"></div>
                        </div>

                        {/* Orbiting elements for 'Tek' feel */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[var(--color-primary)]/20 rounded-full animate-spin-slow"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
