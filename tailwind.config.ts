import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				grey: {
					base: '#dfdbd7',
					1: '#4c5b5c'
				}
			},
			animation: {
				'inflate': 'inflate 3s cubic-bezier(0.6, 1, 1, 1) infinite',
			},
			keyframes: {
				'inflate': {
					'0%, 100%': {
						transform: 'scale(1)',
					},
					'50%': {
						transform: 'scale(0.1)',
					}
				},
			}
		},
	},
	plugins: [
		require("tailwindcss-animation-delay"),
	],
};

export default config;
