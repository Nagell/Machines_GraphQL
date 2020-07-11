export default {
	methods: {
		/**
		 * Returns a random channel (Hex)
		 *
		 * @param {number} brightness - value from range 0-255
		 * @returns {string}
		 */
		mx_color_randomChannel(brightness) {
			let clampedBase = Math.random() * (255 - brightness),
				n = 0 | (clampedBase + brightness),
				s = n.toString(16)
			return s.length == 1 ? '0' + s : s
		},

		/**
		 * Returns a random color (Hex)
		 *
		 * @param {number} brightness - value from range 0-255
		 * @returns {string}
		 */
		mx_color_randomColor(brightness) {
			return (
				'#' +
				this.mx_color_randomChannel(brightness) +
				this.mx_color_randomChannel(brightness) +
				this.mx_color_randomChannel(brightness)
			)
		},
	},
}
