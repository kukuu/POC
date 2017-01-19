module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-watch');

	return {
		options: {
			spawn: false,
            atBegin: true
		},
		src: {
            options: {
                livereload: true
            },
			files: [
				'SPA/**'
			],
			tasks: ['bundle']
		},
        htmllint: {
            options: {
                livereload: 8081
            },
            files: [
                (function () {
                    // Watches for changes in all files checked by both HTML compliance tasks
                    var paths = [];
                    [
                        'partial',
                        'index'
                    ].forEach(function (target) {
                        paths = paths.concat(grunt.config('accessibility.' + target).src)
                            .concat(grunt.config('htmlangular.' + target).files.src);
                    });
                    return paths;
                }())
                .concat(['src/grunt/accessibility.js'])
                .concat(['src/grunt/htmlangular.js'])
            ],
            tasks: ['accessibility', 'htmlangular']
        }
	};
};
