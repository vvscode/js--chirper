import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      chirps: this.store.findAll('chirp')
    });
  }
});
