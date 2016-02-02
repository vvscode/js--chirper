import Ember from 'ember';
import config from '../../config/environment';


export default Ember.Component.extend({
  classNames: ['follow-container'],
  sessionAccount: Ember.inject.service('session-account'),
  session: Ember.inject.service('session'),
  accessToken: Ember.computed('session', function() {
    return this.get('session.data.authenticated.access_token');
  }),

  isFollowing: Ember.computed('profile.followers', 'sessionAccount.currentUser', function() {
    return this.get('profile.followers')
      .isAny('id', this.get('sessionAccount.currentUser.id'));
  }),

// And finally add the actions:
  actions: {

    follow: function() {
      Ember.$.ajax({
          type: 'POST',
          url: config.apiURL + '/follow',
          headers: { "Authorization": "Bearer " + this.get('accessToken') },
          dataType: 'json',
          data: {
            profileId: this.get('profile.id')
          }
        })
        .done(() => {
          // Add yourself to the profile's list of followers
          this.get('profile.followers').pushObject(this.get('sessionAccount.currentUser'));
        })
        .fail(() => {
          swal("Oops", "Couldn't follow user!", "error");
        });
    },

    unfollow: function() {
      Ember.$.ajax({
          type: 'POST',
          url: config.apiURL + '/unfollow',
          headers: { "Authorization": "Bearer " + this.get('accessToken') },
          dataType: 'json',
          data: {
            profileId: this.get('profile.id')
          }
        })
        .done(() => {
          // Remove yourself to the profile's list of followers
          var myFollow = this.get('profile.followers').findBy('id', this.get('sessionAccount.currentUser.id'));
          this.get('profile.followers').removeObject(myFollow);
        })
        .fail(() => {
          swal("Oops", "Couldn't unfollow user!", "error");
        });
    }
  }
});
