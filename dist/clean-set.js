var t=function(t,e){return!t||t.pop||"object"!=typeof t?e:Object.assign({},t,e)};module.exports=function(e,n,s){n.split&&(n=n.split("."));for(var o=Object.assign({},e),r=o,c=0,i=n.length;c<i;c++)r=r[n[c]]=c==i-1?t(r[n[c]],s.call?s(r[n[c]]):s):Object.assign({},r[n[c]]);return o};
//# sourceMappingURL=clean-set.js.map
