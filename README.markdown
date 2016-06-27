cookie-monster
=============

[![Build Status](https://travis-ci.org/kahnjw/cookie-monster.png)](https://travis-ci.org/kahnjw/cookie-monster)
[![Dependencies Status](https://david-dm.org/kahnjw/cookie-monster.svg)](https://david-dm.org/kahnjw/cookie-monster)
[![devDependencies Status](https://david-dm.org/kahnjw/cookie-monster/dev-status.svg)](https://david-dm.org/kahnjw/cookie-monster#info=devDependencies)

NOTE: cookie-monster is a fork of [cookie-cutter](https://www.npmjs.org/package/cookie-cutter) by substack (James Halliday), which seems to have gone stale.

Set and get cookies in the browser or in node with `document`.

In your browser code with [browserify](github.com/substack/node-browserify):

````javascript
var cookie = require('cookie-monster');
var times = parseInt(cookie.getItem('times'), 10) || 0;
cookie.setItem('times', times + 1);
````

and `times` will increment every time the page is reloaded.

methods
=======

````javascript
var cookie = require('cookie-monster');
````

cookie(document)
----------------

Return a new cookie object with `.getItem()`, `.setItem()`, `.removeItem()` and `.clear()` operating on `document`. Older version's `.get()`, `.set()` and `.remove()` methods are left for backward compatibility, but their usage is highly discouraged.

`document.cookie` should be a non-referentially transparent setter/getter combo
like the DOM's variant where assignment with optional path and expiry creates a
new cookie in the getter as a key=value pair.

cookie.getItem(key)
-------------------

Return the cookie value for `key`. Aliased by `cookie.get()`.

cookie.setItem(key, value, opts={})
-----------------------------------

Set the cookie at `key` to `value` with optional parameters `expires` and `path`. Aliased by `cookie.set()`.

cookie.removeItem(key)
----------------------

Removes cookie value stored at `key`. Aliased by `cookie.remove()`.

Alternatively you can use `.setItem()` with `{ expires: new Date(0) }` option to unset a cookie.

cookie.clear()
--------------

Removes all currently available cookies.


install
=======

With [npm](http://npmjs.org) do:

    npm install cookie-monster

test
====

With the console do

```sh
$ npm test
```

license
=======

MIT/X11

cookies
=======

![cookie-monster](http://i.giphy.com/EKUvB9uFnm2Xe.gif)
