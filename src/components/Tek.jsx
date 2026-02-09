import React from 'react';
import { motion } from 'framer-motion';
import { Flame, RefreshCw, Layers } from 'lucide-react';

const TekCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="card h-full flex flex-col items-center text-center group hover:bg-[var(--color-primary)] hover:text-black transition-colors duration-200"
    >
        <div className="w-20 h-20 border-4 border-[var(--color-primary)] bg-black flex items-center justify-center mb-6 group-hover:border-black shadow-[4px_4px_0px_white]">
            <Icon size={40} className="text-[var(--color-primary)] group-hover:text-black" />
        </div>
        <h3 className="text-4xl mb-4 font-black uppercase transform group-hover:-rotate-1">{title}</h3>
        <p className="text-lg font-bold leading-tight group-hover:text-black">
            {description}
        </p>
    </motion.div>
);

const Tek = () => {
    return (
        <section id="tek" className="py-32 relative bg-black">
            <div className="container">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-9xl mb-6 text-white drop-shadow-[4px_4px_0px_#ff9500]"
                    >
                        THE ALPHA
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl md:text-3xl text-[var(--color-primary)] font-bold max-w-3xl mx-auto uppercase bg-white/10 p-4 border-2 border-[var(--color-primary)] -rotate-1"
                    >
                        We don't just go to the moon. We buy the dip and burn the supply.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <TekCard
                        icon={RefreshCw}
                        title="Auto Buyback"
                        description="We literally buy our own bags. Constant buy pressure from the void."
                        delay={0}
                    />
                    <TekCard
                        icon={Flame}
                        title="Nuclear Burn"
                        description="Tokens get sent to the shadow realm. Scarcity goes UP. Price goes UP."
                        delay={0.2}
                    />
                    <TekCard
                        icon={Layers}
                        title="Floor Defense"
                        description="Jeets can't dump if we keep buying. The floor is lava (for sellers)."
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};

export default Tek;
