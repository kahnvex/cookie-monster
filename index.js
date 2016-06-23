'use strict';

var bake = function (doc){
  if(!doc) doc = {};
  if(typeof doc === 'string') doc = { cookie: doc };
  if(doc.cookie === undefined) doc.cookie = '';

  // Returning object
  var self = {
    get length(){
      return doc.cookie.split(/;\s*/).length;
    },
    getItem: function (key){
      var cookiesSplat = doc.cookie.split(/;\s*/);
      for (var i = 0; i < cookiesSplat.length; i++) {
        var ps = cookiesSplat[i].split('=');
        var k = decodeURIComponent(ps[0]);
        if (k === key) return decodeURIComponent(ps[1]);
      }
    },
    setItem: function (key, value, opts){
      // Checks before we start
      if (typeof key !== 'string' || typeof value !== 'string') return false;
      if (!opts) opts = {};

      // Creating new cookie string
      var newCookie = encodeURIComponent(key) + '=' + encodeURIComponent(value);
      if (opts.hasOwnProperty('expires')) newCookie += '; expires=' + opts.expires;
      if (opts.hasOwnProperty('path')) newCookie += '; path=' + opts.path;
      if (opts.hasOwnProperty('domain')) newCookie += '; domain=' + opts.domain;
      if (opts.hasOwnProperty('secure')) newCookie += '; secure';

      doc.cookie = newCookie;
      return newCookie;
    },
    removeItem: function (key){
      doc.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      return true;
    },
    clear: function (){
      var cookiesSplat = doc.cookie.split(/;\s*/);
      for (var i = 0; i < cookiesSplat.length; i++) {
        self.removeItem(decodeURIComponent(cookiesSplat[i].split('=')[0]));
      }
      return true;
    },
    // Legacy aliases
    get: function (key){
      console.log('This method is going to be deprecated soon. Please, switch to using Storage API compatible method.');
      return self.getItem(key);
    },
    set: function (key, value, opts){
      console.log('This method is going to be deprecated soon. Please, switch to using Storage API compatible method.');
      return self.setItem(key, value, opts);
    },
    remove: function (key){
      console.log('This method is going to be deprecated soon. Please, switch to using Storage API compatible method.');
      return self.removeItem(key);
    }
  };

  return self;
};

if (typeof document !== 'undefined') module.exports = exports = bake(document);
