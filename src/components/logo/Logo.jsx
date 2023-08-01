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

const Logo_Instagram = ({ size = 32 }) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 36 36" fill="none">
            <path d="M24.7429 2H11.2571C6.14456 2 2 5.97319 2 10.8744V25.1256C2 30.0268 6.14456 34 11.2571 34H24.7429C29.8554 34 34 30.0268 34 25.1256V10.8744C34 5.97319 29.8554 2 24.7429 2Z" stroke="#802626" strokeWidth="2.4888" strokeLinecap="round" />
            <path d="M18.0021 25.8166C22.5078 25.8166 26.1604 22.3151 26.1604 17.9957C26.1604 13.6763 22.5078 10.1748 18.0021 10.1748C13.4964 10.1748 9.84387 13.6763 9.84387 17.9957C9.84387 22.3151 13.4964 25.8166 18.0021 25.8166Z" stroke="#802626" strokeWidth="2.4888" strokeLinecap="round" />
            <path d="M27.7692 8.7757C28.4101 8.7757 28.9296 8.27763 28.9296 7.66324C28.9296 7.04885 28.4101 6.55078 27.7692 6.55078C27.1283 6.55078 26.6088 7.04885 26.6088 7.66324C26.6088 8.27763 27.1283 8.7757 27.7692 8.7757Z" stroke="#802626" strokeWidth="2.4888" />
        </svg>
    );
};

export { Logo, Logo_Instagram };