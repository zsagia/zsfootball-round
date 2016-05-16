'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'round.css',
	bundleFileName: 'Round.js',
	moduleName: 'zsfootball-round',
	testNodeSrc: [
		'env/test/node.js',
		'test/**/*.js'
	]
});
