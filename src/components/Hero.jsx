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
                        {/* Coin / Logo Image */}
                        <div className="w-full h-full flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-[var(--color-primary)] opacity-20 blur-[100px] rounded-full"></div>
                            <img
                                src="/src/assets/logo.png"
                                alt="$AssAsset Logo"
                                className="w-full h-full object-contain drop-shadow-2xl z-10"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    e.target.parentNode.innerHTML += '<div class="text-white text-center p-4 border border-[var(--color-primary)] rounded-xl bg-black/50">Image not found.<br/>Save as src/assets/logo.png</div>';
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
