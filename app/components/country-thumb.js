import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['country-thumb'],

  countryFlag: Ember.computed('countryName', function() {
    let countryName = this.get('countryName');

    switch (countryName) {
      case 'England':
      case 'Wales':
        return 'gb';
        break;
      case 'Northern Ireland':
        return 'ie';
        break;
      case 'Germany':
        return 'de';
        break;
      case 'France':
        return 'fr';
        break;
      case 'Romania':
        return 'ro';
        break;
      case 'Albania':
        return 'al';
        break;
      case 'Slovakia':
        return 'sk';
        break;
      case 'Russia':
        return 'ru';
        break;
      case 'Turkey':
        return 'tr';
        break;
      case 'Poland':
        return 'pl';
        break;
    }
  })
});
