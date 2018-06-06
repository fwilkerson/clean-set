function t(t,n){for(var r in void 0===n&&(n={}),t)n[r]=t[r];return n}export default function(n,r,o){r.split&&(r=r.split("."));for(var f,i=t(n),e=i,u=0,l=r.length;u<l;u++)f=e[r[u]],e=e[r[u]]=u===l-1?"function"==typeof o?o(f):o:t(f);return i};
//# sourceMappingURL=clean-set.es.js.map
