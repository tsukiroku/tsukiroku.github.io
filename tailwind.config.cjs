/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js,svelte,ts}',
    ],
    theme: {
        extend: {
            keyframes: {
                wave: {
                    '0%': {
                        transform: 'rotate(0.0deg)',
                    },
                    '10%': {
                        transform: 'rotate(7deg)',
                    },
                    '20%': {
                        transform: 'rotate(-4deg)',
                    },
                    '30%': {
                        transform: 'rotate(7deg)',
                    },
                    '40%': {
                        transform: 'rotate(-2deg)',
                    },
                    '50%': {
                        transform: 'rotate(5deg)',
                    },
                    '60%': {
                        transform: 'rotate(0.0deg)',
                    },
                    '100%': {
                        transform: 'rotate(0.0deg)',
                    }
                }
            },
            animation: {
                wave: 'wave 1s ease-in-out',
            }
        },
    },
    plugins: [],
}
