import Ember from 'ember';

export default Ember.Controller.extend({

	needs: 'application',
	header: Ember.computed.alias("controllers.application.header"),

	time: null,
	date: null,

	dataProfile: null,
	selectedProfile: null,

	data: {
		date: null,
		startTime: null,
		startTimeMs: null,
		endTime: null,
		endTimeMs: null,
		totalTime: null
	},

	hour: 0,
	min: 0,
	sec: 0,

	btnStartDisabled: 'cyan darken-3',
	btnStopDisabled: 'disabled',
	btnResetDisabled: 'disabled',
	btnSaveDisabled: 'disabled',

	setData: function(data){
		var dataProfile = JSON.parse(atob(localStorage.getItem(this.get('selectedProfile'))));

  		dataProfile.push(data);
  		localStorage.setItem(this.get('selectedProfile'), btoa(JSON.stringify(dataProfile)));
	},

	getFormatTime: function(msec){
		var hh = Math.floor(msec / 1000 / 60 / 60);
	    msec -= hh * 1000 * 60 * 60;
	    var mm = Math.floor(msec / 1000 / 60);
	    msec -= mm * 1000 * 60;
	    var ss = Math.floor(msec / 1000);
	    msec -= ss * 1000;
	    var total = hh + ':'+ mm + ':' + ss;

	    return total;
	},

	actions:{
		start: function(){
			var now = new Date();

			if(this.get('btnStartDisabled') === 'cyan darken-3'){
				this.set('btnStopDisabled', 'red darken-4');
				this.set('btnStartDisabled', 'disabled');

				this.set('header.style', 'red darken-4');

				this.set('data.date', now.getUTCDate()+'/'+ (now.getUTCMonth() + 1) +'/'+ now.getFullYear());
				this.set('data.startTime', now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds());
				this.set('data.startTimeMs', now.getTime());
			}
		},

		reset: function(){
			if(this.get('btnResetDisabled') === 'cyan darken-3'){
				this.set('data.date', null);
				this.set('data.startTime', null);
				this.set('data.startTimeMs', null);
				this.set('data.endTime', null);
				this.set('data.endTimeMs', null);
				this.set('data.totalTime', null);

				this.set('btnStartDisabled', 'cyan darken-3');
				this.set('btnResetDisabled', 'disabled');
				this.set('btnSaveDisabled', 'disabled');
				this.set('btnStopDisabled', 'disabled');

				this.set('hour', 0);
				this.set('min', 0);
				this.set('sec', 0);
			}	
		},

		stop: function(){
			var now = new Date();

			if(this.get('btnStopDisabled') === 'red darken-4'){
				this.set('data.endTime', now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds());
				this.set('data.endTimeMs', now.getTime());

				this.set('data.totalTime', this.getFormatTime(this.get('data.endTimeMs') - this.get('data.startTimeMs')));

				this.set('header.style', 'blue-grey darken-1');

				this.set('btnStartDisabled', 'disabled');
				this.set('btnResetDisabled', 'cyan darken-3');
				this.set('btnSaveDisabled', 'cyan darken-3');
				this.set('btnStopDisabled', 'disabled');
			}	
		},

		save: function(){
			var data = this.get('data');

			if(this.get('btnSaveDisabled') === 'cyan darken-3'){
				this.set('btnStartDisabled', 'disabled');
				this.set('btnResetDisabled', 'cyan darken-3');
				this.set('btnStopDisabled', 'disabled');
				this.set('btnSaveDisabled', 'disabled');

				this.setData(data);
			}
		}
	}
});
