module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["./css"],
                    sourceMap: true,
                    sourceMapBasepath: "./css/",
                    sourceMapFilename: "./css/main.css.map"
                    
                },
                files: {
                    "./css/main.css": "./css/main.less"
                }
            }
        },
        watch: {
            files: "./css/**/*.less",
            tasks: ["less"]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
};