import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            mxs: { max: '500px' },
            msm: { max: '640px' },
            mmd: { max: '768px' },
            mlg: { max: '1024px' },
            mxl: { max: '1280px' },
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            transitionProperty: {
                width: 'width',
            },
        },
    },
    plugins: [require('tailwindcss-textshadow')],
}
export default config
