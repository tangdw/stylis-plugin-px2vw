var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;const o=/([1-9]\d*\.\d*|0\.\d*[1-9]|\d)+px(?!(\s*\)))/gi;export default n=>{const p=n||{},{excludes:a=[]}=p,l=((o,n)=>{var p={};for(var a in o)r.call(o,a)&&n.indexOf(a)<0&&(p[a]=o[a]);if(null!=o&&e)for(var a of e(o))n.indexOf(a)<0&&t.call(o,a)&&(p[a]=o[a]);return p})(p,["excludes"]);return e=>{"decl"===e.type&&"string"==typeof e.props&&-1===a.indexOf(e.props)&&(e.value=((e,r)=>{const{minWidth:t=320,width:n=375,precision:p=4}=r,a=Math.pow(10,p);return e.replace(o,(e=>{const r=Number(e.substr(0,e.length-2)),o=Math.round(r/n*100*a)/a,p=1/t*100;return`${Math.max(o,p)}vw`}))})(e.value,l))}};