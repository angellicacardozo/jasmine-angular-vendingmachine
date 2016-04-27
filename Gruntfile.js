module.exports = function(grunt) {

var pkg = require('./package.json');

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    machine :{
        app: 'public',
        dist: 'dist'
    },
    
    bower: {
        install: {
            options: {
                targetDir: '<%= machine.app %>/lib',
                verbose: true
            }
        }
    }
});

grunt.loadNpmTasks('grunt-bower-task');
// Copy bower components to the public app directory whitin LIB folder
grunt.registerTask('build-public-bower-lib',[
        'bower:install'
    ]);
}