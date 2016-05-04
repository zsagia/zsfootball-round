'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'zsFootballRound.css',
	bundleFileName: 'zsFootballRound.js',
	moduleName: 'metal-zsFootballRound',
	testNodeSrc: [
		'env/test/node.js',
		'test/**/*.js'
	]
});
