/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		extend: {
			colors: {
				white: "hsl(0, 0%, 100%)",
				gray: "hsl(212, 45%, 89%)",
				blue: {
					300: "hsl(220, 15%, 55%)",
					700: "hsl(218, 44%, 22%)",
				},
			},
			fontSize: {
				md: "20px",
			},
			fontFamily: {
				Outfit: ["Outfit", "sans-serif"],
			},
		},
	},
	plugins: [],
};
