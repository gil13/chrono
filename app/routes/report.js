import Ember from 'ember';

export default Ember.Route.extend({

	setupController: function(controller, model) {
    	controller.set('model', model);
  	},

	beforeModel: function(){
        this.controllerFor('application').set('header.label', 'Report');

  	},

  	model: function(){
        var selectedProfile = localStorage.getItem('selectedProfile');
        var profileData = JSON.parse(atob(localStorage.getItem(selectedProfile)));
        var today = new Date();
        today = today.getUTCDate()+'/'+ (today.getUTCMonth() + 1) +'/'+ today.getFullYear();
        var profile = {
            id : selectedProfile,
            timeToday : null,
            timeThisWeek : null,
            timeThisMonth : null,
        };


        console.log(today);
        console.log(profileData);

        if(!selectedProfile){
            this.transitionTo('application');
        }

        return profile;
  	}
});
