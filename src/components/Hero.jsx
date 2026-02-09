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
        <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-black">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,85,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,85,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 md:order-1 text-center md:text-left"
                >
                    <div className="inline-block bg-[#ff5500] text-black font-bold px-4 py-1 mb-6 -rotate-2 transform">
                        THE ASSET THAT BACKS ITSELF
                    </div>

                    <h1 className="text-7xl md:text-[8rem] mb-6 leading-[0.85] text-white">
                        <span className="text-stroke text-transparent">$ASS</span><br />
                        <span className="text-[#ff5500]">ASSET</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 font-light">
                        Automated Buybacks & Burns. <br />
                        Engineered to go up forever. 🍑🔥
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
                        <button className="btn-primary flex items-center justify-center gap-2 hover:bg-white hover:text-black">
                            BUY NOW <ArrowRight size={24} />
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white font-display text-xl uppercase hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
                            CHART <ExternalLink size={24} />
                        </button>
                    </div>

                    <div className="bg-[#111] border border-[#333] p-4 flex flex-col sm:flex-row items-center gap-4 rounded-lg max-w-lg mx-auto md:mx-0">
                        <span className="text-[#ff5500] font-bold font-mono">CA:</span>
                        <code className="text-gray-300 font-mono truncate w-full text-center sm:text-left">
                            {contractAddress}
                        </code>
                        <button
                            onClick={copyToClipboard}
                            className="p-2 hover:text-[#ff5500] transition-colors"
                            title="Copy CA"
                        >
                            <Copy size={20} />
                        </button>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-1 md:order-2 flex justify-center perspective-1000"
                >
                    <div className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] animate-float">
                        {/* Coin / Logo Image */}
                        <div className="w-full h-full flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-[#ff5500] opacity-20 blur-[100px] rounded-full"></div>

                            {!imageError ? (
                                <img
                                    src="/src/assets/logo.png"
                                    alt="$AssAsset Logo"
                                    className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(255,85,0,0.3)] z-10 hover:scale-105 transition-transform duration-300"
                                    onError={() => setImageError(true)}
                                />
                            ) : (
                                <Logo className="w-full h-full text-[#ff5500] drop-shadow-[0_20px_50px_rgba(255,85,0,0.3)] z-10" />
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
