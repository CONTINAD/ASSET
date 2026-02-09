import React from 'react';

const Marquee = () => {
    return (
        <div className="bg-[#ff9500] py-2 overflow-hidden border-y-4 border-black">
            <div className="whitespace-nowrap animate-marquee flex gap-8">
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="text-3xl font-display font-black text-black">
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
