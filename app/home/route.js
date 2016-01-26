import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      user: this.store.findRecord('user', 1),
      chirps: this.store.findAll('chirp')
    });
  }
});
