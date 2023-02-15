/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				'jak-gray': {
					50: '#f8f8f7',
					100: '#e5e5e0',
					200: '#c7cbc2',
					300: '#9eaa9d',
					400: '#78877b',
					500: '#5f6d67',
					600: '#555549',
					700: '#3e4547',
					800: '#35373b',
					900: '#2e2f33',
				},
				'jak-green': {
					50: '#FFFFE5',
					100: '#FBFFC7',
					200: '#F6FF96',
					300: '#EAFC5A',
					400: '#DAF328',
					500: '#AEC908',
					600: '#93AE02',
					700: '#6E8407',
					800: '#58680C',
					900: '#49580F',
				},
				'jak-purple': {
					50: '#fff0fc',
					100: '#ffe4fa',
					200: '#ffc8f8',
					300: '#ff9cf0',
					400: '#ff5ee2',
					500: '#ff2fd1',
					600: '#f70bb4',
					700: '#d80093',
					800: '#b20278',
					900: '#9d086c',
				},
			},
			fontFamily: {
				'permanent-marker': ['Permanent Marker', 'cursive'],
				'comic-neue': ['Comic Neue', 'cursive'],
				'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
			},
		},
	},
	plugins: [require('prettier-plugin-tailwindcss')],
}
