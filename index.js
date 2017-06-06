'use strict'

module.exports = toPolar;
module.exports.polar = toPolar;
module.exports.cartesian = toCartesian;

function toPolar (arr, center) {
	if (!arr || arr.length == null) throw Error('Argument should be an array')

	if (center == null) center = [0, 0]

	var i = 0, l = arr.length, x, y, cx = center[0], cy = center[1];

	for (; i < l; i+=2) {
		x = arr[i] - cx, y = arr[i+1] - cy
		arr[i] = Math.sqrt(x*x+y*y)
		arr[i+1] = Math.atan2(y, x)
	}

	return arr;
}

function toCartesian (arr, center) {
	if (!arr || arr.length == null) throw Error('Argument should be an array')

	if (center == null) center = [0, 0]

	var i = 0, l = arr.length, r, a, cx = center[0], cy = center[1];

	for (; i < l; i+=2) {
		r = arr[i], a = arr[i+1]
		arr[i] = r*Math.cos(a) + cx
		arr[i+1] = r*Math.sin(a) + cy
	}

	return arr;
}
