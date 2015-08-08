import Ember from 'ember';

export default Ember.Controller.extend({
	newProfile: null,
	selectedProfile: null,
	
	actions:{
		selectProfile: function(profile){
			var profileLs = localStorage.getItem('selectedProfile');
			var profileArray = localStorage.getItem(profile);
			var newProfile = [];

			if(!profileArray){
				localStorage.setItem(profile, btoa(JSON.stringify(newProfile)));
			}

			if (profileLs !== profile){
				localStorage.setItem('selectedProfile', profile);
			}
			this.transitionToRoute('main');
		},
		removeProfile: function(){
			console.log(' ----------> Rmoving Profile');
		}
	}
});
