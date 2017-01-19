module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');

    return {
        options: {
            separator: ';',
        },
        dist: {
            src: [
                'node_modules/angular/angular.js',
                'node_modules/angular-oauth2/dist/angular-oauth2.js',
                'node_modules/angular-oauth2/node_modules/angular-cookies/angular-cookies.js',
                'node_modules/angular-oauth2/node_modules/query-string/query-string.js',
                'node_modules/angular-ui-router/release/angular-ui-router.js',
                'SPA/app/module.js',
                'SPA/app/**/*.js'
            ],
            dest: 'SPA/dist/concat.js',
            footer: 'window.angular = angular;'
        },
    };
};
