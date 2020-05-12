# count-down-js

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
npm install count-down-js --save
```

### yarn

```bash
yarn add count-down-js --save
```

### bower

```bash
bower install count-down-js --save
```

## Import

### ES2015

```typescript
import { countdown } from 'count-down-js'
```

### CommonJS

```javascript
const { countdown } = require('count-down-js')
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
    <script type="text/javascript" src="node_modules/count-down-js/dist/count-down-js.js"></script>
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

### 【countdown.start(count, down, callback)】 accept-expression

`count`: Default 60, type number. count must greater than down, or equal dowm.
`down`: Default 0, type number
`callback`: Type (height: number|undefined) => void.

## LICENSE

[GPL v3 License](https://raw.githubusercontent.com/sanshuiwang/count-down-js/master/LICENSE)

[npm-url]: https://npmjs.org/package/count-down-js
[npm-image]: https://badge.fury.io/js/count-down-js.png
[travis-image]: https://www.travis-ci.org/sanshuiwang/count-down-js.svg?branch=master
[travis-url]: https://travis-ci.com/sanshuiwang/count-down-js
[coverage-image]: https://coveralls.io/repos/github/sanshuiwang/count-down-js/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sanshuiwang/count-down-js
[david-url]: https://david-dm.org/sanshuiwang/count-down-js.png
[dt-url]: https://img.shields.io/npm/dt/count-down-js.svg
[license-url]: https://img.shields.io/npm/l/count-down-js.svg
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-url]: https://github.com/prettier/prettier
