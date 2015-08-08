import Ember from 'ember';

export default Ember.Route.extend({

	setupController: function(controller, model) {
    	controller.set('model', model);
  	},

  	checkData: function(profile){
  		var dataProfile = JSON.parse(atob(localStorage.getItem(profile)));
  		this.controllerFor('main').set('dataProfile', dataProfile);
  	},

  	beforeModel: function(){
  		this.controllerFor('application').set('header.label', 'Main');
  	},
	
	model: function(){
		var selectedProfile = localStorage.getItem('selectedProfile');
		if (selectedProfile){
			this.controllerFor('main').set('selectedProfile', selectedProfile);
			this.checkData(selectedProfile);
			return selectedProfile;
		}	
		else{
			this.transitionTo('application');
		}
	}
});
