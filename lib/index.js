export default function(source, location, update) {
	let next = copy(source);
	let last = next;
	let keys = location.split('.');

	for (let i = 0, l = keys.length, temp; i < l; i++) {
		temp = last[keys[i]];
		last = last[keys[i]] =
			i === l - 1
				? typeof update === 'function'
					? update(temp)
					: update
				: copy(temp);
	}

	return next;
}

function copy(source, to = {}) {
	for (let i in source) to[i] = source[i];
	return to;
}
