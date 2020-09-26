export default {
	methods: {
		/**
		 * Returns a date without UTC Offset (UTC = 0)
		 *
		 * @param {Date} dateTime
		 * @returns {Date}
		 */
		mx_time_getDateWithoutUTC(dateTime) {
			let time = dateTime.getTime(),
				timeZoneOffset = dateTime.getTimezoneOffset() * 60000

			return new Date(time - timeZoneOffset).toJSON()
		},
		/**
		 * Returns a date with UTC Offset
		 *
		 * @param {Date} dateTime
		 * @returns {Date}
		 */
		mx_time_getDateWithUTC(dateTime) {
			let time = dateTime.getTime(),
				timeZoneOffset = dateTime.getTimezoneOffset() * 60000

			return new Date(time + timeZoneOffset).toJSON()
		},
	},
}
