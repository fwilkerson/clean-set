export default function(source, keys, update) {
  keys.split && (keys = keys.split('.'));

  let next = copy(source),
    last = next,
    i = 0,
    l = keys.length,
    temp;

  for (; i < l; i++) {
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
