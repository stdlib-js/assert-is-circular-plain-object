/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isPlainObject = require( '@stdlib/assert-is-plain-object' );
var isCircular = require( '@stdlib/assert-is-circular' );


// MAIN //

/**
* Tests if a value is a plain object containing a circular reference.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is a plain object containing a circular reference
*
* @example
* var obj = {
*   'a': 'beep',
*   'b': {
*     'c': 'boop'
*   }
* };
* obj.b.self = obj;
* var bool = isCircularPlainObject( obj );
* // returns true
*
* @example
* var arr = [ 1, 2, 3 ];
* arr.push( arr );
* var bool = isCircularPlainObject( arr );
* // returns false
*
* @example
* var bool = isCircularPlainObject( {} );
* // returns false
*
* @example
* var bool = isCircularPlainObject( null );
* // returns false
*/
function isCircularPlainObject( value ) {
	if ( !isPlainObject( value ) ) {
		return false;
	}
	return isCircular( value );
}


// EXPORTS //

module.exports = isCircularPlainObject;
