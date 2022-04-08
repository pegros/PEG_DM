({
    doInit : function(component, event, helper) {
        helper.IS_DEBUG = component.get("v.isDebug");
        if (helper.IS_DEBUG) console.log('doInit: START');

        let bsJobIdField = component.get("v.bsJobIdField");
        if (helper.IS_DEBUG) console.log('doInit: bsJobIdField fetched ', bsJobIdField);

        if (!bsJobIdField) {
            console.warn('doInit: missing bsJobIdField in configuration!');
            component.set("v.message","Init failed: missing Bulk Send Job ID Field !");
            component.set("v.isLoading",false);
        }
        else {
            component.set("v.campaignFields", [bsJobIdField]);
            console.warn('doInit: bsJobIdField registered ',component.get("v.campaignFields"));
        }

        if (helper.IS_DEBUG) console.log('doInit: END');
    },
    finalizeInit : function(component, event, helper) {
        if (helper.IS_DEBUG) console.log('finalizeInit: START');
        //if (helper.IS_DEBUG) console.log('finalizeInit: event received ', event);
        //if (helper.IS_DEBUG) console.log('finalizeInit: event params ', JSON.stringify(event.getParams()));

        let status = event.getParam('changeType');
        if (helper.IS_DEBUG) console.log('finalizeInit: status extracted ', status);
        
        if (status == 'LOADED') {
            
            if (helper.IS_DEBUG) console.log('finalizeInit: processing load event');
            
            let bsJobIdField = component.get("v.bsJobIdField");
            if (helper.IS_DEBUG) console.log('bsJobIdField: bsJobIdField fetched ', bsJobIdField);
            if (!bsJobIdField) {
                console.warn('finalizeInit: missing bsJobIdField in configuration!');
                if (helper.IS_DEBUG) console.log('finalizeInit: END KO');
                return;
            }

            let recordLoadError = component.get("v.recordLoadError");		
            if (recordLoadError) {
                console.warn('finalizeInit: BS Job ID fetch failure ', JSON.stringify(recordLoadError));
                component.set("v.message","BS Job ID fetch failed: " + JSON.stringify(recordLoadError));
                component.set("v.isLoading",false);
                if (helper.IS_DEBUG) console.log('finalizeInit: END KO');
                return;
            }

            let campaignRecord = component.get("v.campaignRecord");
            if (helper.IS_DEBUG) console.log('finalizeInit: campaignRecord fetched ', JSON.stringify(campaignRecord));

            if ((!campaignRecord) || (!campaignRecord[bsJobIdField])) {
                console.warn('finalizeInit: Missing BS Job ID');
                component.set("v.message","BS Job ID missing on Campaign!");
                component.set("v.isLoading",false);
                if (helper.IS_DEBUG) console.log('finalizeInit: END');
                return;
            }

            if (helper.IS_DEBUG) console.log('finalizeInit: registering Bulk Send Job ID ', campaignRecord[bsJobIdField]);
            component.set("v.targetId",campaignRecord[bsJobIdField]);
            component.set("v.message","");
            if (helper.IS_DEBUG) component.set("v.message","Last BulkSendJob ID fetched: " + campaignRecord[bsJobIdField]);
            component.set("v.isLoading",false);
            if (helper.IS_DEBUG) console.log('finalizeInit: END');
        }
        else {
            if (helper.IS_DEBUG) console.log('finalizeInit: ignoring event');

            let recordLoadError = component.get("v.recordLoadError");
            if (recordLoadError) {
                console.warn('finalizeInit: Issue raised when loading BS Job ID ', JSON.stringify(recordLoadError));
                component.set("v.message","Issue raised when loading BS Job ID: " + JSON.stringify(recordLoadError));
                component.set("v.isLoading",false);
                if (helper.IS_DEBUG) console.log('finalizeInit: END KO');
                return;
            }
        }
    }
})
