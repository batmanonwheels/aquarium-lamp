/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				'fish-left': 'fish-move-left 6s ease infinite',
				'fish-right': 'fish-move-right 6s linear infinite',
			},
			keyframes: {
				'fish-move-right': {
					'0%': {
						left: '-10%',
					},
					'100%': {
						left: '110%',
					},
				},
				'fish-move-left': {
					'0%': {
						right: '-10%',
					},
					'100%': {
						right: '110%',
					},
				},
			},
		},
	},
	plugins: [],
};
