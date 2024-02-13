sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'mark/test/integration/FirstJourney',
		'mark/test/integration/pages/mark_tList',
		'mark/test/integration/pages/mark_tObjectPage'
    ],
    function(JourneyRunner, opaJourney, mark_tList, mark_tObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('mark') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThemark_tList: mark_tList,
					onThemark_tObjectPage: mark_tObjectPage
                }
            },
            opaJourney.run
        );
    }
);