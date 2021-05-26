const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: ['./*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'system-ui'],
            },
            colors: {
                lime: colors.lime,
                green: colors.green,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
