module.exports = function (grunt) {
    return {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'SPA/dist/sass.css': 'SPA/assets/**/*.scss'
            }
        }
    }
};
