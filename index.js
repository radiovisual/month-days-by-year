'use strict';
const monthDays = require('month-days');

module.exports = year => {
	if (year && !(typeof year === 'number' || typeof year === 'string')) {
		throw new TypeError(`month-days-by-year expects a number or string, got ${typeof year}`);
	}

	if (!year) {
		year = new Date().getUTCFullYear();
	}

	year = parseInt(year, 10);

	const months = [
		monthDays(0, year),
		monthDays(1, year),
		monthDays(2, year),
		monthDays(3, year),
		monthDays(4, year),
		monthDays(5, year),
		monthDays(6, year),
		monthDays(7, year),
		monthDays(8, year),
		monthDays(9, year),
		monthDays(10, year),
		monthDays(11, year)
	];

	return months;
};
