module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-angular-templates');

    return {
        application: {
            src: ['SPA/app/**/*.html'],
            dest: 'SPA/dist/concat.js',
            options: {
                append: true                
            }
        }
    };
};
