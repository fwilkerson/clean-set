function r(r,t){for(var n in t=t||{},r)t[n]=r[n];return t}export default function(t,n,l){n.split&&(n=n.split("."));for(var e=r(t),f=e,i=0,o=n.length;i<o;i++)f=f[n[i]]=i===o-1?l.call?l(f[n[i]]):l:r(f[n[i]]);return e};
//# sourceMappingURL=clean-set.es.js.map
