<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isCircularPlainObject

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a plain object containing a circular reference.



<section class="usage">

## Usage

```javascript
import isCircularPlainObject from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-circular@deno/mod.js';
```

#### isCircularPlainObject( value )

Tests if a `value` is a plain `object` containing a circular reference.

```javascript
var obj = {
    'beep': 'boop'
};
var bool = isCircularPlainObject( obj );
// returns false

obj.self = obj;
bool = isCircularPlainObject( obj );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import isCircularPlainObject from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-circular@deno/mod.js';

var obj1 = {
    'a': 'beep',
    'b': {
        'c': 'boop'
    }
};
obj1.b.self = obj1;
var bool = isCircularPlainObject( obj1 );
// returns true

var obj2 = {
    'a': {},
    'b': obj1
};
bool = isCircularPlainObject( obj2 );
// returns true

var arr = [ 1, 2, 3 ];
arr.push( arr );
bool = isCircularPlainObject( arr );
// returns false

var obj3 = {
    'beep': 'boop'
};
bool = isCircularPlainObject({
    'a': obj3,
    'b': obj3
});
// returns false

bool = isCircularPlainObject( {} );
// returns false

bool = isCircularPlainObject( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-circular`][@stdlib/assert/is-circular]</span><span class="delimiter">: </span><span class="description">test if an object-like value contains a circular reference.</span>
-   <span class="package-name">[`@stdlib/assert-is-circular-array`][@stdlib/assert/is-circular-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array containing a circular reference.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-circular-plain-object.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-circular-plain-object

[test-image]: https://github.com/stdlib-js/assert-is-circular-plain-object/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-circular-plain-object/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-circular-plain-object/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-circular-plain-object?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-circular-plain-object.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-circular-plain-object/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-circular-plain-object/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-circular-plain-object/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-circular-plain-object/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-circular-plain-object/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-circular-plain-object/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/is-circular]: https://github.com/stdlib-js/assert-is-circular/tree/deno

[@stdlib/assert/is-circular-array]: https://github.com/stdlib-js/assert-is-circular-array/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
