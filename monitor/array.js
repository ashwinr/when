/** @license MIT License (c) copyright 2010-2013 original author or authors */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author: Brian Cavalier
 * @author: John Hann
 */

(function(define) { 'use strict';
define(function() {

	// Silly Array polyfills, since when.js needs to be
	// backward compatible to ES3

	return {
		forEach: forEach,
		reduce: reduce,
		some: some
	};

	function forEach(array, f) {
		if(typeof array.forEach === 'function') {
			return array.forEach(f);
		}

		var i, len;

		i = -1;
		len = array.length;

		while(++i < len) {
			f(array[i], i);
		}
	}

	function reduce(array, initial, f) {
		if(typeof array.reduce === 'function') {
			return array.reduce(f, initial);
		}

		var i, len, result;

		i = -1;
		len = array.length;
		result = initial;

		while(++i < len) {
			result = f(result, array[i], i);
		}

		return result;
	}


	function some(array, f) {
		if(typeof array.some === 'function') {
			return array.some(f);
		}

		var i, len, done;

		i = -1;
		len = array.length;
		done = false;

		while(!done && ++i < len) {
			done = f(array[i], i);
		}

		return done;
	}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));
