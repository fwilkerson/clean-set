function n(n,t){for(var o in void 0===t&&(t={}),n)t[o]=n[o];return t}export default function(t,o,r){for(var f=n(t),i=f,e=o.split("."),u=0,v=e.length,a=void 0;u<v;u++)a=i[e[u]],i=i[e[u]]=u===v-1?"function"==typeof r?r(a):r:n(a);return f};
//# sourceMappingURL=clean-set.es.js.map
