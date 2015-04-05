module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.initConfig({
	  pkg: grunt.file.readJSON('package.json'),

	  // configure Jshint here
		jshint: {
		  // define the files to lint
		  files: ['Gruntfile.js', 'js/*.js'],
		  // configure JSHint (documented at http://www.jshint.com/docs/)
		  options: {
		      // more options here if you want to override JSHint defaults
		    globals: {
		      jQuery: true,
		      console: true,
		      module: true
		    }
		  }
		},

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: 'sass/sass',
        cssDir: 'stylesheets/sass',
        imagesDir: 'images',
        javascriptsDir: 'scripts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      server: {
        options: {
          debugInfo: false
        }
      }
    },

    // configure the watch here
		watch: {
			options: {
      	livereload: true,
    	},
		  js: {
        files: ['js/main.js'],
        tasks: ['jshint']
      },
      compass: {
        files: ['sass/{,*/}*.{scss,sass}'],
        tasks: ['compass:server']
      },
      html: {
      	files:['*.html']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '*.html',
          'stylesheets/{,*/}*.css',
          'images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
		},

	  // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true
        }
      }
    }

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-connect');

	// the default task can be run just by typing "grunt" on the command line
	grunt.registerTask('default', ['jshint', 'compass']);


	grunt.registerTask('serve', function(target) {
    grunt.task.run([
      'connect:livereload',
      'watch'
    ]);
  });

};