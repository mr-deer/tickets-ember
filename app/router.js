import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' }, function() {
    this.route('index', { path: '/'});
    this.route('ticket');
    this.route('tickets');
  });
  this.route('signin');
  this.route('signup');
  this.route('buy-ticket');
  this.route('protected');
  this.route('control');
  this.route('db');
  this.route('buses');
  this.route('articles');
  this.route('users');
});

export default Router;
