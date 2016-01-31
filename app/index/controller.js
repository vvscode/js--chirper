import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  sessionAccount: Ember.inject.service('session-account'),

  valuesChanged: Ember.observer('username', 'password', function() {
    this.set('errorMessage', false);
  }),
  actions: {
    signup() {
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
      return false;
    },

    login() {
      var username = this.get('username');
      var password = this.get('password');

      this.get('session')
        .authenticate('authenticator:oauth2', username, password)
        .then(() => {
          return this.get('sessionAccount').loadCurrentUser();
        })
        .then(() => {
          this.transitionToRoute('home');
        }, () => {
          this.set('errorMessage', 'Wrong username or password!');
        });
      return false;
    }
  }
});
