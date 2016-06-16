import Ember from 'ember';
const RSVP = Ember.RSVP;

export default Ember.Route.extend({
  model() {
    return $.getJSON('/matches');
  }

});
