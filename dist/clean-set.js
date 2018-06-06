function n(n,o){for(var r in void 0===o&&(o={}),n)o[r]=n[r];return o}module.exports=function(o,r,t){for(var i=n(o),e=i,f=r.split("."),u=0,v=f.length,c=void 0;u<v;u++)c=e[f[u]],e=e[f[u]]=u===v-1?"function"==typeof t?t(c):t:n(c);return i};
//# sourceMappingURL=clean-set.js.map
