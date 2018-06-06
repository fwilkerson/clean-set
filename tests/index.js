import test from 'tape';

import cleanSet from '../lib';

let data = {
	a: {
		b: [],
		c: true,
	},
	d: [],
	e: {
		f: {
			g: 'hello',
		},
		h: {
			i: 0,
			j: [],
		},
	},
};

test('cleanSet: basic functionality', tap => {
	let next = cleanSet(data, 'e.h.i', 1);

	tap.assert(next != null, 'next has a value');
	tap.assert(next !== data, 'next has a new reference');

	tap.assert(next.e.h.i === 1, 'value was updated');
	tap.assert(next.e.h !== data.e.h, 'touched node has a new reference');
	tap.assert(next.e !== data.e, 'touched node has a new reference');

	tap.assert(next.a === data.a, 'untouched node kept their reference');
	tap.assert(next.a.b === data.a.b, 'untouched node kept their reference');
	tap.assert(next.d === data.d, 'untouched node kept their reference');
	tap.assert(next.e.f === data.e.f, 'untouched node kept their reference');
	tap.assert(next.e.h.j === data.e.h.j, 'untouched node kept their reference');

	tap.end();
});

test('cleanSet: update value as a function', tap => {
	let next = cleanSet(data, 'e.h.j', j => j.concat('some-item'));

	tap.assert(next != null, 'next has a value');
	tap.assert(next !== data, 'next has a new reference');

	tap.assert(next.e.h.j[0] === 'some-item', 'value was updated');
	tap.assert(next.e.h.j !== data.e.h.j, 'touched node has a new reference');
	tap.assert(next.e.h !== data.e.h, 'touched node has a new reference');
	tap.assert(next.e !== data.e, 'touched node has a new reference');

	tap.assert(next.a === data.a, 'untouched node kept their reference');
	tap.assert(next.a.b === data.a.b, 'untouched node kept their reference');
	tap.assert(next.d === data.d, 'untouched node kept their reference');
	tap.assert(next.e.f === data.e.f, 'untouched node kept their reference');

	tap.end();
});
