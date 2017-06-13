'use strict';
exports.config = {
    framework: 'mocha',
    mochaOpts: {
        recursive: true,
        reporter: 'mocha-testrail-reporter',
        reporterOptions: {
            domain: 'testroman.testrail.net',
            username: 'romchick.k@gmail.com',
            password: 'nYDVuoYcYSnVfDuuy/1B',
            projectId: 1,
            suiteId: 1,
        },
        fullTrace: true,
        noExit: true,
        timeout: 9999
    },
    getPageTimeout: 5000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: process.env.BROWSER_NAME || 'chrome',
        chromeOptions: {
            args: ['--start-maximized']
        }
    },

    loggingPrefs: {
        'driver': process.env.PROTRACTOR_DEBUG || 'INFO',
        'server': process.env.PROTRACTOR_DEBUG || 'INFO',
        'browser': process.env.PROTRACTOR_DEBUG || 'INFO'
    },
    specs: ['test.spec.js'],

};

