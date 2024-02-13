sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'mark',
            componentId: 'mark_tList',
            contextPath: '/mark_t'
        },
        CustomPageDefinitions
    );
});