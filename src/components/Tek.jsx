import React from 'react';
import { motion } from 'framer-motion';
import { Flame, RefreshCw, Layers } from 'lucide-react';

const TekCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="card h-full flex flex-col items-center text-center group"
    >
        <div className="w-16 h-16 rounded-full bg-[var(--color-primary-glow)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Icon size={32} className="text-[var(--color-primary)]" />
        </div>
        <h3 className="text-2xl mb-4 text-white group-hover:text-[var(--color-primary)] transition-colors">{title}</h3>
        <p className="text-[var(--color-text-muted)] leading-relaxed">
            {description}
        </p>
    </motion.div>
);

const Tek = () => {
    return (
        <section id="tek" className="py-32 relative">
            <div className="container">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl mb-6"
                    >
                        The <span className="text-gradient">Tek</span> Behind The Asset
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto"
                    >
                        Our smart contract autonomously executes buybacks and burns, constantly increasing scarcity and value floor.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <TekCard
                        icon={RefreshCw}
                        title="Auto Buyback"
                        description="A portion of every transaction is used to automatically buy back $AssAsset from the open market, creating constant buy pressure."
                        delay={0}
                    />
                    <TekCard
                        icon={Flame}
                        title="Hyper Burn"
                        description="Tokens bought back are immediately sent to the burn wallet, permanently removing them from circulation and increasing scarcity."
                        delay={0.2}
                    />
                    <TekCard
                        icon={Layers}
                        title="Floor Defense"
                        description="The combination of consistent buy pressure and reducing supply creates a constantly rising price floor for holders."
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};

export default Tek;
