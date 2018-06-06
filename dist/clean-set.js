function n(n,t){for(var o in void 0===t&&(t={}),n)t[o]=n[o];return t}module.exports=function(t,o,r){o.split&&(o=o.split("."));for(var i,e=n(t),f=e,u=0,l=o.length;u<l;u++)i=f[o[u]],f=f[o[u]]=u===l-1?"function"==typeof r?r(i):r:n(i);return e};
//# sourceMappingURL=clean-set.js.map
