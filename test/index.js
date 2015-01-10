var test = require('tape');
var concat = require('concat-stream');

var ejs = require('../');

test('empty', function(t) {
	var stream = ejs('<%- name %>');

	stream.pipe(concat({ encoding: 'object' }, function(data) {
		t.equals(data.length, 0);
		t.end();
	}));

	stream.end();
});

test('multiple writes', function(t) {
	var stream = ejs('<%- name %>1');

	stream.pipe(concat({ encoding: 'object' }, function(data) {
		t.equals(data.length, 2);
		t.equals(data[0], 'a1');
		t.equals(data[1], 'b1');
		t.end();
	}));

	stream.write({ name: 'a' });
	stream.write({ name: 'b' });
	stream.end();
});
