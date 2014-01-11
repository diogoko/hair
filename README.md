hair
====

JavaScript minimalist logic-less templating engine

Usage
-----

```javascript
hair("Hello {{name}} {{last_name}}! Today is {{day_of_week}}.", { day_of_week: "Monday", name: "Joe" })
```

returns

```javascript
"Hello Joe ! Today is Monday."
```

License
-------

hair uses the MIT license.

Why "hair"?
-----------

Inspired by the simplicity of [mustache](http://mustache.github.io/ "mustache's home"), hair is just a tiny bit of mustache's functionality.
