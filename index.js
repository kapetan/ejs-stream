var through = require('through2');
var ejs = require('ejs');

module.exports = function(template, options) {
	template = ejs.compile(template, options);

	return through.obj(function(data, encoding, callback) {
		callback(null, template(data));
	});
};
