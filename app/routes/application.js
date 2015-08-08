import Ember from 'ember';

export default Ember.Route.extend({

	version: '0.0.1',
	lang: 'es',

	setupController: function(controller, model) {
    	controller.set('model', model);
  	},
	
	model: function(){
		localStorage.setItem('appVersion', this.get('version'));
		localStorage.setItem('lang', this.get('lang'));
	}
});