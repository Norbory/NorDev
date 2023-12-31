/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors:{
			"sunny": "#FFFFFF",
			"main": "#EF233C",
			"idle":"#D1D1D1",
			"active":"#252525",
			"right": "#00FFBB"
		},
		extend: {},
	},
	plugins: [],
}
