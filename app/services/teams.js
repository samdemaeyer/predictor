import Ember from 'ember';

export default Ember.Service.extend({
  fetch() {
    if (!this.cache) {
      this.cache = $.getJSON('/teams');
    }
    return this.cache;
  },
  save(payload) {
    Ember.$.post('/predictions', payload);
  }
});
