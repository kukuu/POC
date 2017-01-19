module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-html-angular-validate');

	// Partial directives could be auto-relaxed using strict file-structuring protocol.
	return {
        options: {
            reportpath: 'report/html-angular-validate-report.json',
            reportCheckstylePath: null
        },
		partial: {
			files: {
				src: ['client/app/**/*.html']
			},
			options: {
				relaxerror: [
					'Start tag seen without seeing a doctype first. Expected e.g. “<!DOCTYPE html>”.',
					'Element “head” is missing a required instance of child element “title”.'
				]				
			}
		},
		index: {
			files: {
				src: ['client/index.html']
			}
		},
	};	
};
