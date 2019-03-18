var t=function(t,e){return!t||t.pop||"object"!=typeof t?e:Object.assign({},t,e)};export default function(e,n,r){n.split&&(n=n.split("."));for(var s=Object.assign({},e),a=s,c=0,i=n.length;c<i;c++)a=a[n[c]]=c==i-1?t(a[n[c]],r.call?r(a[n[c]]):r):Object.assign({},a[n[c]]);return s}
//# sourceMappingURL=clean-set.es.js.map
