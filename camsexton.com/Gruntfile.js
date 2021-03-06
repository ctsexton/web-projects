module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options:{
          style:'compressed'
        },
        files: {
          'themes/artistsite/assets/css/sass_output.css' : 'themes/artistsite/assets/css/input.scss'
        }
      }
    },
    autoprefixer:{
      dist:{
        files:{
          'themes/artistsite/assets/css/styles.css':'themes/artistsite/assets/css/sass_output.css'
        }
      }
    },
    watch: {
      css: {
        files: 'themes/artistsite/assets/css/*.scss',
        tasks: ['sass', 'autoprefixer']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default',['watch']);
}
