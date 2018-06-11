function r(r,n){for(var t in n=n||{},r)n[t]=r[t];return n}module.exports=function(n,t,l){t.split&&(t=t.split("."));for(var o=r(n),e=o,i=0,u=t.length;i<u;i++)e=e[t[i]]=i===u-1?l.call?l(e[t[i]]):l:r(e[t[i]]);return o};
//# sourceMappingURL=clean-set.js.map
