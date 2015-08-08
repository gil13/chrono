import Ember from 'ember';

export default Ember.Controller.extend({

	actions:{
		selectProfile: function(profile){
			console.log('Go to more info about == >', profile);
		}
	}
});
