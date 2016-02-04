import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('chirp', 'Unit | Model | chirp', {
  // Specify the other units that are required for this test.
  needs: ['model:user']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('user relationship', function(assert) {
  // Get the chirp model
  var Chirp = this.store().modelFor('chirp');

  // Get its 'user'-key
  var relationship = Ember.get(Chirp, 'relationshipsByName').get('user');

  // Make sure that the relationship works as expected
  assert.equal(relationship.key, 'user');
  assert.equal(relationship.kind, 'belongsTo');
});
