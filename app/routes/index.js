import Ember from 'ember';

export default Ember.Route.extend({
	
	setupController: function(controller, model) {
    	controller.set('model', model);
  	},

  	beforeModel: function(){
  		this.controllerFor('application').set('header.label', 'Inicio');
  	},

	model: function(){
		var check = localStorage.getItem('profiles');

		if(check){return JSON.parse(localStorage.getItem('profiles'));}	
	},

	actions:{
		addProfile: function(){
			var nom = this.controllerFor('index').get('newProfile');
			var hasProfiles = localStorage.getItem('profiles');
			var profiles;
			var bol = Ember.$.inArray(nom, profiles);
			var newProfile = [];

			if(hasProfiles) {profiles = JSON.parse(localStorage.getItem('profiles'));}
			else{profiles = [];}

			if(bol !== -1){
				alert('El perfil ya esta registrado en el sistema, seleccionalo en la lista o use otro nombre');
			}
			else{
				profiles.push(nom);
				localStorage.setItem('profiles', JSON.stringify(profiles));
				localStorage.setItem(nom, btoa(JSON.stringify(newProfile)));
				this.refresh();
			}
		},
	}	
});
