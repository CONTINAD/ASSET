import React from 'react';

const Marquee = () => {
    return (
        <div className="bg-[#ff5500] py-3 overflow-hidden border-y-4 border-black box-border relative z-20">
            <div className="whitespace-nowrap animate-marquee flex gap-12 items-center">
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="text-4xl font-display font-black text-black tracking-wider uppercase flex items-center gap-4">
                        BUY BACKS 🍑 BURNS 🔥 $ASSASSET 🚀 MOON TIME 🌕
                    </span>
                ))}
            </div>
            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default Marquee;
