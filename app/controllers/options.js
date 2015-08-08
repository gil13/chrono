import Ember from 'ember';

export default Ember.Controller.extend({

	languageSelection: false,

	actions:{
		clearData: function(){
			localStorage.clear();
		},

		openLanguage: function(){
			this.set('languageSelection', true);
		},

		selectLanguage: function(language){
			console.log('Set language to ====> ', language);
		}
	}
});
