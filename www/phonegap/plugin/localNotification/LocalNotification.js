/**
 * 
 * @author Ally Ogilvie
 * @copyright WizCorp Inc. [ Incorporated Wizards ] 2011
 * @file LocalNotification.m for PhoneGap
 *
 */

var localNotification = {

    launch : function(options) {
        return cordova.exec(null, null, "LocalNotification", "launch", [options]);
    },

	add : function(id, options) {

		return cordova.exec(null, null, "LocalNotification", "addNotification", [id, options]);
	},

	cancel : function(id) {
		return cordova.exec(null, null, "LocalNotification", "cancelNotification", [id]);
	},
	
	cancelAll : function() {
        return cordova.exec(null, null,"LocalNotification", "cancelAllNotifications", []);
    },
    
    queue : function(id, options) {
        
		return cordova.exec(null, null, "LocalNotification", "queueNotification", [id, options]);
	},

    getApplicationBadge : function(s) {
        return cordova.exec(s, null, "LocalNotification", "getApplicationBadge", []);                      
    },
        
    setApplicationBadge : function(s, value) {
        return cordova.exec(s, null, "LocalNotification", "getApplicationBadge", [value]);
    }

}



/*
*
*   Example functions
*

function sendNotif() {
    myOptions = {
        seconds: 30,
        message: 'chaaaarrrliieeeee',
        badge: 1
    }
    localNotification.add( "0", myOptions );
    
};

function cancelLastNotif() {
    localNotification.cancel( "0" );
    
};

function cancelAllNotif() {
    
    localNotification.cancelAll();
    
};



*/
