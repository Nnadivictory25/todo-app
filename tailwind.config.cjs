/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				sm: { max: '480px' },
				md: '650px',
				lg: '976px',
				xl: '1440px',
			},
			fontFamily: {
				sans: ['Josefin Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
