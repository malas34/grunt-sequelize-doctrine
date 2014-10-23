/*
 * grunt-sequelize-doctrine
 * https://github.com/Matthieu/grunt-sequelize-doctrine
 *
 * Copyright (c) 2014 malas34
 * Licensed under the MIT license.
 */
/*global module, require*/
module.exports = function (grunt) {

    'use strict';

    // Project configuration.
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ]
        },

        jasmine: {
            pivotal: {
                src: 'tasks/**/*.js',
                options: {
                    specs: 'tests/*-spec.js',
                    helpers: 'tests/*-helper.js'
                }
            }
        },

        // Configuration to be run (and then tested).
        build_models: {
            options: {},
            files: 'models/orm/*.orm.xml'
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'jasmine']);

};
