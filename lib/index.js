const extend = (source, update) =>
  !source || !!source.pop || typeof source != 'object'
    ? update
    : Object.assign({}, source, update);

export default function(source, keys, update) {
  keys.split && (keys = keys.split('.'));

  let next = Object.assign({}, source),
    last = next,
    i = 0,
    l = keys.length;

  for (; i < l; i++) {
    last = last[keys[i]] =
      i == l - 1
        ? extend(last[keys[i]], !!update.call ? update(last[keys[i]]) : update)
        : Object.assign({}, last[keys[i]]);
  }

  return next;
}
