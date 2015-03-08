module.exports = function ( grunt ) {

  var stdFiles = ['**', '!**/bower_components/**', '!dist', '!**/build/**',
    '!.project', '!.idea', '!**/node_modules/**', '!data/mongo/**'];
  var addNodeModules = ['**/node_modules/!(bower|npmflat|shelljs|grunt*)/**', '**/node_modules/.bin/!(bower|grunt|npmflat|shjs)*'];
  var allFiles = stdFiles.concat( addNodeModules );

  var className = 'node-rest',
    distRoot = 'dist/',
    distFiles = distRoot + '**/*',
    buildRoot = 'build/',
    buildFiles = buildRoot + '**/*',
    stageRoot = buildRoot + className + '/',
    stageFiles = stageRoot + '/**/*',
    archiveFile = distRoot + className + '.zip',
    updateFile = distRoot + className + '-update.zip';

  grunt.registerTask('listFiles', 'List files by spec', function() {
    var mostFilesEx = grunt.file.expand( allFiles );

    mostFilesEx.forEach(function(fileName) {
      grunt.log.writeln(fileName);
    });

    grunt.log.writeln('Finished' ).ok();
  });

  // Project configuration.
  grunt.initConfig( {
    pkg : grunt.file.readJSON( 'package.json' ),

    compress : {
      deploy   : {
        options : {
          mode    : 'zip',
          archive : archiveFile
        },
        expand  : true,
        cwd     : stageRoot,
        src     : ['**/*', '**/.bin/**'],
        dest    : className + '/'
      },
      "update" : {
        options : {
          mode    : 'zip',
          archive : updateFile
        },
        expand  : true,
        src     : stageRoot,
        dest    : className + '/'
      }
    },

    "copy" : {
      "stage" : {
        files : [
          {
            src  : stdFiles,
            dest : stageRoot
          }
        ]
      },
      "withNodeModules" : {
        files : [
          {
            src  : allFiles,
            dest : stageRoot
          }
        ]
      }
    },

    "clean" : {
      "deploy" : [distFiles],
      "build"  : [buildFiles]
    }
  } );

  grunt.loadNpmTasks( 'grunt-contrib-copy' );
  grunt.loadNpmTasks( 'grunt-contrib-compress' );
  grunt.loadNpmTasks( 'grunt-contrib-clean' );

  // Default task(s).
  grunt.registerTask( 'deploy', ['clean', 'copy:stage', 'compress:deploy'] );
  grunt.registerTask( 'deploy-with-node-modules', ['clean', 'copy:withNodeModules', 'compress:deploy'] );

};