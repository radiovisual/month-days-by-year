# month-days-by-year [![Build Status](https://travis-ci.org/radiovisual/month-days-by-year.svg?branch=master)](https://travis-ci.org/radiovisual/month-days-by-year)

> Get the number of days for each month in a given year. Honors leap year.


## Install

```
$ npm install --save month-days-by-year
```


## Usage

```js
const monthDaysByYear = require('month-days-by-year');

monthDaysByYear(2017);
//=> [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

leapYear(2000);
//=> [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
```


## API

### monthDaysByYear(year)

#### year

Type: `string` | `number`

The year from which you want a list of months.

## License

MIT © [Michael Wuergler](http://numetriclabs.com)
