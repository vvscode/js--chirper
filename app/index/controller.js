import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  valuesChanged: Ember.observer('username', 'password', function() {
    this.set('errorMessage', false);
  }),
  actions: {
    signup: function() {
      var userData = {
        username: this.get('username'),
        password: this.get('password')
      };

      Ember.$.ajax({
          type: 'POST',
          url: config.apiURL + '/signup',
          dataType: 'json',
          data: userData
        })
        .done(() => {
          console.log("Created!");
          this.send('login');
        })
        .fail(() => {
          this.set('errorMessage', "Couldn't sign up!");
        });
    },

    login: function() {
      var username = this.get('username');
      var password = this.get('password');

      console.log(`Trying to log in with ${username} and ${password}`);
    }
  }
});
