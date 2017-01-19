module.exports = function (grunt) {

    // Loads in each grunt task from its own file.
    [
        'accessibility', // WCAG compliance
        'concat', // Concatenates files together
        'connect', // Server task
        'htmlangular', // W3C compliance
        'karma', // Runs unit tests
        'ngtemplates', // Bundles angular partial html into javascript
        'sass', // Bundles angular partial html into javascript
        'watch' // Watches for file changes and runs tasks
    ].forEach(function (taskName) {
        grunt.config.set(taskName, require('./GruntTasks/' + taskName)(grunt));
    });

    // By default, grunt serves the SPA into the localhost.
    grunt.registerTask('default', [ 'serve' ]);

    // Runs the server which serves the SPA into the localhost.
    // File changes restart the server.
    grunt.registerTask('serve', [
        'connect:livereload', // The server
        'watch:src' // The watch which checks for code changes and triggers the server reload
    ]);

    // This task concatenates all the javascript together, including the html templates.
    grunt.registerTask('bundle', [
        'sass:dist', // SASS transpiling
        'concat:dist', // Javascript concatenation
        'ngtemplates' // Angular partials to be included
    ]);

    // Watches for code changes and lists any issues
    grunt.registerTask('report', [ 'watch:htmllint' ]);

    require('load-grunt-tasks')(grunt);
};
