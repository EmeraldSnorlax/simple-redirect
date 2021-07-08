const colors = require('tailwindcss/colors')
const config = {
	mode: "jit",
	darkMode: "media",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			colors: {
				"true-gray": colors.trueGray
			}
		},
	},
	plugins: [],
};

module.exports = config;
