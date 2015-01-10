# ejs-stream

A through stream for rendering objects with ejs templates

	npm install ejs-stream

# Usage

Pass a template as first argument to the constructor. The second `options` map is passed to the [ejs](https://github.com/mde/ejs#usage) `compile` function.

```javascript
var ejs = require('ejs-stream');

var stream = ejs('Hello <%- name %>');

stream.write({ name: 'you' });
stream.end();
```

Or piping from a readable stream.

```javascript
var ejs = require('ejs-stream');
var mongojs = require('mongojs');

var db = mongojs('...', ['customers']);

db.customers.find()
	.pipe(ejs('<%- address %> <%- name %>'))
	.pipe(process.stdout);
```
