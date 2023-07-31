import React from 'react';

const Logo = ({ size = 200 }) => {

    return (<svg width={size} height={size} viewBox="0 0 200 201" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M70.9198 12.2554C-38.5798 60.2552 10.9198 199.255 105.42 191.755C106.22 195.355 108.087 198.255 108.92 199.255C7.92016 211.755 -51.0798 66.7552 59.9201 7.75525C62.9196 8.25513 65.9186 9.75466 70.9163 12.2536L70.9198 12.2554Z" fill="url(#paint0_linear_54_163)" />
        <path d="M66 5.26172C69.1963 6.26295 75.3871 8.66591 76.5983 10.2679C202.264 -14.7631 239.106 166.46 110.917 190.99C111.421 193.994 112.935 197.498 114.449 199C256.769 170.965 208.32 -35.2884 66 5.26172Z" fill="url(#paint1_linear_54_163)" />
        <path d="M107.42 176.755C94.3051 134.44 134.895 127.609 139.416 82.7554C166.916 132.755 147.42 147.255 107.42 176.755Z" fill="url(#paint2_linear_54_163)" />
        <path d="M89.4204 23.2554C193.421 91.7554 82.9206 117.255 101.42 176.756C-24.0792 124.255 117.921 73.7554 89.4204 23.2554Z" fill="url(#paint3_linear_54_163)" />
        <defs>
            <linearGradient id="paint0_linear_54_163" x1="9.5" y1="16" x2="60.5" y2="220" gradientUnits="userSpaceOnUse">
                <stop stopColor="#802626" />
                <stop offset="1" stopColor="#FF0000" />
            </linearGradient>
            <linearGradient id="paint1_linear_54_163" x1="120.586" y1="-11.0135" x2="180.747" y2="199.504" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF0000" />
                <stop offset="1" stopColor="#802626" />
            </linearGradient>
            <linearGradient id="paint2_linear_54_163" x1="152" y1="104.5" x2="97" y2="177" gradientUnits="userSpaceOnUse">
                <stop stopColor="#802626" />
                <stop offset="1" stopColor="#FF0000" />
            </linearGradient>
            <linearGradient id="paint3_linear_54_163" x1="122" y1="38.5" x2="65.5" y2="166" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF0000" />
                <stop offset="1" stopColor="#802626" />
            </linearGradient>
        </defs>
    </svg>
    );

};

export { Logo };