import React from 'react';
import { motion } from 'framer-motion';
import { Flame, RefreshCw, BarChart3 } from 'lucide-react';

const TokenomicsCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="card group relative overflow-hidden"
    >
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Icon size={100} />
        </div>

        <div className="relative z-10">
            <div className="w-16 h-16 bg-[#ff5500] flex items-center justify-center mb-6">
                <Icon size={32} className="text-black" />
            </div>
            <h3 className="text-3xl mb-4 text-white uppercase">{title}</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
                {description}
            </p>
        </div>
    </motion.div>
);

const Tokenomics = () => {
    return (
        <section className="py-24 bg-[#0a0a0a] relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl mb-6 text-white"
                    >
                        THE ALPHA
                    </motion.h2>
                    <div className="w-24 h-2 bg-[#ff5500] mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <TokenomicsCard
                        icon={RefreshCw}
                        title="Auto Buyback"
                        description="The contract automatically buys back tokens from the open market, creating constant buy pressure that never sleeps."
                        delay={0}
                    />
                    <TokenomicsCard
                        icon={Flame}
                        title="Hyper Burn"
                        description="Bought tokens are sent straight to the burn wallet. Supply goes down. Scarcity goes up. Math does the rest."
                        delay={0.2}
                    />
                    <TokenomicsCard
                        icon={BarChart3}
                        title="Chart Only Up"
                        description="With supply shrinking and buy pressure constant, the floor price is mathematically designed to rise over time."
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};

export default Tokenomics;
