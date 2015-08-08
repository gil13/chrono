/* jshint ignore:start */

/* jshint ignore:end */

define('watch-chrono/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'watch-chrono/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('watch-chrono/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('watch-chrono/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('watch-chrono/components/labeled-radio-button', ['exports', 'ember-radio-button/components/labeled-radio-button'], function (exports, LabeledRadioButton) {

	'use strict';

	exports['default'] = LabeledRadioButton['default'];

});
define('watch-chrono/components/materialize-badge', ['exports', 'ember', 'watch-chrono/components/md-badge'], function (exports, Ember, MaterializeBadge) {

  'use strict';

  exports['default'] = MaterializeBadge['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-badge}} has been deprecated. Please use {{md-badge}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-button-submit', ['exports', 'ember', 'watch-chrono/components/md-btn-submit'], function (exports, Ember, MaterializeButtonSubmit) {

  'use strict';

  exports['default'] = MaterializeButtonSubmit['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-button-submit}} has been deprecated. Please use {{md-btn-submit}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-button', ['exports', 'ember', 'watch-chrono/components/md-btn'], function (exports, Ember, MaterializeButton) {

  'use strict';

  exports['default'] = MaterializeButton['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-button}} has been deprecated. Please use {{md-btn}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-card-action', ['exports', 'ember', 'watch-chrono/components/md-card-action'], function (exports, Ember, MaterializeCardAction) {

  'use strict';

  exports['default'] = MaterializeCardAction['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-card-action}} has been deprecated. Please use {{md-card-action}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-card-content', ['exports', 'ember', 'watch-chrono/components/md-card-content'], function (exports, Ember, MaterializeCardContent) {

  'use strict';

  exports['default'] = MaterializeCardContent['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-card-content}} has been deprecated. Please use {{md-card-content}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-card-panel', ['exports', 'ember', 'watch-chrono/components/md-card-panel'], function (exports, Ember, MaterializeCardPanel) {

  'use strict';

  exports['default'] = MaterializeCardPanel['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-card-panel}} has been deprecated. Please use {{md-card-panel}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-card-reveal', ['exports', 'ember', 'watch-chrono/components/md-card-reveal'], function (exports, Ember, MaterializeCardReveal) {

  'use strict';

  exports['default'] = MaterializeCardReveal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-card-reveal}} has been deprecated. Please use {{md-card-reveal}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-card', ['exports', 'ember', 'watch-chrono/components/md-card'], function (exports, Ember, MaterializeCard) {

  'use strict';

  exports['default'] = MaterializeCard['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-card}} has been deprecated. Please use {{md-card}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-checkbox', ['exports', 'ember', 'watch-chrono/components/md-check'], function (exports, Ember, materializeCheckbox) {

  'use strict';

  exports['default'] = materializeCheckbox['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-checkbox}} has been deprecated. Please use {{md-check}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-checkboxes', ['exports', 'ember', 'watch-chrono/components/md-checks'], function (exports, Ember, materializeCheckboxes) {

  'use strict';

  exports['default'] = materializeCheckboxes['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-checkboxes}} has been deprecated. Please use {{md-checks}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-collapsible-card', ['exports', 'ember', 'watch-chrono/components/md-card-collapsible'], function (exports, Ember, MaterializeCollapsibleCard) {

  'use strict';

  exports['default'] = MaterializeCollapsibleCard['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-collapsible-card}} has been deprecated. Please use {{md-card-collapsible}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-collapsible', ['exports', 'ember', 'watch-chrono/components/md-collapsible'], function (exports, Ember, MaterializeCollapsible) {

  'use strict';

  exports['default'] = MaterializeCollapsible['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-collapsible}} has been deprecated. Please use {{md-collapsible}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-copyright', ['exports', 'ember', 'watch-chrono/components/md-copyright'], function (exports, Ember, materializeCopyright) {

  'use strict';

  exports['default'] = materializeCopyright['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-copyright}} has been deprecated. Please use {{md-copyright}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-date-input', ['exports', 'ember', 'watch-chrono/components/md-input-date'], function (exports, Ember, materializeDateInput) {

  'use strict';

  exports['default'] = materializeDateInput['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-date-input}} has been deprecated. Please use {{md-input-date}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-input-field', ['exports', 'ember', 'watch-chrono/components/md-input-field'], function (exports, Ember, materializeInputField) {

  'use strict';

  exports['default'] = materializeInputField['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-input-field}} has been deprecated. Please use {{md-input-field}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-input', ['exports', 'ember', 'watch-chrono/components/md-input'], function (exports, Ember, materializeInput) {

  'use strict';

  exports['default'] = materializeInput['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-input}} has been deprecated. Please use {{md-input}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-loader', ['exports', 'ember', 'watch-chrono/components/md-loader'], function (exports, Ember, materializeLoader) {

  'use strict';

  exports['default'] = materializeLoader['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-loader}} has been deprecated. Please use {{md-loader}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-modal', ['exports', 'ember', 'watch-chrono/components/md-modal'], function (exports, Ember, MaterializeModal) {

  'use strict';

  exports['default'] = MaterializeModal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-modal}} has been deprecated. Please use {{md-modal}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-navbar', ['exports', 'ember', 'watch-chrono/components/md-navbar'], function (exports, Ember, MaterializeNavBar) {

  'use strict';

  exports['default'] = MaterializeNavBar['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-navbar}} has been deprecated. Please use {{md-navbar}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-pagination', ['exports', 'ember', 'watch-chrono/components/md-pagination'], function (exports, Ember, materializePagination) {

  'use strict';

  exports['default'] = materializePagination['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-pagination}} has been deprecated. Please use {{md-pagination}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-parallax', ['exports', 'ember', 'watch-chrono/components/md-parallax'], function (exports, Ember, materializeParallax) {

  'use strict';

  exports['default'] = materializeParallax['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-parallax}} has been deprecated. Please use {{md-parallax}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-radio', ['exports', 'ember', 'watch-chrono/components/md-radio'], function (exports, Ember, materializeRadio) {

  'use strict';

  exports['default'] = materializeRadio['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-radio}} has been deprecated. Please use {{md-radio}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-radios', ['exports', 'ember', 'watch-chrono/components/md-radios'], function (exports, Ember, materializeRadios) {

  'use strict';

  exports['default'] = materializeRadios['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-radios}} has been deprecated. Please use {{md-radios}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-range', ['exports', 'ember', 'watch-chrono/components/md-range'], function (exports, Ember, materializeRange) {

  'use strict';

  exports['default'] = materializeRange['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-range}} has been deprecated. Please use {{md-range}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-select', ['exports', 'ember', 'watch-chrono/components/md-select'], function (exports, Ember, materializeSelect) {

  'use strict';

  exports['default'] = materializeSelect['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-select}} has been deprecated. Please use {{md-select}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-switch', ['exports', 'ember', 'watch-chrono/components/md-switch'], function (exports, Ember, materializeSwitch) {

  'use strict';

  exports['default'] = materializeSwitch['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-switch}} has been deprecated. Please use {{md-switch}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-switches', ['exports', 'ember', 'watch-chrono/components/md-switches'], function (exports, Ember, materializeSwitches) {

  'use strict';

  exports['default'] = materializeSwitches['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-switches}} has been deprecated. Please use {{md-switches}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-tabs-tab', ['exports', 'ember', 'watch-chrono/components/md-tab'], function (exports, Ember, materializeTabsTab) {

  'use strict';

  exports['default'] = materializeTabsTab['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-tabs-tab}} has been deprecated. Please use {{md-tab}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-tabs', ['exports', 'ember', 'watch-chrono/components/md-tabs'], function (exports, Ember, materializeTabs) {

  'use strict';

  exports['default'] = materializeTabs['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-tabs}} has been deprecated. Please use {{md-tabs}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/materialize-textarea', ['exports', 'ember', 'watch-chrono/components/md-textarea'], function (exports, Ember, materializeTextarea) {

  'use strict';

  exports['default'] = materializeTextarea['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-textarea}} has been deprecated. Please use {{md-textarea}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('watch-chrono/components/md-badge', ['exports', 'ember-cli-materialize/components/md-badge'], function (exports, materializeBadge) {

	'use strict';

	exports['default'] = materializeBadge['default'];

});
define('watch-chrono/components/md-btn-submit', ['exports', 'ember-cli-materialize/components/md-btn-submit'], function (exports, MaterializeButtonSubmit) {

	'use strict';

	exports['default'] = MaterializeButtonSubmit['default'];

});
define('watch-chrono/components/md-btn', ['exports', 'ember-cli-materialize/components/md-btn'], function (exports, MaterializeButton) {

	'use strict';

	exports['default'] = MaterializeButton['default'];

});
define('watch-chrono/components/md-card-action', ['exports', 'ember-cli-materialize/components/md-card-action'], function (exports, MaterializeCardAction) {

	'use strict';

	exports['default'] = MaterializeCardAction['default'];

});
define('watch-chrono/components/md-card-collapsible', ['exports', 'ember-cli-materialize/components/md-card-collapsible'], function (exports, MaterializeCollapsibleCard) {

	'use strict';

	exports['default'] = MaterializeCollapsibleCard['default'];

});
define('watch-chrono/components/md-card-content', ['exports', 'ember-cli-materialize/components/md-card-content'], function (exports, MaterializeCardContent) {

	'use strict';

	exports['default'] = MaterializeCardContent['default'];

});
define('watch-chrono/components/md-card-panel', ['exports', 'ember-cli-materialize/components/md-card-panel'], function (exports, MaterializeCardPanel) {

	'use strict';

	exports['default'] = MaterializeCardPanel['default'];

});
define('watch-chrono/components/md-card-reveal', ['exports', 'ember-cli-materialize/components/md-card-reveal'], function (exports, MaterializeCardReveal) {

	'use strict';

	exports['default'] = MaterializeCardReveal['default'];

});
define('watch-chrono/components/md-card', ['exports', 'ember-cli-materialize/components/md-card'], function (exports, MaterializeCard) {

	'use strict';

	exports['default'] = MaterializeCard['default'];

});
define('watch-chrono/components/md-check', ['exports', 'ember-cli-materialize/components/md-check'], function (exports, materializeCheckbox) {

	'use strict';

	exports['default'] = materializeCheckbox['default'];

});
define('watch-chrono/components/md-checks', ['exports', 'ember-cli-materialize/components/md-checks'], function (exports, materializeCheckboxes) {

	'use strict';

	exports['default'] = materializeCheckboxes['default'];

});
define('watch-chrono/components/md-collapsible', ['exports', 'ember-cli-materialize/components/md-collapsible'], function (exports, MaterializeCollapsible) {

	'use strict';

	exports['default'] = MaterializeCollapsible['default'];

});
define('watch-chrono/components/md-copyright', ['exports', 'ember-cli-materialize/components/md-copyright'], function (exports, materializeCopyright) {

	'use strict';

	exports['default'] = materializeCopyright['default'];

});
define('watch-chrono/components/md-input-date', ['exports', 'ember-cli-materialize/components/md-input-date'], function (exports, materializeDateInput) {

	'use strict';

	exports['default'] = materializeDateInput['default'];

});
define('watch-chrono/components/md-input-field', ['exports', 'ember-cli-materialize/components/md-input-field'], function (exports, materializeInputField) {

	'use strict';

	exports['default'] = materializeInputField['default'];

});
define('watch-chrono/components/md-input', ['exports', 'ember-cli-materialize/components/md-input'], function (exports, materializeInput) {

	'use strict';

	exports['default'] = materializeInput['default'];

});
define('watch-chrono/components/md-loader', ['exports', 'ember-cli-materialize/components/md-loader'], function (exports, materializeLoader) {

	'use strict';

	exports['default'] = materializeLoader['default'];

});
define('watch-chrono/components/md-modal-container', ['exports', 'ember-cli-materialize/components/md-modal-container'], function (exports, mdModalContainer) {

	'use strict';

	exports['default'] = mdModalContainer['default'];

});
define('watch-chrono/components/md-modal', ['exports', 'ember-cli-materialize/components/md-modal'], function (exports, materializeModal) {

	'use strict';

	exports['default'] = materializeModal['default'];

});
define('watch-chrono/components/md-navbar', ['exports', 'ember-cli-materialize/components/md-navbar'], function (exports, MaterializeNavBar) {

	'use strict';

	exports['default'] = MaterializeNavBar['default'];

});
define('watch-chrono/components/md-pagination', ['exports', 'ember-cli-materialize/components/md-pagination'], function (exports, materializePagination) {

	'use strict';

	exports['default'] = materializePagination['default'];

});
define('watch-chrono/components/md-parallax', ['exports', 'ember-cli-materialize/components/md-parallax'], function (exports, materializeParallax) {

	'use strict';

	exports['default'] = materializeParallax['default'];

});
define('watch-chrono/components/md-radio', ['exports', 'ember-cli-materialize/components/md-radio'], function (exports, materializeRadio) {

	'use strict';

	exports['default'] = materializeRadio['default'];

});
define('watch-chrono/components/md-radios', ['exports', 'ember-cli-materialize/components/md-radios'], function (exports, materializeRadios) {

	'use strict';

	exports['default'] = materializeRadios['default'];

});
define('watch-chrono/components/md-range', ['exports', 'ember-cli-materialize/components/md-range'], function (exports, materializeRange) {

	'use strict';

	exports['default'] = materializeRange['default'];

});
define('watch-chrono/components/md-select', ['exports', 'ember-cli-materialize/components/md-select'], function (exports, materializeSelect) {

	'use strict';

	exports['default'] = materializeSelect['default'];

});
define('watch-chrono/components/md-switch', ['exports', 'ember-cli-materialize/components/md-switch'], function (exports, materializeSwitch) {

	'use strict';

	exports['default'] = materializeSwitch['default'];

});
define('watch-chrono/components/md-switches', ['exports', 'ember-cli-materialize/components/md-switches'], function (exports, materializeSwitches) {

	'use strict';

	exports['default'] = materializeSwitches['default'];

});
define('watch-chrono/components/md-tab', ['exports', 'ember-cli-materialize/components/md-tab'], function (exports, materializeTabsTab) {

	'use strict';

	exports['default'] = materializeTabsTab['default'];

});
define('watch-chrono/components/md-tabs', ['exports', 'ember-cli-materialize/components/md-tabs'], function (exports, materializeTabs) {

	'use strict';

	exports['default'] = materializeTabs['default'];

});
define('watch-chrono/components/md-textarea', ['exports', 'ember-cli-materialize/components/md-textarea'], function (exports, materializeTextarea) {

	'use strict';

	exports['default'] = materializeTextarea['default'];

});
define('watch-chrono/components/modal-dialog', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('watch-chrono/components/radio-button', ['exports', 'ember-radio-button/components/radio-button'], function (exports, RadioButton) {

	'use strict';

	exports['default'] = RadioButton['default'];

});
define('watch-chrono/controllers/application', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({
		header: {
			label: null,
			style: 'blue-grey darken-1'
		} });

});
define('watch-chrono/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('watch-chrono/controllers/index', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({
		newProfile: null,
		selectedProfile: null,

		actions: {
			selectProfile: function selectProfile(profile) {
				var profileLs = localStorage.getItem('selectedProfile');
				var profileArray = localStorage.getItem(profile);
				var newProfile = [];

				if (!profileArray) {
					localStorage.setItem(profile, btoa(JSON.stringify(newProfile)));
				}

				if (profileLs !== profile) {
					localStorage.setItem('selectedProfile', profile);
				}
				this.transitionToRoute('main');
			},
			removeProfile: function removeProfile() {
				console.log(' ----------> Rmoving Profile');
			}
		}
	});

});
define('watch-chrono/controllers/main', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({

		needs: 'application',
		header: Ember['default'].computed.alias('controllers.application.header'),

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

		setData: function setData(data) {
			var dataProfile = JSON.parse(atob(localStorage.getItem(this.get('selectedProfile'))));

			dataProfile.push(data);
			localStorage.setItem(this.get('selectedProfile'), btoa(JSON.stringify(dataProfile)));
		},

		getFormatTime: function getFormatTime(msec) {
			var hh = Math.floor(msec / 1000 / 60 / 60);
			msec -= hh * 1000 * 60 * 60;
			var mm = Math.floor(msec / 1000 / 60);
			msec -= mm * 1000 * 60;
			var ss = Math.floor(msec / 1000);
			msec -= ss * 1000;
			var total = hh + ':' + mm + ':' + ss;

			return total;
		},

		actions: {
			start: function start() {
				var now = new Date();

				if (this.get('btnStartDisabled') === 'cyan darken-3') {
					this.set('btnStopDisabled', 'red darken-4');
					this.set('btnStartDisabled', 'disabled');

					this.set('header.style', 'red darken-4');

					this.set('data.date', now.getUTCDate() + '/' + (now.getUTCMonth() + 1) + '/' + now.getFullYear());
					this.set('data.startTime', now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds());
					this.set('data.startTimeMs', now.getTime());
				}
			},

			reset: function reset() {
				if (this.get('btnResetDisabled') === 'cyan darken-3') {
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

			stop: function stop() {
				var now = new Date();

				if (this.get('btnStopDisabled') === 'red darken-4') {
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

			save: function save() {
				var data = this.get('data');

				if (this.get('btnSaveDisabled') === 'cyan darken-3') {
					this.set('btnStartDisabled', 'disabled');
					this.set('btnResetDisabled', 'cyan darken-3');
					this.set('btnStopDisabled', 'disabled');
					this.set('btnSaveDisabled', 'disabled');

					this.setData(data);
				}
			}
		}
	});

});
define('watch-chrono/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('watch-chrono/controllers/options', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({

		languageSelection: false,

		actions: {
			clearData: function clearData() {
				localStorage.clear();
			},

			openLanguage: function openLanguage() {
				this.set('languageSelection', true);
			},

			selectLanguage: function selectLanguage(language) {
				console.log('Set language to ====> ', language);
			}
		}
	});

});
define('watch-chrono/controllers/report', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({

		actions: {
			selectProfile: function selectProfile(profile) {
				console.log('Go to more info about == >', profile);
			}
		}
	});

});
define('watch-chrono/helpers/t', ['exports', 'ember-cli-i18n/utils/stream'], function (exports, Stream) {

  'use strict';



  exports['default'] = tHelper;
  function tHelper(params, hash, options, env) {
    var view = env.data.view;
    var path = params.shift();

    var container = view.container;
    var t = container.lookup('utils:t');
    var application = container.lookup('application:main');

    var stream = new Stream['default'](function () {
      return t(path, params);
    });

    // bind any arguments that are Streams
    for (var i = 0, l = params.length; i < l; i++) {
      var param = params[i];
      if (param && param.isStream) {
        param.subscribe(stream.notify, stream);
      };
    }

    application.localeStream.subscribe(stream.notify, stream);

    if (path.isStream) {
      path.subscribe(stream.notify, stream);
    }

    return stream;
  }

});
define('watch-chrono/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, initialize) {

  'use strict';

  exports['default'] = {
    name: 'add-modals-container',
    initialize: initialize['default']
  };

});
define('watch-chrono/initializers/app-version', ['exports', 'watch-chrono/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: 'App Version',
    initialize: function initialize(container, application) {
      if (!registered) {
        var appName = classify(application.toString());
        Ember['default'].libraries.register(appName, config['default'].APP.version);
        registered = true;
      }
    }
  };

});
define('watch-chrono/initializers/export-application-global', ['exports', 'ember', 'watch-chrono/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  }

  ;

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('watch-chrono/initializers/key-responder', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = {
    name: 'ember-key-responder',

    initialize: function initialize(container, application) {
      application.inject('view', 'keyResponder', 'key-responder:main');
      application.inject('component', 'keyResponder', 'key-responder:main');

      //TextField/TextArea are currently uninjectable, so we're going to hack our
      //way in
      Ember['default'].TextSupport.reopen({
        keyResponder: Ember['default'].computed(function () {
          return this.container.lookup('key-responder:main');
        }).readOnly()
      });

      // Set up a handler on the document for keyboard events that are not
      // handled by Ember's event dispatcher.
      Ember['default'].$(document).on('keyup.outside_ember_event_delegation', null, function (event) {

        if (Ember['default'].$(event.target).closest('.ember-view').length === 0) {
          var keyResponder = container.lookup('key-responder:main');
          var currentKeyResponder = keyResponder.get('current');
          if (currentKeyResponder && currentKeyResponder.get('isVisible')) {
            return currentKeyResponder.respondToKeyEvent(event, currentKeyResponder);
          }
        }

        return true;
      });

      // Set up a handler on the ApplicationView for keyboard events that were
      // not handled by the current KeyResponder yet
      container.lookupFactory('view:application').reopen({
        delegateToKeyResponder: Ember['default'].on('keyUp', function (event) {
          var currentKeyResponder = this.get('keyResponder.current');
          if (currentKeyResponder && currentKeyResponder.get('isVisible')) {
            // check to see if the event target is the keyResponder or the
            // keyResponders parents.  if so, no need to dispatch as it has
            // already had a chance to handle this event.
            var id = '#' + currentKeyResponder.get('elementId');
            if (Ember['default'].$(event.target).closest(id).length === 1) {
              return true;
            }
            return currentKeyResponder.respondToKeyEvent(event, currentKeyResponder);
          }
          return true;
        })
      });
    }
  };

});
define('watch-chrono/initializers/link-view', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    Ember['default'].LinkView.reopen({
      attributeBindings: ['data-activates']
    });
  }

  exports['default'] = {
    name: 'link-view',
    initialize: initialize
  };
  /* container, application */

});
define('watch-chrono/initializers/t', ['exports', 'ember', 'ember-cli-i18n/utils/t', 'watch-chrono/helpers/t', 'ember-cli-i18n/utils/stream'], function (exports, Ember, T, tHelper, Stream) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    Ember['default'].HTMLBars._registerHelper('t', tHelper['default']);

    application.localeStream = new Stream['default'](function () {
      return application.get('locale');
    });

    Ember['default'].addObserver(application, 'locale', function () {
      application.localeStream.notify();
    });

    application.register('utils:t', T['default']);
    application.inject('route', 't', 'utils:t');
    application.inject('model', 't', 'utils:t');
    application.inject('component', 't', 'utils:t');
    application.inject('controller', 't', 'utils:t');
  }

  ;

  exports['default'] = {
    name: 't',
    initialize: initialize
  };

});
define('watch-chrono/key-responder', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var get = Ember['default'].get;

  /*
    Holds a stack of key responder views. With this we can neatly handle
    restoring the previous key responder when some modal UI element is closed.
    There are a few simple rules that governs the usage of the stack:
     - mouse click does .replace (this should also be used for programmatically taking focus when not a modal element)
     - opening a modal UI element does .push
     - closing a modal element does .pop

    Also noteworthy is that a view will be signaled that it loses the key focus
    only when it's popped off the stack, not when something is pushed on top. The
    idea is that when a modal UI element is opened, we know that the previously
    focused view will re-gain the focus as soon as the modal element is closed.
    So if the previously focused view was e.g. in the middle of some edit
    operation, it shouldn't cancel that operation.
  */
  var KeyResponder = Ember['default'].ArrayProxy.extend({
    init: function init() {
      this.set('isActive', true);
      this.set('content', Ember['default'].A());
      this._super.apply(this, arguments);
    },

    current: Ember['default'].computed.readOnly('lastObject'),
    pushView: function pushView(view, wasTriggeredByFocus) {
      if (!Ember['default'].isNone(view)) {
        view.trigger('willBecomeKeyResponder', wasTriggeredByFocus);
        this.pushObject(view);
        view.trigger('didBecomeKeyResponder', wasTriggeredByFocus);
      }
      return view;
    },

    resume: function resume() {
      this.set('isActive', true);
    },

    pause: function pause() {
      this.set('isActive', false);
    },

    popView: function popView(wasTriggeredByFocus) {
      if (get(this, 'length') > 0) {
        var view = get(this, 'current');
        if (view) {
          view.trigger('willLoseKeyResponder', wasTriggeredByFocus);
        }
        view = this.popObject();
        if (view) {
          view.trigger('didLoseKeyResponder', wasTriggeredByFocus);
        }
        return view;
      } else {
        return undefined;
      }
    },

    replaceView: function replaceView(view, wasTriggeredByFocus) {
      if (get(this, 'current') !== view) {
        this.popView(wasTriggeredByFocus);
        return this.pushView(view, wasTriggeredByFocus);
      }
    }
  });

  exports['default'] = KeyResponder;

  var KEY_EVENTS = {
    8: 'deleteBackward',
    9: 'insertTab',
    13: 'insertNewline',
    27: 'cancel',
    32: 'insertSpace',
    37: 'moveLeft',
    38: 'moveUp',
    39: 'moveRight',
    40: 'moveDown',
    46: 'deleteForward'
  };

  var MODIFIED_KEY_EVENTS = {
    8: 'deleteForward',
    9: 'insertBacktab',
    37: 'moveLeftAndModifySelection',
    38: 'moveUpAndModifySelection',
    39: 'moveRightAndModifySelection',
    40: 'moveDownAndModifySelection'
  };

  var KeyResponderSupportViewMixin = Ember['default'].Mixin.create({
    // Set to true in your view if you want to accept key responder status (which
    // is needed for handling key events)
    acceptsKeyResponder: false,
    canBecomeKeyResponder: Ember['default'].computed('acceptsKeyResponder', 'disabled', 'isVisible', function () {
      return get(this, 'acceptsKeyResponder') && !get(this, 'disabled') && get(this, 'isVisible');
    }).readOnly(),

    becomeKeyResponderViaMouseDown: Ember['default'].on('mouseDown', function (evt) {
      var responder = this.get('keyResponder');
      if (responder === undefined) {
        return;
      }

      Ember['default'].run.later(function () {
        responder._inEventBubblingPhase = undefined;
      }, 0);

      if (responder._inEventBubblingPhase === undefined) {
        responder._inEventBubblingPhase = true;
        this.becomeKeyResponder(false);
      }
    }),

    /*
      Sets this view as the target of key events. Call this if you need to make
      this happen programmatically.  This gets also called on mouseDown if the
      view handles that, returns true and doesn't have property
      'acceptsKeyResponder'
      set to false. If mouseDown returned true but 'acceptsKeyResponder' is
      false, this call is propagated to the parent view.
       If called with no parameters or with replace = true, the current key
      responder is first popped off the stack and this view is then pushed. See
      comments for Ember.KeyResponderStack above for more insight.
    */
    becomeKeyResponder: function becomeKeyResponder(replace, wasTriggeredByFocus) {
      if (wasTriggeredByFocus === undefined) {
        wasTriggeredByFocus = false;
      }

      var keyResponder = get(this, 'keyResponder');

      if (!keyResponder) {
        return;
      }

      if (get(keyResponder, 'current') === this) {
        return;
      }

      if (get(this, 'canBecomeKeyResponder')) {
        if (replace === undefined || replace === true) {
          return keyResponder.replaceView(this, wasTriggeredByFocus);
        } else {
          return keyResponder.pushView(this, wasTriggeredByFocus);
        }
      } else {
        var parent = get(this, 'parentView');

        if (parent && parent.becomeKeyResponder) {
          return parent.becomeKeyResponder(replace, wasTriggeredByFocus);
        }
      }
    },

    becomeKeyResponderViaFocus: function becomeKeyResponderViaFocus() {
      return this.becomeKeyResponder(true, true);
    },

    /*
      Resign key responder status by popping the head off the stack. The head
      might or might not be this view, depending on whether user clicked anything
      since this view became the key responder. The new key responder
      will be the next view in the stack, if any.
    */
    resignKeyResponder: function resignKeyResponder(wasTriggeredByFocus) {
      if (wasTriggeredByFocus === undefined) {
        wasTriggeredByFocus = false;
      }

      var keyResponder = get(this, 'keyResponder');

      if (!keyResponder) {
        return;
      }

      keyResponder.popView(wasTriggeredByFocus);
    },

    resignKeyResponderViaFocus: function resignKeyResponderViaFocus() {
      return this.resignKeyResponder(true);
    },

    respondToKeyEvent: function respondToKeyEvent(event) {
      Ember['default'].run(this, function () {
        if (get(this, 'keyResponder.isActive')) {
          if (get(this, 'keyResponder.current.canBecomeKeyResponder')) {
            get(this, 'keyResponder.current').interpretKeyEvents(event);
          }
        }
      });
    },

    interpretKeyEvents: function interpretKeyEvents(event) {
      var mapping = event.shiftKey ? MODIFIED_KEY_EVENTS : KEY_EVENTS;
      var eventName = mapping[event.keyCode];

      if (eventName && this.has(eventName)) {
        return this.trigger(eventName, event);
      }

      return false;
    }
  });

  Ember['default'].View.reopen(KeyResponderSupportViewMixin);
  Ember['default'].Component.reopen(KeyResponderSupportViewMixin);

  var KeyResponderInputSupport = Ember['default'].Mixin.create({
    acceptsKeyResponder: true,
    init: function init() {
      this._super.apply(this, arguments);
      this.on('focusIn', this, this.becomeKeyResponderViaFocus);
      this.on('focusOut', this, this.resignKeyResponderViaBlur);
    },

    didBecomeKeyResponder: function didBecomeKeyResponder(wasTriggeredByFocus) {
      if (!wasTriggeredByFocus && this._state === 'inDOM') {
        this.$().focus();
      }
    },

    didLoseKeyResponder: function didLoseKeyResponder(wasTriggeredByFocus) {
      if (!wasTriggeredByFocus && this._state === 'inDOM') {
        this.$().blur();
      }
    }
  });

  Ember['default'].TextSupport.reopen(KeyResponderInputSupport);
  Ember['default'].Checkbox.reopen(KeyResponderInputSupport);
  Ember['default'].Select.reopen(KeyResponderInputSupport);

  exports.KEY_EVENTS = KEY_EVENTS;
  exports.MODIFIED_KEY_EVENTS = MODIFIED_KEY_EVENTS;
  exports.KeyResponderInputSupport = KeyResponderInputSupport;

});
define('watch-chrono/locales/es', ['exports'], function (exports) {

	'use strict';

	exports['default'] = {
		label: {
			selectProfile: 'Selecciona un perfil' }
	};

});
define('watch-chrono/router', ['exports', 'ember', 'watch-chrono/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('report');
    this.route('options');
    this.route('main');
  });

  exports['default'] = Router;

});
define('watch-chrono/routes/application', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({

		version: '0.0.1',
		lang: 'es',

		setupController: function setupController(controller, model) {
			controller.set('model', model);
		},

		model: function model() {
			localStorage.setItem('appVersion', this.get('version'));
			localStorage.setItem('lang', this.get('lang'));
		}
	});

});
define('watch-chrono/routes/index', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({

		setupController: function setupController(controller, model) {
			controller.set('model', model);
		},

		beforeModel: function beforeModel() {
			this.controllerFor('application').set('header.label', 'Inicio');
		},

		model: function model() {
			var check = localStorage.getItem('profiles');

			if (check) {
				return JSON.parse(localStorage.getItem('profiles'));
			}
		},

		actions: {
			addProfile: function addProfile() {
				var nom = this.controllerFor('index').get('newProfile');
				var hasProfiles = localStorage.getItem('profiles');
				var profiles;
				var bol = Ember['default'].$.inArray(nom, profiles);
				var newProfile = [];

				if (hasProfiles) {
					profiles = JSON.parse(localStorage.getItem('profiles'));
				} else {
					profiles = [];
				}

				if (bol !== -1) {
					alert('El perfil ya esta registrado en el sistema, seleccionalo en la lista o use otro nombre');
				} else {
					profiles.push(nom);
					localStorage.setItem('profiles', JSON.stringify(profiles));
					localStorage.setItem(nom, btoa(JSON.stringify(newProfile)));
					this.refresh();
				}
			} }
	});

});
define('watch-chrono/routes/main', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({

		setupController: function setupController(controller, model) {
			controller.set('model', model);
		},

		checkData: function checkData(profile) {
			var dataProfile = JSON.parse(atob(localStorage.getItem(profile)));
			this.controllerFor('main').set('dataProfile', dataProfile);
		},

		beforeModel: function beforeModel() {
			this.controllerFor('application').set('header.label', 'Main');
		},

		model: function model() {
			var selectedProfile = localStorage.getItem('selectedProfile');
			if (selectedProfile) {
				this.controllerFor('main').set('selectedProfile', selectedProfile);
				this.checkData(selectedProfile);
				return selectedProfile;
			} else {
				this.transitionTo('application');
			}
		}
	});

});
define('watch-chrono/routes/options', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({

    beforeModel: function beforeModel() {
      this.controllerFor('application').set('header', 'Settings');
    } });

});
define('watch-chrono/routes/report', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({

        setupController: function setupController(controller, model) {
            controller.set('model', model);
        },

        beforeModel: function beforeModel() {
            this.controllerFor('application').set('header.label', 'Report');
        },

        model: function model() {
            var selectedProfile = localStorage.getItem('selectedProfile');
            var profileData = JSON.parse(atob(localStorage.getItem(selectedProfile)));
            var today = new Date();
            today = today.getUTCDate() + '/' + (today.getUTCMonth() + 1) + '/' + today.getFullYear();
            var profile = {
                id: selectedProfile,
                timeToday: null,
                timeThisWeek: null,
                timeThisMonth: null };

            console.log(today);
            console.log(profileData);

            if (!selectedProfile) {
                this.transitionTo('application');
            }

            return profile;
        }
    });

});
define('watch-chrono/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("li");
          var el2 = dom.createElement("a");
          dom.setAttribute(el2,"href","#");
          var el3 = dom.createTextNode("Inicio");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("li");
          var el2 = dom.createElement("a");
          dom.setAttribute(el2,"href","#");
          var el3 = dom.createTextNode("Main");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("li");
          var el2 = dom.createElement("a");
          dom.setAttribute(el2,"href","#");
          var el3 = dom.createTextNode("Resumen");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("nav");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","#!");
        dom.setAttribute(el3,"class","brand-logo");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","#");
        dom.setAttribute(el3,"data-activates","mobile-demo");
        dom.setAttribute(el3,"class","button-collapse");
        var el4 = dom.createElement("i");
        dom.setAttribute(el4,"class","mdi-navigation-menu");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3,"class","right hide-on-med-and-down");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","sass.html");
        var el6 = dom.createTextNode("Inicio");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","components.html");
        var el6 = dom.createTextNode("Main");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","javascript.html");
        var el6 = dom.createTextNode("Resumen");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","mobile.html");
        var el6 = dom.createTextNode("Opciones");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3,"class","side-nav");
        dom.setAttribute(el3,"id","mobile-demo");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, content = hooks.content, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [7]);
        var attrMorph0 = dom.createAttrMorph(element0, 'class');
        var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
        var morph1 = dom.createMorphAt(element1,1,1);
        var morph2 = dom.createMorphAt(element1,3,3);
        var morph3 = dom.createMorphAt(element1,5,5);
        var morph4 = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
        var morph5 = dom.createMorphAt(fragment,4,4,contextualElement);
        dom.insertBoundary(fragment, null);
        attribute(env, attrMorph0, element0, "class", concat(env, ["nav-wrapper ", get(env, context, "header.style")]));
        content(env, morph0, context, "header.label");
        block(env, morph1, context, "link-to", ["application"], {}, child0, null);
        block(env, morph2, context, "link-to", ["main"], {}, child1, null);
        block(env, morph3, context, "link-to", ["report"], {}, child2, null);
        content(env, morph4, context, "outlet");
        content(env, morph5, context, "md-modal-container");
        return fragment;
      }
    };
  }()));

});
define('watch-chrono/templates/components/labeled-radio-button', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        var morph1 = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, 0);
        inline(env, morph0, context, "radio-button", [], {"changed": "innerRadioChanged", "disabled": get(env, context, "disabled"), "groupValue": get(env, context, "groupValue"), "name": get(env, context, "name"), "required": get(env, context, "required"), "value": get(env, context, "value")});
        content(env, morph1, context, "yield");
        return fragment;
      }
    };
  }()));

});
define('watch-chrono/templates/components/modal-dialog', ['exports', 'ember-modal-dialog/templates/components/modal-dialog'], function (exports, template) {

	'use strict';

	exports['default'] = template['default'];

});
define('watch-chrono/templates/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 1,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1,"href","#");
          dom.setAttribute(el1,"class","collection-item");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"id","removeProfile");
          dom.setAttribute(el2,"class","badge");
          var el3 = dom.createTextNode("x");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement, blockArguments) {
          var dom = env.dom;
          var hooks = env.hooks, set = hooks.set, get = hooks.get, element = hooks.element, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element0 = dom.childAt(fragment, [1]);
          var morph0 = dom.createMorphAt(element0,0,0);
          set(env, context, "profile", blockArguments[0]);
          element(env, element0, context, "action", ["selectProfile", get(env, context, "profile")], {});
          content(env, morph0, context, "profile");
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","collection-item");
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createTextNode("No hay perfiles guardados\n                    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("a");
          dom.setAttribute(el3,"href","#");
          dom.setAttribute(el3,"class","secondary-content");
          var el4 = dom.createTextNode("\n                        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("i");
          dom.setAttribute(el4,"class","mdi-content-add");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container");
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" o crea uno nuevo");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2,"class","collection");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" Modal Trigger ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"class","waves-effect waves-light btn modal-trigger blue-grey darken-1");
        dom.setAttribute(el3,"href","#modal1");
        dom.setAttribute(el3,"style","\n    width: 100%;");
        var el4 = dom.createTextNode("Crear nuevo perfil");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" Modal Structure ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"id","modal1");
        dom.setAttribute(el2,"class","modal");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","modal-content");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        var el5 = dom.createTextNode("Crear un perfil nuevo");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Introduce el nombre del perfil que quiere guardar: ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","modal-footer");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","#");
        dom.setAttribute(el4,"class"," modal-action modal-close waves-effect waves-green btn-flat");
        var el5 = dom.createTextNode("Aceptar");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","#");
        dom.setAttribute(el4,"class"," modal-action modal-close waves-effect waves-green btn-flat");
        var el5 = dom.createTextNode("Cancelar");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n    \n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, get = hooks.get, block = hooks.block, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [11]);
        var element3 = dom.childAt(element2, [3, 1]);
        var morph0 = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
        var morph1 = dom.createMorphAt(dom.childAt(element1, [3]),1,1);
        var morph2 = dom.createMorphAt(dom.childAt(element2, [1]),5,5);
        inline(env, morph0, context, "t", ["label.selectProfile"], {});
        block(env, morph1, context, "each", [get(env, context, "model")], {}, child0, child1);
        inline(env, morph2, context, "input", [], {"type": "text", "value": get(env, context, "newProfile")});
        element(env, element3, context, "action", ["addProfile"], {});
        return fragment;
      }
    };
  }()));

});
define('watch-chrono/templates/main', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col s12 m12 l12");
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("Hola, ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(":");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(":");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("	\n	\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","center");
        dom.setAttribute(el2,"style","padding: 5px 5px;");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"style","\n    width: 100%;");
        var el4 = dom.createTextNode("Start");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("	\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","center");
        dom.setAttribute(el2,"style","padding: 5px 5px;");
        var el3 = dom.createTextNode("	\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"style","\n    width: 100%;");
        var el4 = dom.createTextNode("Stop");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("	\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","center");
        dom.setAttribute(el2,"style","padding: 5px 5px;");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"style","\n    width: 100%;");
        var el4 = dom.createTextNode("Reset");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("	\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","center");
        dom.setAttribute(el2,"style","padding: 5px 5px;");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"style","\n    width: 100%;");
        var el4 = dom.createTextNode("Save");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("	\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [3]);
        var element3 = dom.childAt(element0, [3, 1]);
        var element4 = dom.childAt(element0, [5, 1]);
        var element5 = dom.childAt(element0, [7, 1]);
        var element6 = dom.childAt(element0, [9, 1]);
        var morph0 = dom.createMorphAt(dom.childAt(element1, [1]),1,1);
        var morph1 = dom.createMorphAt(element2,0,0);
        var morph2 = dom.createMorphAt(element2,2,2);
        var morph3 = dom.createMorphAt(element2,4,4);
        var attrMorph0 = dom.createAttrMorph(element3, 'class');
        var attrMorph1 = dom.createAttrMorph(element4, 'class');
        var attrMorph2 = dom.createAttrMorph(element5, 'class');
        var attrMorph3 = dom.createAttrMorph(element6, 'class');
        content(env, morph0, context, "model");
        content(env, morph1, context, "hour");
        content(env, morph2, context, "min");
        content(env, morph3, context, "sec");
        attribute(env, attrMorph0, element3, "class", concat(env, ["waves-effect waves-light btn ", get(env, context, "btnStartDisabled")]));
        element(env, element3, context, "action", ["start"], {});
        attribute(env, attrMorph1, element4, "class", concat(env, ["waves-effect waves-light btn ", get(env, context, "btnStopDisabled")]));
        element(env, element4, context, "action", ["stop"], {});
        attribute(env, attrMorph2, element5, "class", concat(env, ["waves-effect waves-light btn ", get(env, context, "btnResetDisabled")]));
        element(env, element5, context, "action", ["reset"], {});
        attribute(env, attrMorph3, element6, "class", concat(env, ["waves-effect waves-light btn ", get(env, context, "btnSaveDisabled")]));
        element(env, element6, context, "action", ["save"], {});
        return fragment;
      }
    };
  }()));

});
define('watch-chrono/templates/options', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          dom.setAttribute(el1,"class","collection");
          var el2 = dom.createTextNode("\n			    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2,"class","collection-item");
          var el3 = dom.createTextNode("\n			        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          var el4 = dom.createTextNode("Español");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4,"href","#");
          dom.setAttribute(el4,"class","secondary-content");
          var el5 = dom.createElement("i");
          dom.setAttribute(el5,"class","mdi-action-done");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n			    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2,"class","collection-item");
          var el3 = dom.createTextNode("\n			        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          var el4 = dom.createTextNode("English");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4,"href","#");
          dom.setAttribute(el4,"class","secondary-content");
          var el5 = dom.createElement("i");
          dom.setAttribute(el5,"class","mdi-action-done");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n			    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("   \n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, element = hooks.element;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var element2 = dom.childAt(element0, [3]);
          element(env, element1, context, "action", ["selectLanguage", "es"], {});
          element(env, element2, context, "action", ["selectLanguage", "en"], {});
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col s12 m12 l12");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"class","waves-effect waves-light btn cyan darken-3");
        var el4 = dom.createTextNode("Reset All Data");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"class","waves-effect waves-light btn cyan darken-3");
        var el4 = dom.createTextNode("Change Language");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("	");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element3 = dom.childAt(fragment, [0, 1]);
        var element4 = dom.childAt(element3, [3]);
        var morph0 = dom.createMorphAt(element3,5,5);
        element(env, element4, context, "action", ["openLanguage"], {});
        block(env, morph0, context, "if", [get(env, context, "languageSelection")], {}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('watch-chrono/templates/report', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col s12");
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("table");
        dom.setAttribute(el3,"class","centered hoverable");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("thead");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        dom.setAttribute(el6,"data-field","id");
        var el7 = dom.createTextNode("Perfiles");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        dom.setAttribute(el6,"data-field","id");
        var el7 = dom.createTextNode("Hoy");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        dom.setAttribute(el6,"data-field","name");
        var el7 = dom.createTextNode("Esta Semana");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        dom.setAttribute(el6,"data-field","price");
        var el7 = dom.createTextNode("Este mes");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tbody");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0, 1, 4, 3, 1]);
        var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
        var morph1 = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
        var morph2 = dom.createMorphAt(dom.childAt(element0, [5]),0,0);
        var morph3 = dom.createMorphAt(dom.childAt(element0, [7]),0,0);
        element(env, element0, context, "action", ["selectProfile", get(env, context, "model.id")], {});
        content(env, morph0, context, "model.id");
        content(env, morph1, context, "mode.timeToday");
        content(env, morph2, context, "mode.timeThisWeek");
        content(env, morph3, context, "model.timeThisMonth");
        return fragment;
      }
    };
  }()));

});
define('watch-chrono/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/controllers/application.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/application.js should pass jshint', function() { 
    ok(true, 'controllers/application.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/controllers/index.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/index.js should pass jshint', function() { 
    ok(true, 'controllers/index.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/controllers/main.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/main.js should pass jshint', function() { 
    ok(true, 'controllers/main.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/controllers/options.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/options.js should pass jshint', function() { 
    ok(true, 'controllers/options.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/controllers/report.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/report.js should pass jshint', function() { 
    ok(true, 'controllers/report.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/ember-cli-i18n-test', ['ember', 'watch-chrono/config/environment'], function (Ember, config) {

  'use strict';

  /* globals requirejs, require */

  if (window.QUnit) {
    var keys = Ember['default'].keys;

    var locales, defaultLocale;
    module('ember-cli-i18n', {
      setup: function setup() {
        var localRegExp = new RegExp(config['default'].modulePrefix + '/locales/(.+)');
        var match, moduleName;

        locales = {};

        for (moduleName in requirejs.entries) {
          if (match = moduleName.match(localRegExp)) {
            locales[match[1]] = require(moduleName)['default'];
          }
        }

        defaultLocale = locales[config['default'].APP.defaultLocale];
      }
    });

    test('locales all contain the same keys', function () {
      var knownLocales = keys(locales);
      if (knownLocales.length === 1) {
        expect(0);
        return;
      }

      for (var i = 0, l = knownLocales.length; i < l; i++) {
        var currentLocale = locales[knownLocales[i]];

        if (currentLocale === defaultLocale) {
          continue;
        }

        for (var translationKey in defaultLocale) {
          ok(currentLocale[translationKey], '`' + translationKey + '` should exist in the `' + knownLocales[i] + '` locale.');
        }
      }
    });
  }

});
define('watch-chrono/tests/helpers/resolver', ['exports', 'ember/resolver', 'watch-chrono/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('watch-chrono/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/helpers/start-app', ['exports', 'ember', 'watch-chrono/app', 'watch-chrono/router', 'watch-chrono/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('watch-chrono/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/locales/es.jshint', function () {

  'use strict';

  module('JSHint - locales');
  test('locales/es.js should pass jshint', function() { 
    ok(true, 'locales/es.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/routes/application.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/application.js should pass jshint', function() { 
    ok(true, 'routes/application.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/routes/index.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/index.js should pass jshint', function() { 
    ok(true, 'routes/index.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/routes/main.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/main.js should pass jshint', function() { 
    ok(true, 'routes/main.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/routes/options.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/options.js should pass jshint', function() { 
    ok(true, 'routes/options.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/routes/report.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/report.js should pass jshint', function() { 
    ok(true, 'routes/report.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/test-helper', ['watch-chrono/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('watch-chrono/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/unit/controllers/index-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:index', {});

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('watch-chrono/tests/unit/controllers/index-test.jshint', function () {

  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/index-test.js should pass jshint', function() { 
    ok(true, 'unit/controllers/index-test.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/unit/controllers/main-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:main', {});

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('watch-chrono/tests/unit/controllers/main-test.jshint', function () {

  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/main-test.js should pass jshint', function() { 
    ok(true, 'unit/controllers/main-test.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/unit/controllers/options-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:options', {});

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('watch-chrono/tests/unit/controllers/options-test.jshint', function () {

  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/options-test.js should pass jshint', function() { 
    ok(true, 'unit/controllers/options-test.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/unit/controllers/report-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:report', {});

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('watch-chrono/tests/unit/controllers/report-test.jshint', function () {

  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/report-test.js should pass jshint', function() { 
    ok(true, 'unit/controllers/report-test.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/unit/routes/index-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:index', 'Unit | Route | index', {});

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('watch-chrono/tests/unit/routes/index-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/index-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/index-test.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/unit/routes/m-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:m', 'Unit | Route | m', {});

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('watch-chrono/tests/unit/routes/m-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/m-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/m-test.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/unit/routes/main-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:main', 'Unit | Route | main', {});

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('watch-chrono/tests/unit/routes/main-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/main-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/main-test.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/unit/routes/options-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:options', 'Unit | Route | options', {});

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('watch-chrono/tests/unit/routes/options-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/options-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/options-test.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/unit/routes/report-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:report', 'Unit | Route | report', {});

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('watch-chrono/tests/unit/routes/report-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/report-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/report-test.js should pass jshint.'); 
  });

});
define('watch-chrono/tests/views/index.jshint', function () {

  'use strict';

  module('JSHint - views');
  test('views/index.js should pass jshint', function() { 
    ok(true, 'views/index.js should pass jshint.'); 
  });

});
define('watch-chrono/views/application', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].View.extend({});

});
define('watch-chrono/views/index', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].View.extend({});

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('watch-chrono/config/environment', ['ember'], function(Ember) {
  var prefix = 'watch-chrono';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("watch-chrono/tests/test-helper");
} else {
  require("watch-chrono/app")["default"].create({"defaultLocale":"es","name":"watch-chrono","version":"0.0.0."});
}

/* jshint ignore:end */
//# sourceMappingURL=watch-chrono.map