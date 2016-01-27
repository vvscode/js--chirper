import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  numberOfChirps: DS.attr('number'),
  numberOfFollowing: DS.attr('number'),
  numberOfFollowers: DS.attr('number'),
  aboutMe: DS.attr('string'),
  joinedAt: DS.attr('date'),
  chirps: DS.hasMany('chirp', { async: true })
});
