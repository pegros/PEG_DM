({
    doInit : function(component, event, helper) {
        console.log('doInit');
    },
    doReady : function(component, event, helper) {
        console.log('doReady: event ',event);
        console.log('doReady: event params ',JSON.stringify(event.getParams()));
    }
})
