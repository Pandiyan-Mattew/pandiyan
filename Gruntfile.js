module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch:{
			sass : {
				files : 'sass/*.scss',
				tasks : ['sass', 'concat:css']
			}
		},
		sass : {
			dist : {
				files : {
					'css/custom.css' : 'sass/*.scss'
				}
			}
		},
		concat:{
			options:{
				seperator : "\n\n"
			},
			css:{
				src : ['dev/bootstrap/dist/css/bootstrap.css','dev/css/*.css', 'css/*.css'],
				dest : 'build/css/main.css'
			},
			js : {
				src : ['dev/bootstrap/dist/js/bootstrap.min.js','dev/jquery/dist/jquery.min.js'],
				dest : 'build/js/main.js'
			}
		},
		cssmin:{
			css:{
				src : ['build/css/main.css'],
				dest : 'build/css/main.min.css'
			}
		},
		uglify:{
			js:{
				src : ['build/js/main.js'],
				dest : 'build/js/main.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('build', ['concat', 'cssmin', 'uglify', 'sass']);
};