;
"use strict";

(function(){

	Object.prototype.events = {};

	Object.prototype.subscribe = function(eventName, callback) {
		// if(typeof eventName === 'string' && typeof callback === 'function') {
		// 	this.events[eventName] = callback;
		// }
	};

	Object.prototype.unsubscribe = function(eventName) {
		// delete this.events.eventName;
	};

	Object.prototype.publish = function(eventName) {
		
	}

});
