module.exports = function ( grunt ) {

  var stdFiles = ['**', '!dist', '!**/build/**', '!.project', '!.idea',
    '!**/bower_components/**', '!node_modules/**', '!**/Sandbox/**' ];
  var addNodeModules = ['node_modules/!(bower|npmflat|shelljs|grunt*)/**', 'node_modules/.bin/!(bower|grunt|npmflat|shjs)*'];
  var allFiles = stdFiles.concat( addNodeModules );

  var className = 'AngularClass',  // CUSTOMIZE: Change this name
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
        },

        "jasmine" : {
          files : [
            {
              expand  : true,
              flatten : true,
              filter  : 'isFile',
              src     : ['bower_components/jasmine/tmp/lib/jasmine-*/*.js'],
              dest    : 'common/js/jasmine/'
            },
            {
              expand  : true,
              flatten : true,
              filter  : 'isFile',
              src     : ['bower_components/jasmine/tmp/lib/jasmine-*/*.css'],
              dest    : 'common/css/jasmine/'
            }
          ]
        }
      },

      "clean"      : {
        "deploy" : [distFiles],
        "build"  : [buildFiles]
      },
      "cleanempty" : {
        "update" : {
          "src" : stageFiles
        }
      },

      bower : {
        install : {
          //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
          options : {
            verbose          : true,
            "cleanTargetDir" : true,
            layout           : "byType",
            targetDir        : "common"
          }
        }
      },

      "unzip" : {
        "jasmine"  : {
          src  : "bower_components/jasmine/dist/jasmine-standalone-2.1.3.zip",
          dest : "bower_components/jasmine/tmp"
        },
        "lastDist" : {
          src  : "dist/" + archiveFile,
          dest : buildRoot
        }
      }

    }
  );

  grunt.loadNpmTasks( 'grunt-bower-task' );
  grunt.loadNpmTasks( 'grunt-preen' );
  grunt.loadNpmTasks( 'grunt-contrib-copy' );
  grunt.loadNpmTasks( 'grunt-contrib-compress' );
  grunt.loadNpmTasks( 'grunt-contrib-clean' );
  grunt.loadNpmTasks( 'grunt-cleanempty' );
  grunt.loadNpmTasks( 'grunt-zip' );

  grunt.registerTask( 'stage', ['clean:build', 'copy:stage'] );
  grunt.registerTask( 'refresh-libs', ['bower', 'preen', 'unzip:jasmine', 'copy:jasmine'] );
  grunt.registerTask( 'deploy', ['clean', 'copy:stage', 'compress:deploy'] );
  grunt.registerTask( 'deploy-with-node-modules', ['clean', 'copy:withNodeModules', 'compress:deploy'] );
  grunt.registerTask( 'default',
    ['bower', 'preen', 'unzip:jasmine', 'copy:jasmine', 'clean', 'copy:stage', 'compress:deploy'] );

};