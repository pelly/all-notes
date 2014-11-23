/*jslint nomen: true*/
/*global $,define,require */

require.config({
    baseUrl: 'js',
    paths: {
        data: './data',
        view: './view',
        partial: './view/partial',
        extension: './extension'
    }
});

require(['data/app-data-loader', 'view/all-views'], function (loader, views) {
    'use strict';

    loader.init({
        success: views.init,
        failure: views.init
    });

    require(['lib/auto-suggest-words']);
})
;
