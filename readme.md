# array-polar  [![experimental](https://img.shields.io/badge/stability-unstable-yellow.svg)](http://github.com/badges/stability-badges) [![Build Status](https://img.shields.io/travis/dfcreative/array-polar.svg)](https://travis-ci.org/dfcreative/array-polar)

Convert array with cartesian coordinates to polar or back.

[![npm install array-polar](https://nodei.co/npm/array-polar.png?mini=true)](https://npmjs.org/package/array-polar/)

```js
const polar = require('array-polar')

let polarCoords = polar([0,1, 1,0]) // [1,0, 1,Math.PI/2]
let cartesianCoords = polar.cartesian(coords)
```

## API

### polar(array, center=[0, 0])

Convert 2-dimensional `array` with `[x, y, x, y, ...]` layout to polar coordinates based on `center` point, so that result is `[r, θ, r, θ, ...]` `array`. You may want to calculate `center` as average or median. `array` is modified in-place, so do slice if you need immutable behaviour.

### polar.cartesian(array, center=[0, 0])

Convert polar coordinates back to cartesian.

## See also

* [array-normalize](https://github.com/dfcreative/array-normalize)
* [array-bounds](https://github.com/dfcreative/array-bounds)
