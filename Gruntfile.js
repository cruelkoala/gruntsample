module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
          sourceMap: true
        },
        build: {
          src: 'dist/index.js',
          dest: 'dist/index.min.js'
        }
      },
      babel: {
        options: {
            sourceMap: true,
            presets: ['env']
        },
        dist: {
            files: {
                'dist/index.js': 'index.js'
            }
        }
    }
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-concat');
  
    // Default task(s).
    grunt.registerTask('default', 'Log', function () {
        console.log('DEFAULT')
    });
    grunt.registerTask('babel', ['babel']);
  
  };