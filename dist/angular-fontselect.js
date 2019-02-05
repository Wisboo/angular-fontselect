'use strict';

require('angular');

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var webfontloader = createCommonjsModule(function (module) {
/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return +new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document;}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild);}function v(a){a.parentNode&&a.parentNode.removeChild(a);}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e]);}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e]);}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"");}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return !0;return !1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null);}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d();},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d();}):setTimeout(function(){e=!0;d();},0);u(a,"head",b);}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f));};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")));},d||5E3);return f}return null}function B(){this.a=0;this.c=null;}function C(a){a.a++;return function(){a.a--;D(a);}}function E(a,b){a.c=b;D(a);}function D(a){0==a.a&&a.c&&(a.c(),a.c=null);}function F(a){this.a=a||"-";}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10));}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d);}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b}function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes;}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading");}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d);}K(a,"inactive");}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]();}function ja(){this.c={};}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c));}return d}function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f);}function N(a){u(a.c,"body",a.a);}function O(a){return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")}function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0;}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25);},function(){e();});}f();}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f);});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a);},function(){b.j(b.a);});};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m);}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10));}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this);};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return !0;return !1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v);}function ma(a){setTimeout(p(function(){U(this);},a),50);}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a);},a),0);}function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c;}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this);};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e);}K(b,"fontinactive",a);na(this);};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a));}function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0;}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a);};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0;}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r);}for(h=0;h<l.length;h++)l[h].start();}},0);}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c);});}function ra(a,b){this.c=a;this.a=b;}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k));}a(e);}else setTimeout(function(){b();},50);}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b());}).id="__MonotypeAPIScript__"+d;}else a([]);};function sa(a,b){this.c=a;this.a=b;}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f);});};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||"";}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f));}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b}function ya(a){this.f=a;this.a=[];this.c={};}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("");}}else k="";k&&g.push(k);}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d));}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]));}}function Ea(a,b){this.c=a;this.a=b;}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa);});};function Ga(a,b){this.c=a;this.a=b;}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0});}catch(l){}a(e);}},2E3):a([]);};function Ha(a,b){this.c=a;this.f=b;this.a=[];}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)));}a(d.a);},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([]);})):a([]);};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)};module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());
});

/* jshint unused: false */

fontselectModule.constant('jdFontselectConfig', {
  googleApiKey: window._jdFontselectGoogleApiKey || false
});

/* global DEFAULT_WEBSAFE_FONTS, PROVIDER_WEBSAFE, PROVIDER_GOOGLE, REQUIRED_FONT_OBJECT_KEYS */
/* global GOOGLE_FONT_CATEGORIES, NAME_FONTSSERVICE, DEFAULT_CATEGORIES, URL_GOOGLE_FONTS_CSS */
/* global VARIANT_PRIORITY, SUBSET_PRIORITY, METHOD_GET, URL_GOOGLE_FONTS_API  */
/* global STATE_DEFAULTS, CATEGORY_OTHER, CATEGORY_OBJECTS  */

var _fontsServiceDeps = ['$http', '$q', 'jdFontselectConfig', '$filter', 'jdfsWebFont'];

var _googleFontsInitiated = false;

function FontsService() {
  var self = this;

  for (var i = 0, l = _fontsServiceDeps.length; i <l; i++) {
    self[_fontsServiceDeps[i]] = arguments[i];
  }

  self._init();

  return self;
}

FontsService.$inject = _fontsServiceDeps;

FontsService.prototype = {
  _init: function() {
    var self = this;

    self._fonts = self._fonts || [];
    self._map = {};
    self._subsets = angular.copy(STATE_DEFAULTS.subsets);
    self._providers = angular.copy(STATE_DEFAULTS.providers);
    self._imports = {};
    self._usedProviders = {};
    self._initPromises = [];
    self._asyncProviderQueue = [];
    self._fontInitiators = {};

    self.registerProvider(PROVIDER_GOOGLE, angular.bind(self, self._loadGoogleFont));
    self.registerProvider(PROVIDER_WEBSAFE, function() {});

    self._addDefaultFonts();
  },

  getAllFonts: function() {
    return this._fonts;
  },

  ready: function(callback) {
    var promise = this.$q.all(this._initPromises);
    if (angular.isFunction(callback)) {
      promise.then(callback);
    }
    return promise;
  },

  add: function(fontObj, provider) {
    var self = this;

    if (!angular.isString(provider)) {
      provider = angular.isString(fontObj.provider) ? fontObj.provider : PROVIDER_WEBSAFE;
    }

    fontObj.provider = provider;

    /* Set provider as "fall-back" in the font-stack, so we can use the stack as unique key */
    fontObj.stack += ', "' + provider + '"';

    if (!self.isValidFontObject(fontObj)) {
      throw 'Invalid font object.';
    }

    if (!angular.isObject(self._map[provider])) {
      self._map[provider] = {};
    }

    if (angular.isArray(fontObj.subsets)) {
      self.setSubsets(fontObj.subsets);
    }

    self._fonts.push(fontObj);

    return fontObj;
  },

  searchFonts: function(object) {
    var self = this;

    return self.$filter('filter')(self._fonts, object);
  },

  searchFont: function(object) {
    var self = this;

    var fonts = self.searchFonts(object);

    if (fonts.length === 1) {
      return fonts[0];
    } else if (fonts.length > 0) {
      return self._getBestFontForSearch(fonts, object);
    } else {
      return;
    }
  },

  getFontByKey: function(key, provider) {
    var self = this;

    if (!provider) {
      throw 'Provider is not set.';
    }

    var font = self.searchFont({key: key, provider: provider});

    if (!font) {
      throw 'Font "' + key + '" not found in "' + provider + '".';
    }

    return font;
  },

  getFontByStack: function(stack, strict) {
    strict = typeof strict === 'boolean' ? strict : true;
    var fonts, self = this;

    if (strict) {
      var font = self.searchFont({stack: stack});
      fonts = font ? [font] : [];
    } else {
      fonts = self.$filter('stackSearch')(self._fonts, stack);
    }

    if (!fonts.length) {
      throw new Error ('Font with stack "' + stack + '" not found.');
    }

    return fonts[0];
  },

  getFontByStackAsync: function(stack, strict) {
    strict = typeof strict === 'boolean' ? strict : true;
    var self = this;
    var d = self.$q.defer();
    var index = null;

    self.$q.all(self._asyncProviderQueue).then(function() {
      try {
        var font = self.getFontByStack(stack, strict);
        d.resolve(font);
      } catch (e) {
        if (strict) {
          d.reject(e);
          delete self._initPromises[index];
        } else {
          d.resolve();
        }
      }
    }, d.reject);

    index = self._initPromises.push(d.promise) - 1;
    return d.promise;
  },

  getFontsByStacksAsync: function(stacks, strict) {
    strict = typeof strict === 'boolean' ? strict : true;
    var self = this;
    var queue = [];

    angular.forEach(stacks, function(stack) {
      queue.push(self.getFontByStackAsync(stack, strict));
    });

    var all = self.$q.all(queue);

    if (strict) {
      return all;
    } else {
      var d = self.$q.defer();
      all.then(function(fonts) {
        var result = [];
        angular.forEach(fonts, function(font) {
          if (angular.isObject(font)) {
            result.push(font);
          }
        });
        d.resolve(result);
      }, d.reject);
      return d.promise;
    }
  },

  removeFont: function(font, provider) {
    var self = this;

    if (angular.isString(font) && !provider) {
      throw 'Provider is not set.';
    }

    try {
      if (angular.isString(font)) {
        font = self.getFontByKey(font, provider);
      }

      var index = self._fonts.indexOf(font);
      var retVal = 0;

      if (index >= 0) {
        retVal = self._fonts.splice(index, 1).length;
      }
      return retVal;
    } catch (e) {
      return 0;
    }
  },

  isValidFontObject: function(fontObj) {
    if (!angular.isObject(fontObj)) {
      return false;
    }

    var valid = true;

    angular.forEach(REQUIRED_FONT_OBJECT_KEYS, function(key) {
      if (angular.isUndefined(fontObj[key])) {
        valid = false;
      }
    });

    return valid;
  },

  getCategories: function() {
    return DEFAULT_CATEGORIES;
  },

  getImports: function() {
    return this._imports;
  },

  /**
   * getImportsForStacks([
   *   "'Roboto', sans-serif, 'google'",
   *   "'Own font', serif"
   * ]);
   */
  getImportsForStacks: function(fontStacks, strict) {
    var self = this;
    var d = self.$q.defer();

    if (!angular.isArray(fontStacks)) {
      d.reject(new Error('No stacks given'));
    } else {
      var fonts = [];
      self.getFontsByStacksAsync(fontStacks, strict).then(function(fontsByStack) {
        fonts = fontsByStack;
      })['finally'](function() {
        d.resolve(self.getUrlsFor(fonts));
      });
    }

    return d.promise;
  },

  getSubsets: function() {
    return this._subsets;
  },

  getProviders: function() {
    return this._providers;
  },

  getUsage: function() {
    return this._usedProviders;
  },

  /**
   * Get a usage object from a list of font stacks
   *
   * getUsageForStacks([
   *   "'Roboto', sans-serif, 'google'",
   *   "'Own font', serif, 'custom'"
   * ]);
   *
   * @param {Array} fontStacks
   * @return {Object}
   */
  getUsageForStacks: function(fontStacks) {
    var self = this;
    var normalize = self.$filter('stackSearch').normalizeStack;
    var existingProviders = self.getProviders();
    var usage = {};

    if (!angular.isArray(fontStacks)) {
      return usage;
    }

    angular.forEach(fontStacks, function(stack) {
      if (!stack) { return; }

      var normalizedStack = normalize(stack);
      var provider = normalizedStack[normalizedStack.length - 1];
      if (!usage[provider] && !angular.isUndefined(existingProviders[provider])) {
        usage[provider] = true;
      }
    });

    return usage;
  },

  setSubsets: function(subsets, options) {
    var self = this;
    return self._setSelects(
      self._subsets,
      subsets,
      self._setSelectOptions(options)
    );
  },

  setProviders: function(providers, options) {
    var self = this;
    return self._setSelects(
      self._providers,
      providers,
      self._setSelectOptions(options)
    );
  },

  setImports: function(imports, options) {
    var self = this;
    return self._setSelects(
      self._imports,
      imports,
      self._setSelectOptions(options, {update: true})
    );
  },

  setUsage: function(usage, options) {
    var self = this;
    return self._setSelects(
      self._usedProviders,
      usage,
      self._setSelectOptions(options, {update: true})
    );
  },

  registerProvider: function(name, fontInitiator) {
    var self = this;

    var provider = {};
    provider[name] = false;
    self.setProviders(provider);
    self._usedProviders[name] = false;
    self._fontInitiators[name] = fontInitiator;
  },

  /* http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex */
  _escapeRegExp: function(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
  },

  _getBestFontForSearch: function(fonts, search) {
    var self = this;

    fonts.sort(function(a, b) {
      var rankA = 0;
      var rankB = 0;
      angular.forEach(search, function(value, key) {
        if (angular.isString(value)) {
          var rgx = new RegExp(self._escapeRegExp(value));

          if (rgx.test(a[key]) && rgx.test(b[key])) {
            var restA = a[key].replace(value, '').length;
            var restB = b[key].replace(value, '').length;

            if (restA < restB) {
              rankA++;
            } else if (restB < restA) {
              rankB++;
            }
            return;
          }
        }

        if (a[key] === value) {
          rankA++;
        }
        if (b[key] === value) {
          rankB++;
        }
      });

      if (rankA > rankB) {
        return -1;
      } else if(rankB > rankA) {
        return 1;
      } else {
        return 0;
      }
    });

    return fonts[0];
  },

  _setSelectOptions: function(options, additional) {
    if (typeof options === 'boolean') {
      options = {additive: options};
    }

    if (!angular.isObject(additional)) {
      additional = {};
    }

    options = angular.extend({
      additive: true,
      update: false
    }, options, additional);

    return options;
  },

  _setSelects: function(target, srcs, options) {
    if (angular.isUndefined(srcs)) {
      return target;
    }

    if (!angular.isObject(options)) {
      options = this._setSelectOptions(options);
    }

    if (angular.isArray(srcs)) {
      var srcsObj = {};
      for (var i = 0, l = srcs.length; i < l; i++) {
        srcsObj[srcs[i]] = false;
      }
      srcs = srcsObj;
    }

    /* If we aren't additive, remove all keys that are not present in srcs */
    if (!options.additive) {
      angular.forEach(target, function(active, src) {
        if (!srcs[src]) {
          delete target[src];
        }
      });
    }

    angular.forEach(srcs, function(active, src) {
      if (options.update || angular.isUndefined(target[src])) {
        target[src] = active;
      }
    });

    return target;
  },

  updateImports: function() {
    this.setImports(this.getUrls());
  },

  load: function(font) {
    if (font.loaded) {
      return;
    }

    font.loaded = true;
    this._fontInitiators[font.provider](font);
  },

  getUrls: function() {
    var self = this;
    var googleUrl = self.getGoogleUrl();
    var urls = {};

    if (googleUrl) {
      urls[PROVIDER_GOOGLE] = googleUrl;
    }

    return urls;
  },

  getUrlsFor: function(fonts) {
    var self = this;
    var googleFonts = self.$filter('filter')(fonts, {provider: PROVIDER_GOOGLE});
    var googleUrl = self.getGoogleUrlFor(googleFonts);
    var urls = {};

    if (googleUrl) {
      urls[PROVIDER_GOOGLE] = googleUrl;
    }

    return urls;
  },

  updateUsage: function(font, wasActivated) {
    var self = this;

    if (!angular.isNumber(font.used) || font.used < 0) {
      font.used = 0;
    }
    font.used += wasActivated === false ? -1 : 1;

    self._updateProvicerUsage();
  },


  _updateProvicerUsage: function() {
    var self = this;
    var filter = self.$filter('filter');
    var usedFonts = self.getUsedFonts();

    angular.forEach(self._providers, function(active, provider) {
      self._usedProviders[provider] = !!filter(
        usedFonts,
        {provider: provider}
      ).length;
    });
  },

  getUsedFonts: function() {
    var self = this;

    return self.$filter('filter')(self._fonts, {used: true}, function(used) {
      return !!used;
    });
  },

  getGoogleUrl: function() {
    var self = this;
    var googleFonts = self.$filter('filter')(self.getUsedFonts(), {provider: PROVIDER_GOOGLE});
    return self.getGoogleUrlFor(googleFonts);
  },

  getGoogleUrlFor: function(googleFonts) {
    var self = this;
    var subsets = [];
    var url = URL_GOOGLE_FONTS_CSS;

    if (googleFonts.length) {
      var googleNames = [];
      var variant;

      for (var i = 0, l = googleFonts.length; i < l; i++) {
        variant = googleFonts[i].variants ? ':' + self._getBestVariantOf(googleFonts[i].variants) : '';
        googleNames.push(googleFonts[i].name + variant);
      }

      url += '?family=' + window.escape(googleNames.join('|'));

      angular.forEach(self._subsets, function(active, key) {
        if (active) {
          subsets.push(key);
        }
      });

      if (subsets.length) {
        url += '&subset=' + subsets.join(',');
      }

      return url;
    } else {
      return false;
    }
  },

  _remap: function(provider, from) {
    var self = this;
    var fonts = self._fonts[provider];

    if (!angular.isNumber(from)) {
      from = 0;
    }

    for (var i = from, l = fonts.length; i < l; i++) {
      self._map[provider][fonts[i].key] = i;
    }
  },

  _getBestOf: function(things, prios) {
    for (var i = 0, l = prios.length; i < l; i++) {
      var thing = prios[i];
      if (things.indexOf(thing) >= 0) {
        return thing;
      }
    }
    return things[0];
  },

  _getBestVariantOf: function(variants) {
    return this._getBestOf(variants, VARIANT_PRIORITY);
  },

  _getBestSubsetOf: function(subsets) {
    return this._getBestOf(subsets, SUBSET_PRIORITY);
  },

  _initGoogleFonts: function(force) {
    var self = this;

    if (!self.jdFontselectConfig.googleApiKey || (!force && _googleFontsInitiated)) {
      return;
    }

    var googleFontsUrl = self.jdFontselectConfig.googleApiUrl || URL_GOOGLE_FONTS_API;

    _googleFontsInitiated = true;

    var d = self.$q.defer();
    self._initPromises.push(d.promise);
    self._asyncProviderQueue.push(d.promise);

    self.$http({
      method: METHOD_GET,
      url: googleFontsUrl,
      params: {
        sort: 'popularity',
        key: self.jdFontselectConfig.googleApiKey
      }
    }).then(function (response) {
      var amount = response.data.items.length;
      var ready = amount - 1;
      var fonts = [];

      angular.forEach(response.items, function(font, i) {
        var category = self._getGoogleFontCat(font.family);

        fonts.push(self.add({
          subsets: font.subsets,
          variants: font.variants,
          name: font.family,
          popularity: amount - i,
          key: _createKey(font.family),
          lastModified: font.lastModified,
          stack: '"' + font.family + '", ' + category.fallback,
          category: category.key
        }, PROVIDER_GOOGLE));

        if (ready === i) {
          d.resolve(fonts);
        }
      });
    }, d.reject);
  },

  _getGoogleFontCat: function(font) {
    var self = this;

    var categories = self.getCategories();
    for (var i = 0, l = categories.length; i < l; i++) {
      var category = categories[i];

      if (typeof GOOGLE_FONT_CATEGORIES[category.key] === 'undefined') {
        continue;
      }

      if (GOOGLE_FONT_CATEGORIES[category.key].indexOf(font) >= 0) {
        return category;
      }
    }

    // console.error('Category not Found:', font);
    return CATEGORY_OBJECTS[CATEGORY_OTHER];
  },

  _addDefaultFonts: function() {
    var self = this;

    angular.forEach(DEFAULT_WEBSAFE_FONTS, function(font) {
      self.add(font);
    });
  },

  _loadGoogleFont: function(font) {
    var self = this;
    try {
      self.jdfsWebFont.getFontLoader().load({
        google: {
          families: [font.name + ':' + self._getBestVariantOf(font.variants)],
          text: font.name,
          subsets: font.subsets,
          subset: self._getBestSubsetOf(font.subsets)
        }
      });
    } catch (e) {
      self.removeFont(font, PROVIDER_GOOGLE);
    }
  }
};

/* global NAME_FONTSSERVICE */
function jdfsCuratedFontsProvider() {
  var curatedFontKeys = [];

  this.setCuratedFontKeys = function (curatedKeys) {
    curatedFontKeys = curatedKeys;
  };

  function getCuratedFontObjects(fonts, curatedFontKeys) {
    return fonts.filter(function(font) {
      return curatedFontKeys.indexOf(font.provider + '.' + font.key) !== -1;
    }).map(function(font) {
      return angular.copy(font);
    });
  }

  this.$get = [NAME_FONTSSERVICE, function jdfsCuratedFontsFactory(fontService) {
    return getCuratedFontObjects(fontService.getAllFonts(), curatedFontKeys);
  }];
}

/* jshint unused: false */

/* globals CATEGORY_HANDWRITING, CATEGORY_SANS_SERIF, CATEGORY_DISPLAY, CATEGORY_SERIF */

/* From: http://tech.small-improvements.com/2013/09/10/angularjs-performance-with-large-lists/ */
function startFromFilter () {
  return function(input, start) {
    if (!angular.isArray(input)) {
      return input;
    }

    return input.slice(start);
  };
}

/**
 * Get fonts by matching stacks.
 *
 * @author Tim Sebastian <tim.sebastian@jimdo.com>
 * @author Hannes Diercks <hannes.diercks@jimdo.com>
 */
function stackSeachFilter () {
  var listCache = {};

  function createInputId(input) {
    return '' + input.length + input[0].key + input[input.length - 1].key;
  }

  function stackSearchFilter(input, inputStack) {
    var inputId, list, normalizedInputStack;
    if (!angular.isArray(input) || !input.length) {
      return input;
    }

    if (!angular.isString(inputStack)) {
      return [];
    }

    inputStack = inputStack.toLowerCase();

    normalizedInputStack = stackSearchFilter.normalizeStack(inputStack);

    inputId = createInputId(input);
    if (listCache[inputId]) {
      list = listCache[inputId];
    } else {
      list = listCache[inputId] = stackSearchFilter.createWeightedFontList(input);
    }

    for (var i = 0, l = normalizedInputStack.length; i < l; i++) {
      if (list[normalizedInputStack[i]]) {
        return list[normalizedInputStack[i]].fonts;
      }
    }

    return [];
  }

  stackSearchFilter.normalizeStack = function(stack) {
    var normalizedStack = [];
    angular.forEach(stack.split(','), function(token) {
      normalizedStack.push(token.replace(/^[ '"]*|[ '"]*$/g, ''));
    });
    return normalizedStack;
  };

  stackSearchFilter.createWeightedFontList = function(input) {
    var list = {};

    input.forEach(function(fontObj) {
      var normalizedStack = stackSearchFilter.normalizeStack(fontObj.stack.toLowerCase());
      normalizedStack.forEach(function(stackfont, index){
        if (!list[stackfont] || list[stackfont].pos > index) {
          list[stackfont] = {
            fonts: [fontObj],
            pos: index
          };
        } else if(list[stackfont].pos === index) {
          list[stackfont].fonts.push(fontObj);
        }
      });
    });

    return list;
  };

  return stackSearchFilter;
}

function hasAllSubsetsFilter () {
  return function(input, subsets) {
    if (!angular.isArray(input)) {
      return input;
    }

    function hasAllSubsets(font) {
      var allOK = true;

      angular.forEach(subsets, function(active, key) {
        if (!active || !allOK) {
          return;
        }

        if (font.subsets.indexOf(key) < 0) {
          allOK = false;
        }
      });

      return allOK;
    }

    return input.filter(function(font) {
      if (angular.isUndefined(font.subsets)) {
        // TODO: ERROR
        // console.error('Font ' + font.name + ' is missing subset information.');
        return true;
      }

      return angular.isObject(font) && hasAllSubsets(font);
    });
  };
}

/**
 * Fuzzy search filter for angular.
 * Remove all entries from list that do not contain the
 * characters of our search (in the right sequence)
 *
 * Allow a configurable amount of typos (default: 1)
 *
 * @author Tim Sebastian <tim.sebastian@jimdo.com>
 * @author Hannes Diercks <hannes.diercks@jimdo.com>
 */
function fuzzySearchFilter () {
  /** @const */
  var DEFAULTS = {
    teAmount: 0,
    tePercent: 0.3
  };

  return function(inputs, search, options) {
    if (!angular.isArray(inputs) || angular.isUndefined(search)) {
      return inputs;
    }

    var strict = true;
    var searches = [];

    options = angular.extend(DEFAULTS, options);

    function getRegex(str) {
      return new RegExp(str.replace(/./g, function(i) {return '([^' + i + ']*?(?:' + i + '))?'; }),'i');
    }

    var filter = function(input, matcher, length) {
      var matches = (input.match(matcher)||[]).filter(function(match, i) { return i !== 0 && match; });

      var errorAmountIsOk = (matches.length + options.teAmount) >= length;
      var errorPercentageIsOk = matches.length / length >= 1 - options.tePercent;

      return errorAmountIsOk || errorPercentageIsOk;
    };

    if (angular.isString(search)) {
      var rgx = getRegex(search);

      strict = false;

      angular.forEach(inputs[0], function(val, key) {
        if (key.substring(0, 1) === '$') {
          return;
        }
        searches.push({
          key: key,
          search: rgx,
          length: search.length
        });
      });
    } else if (angular.isObject(search)) {
      var valid = false;
      angular.forEach(search, function(s, k) {
        if (angular.isUndefined(s)) {
          return;
        }
        valid = true;
        searches.push({
          key: k,
          search: getRegex(s),
          length: s.length
        });
      });

      if (!valid) {
        return inputs;
      }
    }

    inputs = inputs.filter(function(input) {
      for (var i = 0, l = searches.length; i < l; i++) {
        var src = searches[i],
            searchVal = input[src.key] || '',
            ok = filter(searchVal, src.search, src.length);

        if (strict && !ok) {
          return false;
        } else if(ok) {
          return true;
        }
      }

      return false;
    });

    return inputs;
  };
}

function jdfsWebFontFactory () {
  var jdfsWebFont = {
    getFontLoader: function() {
      if (typeof window.WebFont === 'undefined') {
        throw new Error('WebFontLoader is not available.' +
          'Please include angular-fontselect/dist/libs/webfontloader.js');
      }

      return window.WebFont;
    }
  };

  return jdfsWebFont;
}

var template = "<div class=\"jdfs-meta\"> <div class=\"jdfs-fontcount\"> {{text.fontFabel}} <span ng-if=\"meta.fonts.current == meta.fonts.total\">{{meta.fonts.total}}</span> <span ng-if=\"meta.fonts.total && meta.fonts.current != meta.fonts.total\">{{meta.fonts.current}}/{{meta.fonts.total}}</span> <span ng-if=\"!meta.fonts.total\">…</span> </div> <div class=\"jdfs-pagecon\"> {{text.pageLabel}} <span class=\"jdfs-page-current\">{{meta.page.currentAbs + 1}}</span>/<span class=\"jdfs-page-count\">{{meta.page.count}}</span> </div> </div> ";

var NAME_JDMETA = 'jdMeta';

function jdMetaDirective () {
  return {
    restrict: 'E',
    template: template,
    replace: true
  };
}

/* global STATE_DEFAULTS, NAME_FONTSSERVICE, SORT_ATTRIBUTES, TEXT_DEFAULTS */
var id = 1;

function jdFontSelectDirective (fontsService) {
  return {
    scope: {
      current: '=?state',
      stack: '=?',
      name: '=?',
      rawText: '@?text',
      text: '=?textObj',
      onInit: '&?',
      onOpen: '&?',
      onClose: '&?',
      onChange: '&?',
      idSuffix: '@?'
    },
    restrict: 'E',
    template: 'template',
    replace: true,

    controller: [
      '$scope',
      '$element',
      '$timeout',
      '$document',
      '$rootScope',
      function(
        $scope,
        $element,
        $timeout,
        $document,
        $rootScope
    ) {
      $scope.fonts = fontsService.getAllFonts();
      $scope.id = id++;
      $scope.suffixedId = $scope.idSuffix ? $scope.idSuffix : $scope.id;
      $scope.stylesActive = true;
      $scope.settingsActive = false;
      $scope.active = false;
      $scope.searching = false;
      $scope.categories = fontsService.getCategories();
      $scope.sortAttrs = SORT_ATTRIBUTES;
      $scope.name = '';
      $scope.meta = {};
      if (angular.isUndefined($scope.stack)) {
        $scope.stack = VALUE_NO_FONT_STACK;
      }

      $scope.text = angular.extend(angular.copy(TEXT_DEFAULTS), $scope.text || {});
      if ($scope.rawText) {
        $scope.text = angular.extend($scope.text , $scope.$eval($scope.rawText) || {});
      }

      function setState(extend) {
        var globalSubsets, globalProviders;
        $scope.current = angular.extend(
          angular.copy(STATE_DEFAULTS),
          extend || {}
        );

        if (!$scope.current.sort.attr) {
          $scope.current.sort.attr = SORT_ATTRIBUTES[0];
        }

        if (angular.isObject($scope.current.font)) {
          $scope.stack = $scope.current.font.stack;
          $scope.name = $scope.current.font.name;
        }

        globalSubsets = fontsService.getSubsets();
        $scope.current.subsets = _objLength(globalSubsets) ?
          globalSubsets : fontsService.setSubsets($scope.current.subsets);

        globalProviders = fontsService.getProviders();
        $scope.current.providers = _objLength(globalProviders) ?
          globalProviders : fontsService.setProviders($scope.current.providers);
      }

      function outsideClickHandler(event) {
        if ($scope.active && !_isDescendant($element[0], event.target)) {
          $scope.toggle();
          $rootScope.$digest();
        }
      }

      function escapeKeyHandler(event) {
        if ($scope.active && event.keyCode === KEY_ESCAPE) {
          $scope.toggle();
          $rootScope.$digest();
        }
      }

      function open() {
        $document.on('click', outsideClickHandler);
        $document.on('keyup', escapeKeyHandler);

        $scope.$broadcast(OPEN_EVENT);
        if (angular.isFunction($scope.onOpen)) {
          $scope.onOpen({$scope: $scope});
        }
      }

      function close() {
        $document.off('keyup', escapeKeyHandler);
        $document.off('click', outsideClickHandler);

        $scope.$broadcast(CLOSE_EVENT);
        if (angular.isFunction($scope.onClose)) {
          $scope.onClose({$scope: $scope});
        }
      }

      $scope.$on(DO_CLOSE_EVENT, function() {
        if ($scope.active) {
          $scope.toggle();
          $scope.$apply();
        }
      });

      $scope.reverseSort = function() {
        var sort = $scope.current.sort;

        sort.direction = !sort.direction;
      };

      $scope.toggle = function($event) {
        if ($event && $event.preventDefault) {
          $event.preventDefault();
        }

        $scope.active = !$scope.active;

        if (!$scope.active) {
          $scope.searching = false;
          close();
        } else {
          $timeout(open);
        }
      };

      $scope.toggleSearch = function($event) {
        $event.preventDefault();

        if (!$scope.active) {
          $scope.toggle();
        }

        $scope.searching = !$scope.searching;

        if ($scope.searching) {
          $scope.setFocus();
        }
      };

      $scope.tryUnfocusSearch = function() {
        if ($scope.searching && $scope.current.search.length === 0) {
          $scope.searching = false;
        }
      };

      $scope.resetSearch = function($event) {
        $event.preventDefault();

        $scope.current.search = '';
        if ($scope.searching) {
          $scope.setFocus();
        }
      };

      $scope.toName = _createName;

      $scope.setFocus = function() {
        $timeout(function() {
          $element[0].querySelector('.jdfs-search').focus();
        });
      };

      $scope.setCategoryFilter = function(category, $event) {
        if ($event && $event.preventDefault) {
          $event.preventDefault();
        }

        var current = $scope.current;

        if (current.category === category) {
          current.category = undefined;
        } else {
          current.category = category;
        }
      };

      $scope.reset = function() {
        setState();
      };

      $scope._setSelected = function(font) {
        if (angular.isObject(font)) {
          $scope.name = font.name;
          $scope.stack = font.stack;
        } else {
          $scope.name = '';
          $scope.stack = VALUE_NO_FONT_STACK;
        }
      };

      $scope.toggleSettings = function() {
        $scope.settingsActive = true;
        $scope.stylesActive = false;
      };

      $scope.toggleStyles = function() {
        $scope.stylesActive = true;
        $scope.settingsActive = false;
      };

      $scope.$on('$destroy', close);

      /* Initiate! */
      fontsService._initGoogleFonts();

      if (angular.isObject($scope.current)) {
        setState($scope.current);
      }

      if ($scope.stack.length) {
        try {
          var font = fontsService.getFontByStack($scope.stack);
          /* Since we're setting the font now before watchers are initiated, we need to update usage by ourself. */
          fontsService.updateUsage(font);
          fontsService.load(font);
          setState({font: font});
        } catch (e) {
          fontsService.getFontByStackAsync($scope.stack, false).then(function(font) {
            if (angular.isObject(font)) {
              setState({font: font});
            }
          });
        }
      }

      if (angular.isFunction($scope.onInit)) {
        $scope.onInit({$scope: $scope});
      }

      $scope.$watch('current.font', function(newFont, oldFont) {
        if (!angular.isObject($scope.current)) {
          $scope.reset();
        }

        if (oldFont !== newFont) {
          $scope.tryUnfocusSearch();

          if (angular.isObject($scope.current.font)) {
            newFont = $scope.current.font;
          }

          if (angular.isObject(oldFont) && oldFont.used) {
            fontsService.updateUsage(oldFont, false);
          }
          if (angular.isObject(newFont)) {
            fontsService.updateUsage(newFont);
            fontsService.load(newFont);
          }

          $scope._setSelected(newFont);
          fontsService.updateImports();
          if (angular.isFunction($scope.onChange)) {
            $scope.onChange({font: newFont});
          }
        }
      });

      $scope.$watch('current.subsets', function(newSubsets, oldSubsets) {
        if (newSubsets !== oldSubsets) {
          fontsService.updateImports();
        }
      }, true);

      $scope.$watch('stack', function(newStack, oldStack) {
        var font;

        if (newStack === oldStack || ($scope.current.font && newStack === $scope.current.font.stack)) {
          return;
        }

        try {
          if (newStack && newStack.length) {
            font = fontsService.getFontByStack(newStack, false);
          }

          if (font) {
            $scope.current.font = font;
          } else {
            $scope.reset();
          }
        } catch (e) {
          $scope.reset();
        }
      });
    }]
  };
}jdFontSelectDirective.$inject = [NAME_FONTSSERVICE];

var template$1 = "<div class=\"jdfs-fontlistcon\" ng-class=\"{'jdfs-active': isActive()}\"> <button class=\"jdfs-fontpagination jdfs-fontpagination-prev\" ng-click=\"paginate('prev', $event)\" ng-class=\"{'jdfs-disabled': !paginationButtonActive('prev')}\" ng-disabled=\"!paginationButtonActive('prev')\">{{text.page.prev}}</button> <ul class=\"jdfs-fontlist\"> <jd-fontlist-entry current=\"current\" entry=\"entry\" ng-repeat=\"entry in getFontlistEntries() | startFrom: page.current * page.size | limitTo: page.size\"></jd-fontlist-entry> </ul> <button class=\"jdfs-fontpagination jdfs-fontpagination-next\" ng-click=\"paginate('next', $event)\" ng-class=\"{'jdfs-disabled': !paginationButtonActive('next')}\" ng-disabled=\"!paginationButtonActive('next')\">{{text.page.next}} </button> </div> ";

/* global NAME_CONTROLLER, DIRECTION_NEXT, DIRECTION_PREVIOUS, KEY_DOWN */
var NAME_JDFONTLIST = 'jdFontlist';

function jdFontlistController($scope, $rootScope, $filter, fontsService, $element, $document, jdfsCuratedFonts) {
/* jshint maxparams: 3 */
  var _fontlistEntries = [];
  var _lastPageCount = 0;
  var _scrollBuffer = 0;

  var ALL_FONTS_FILTER_STATE = {
    forceNext: false,
    fontsInProviders: [],
    fontsInSubsets: [],
    sortedFonts: [],
    categorizedFonts: [],
    searchedFonts: [],
    sortCache: { search: $scope.current.search }
  };

  var CURATED_FONTS_FILTER_STATE = angular.copy(ALL_FONTS_FILTER_STATE);

  var defaultPage = {
    size: PAGE_SIZE_DEFAULT,
    count: 0,
    current:  0,
    currentAbs: 0
  };

  var page = $scope.page = $scope.meta.page = angular.extend({}, defaultPage, $scope.meta.page);

  var fontmeta = $scope.meta.fonts = {
    total: 0,
    current: 0
  };

  function isOnCurrentPage(index) {
    var currentMinIndex = page.current * page.size;

    return index >= currentMinIndex && index < currentMinIndex + page.size;
  }

  $scope.keyfocus = function(direction, amount) {
    var index = -1;
    var i, l = _fontlistEntries.length;
    for (i = 0; i < l; i++) {
      if (_fontlistEntries[i].content === $scope.current.font) {
        index = i;
        break;
      }
    }

    var pageoffset = page.size * page.current;
    var onPage = isOnCurrentPage(index);

    if (angular.isUndefined(amount)) {
      amount = 1;
    }

    index += (direction === DIRECTION_PREVIOUS ? -amount : amount);

    if (!onPage && _fontlistEntries[index + pageoffset]) {
      index += pageoffset;
    }

    while (_fontlistEntries[index] && _fontlistEntries[index].type !== FONTLIST_ENTRY_TYPE_FONT) {
      index += (direction === DIRECTION_PREVIOUS ? -1 : 1);
    }

    if (_fontlistEntries[index]) {
      $scope.current.font = _fontlistEntries[index].content;

      page.currentAbs = page.current = Math.floor(index / page.size);

      $rootScope.$digest();
    }
  };

  function keyDownHandler(event) {
    function prevent() {
      event.preventDefault();
      return false;
    }

    var key = event.keyCode;

    if (key === KEY_DOWN) {
      $scope.keyfocus(DIRECTION_NEXT);
      return prevent();
    } else if (key === KEY_UP) {
      $scope.keyfocus(DIRECTION_PREVIOUS);
      return prevent();
    }

    if (document.activeElement.tagName === 'INPUT' && document.activeElement.value) {
      return;
    }

    var amount = page.size;
    if (key === KEY_RIGHT) {
      if (!$scope.current.font) {
        amount++;
      }
      $scope.keyfocus(DIRECTION_NEXT, amount);
      return prevent();
    } else if (key === KEY_LEFT) {
      $scope.keyfocus(DIRECTION_PREVIOUS, page.size);
      return prevent();
    }
  }

  function getDeltaFromEvent(event) {
    var delta = event.wheelDeltaY || event.wheelDelta ||
      event.deltaY * -1;

    if (!isFinite(delta) &&
      !angular.isUndefined(event.originalEvent)) {
      delta = getDeltaFromEvent(event.originalEvent);
    }

    return delta;
  }

  var wheelHandler = function(event) {
    if (!event.target) {
      return;
    }

    if (_isDescendant($element[0], event.target)) {
      event.preventDefault();
      event.stopPropagation();

      var subpage = 1 / page.size;
      var delta = getDeltaFromEvent(event);
      var absDelta = Math.abs(delta);

      /* For touch-pads etc., we buffer small movements */
      if (absDelta > 1 && absDelta < SCROLL_BUFFER) {
        _scrollBuffer += delta;
        if (Math.abs(_scrollBuffer) < SCROLL_BUFFER) {
          return;
        }
        _scrollBuffer = 0;
      }

      if (delta !== 0 && $scope.paginate(delta > 0 ? -subpage : subpage) !== false) {
        $scope.$digest();
      }
    }
  };

  $scope.$on(OPEN_EVENT, function() {
    $document.on('keydown', keyDownHandler);
    $document.on('wheel', wheelHandler);
    $document.on('mousewheel', wheelHandler);
    $document.on('DOMMouseScroll', wheelHandler);
  });

  $scope.$on(CLOSE_EVENT, function() {
    $document.off('keydown', keyDownHandler);
    $document.off('wheel', wheelHandler);
    $document.off('mousewheel', wheelHandler);
    $document.off('DOMMouseScroll', wheelHandler);
  });

  /**
   * Set the current page
   *
   * @param {Number} currentPage
   * @return {void}
   */
  $scope.setCurrentPage = function(currentPage) {
    page.currentAbs = page.current = currentPage;
  };

  /**
   * Go to the next or previous page.
   *
   * @param  {Number} amount subpage steps
   * @param  {Object} $event jQuery scroll event
   * @return {void}
   */
  $scope.paginate = function(amount, $event) {
    if ($event && $event.preventDefault) {
      $event.preventDefault();
    }

    var direction = amount;
    if (angular.isNumber(amount)) {
      if (amount === 0) {
        return false;
      }
      direction = amount < 0 ? DIRECTION_PREVIOUS : DIRECTION_NEXT;
    } else {
      amount = _getAmountFromDirection(direction);
    }

    if (!$scope.paginationButtonActive(direction)) {
      return false;
    }

    if (page.current + amount < 0) {
      page.currentAbs = page.current = 0;
    } else {
      page.current += amount;
      page.currentAbs = Math.floor(page.current);
    }

    return page.current;
  };

  /**
   * Check if the pagination button is active
   *
   * @param  {String} direction 'next' or 'prev'
   * @return {Boolean}
   */
  $scope.paginationButtonActive = function(direction) {
    _updatePageCount();
    _updateCurrentPage();

    return (
      (direction === DIRECTION_NEXT && (page.current + 1) * page.size < _fontlistEntries.length) ||
      (direction === DIRECTION_PREVIOUS && page.current > 0)
    );
  };

  /**
   * Get an array with the length similar to the
   * amount of pages we have. (So we can use it in a repeater)
   *
   * Also update the current page and the current amount of pages.
   *
   * @return {Array}
   */
  $scope.getPages = function() {
    _updatePageCount();
    var pages = new Array(page.count);

    _updateCurrentPage();

    /* Display the page buttons only if we have at least two pages. */
    if (pages.length <= 1) {
      return [];
    }
    return pages;
  };

  /**
   * Apply the current provider filter to the given font list
   * @param {Array} fonts
   * @return {Array}
   */
  function _filterProviders(fonts, filterState) {
    var providersString = JSON.stringify($scope.current.providers);
    if (filterState.forceNext || filterState.sortCache.providers !== providersString) {
      filterState.sortCache.providers = providersString;
      filterState.forceNext = true;

      filterState.fontsInProviders = fonts.filter(function(font) {
        return $scope.current.providers[font.provider];
      });
    }

    return filterState.fontsInProviders;
  }



  /**
   * Apply current subset filters to given font list
   * @param  {Array} fonts
   * @return {Array}
   */
  function _filterSubsets(fonts, filterState) {
    var subSetString = JSON.stringify($scope.current.subsets);
    if (filterState.forceNext || filterState.sortCache.subsets !== subSetString) {
      filterState.sortCache.subsets = subSetString;
      filterState.forceNext = true;

      filterState.fontsInSubsets = $filter('hasAllSubsets')(
        fonts,
        $scope.current.subsets
      );
    }

    return filterState.fontsInSubsets;
  }

  /**
   * Apply current sort to given font list
   * @param  {Array} fonts
   * @return {Array}
   */
  function _filterSort(fonts, filterState) {
    var attrDirection = $scope.current.sort.attr.dir;
    var direction = $scope.current.sort.direction;

    if (filterState.forceNext ||
      filterState.sortCache.sortattr !== $scope.current.sort.attr.key ||
      filterState.sortCache.sortdir !== direction)
    {
      filterState.sortCache.sortattr = $scope.current.sort.attr.key;
      filterState.sortCache.sortdir = direction;
      filterState.forceNext = true;

      filterState.sortedFonts = $filter('orderBy')(
        fonts,
        $scope.current.sort.attr.key,
        $scope.current.sort.direction ? attrDirection : !attrDirection
      );
    }

    return filterState.sortedFonts;
  }

  /**
   * Apply current category filters to given font list.
   * @param  {Array} fonts
   * @return {Array}
   */
  function _filterCategory(fonts, filterState) {
    var category = $scope.current.category;
    if (filterState.forceNext || filterState.sortCache.category !== category) {
      filterState.sortCache.category = category;
      filterState.forceNext = true;

      if (angular.isUndefined(category)) {
        filterState.categorizedFonts = fonts;
      } else {
        filterState.categorizedFonts = $filter('filter')(fonts, {category: category}, true);
      }
    }

    return filterState.categorizedFonts;
  }

  /**
   * Apply current search to given font list.
   * @param  {Array} fonts
   * @return {Array}
   */
  function _filterSearch(fonts, filterState) {
    var search = $scope.current.search || '';
    var searchTermChanged = filterState.sortCache.search !== search;
    if (filterState.forceNext || searchTermChanged) {
      filterState.sortCache.search = search;
      filterState.forceNext = true;

      /* Unset category filter so every font is visible. */
      if (searchTermChanged) {
        $scope.current.category = undefined;
      }

      if (search.length) {
        filterState.searchedFonts = _priorize(
          $filter('fuzzySearch')(fonts, {name: search}),
          search.toLowerCase()
        );
      } else {
        filterState.searchedFonts = fonts;
      }
    }

    return filterState.searchedFonts;
  }

  var EMPTY_FILTERED_FONTS = [];

  function filterFontList(fonts, filterState) {
    filterState.forceNext = filterState.sortCache.fontAmount !== fonts.length;
    filterState.sortCache.fontAmount = fonts.length;

    var queue = [
      _filterProviders,
      _filterSubsets,
      _filterSort,
      _filterSearch,
      _filterCategory
    ];

    var filteredList = fonts;
    for (var i = 0, l = queue.length; i < l; i++) {
      filteredList = queue[i](filteredList, filterState);
    }

    return filteredList;
  }

  function convertFontToFontlistEntry(font) {
    return {
      type: FONTLIST_ENTRY_TYPE_FONT,
      content: font
    };
  }

  function createHeadlineEntry(content) {
    return {
      type: FONTLIST_ENTRY_TYPE_HEADLINE,
      content: content
    };
  }

  function createTextEntry(content) {
    return {
      type: FONTLIST_ENTRY_TYPE_TEXT,
      content: content
    };
  }

  var entryMap = new WeakMap();

  $scope.getFontlistEntries = function() {
    var filteredFonts = filterFontList($scope.fonts || EMPTY_FILTERED_FONTS, ALL_FONTS_FILTER_STATE);
    if (!entryMap.has(filteredFonts)) {

      var fontlistEntries = [];
      if (filteredFonts.length === 0) {
        fontlistEntries.push(createTextEntry($scope.text.noResultsLabel));
      } else {
        fontlistEntries = filteredFonts.map(convertFontToFontlistEntry);

        if (jdfsCuratedFonts.length !== 0) {
          var filteredCuratedFonts = filterFontList(jdfsCuratedFonts, CURATED_FONTS_FILTER_STATE);
          fontlistEntries = [createHeadlineEntry($scope.text.curatedFontsListHeadline)]
            .concat(filteredCuratedFonts.map(convertFontToFontlistEntry))
            .concat([createHeadlineEntry($scope.text.allFontsListHeadline)])
            .concat(fontlistEntries);
        }
      }

      fontmeta.total = $scope.fonts.length;
      fontmeta.current = filteredFonts.length;

      _fontlistEntries = fontlistEntries;
      entryMap.set(filteredFonts, fontlistEntries);
    }

    return entryMap.get(filteredFonts);
  };

  /**
   * Convert 'prev' and 'last' to -1 and 1
   * @param  {Number|String} direction
   * @return {Number}
   */
  function _getAmountFromDirection(direction) {
    if (angular.isNumber(direction)) {
      return direction;
    }
    return (direction === DIRECTION_PREVIOUS ? -1 : 1);
  }

  /**
   * Sort a list of fonts by matching them against a given search
   * @param  {Array} fonts
   * @param  {String} search
   * @return {Array}
   */
  function _priorize(fonts, search) {
    if (fonts.length > 1) {
      var rgx = new RegExp('[' + search + ']+');

      fonts.sort(function(a, b) {
        var nameA = a.name.toLowerCase();
        var nameB = b.name.toLowerCase();
        var firstCharA = nameA[0];
        var firstCharB = nameB[0];

        /* Prioritize by first character... */
        if (firstCharA !== firstCharB) {
          if (firstCharA === search[0]) {
            return -1;
          } else if (firstCharB === search[0]) {
            return 1;
          }
        }

        /* Prioritize by amount of matches. */
        return (nameA.replace(rgx, '').length < nameB.replace(rgx, '').length) ? -1 : 1;
      });
    }

    return fonts;
  }

  /**
   * Calculate the amount of pages we have.
   *
   * @return {void}
   */
  function _updatePageCount() {
    _lastPageCount = page.count;

    if (!angular.isArray($scope.fonts)) {
      return 0;
    }

    if (_fontlistEntries.length) {
      page.count = Math.ceil(_fontlistEntries.length / page.size);
    }
  }

  /**
   * Whenever the amount of pages is changing:
   * Make sure we're not staying on a page that does not exist.
   * And if we have a font selected, try to stay on the page of
   * that font.
   *
   * @return {void}
   */
  function _updateCurrentPage() {
    /* do nothing if the amount of pages hasn't change */
    if (_lastPageCount === page.count) {
      return;
    }

    $scope.setCurrentPage(0);
  }
}
jdFontlistController.$inject = ['$scope', '$rootScope', '$filter', NAME_FONTSSERVICE, '$element', '$document', 'jdfsCuratedFonts'];

function jdFontlistDirective () {
  return {
    scope: {
      id: '=fsid',
      fonts: '=',
      meta: '=',
      current: '=',
      text: '='
    },
    restrict: 'E',
    template: template$1,
    replace: true,
    controller: jdFontlistController
  };
}

var template$2 = "<ng-switch on=\"entry.type\"> <li ng-switch-when=\"FONT\"><jd-font current=\"current\" font=\"entry.content\"></jd-font></li> <li ng-switch-when=\"HEADLINE\" class=\"jdfs-fontlist-headline\">{{entry.content}}</li> <li ng-switch-when=\"TEXT\" class=\"jdfs-fontlist-text\">{{entry.content}}</li> </ng-switch> ";

/* global FONTLIST_ENTRY_TYPE_HEADLINE, FONTLIST_ENTRY_TYPE_FONT, FONTLIST_ENTRY_TYPE_TEXT */
var NAME_JDFONTLIST_ENTRY = 'jdFontlistEntry';

function jdFontlistEntryDirective () {
  return {
    scope: {
      entry: '=',
      current: '='
    },
    restrict: 'E',
    template: template$2,
    replace: true,
    link: function($scope) {
      $scope.isHeadline = $scope.entry.type === FONTLIST_ENTRY_TYPE_HEADLINE;
      $scope.isFont = $scope.entry.type === FONTLIST_ENTRY_TYPE_FONT;
      $scope.isText = $scope.entry.type === FONTLIST_ENTRY_TYPE_TEXT;
    }
  };
}

var template$3 = "<label class=\"jdfs-fontlist-font\" ng-class=\"{'jdfs-active jdfs-highlight': current.font.name == font.name}\" for=\"jdfs-{{id}}-font-{{font.key}}\" style=\"font-family: {{font.stack}};\"> <input type=\"radio\" ng-model=\"current.font\" ng-value=\"font\" name=\"jdfs-{{id}}-font\" id=\"jdfs-{{id}}-font-{{font.key}}\"> {{font.name}} </label> ";

/* global NAME_FONTSSERVICE */

function jdFontDirective (fontsService) {
  return {
    scope: {
      font: '=',
      current: '='
    },
    template: template$3,
    restrict: 'E',
    replace: true,
    controller: ['$scope', function($scope) {
      fontsService.load($scope.font);
    }]
  };
}
jdFontDirective.$inject = [NAME_FONTSSERVICE];

var template$4 = "<link ng-href=\"{{url}}\" ng-repeat=\"url in urls\"> ";

/* global NAME_FONTSSERVICE */

function jdFontSelectCurrentHrefDirective (fontsService) {
  return {
    template: template$4,
    restrict: 'A',
    replace: true,
    controller: ['$scope', function($scope) {
      $scope.urls = fontsService.getImports();
    }]
  };
}
jdFontselectCurrentHref.$inject = [NAME_FONTSSERVICE];

/* jshint unused: false, -W079 */

var fontselectModule$1 = angular.module('jdFontselect', [])
                              .provider('jdfsCuratedFonts', jdfsCuratedFontsProvider)
                              .factory('jdfsWebFont', jdfsWebFontFactory)
                              .service(NAME_FONTSSERVICE, FontsService)
                              .filter('startFrom', startFromFilter)
                              .filter('stackSearch', stackSeachFilter)
                              .filter('hasAllSubsets', hasAllSubsetsFilter)
                              .filter('fuzzySearch', fuzzySearchFilter)
                              .directive(NAME_JDMETA, jdMetaDirective)
                              .directive('jdFontselect', jdFontSelectDirective)
                              .directive(NAME_JDFONTLIST, jdFontlistDirective)
                              .directive(NAME_JDFONTLIST_ENTRY, jdFontlistEntryDirective)
                              .directive('jdFont', jdFontDirective)
                              .directive('jdFontselectCurrentHref', jdFontSelectCurrentHrefDirective);
