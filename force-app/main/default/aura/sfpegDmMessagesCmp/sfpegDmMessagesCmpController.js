({
    doInit : function(component, event, helper) {
        helper.IS_DEBUG = component.get("v.isDebug");
        if (helper.IS_DEBUG) console.log('doInit: START');

        let messageClass = '';
        if (component.get("v.hideCardHeader")) messageClass += ' hideCardHeader';
        if (component.get("v.hideSegmentSend")) messageClass += ' hideSegmentSend';
        if (component.get("v.hideBulkSend")) messageClass += ' hideBulkSend';
        if (component.get("v.hideSummary")) messageClass += ' hideSummary';
        if (component.get("v.hideTable")) messageClass += ' hideTable';
        if (    messageClass.includes('hideBulkSend')
            &&  !messageClass.includes('hideSegmentSend')) messageClass += ' removeSegmentSendPadding';
        if (    messageClass.includes('hideSummary')
            &&  messageClass.includes('hideBulkSend')
            &&  messageClass.includes('hideSegmentSend')) messageClass += ' hideCompleteSummary';
        if (helper.IS_DEBUG) console.log('doInit: messageClass init ', messageClass);
        component.set('v.messageClass',messageClass);

        if (helper.IS_DEBUG) console.log('doInit: END');
	}
})
