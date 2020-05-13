# countdown-js

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
![][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
![][david-url]
![][dt-url]
[![code style: prettier][prettier-image]][prettier-url]
![][license-url]

Countdown has timer, count, clear features. Test covered 100%.

## Install

### npm

```bash
npm install countdown-js --save
```

### yarn

```bash
yarn add countdown-js --save
```

### bower

```bash
bower install countdown-js --save
```

## Import

### ES2015

```typescript
import { countdown } from 'countdown-js'
```

### CommonJS

```javascript
const { countdown } = require('countdown-js')
```

### script

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>DEMO</title>
  </head>
  <body>
    <script type="text/javascript" src="node_modules/countdown-js/dist/countdown-js.js"></script>
    <script type="text/javascript">
      var countdown = window.countdown
    </script>
  </body>
</html>
```

## Usage

```typescript
// init countdown
countdown.start(60, 0, c => console.log(c))

OR

countdown.start()

// cleat countdown setTimeout & count & timer
countdown.clear()

// countdown setTimeout return value
countdown.timer

// countdown current number
countdown.count
```

### accept-expression

#### countdown.start(count, down, callback)

`count`: Default 60, type number. count must greater than down, or equal dowm.

`down`: Default 0, type number

`callback`: Type (height: number|undefined) => void.

## LICENSE

[GPL v3 License](https://raw.githubusercontent.com/sanshuiwang/countdown-js/master/LICENSE)

[npm-url]: https://npmjs.org/package/countdown-js
[npm-image]: https://badge.fury.io/js/countdown-js.png
[travis-image]: https://www.travis-ci.org/sanshuiwang/countdown-js.svg?branch=master
[travis-url]: https://travis-ci.com/sanshuiwang/countdown-js
[coverage-image]: https://coveralls.io/repos/github/sanshuiwang/countdown-js/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sanshuiwang/countdown-js
[david-url]: https://david-dm.org/sanshuiwang/countdown-js.png
[dt-url]: https://img.shields.io/npm/dt/countdown-js.svg
[license-url]: https://img.shields.io/npm/l/countdown-js.svg
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-url]: https://github.com/prettier/prettier
