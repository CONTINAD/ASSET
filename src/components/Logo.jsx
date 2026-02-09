import React from 'react';

const Logo = ({ className }) => {
    return (
        <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M120 450 C 100 450, 80 350, 90 250 C 100 150, 150 50, 200 50 L 320 50 C 350 50, 350 150, 380 200 C 410 250, 480 300, 450 400 C 420 500, 350 450, 300 420 L 280 500 L 120 450 Z"
                fill="#ff5500"
            />
            <path
                d="M380 200 C 350 250, 330 350, 400 400"
                fill="none"
                stroke="white"
                strokeWidth="20"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default Logo;
