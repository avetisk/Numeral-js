// numeral.js
// version : 1.1.0
// author : Adam Draper
// license : MIT
// http://adamwdraper.github.com/Numeral-js/
(function(){function s(e){this._n=e}function o(e,t){var n=Math.pow(10,t);return(Math.round(e*n)/n).toFixed(t)}function u(e,t){var n;t.indexOf("$")>-1?n=f(e,t):t.indexOf("%")>-1?n=l(e,t):t.indexOf(":")>-1?n=c(e,t):n=p(e,t);return n}function a(e,t){t.indexOf(":")>-1?e._n=h(t):e._n=(t.indexOf("k")>-1?1e3:1)*(t.indexOf("m")>-1?1e6:1)*(t.indexOf("%")>-1?.01:1)*Number((t.indexOf("(")>-1?"-":"")+t.replace(/\$|,|%|k|m|th|st|nd|rd|\(|\)*/ig,""));return e._n}function f(e,t){t=t.replace("$","");var n=u(e,t);if(n.indexOf("(")>-1||n.indexOf("-")>-1){n=n.split("");n.splice(1,0,"$");n=n.join("")}else n="$"+n;return n}function l(e,t){t=t.replace("%","");e._n=e._n*100;var n=u(e,t);if(n.indexOf(")")>-1){n=n.split("");n.splice(-1,0,"%");n=n.join("")}else n+="%";return n}function c(e,t){var n=Math.floor(e._n/60/60),r=Math.floor((e._n-n*60*60)/60),i=Math.round(e._n-n*60*60-r*60);return n+":"+(r<10?"0"+r:r)+":"+(i<10?"0"+i:i)}function h(e){var t=e.split(":"),n=0;if(t.length===3){n+=Number(t[0])*60*60;n+=Number(t[1])*60;n+=Number(t[2])}else if(t.lenght===2){n+=Number(t[0])*60;n+=Number(t[1])}return Number(n)}function p(e,t){var n=!1,r=!1,i=!1;if(t.indexOf("(")>-1){n=!0;t=t.slice(1,-1)}if(t.indexOf("a")>-1){t=t.replace("a","");if(e._n>1e6){r="m";e._n=e._n/1e6}else{r="k";e._n=e._n/1e3}}if(t.indexOf("o")>-1){t=t.replace("o","");var s=e._n%100,u=["th","st","nd","rd","th"];i=s<21?s<4?u[s]:u[0]:s%10>4?u[0]:u[s%10]}var a=e._n.toString().split(".")[0],f=t.split(".")[1],l=t.indexOf(","),c="",h=!1;if(e._n<0){a=a.slice(1);h=!0}l>-1&&(a=a.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"));t.indexOf(".")===0&&(a="");f&&(c="."+o(e._n,f.length).split(".")[1]);r;return(n&&h?"(":"")+(!n&&h?"-":"")+a+c+(i?i:"")+(r?r:"")+(n&&h?")":"")}var e,t="1.1.0",n=Math.round,r,i=typeof module!="undefined"&&module.exports;e=function(t){e.isNumeral(t)?t=t.value():Number(t)||(t=0);return new s(Number(t))};e.isNumeral=function(e){console.log(e);return e instanceof s};e.version=t;e.isNumeral=function(e){return e instanceof s};e.fn=s.prototype={clone:function(){return e(this)},format:function(t){return u(this,t?t:e.defaultFormat)},unformat:function(t){return a(this,t?t:e.defaultFormat)},value:function(){return this._n},set:function(e){this._n=Number(e);return this},add:function(e){this._n=this._n+Number(e);return this},subtract:function(e){this._n=this._n-Number(e);return this},multiply:function(e){this._n=this._n*Number(e);return this},divide:function(e){this._n=this._n/Number(e);return this},difference:function(e){var t=this._n-Number(e);t<0&&(t=-t);return t}};i&&(module.exports=e);typeof ender=="undefined"&&(this.numeral=e);typeof define=="function"&&define.amd&&define([],function(){return e})}).call(this);