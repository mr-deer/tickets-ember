import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  text: DS.attr('string'),
  dateCreated: DS.attr('date'),
});
