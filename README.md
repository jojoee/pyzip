# pyzip

[![Travis](https://img.shields.io/travis/jojoee/pyzip.svg)](https://travis-ci.org/jojoee/pyzip)
[![Dependency Status](https://david-dm.org/jojoee/pyzip.svg)](https://david-dm.org/jojoee/pyzip) 
[![Codecov](https://img.shields.io/codecov/c/github/jojoee/pyzip.svg)](https://codecov.io/github/jojoee/pyzip)
[![Version - npm](https://img.shields.io/npm/v/pyzip.svg)](https://www.npmjs.com/package/pyzip)
[![License - npm](https://img.shields.io/npm/l/pyzip.svg)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Fast and safe Python `zip` with no dependencies

## Installation

```
// npm
npm install pyzip
const pyzip = require('pyzip')
```

## Example usage

```javascript
// normal
pyzip(['a', 'b', 'c', 'd'], [1, 2, 3, 4]) // [['a', 1], ['b', 2], ['c', 3], ['d', 4]]

// not the same length, return less'
pyzip(['a', 'b', 'c', 'd'], [1, 2, 3, 4]) // [['a', 1], ['b', 2], ['c', 3], ['d', 4]]
pyzip(['a', 'b'], [1, 2, 3]) // [['a', 1], ['b', 2]]

// more than 2 args
pyzip(['a', 'b', 'c'], [1, 2, 3, 4], ['A', 'B']) // [['a', 1, 'A'], ['b', 2, 'B']]

// empty array
pyzip([], []) // []

// all invalid will returns empty array ([])
pyzip([1, 2, 3])
pyzip('', '')
pyzip(1, 2)
pyzip(undefined, undefined)
pyzip(1, '2')
```

## Reference
- [2. Built-in Functions - zip](https://docs.python.org/3/library/functions.html#zip)
