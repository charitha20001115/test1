sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'mark',
            componentId: 'mark_tObjectPage',
            contextPath: '/mark_t'
        },
        CustomPageDefinitions
    );
});