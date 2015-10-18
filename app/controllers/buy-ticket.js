import Ember from 'ember';

export default Ember.Controller.extend({

  busIsNotExists: Ember.computed.not('busRoute'),

  actions: {
    buyTicket() {
      let ticket = this.store.createRecord('ticket', {
        userId: this.session.get('secure.user._id'),
        busId: this.busId,
      });

      ticket.save();
    },

    checkBus() {
      let bus = this.store.find('bus', this.busId)
        .then((bus) => {
          this.set('busChecked', true);
          this.set('busRoute', bus.get('route'));
        })
        .catch((err) => {
          this.set('busChecked', true);
          this.set('busRoute', null);
        })
    }
  }
});
