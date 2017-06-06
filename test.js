'use strict'

const assert = require('assert')
const polar = require('./')
const almost = require('almost-equal')

let cartCoords = [0,0, 1,0, 0,1, 1/Math.sqrt(2),1/Math.sqrt(2)]
let polarCoords = [0,0, 1,0, 1,Math.PI/2, 1,Math.PI/4]

assert.almost = function (x, y) {
	if (Array.isArray(x) && Array.isArray(y)) return x.every(function (x, i) {
		return assert.almost(x, y[i]);
	});

	var EPSILON = 10e-15;
	if (!almost(x, y, EPSILON)) assert.fail(x, y,
		`${x} ≈ ${y}`, '≈');
	return true;
};

assert.almost(polar.polar(cartCoords.slice()), polarCoords.slice())
assert.almost(polar.cartesian(polarCoords.slice()), cartCoords.slice())

assert.almost(polar.polar([1,0], [1,0]), [0,0])
assert.almost(polar.cartesian([0,0], [1,0]), [1,0])
