import test from 'ava';
import fn from './';

test('expects a string or number year', t => {
	t.throws(() => {
		fn({});
	}, 'month-days-by-year expects a number or string, got object');
	t.is(fn().length, 12);
});

test('returns an array of 12 values', t => {
	t.true(Array.isArray(fn()));
	t.is(fn().length, 12);
});

test('gets current year if no year is supplied', t => {
	const year = new Date().getUTCFullYear();
	const feb = new Date(Date.UTC(year, 2, 0)).getUTCDate();

	const days = fn(year);
	t.is(days[1], feb);
});

test('gets the days in the year', t => {
	const actual = fn(2017);
	const expected = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	t.deepEqual(expected, actual);
});

test('honors leap year', t => {
	const actual = fn(2000);
	const expected = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	t.deepEqual(expected, actual);
});
