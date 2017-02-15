'use strict';

/*
 * TIMESTAMPIFY
 */

const moment = require('moment-timezone');

module.exports = function timestampify (date, timezone = null, unix = false) {
	const mDate = (timezone ? moment(date).tz(timezone) : moment.utc(date));

	return (unix ? mDate.unix() : mDate.valueOf());
};
